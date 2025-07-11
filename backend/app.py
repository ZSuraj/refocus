from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template
from mlx_vlm.utils import load_config
from llm_mlx import MlxModel
from PIL import Image
import io
import uvicorn
import os
import json

app = FastAPI()

# Load model and processor once at startup
model_id = "mlx-community/Qwen2-VL-2B-Instruct-4bit"
print("Loading vision model...")
vision_model, processor = load(model_id, use_fast=True)
config = load_config(model_id)

print("Loading language model...")
language_model = MlxModel("mlx-community/Llama-3.2-3B-Instruct-4bit")

# Parameters (could be passed via body if needed)
role = "developer"
project = "mobile app"
goal = "launch their app by the end of the month"

@app.get("/hello")
def hello():
    return {"message": "Hello, API is running!"}

@app.post("/analyze")
async def analyze_image(request: Request):
    try:
        data = await request.json()

        name = data.get('name')
        current_task = data.get('currentTask')
        session_goal = data.get('sessionGoal')
        focus_duration = int(data.get('focusDuration', 60))  # fallback to 60 if missing
        role = data.get('role')
        distractions = data.get('distractions')

        system_prompt = f"""
        You are a focus accountability assistant. The user {name} is a {role} working on a {current_task}, and their current goal is to {session_goal}. Their main distractions: {distractions} Based on the input (like text, screenshot, or activity), decide if the user is focused or doing something related to it or distracted.

        – If focused (e.g. coding, designing), reply with a short, motivating message (e.g. ‘Let’s go, stay locked in 🔥’).
        – If distracted (e.g. texting, browsing), reply with a short, playful push to get back to work (e.g. ‘Stop scrolling and get back to building 💻’).

        Personalize the answer as much as possible. Always reply like a friend who wants them to win.

        IMPORTANT: Keep it short like a text message < 35 characters. Give the output as json include "title" and "body". Only return a single-line valid JSON object.
        """

        # Read and preprocess image
        # contents = await file.read()
        # Get the home directory
        home_dir = os.path.expanduser("~")

        # Create a path for the screenshot
        save_path = os.path.join(home_dir, 'screenshot.png')

        image = Image.open(save_path).convert("RGB")
        image = image.resize((1024, 1024))

        buffer = io.BytesIO()
        image.save(buffer, format="JPEG")  # or "PNG"
        buffer.seek(0)  

        # Apply chat template
        formatted_prompt = apply_chat_template(
            processor, config, prompt="Describe the image", num_images=1, max_tokens=200,
        )

        # Generate vision output
        output, tokens = generate(vision_model, processor, formatted_prompt, [image])
        print("\nVision Output:", output)

        # Generate final assistant message
        response = language_model.prompt(output, system=system_prompt)
        
        # Convert response to string for JSON parsing
        response_str = str(response)

        print(response_str)

        # Parse the string response to a dictionary
        response_dict = json.loads(response_str)

        print(response_dict)

        return JSONResponse({
            "image_description": output,
            "assistant_message": response_dict
        })

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=6969)
