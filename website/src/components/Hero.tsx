import React from "react";
import { Apple, Shield, Github } from "lucide-react";
import PreorderButton from "./PreorderButton";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-sm font-medium mb-8 animate-pulse">
          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
          Early Access Available • Mac Only • Privacy-First
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Your friendly focus assistant
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-teal-500">
            coming soon for Mac
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Stay focused. Stay private. Built to keep you locked in — like a
          friend who wants you to win.
        </p>

        {/* Preorder CTA */}
        <div className="mb-8">
          <PreorderButton size="large" />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-12">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>100% Local Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>Open Source</span>
          </div>
          <div className="flex items-center gap-2">
            <Apple className="w-4 h-4" />
            <span>macOS Native</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 p-1 rounded-xl shadow-2xl">
            {/* <div className="bg-white rounded-xl p-8 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="text-sm text-gray-500 ml-4">ReFocus</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    🎯
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Current Goal</div>
                    <div className="text-xs text-gray-500">Ship MVP in 10 days</div>
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                  <div className="text-sm font-medium text-teal-800">🔥 You're in the zone!</div>
                  <div className="text-xs text-teal-600">Keep coding, you're making great progress</div>
                </div>
              </div>
            </div> */}
            <video autoPlay loop muted className="p-1 rounded-xl">
              <source
                src="https://xnteswjqmbrhevdaqkxk.supabase.co/storage/v1/object/public/demo//720.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
