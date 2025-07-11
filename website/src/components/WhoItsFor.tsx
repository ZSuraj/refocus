import React from 'react';
import { Code, Palette, PenTool, Rocket } from 'lucide-react';

const WhoItsFor = () => {
  const personas = [
    {
      icon: Code,
      title: "Developers",
      description: "Building apps, fixing bugs, or learning new frameworks",
      example: "You're a developer building an AI app. Your goal is to ship your MVP in 10 days. ReFocus helps you stay in flow.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Designers",
      description: "Creating beautiful interfaces and user experiences",
      example: "You're designing a mobile app. ReFocus keeps you focused on perfecting that user flow instead of getting lost in design inspiration rabbit holes.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: PenTool,
      title: "Writers",
      description: "Crafting articles, books, or documentation",
      example: "You're writing a technical blog post. ReFocus helps you stay focused on your writing instead of endlessly researching tangential topics.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Indie Hackers",
      description: "Building products and growing businesses",
      example: "You're launching a SaaS product. ReFocus keeps you focused on building and shipping instead of doom-scrolling competitor analysis.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who It's For
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect for anyone who wants to stay focused while building something meaningful
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${persona.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{persona.title}</h3>
                    <p className="text-gray-600 mb-4">{persona.description}</p>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-gray-300">
                      <div className="text-sm font-medium text-gray-700 mb-1">Use Case:</div>
                      <div className="text-sm text-gray-600 italic">{persona.example}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhoItsFor;