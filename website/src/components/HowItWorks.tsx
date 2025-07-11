import React from "react";
import { Target, Eye, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: "Set your role, project, and goal",
      description:
        "Tell ReFocus what you're working on and what you want to achieve.",
      example: "I'm a developer building an AI app. Goal: Ship MVP in 10 days.",
    },
    {
      number: 2,
      icon: Eye,
      title: "It detects whether you're focused or distracted",
      description:
        "ReFocus passively monitors your activity locally to understand your focus state.",
      example:
        "Coding in VS Code = Focused 🔥 | Scrolling Twitter = Distracted 📱",
    },
    {
      number: 3,
      icon: Bell,
      title: "Sends motivating or playful nudges",
      description:
        "Get encouraging notifications when focused, gentle reminders when distracted.",
      example:
        '"Stop scrolling and get back to building 💻" or "Let\'s go, stay locked in 🔥"',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How ReFocus Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set a goal. Stay on track.{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 rounded-full mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-sm font-medium text-orange-600 mb-2">
                      Step {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-sm">
                    <div className="font-medium text-gray-700 mb-1">
                      Example:
                    </div>
                    <div className="text-gray-600">{step.example}</div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-300 via-red-300 to-teal-300"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
