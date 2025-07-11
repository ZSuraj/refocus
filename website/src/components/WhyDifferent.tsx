import React from 'react';
import { Shield, Smile, Github, Zap } from 'lucide-react';

const WhyDifferent = () => {
  const features = [
    {
      icon: Shield,
      title: "Runs locally — no cloud tracking",
      description: "Your data never leaves your Mac. Complete privacy and control over your information.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Smile,
      title: "Fun, not rigid",
      description: "Encouraging nudges, not guilt trips. Like having a supportive friend cheering you on.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Github,
      title: "Will be fully open source",
      description: "Transparent, auditable code. You can see exactly how it works and even contribute.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Built for privacy from day one",
      description: "Privacy isn't an afterthought. It's the foundation of everything we build.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-red-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why ReFocus is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most focus apps spy on you or make you feel bad. We do the opposite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">✅</span>
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compare with Other Focus Apps
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-red-600 mb-3">❌ Other Apps</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Send your data to the cloud</li>
                  <li>• Make you feel guilty for getting distracted</li>
                  <li>• Closed source and opaque</li>
                  <li>• Rigid and impersonal</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-600 mb-3">✅ ReFocus</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Everything stays on your Mac</li>
                  <li>• Encourages you like a good friend</li>
                  <li>• Open source and transparent</li>
                  <li>• Friendly and supportive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDifferent;