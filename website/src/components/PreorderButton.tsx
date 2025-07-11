import React from "react";
import { ShoppingCart, Zap } from "lucide-react";

interface PreorderButtonProps {
  size?: "small" | "large";
  className?: string;
}

const PreorderButton: React.FC<PreorderButtonProps> = ({
  size = "small",
  className = "",
}) => {
  const handlePreorder = () => {
    // Replace with your actual Gumroad/Stripe link
    window.open(
      "https://checkout.dodopayments.com/buy/pdt_6rMbw712NVJlMy5O7A9zL?quantity=1",
      "_blank"
    );
  };

  return (
    <div className={`text-center ${className}`}>
      {/* Pricing Display */}
      <div className="mb-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-2xl text-gray-400 line-through">$10</span>
          <span
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 ${
              size === "large" ? "text-4xl" : "text-3xl"
            }`}
          >
            $4.20
          </span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium">
            Early Access
          </span>
        </div>
        <p className="text-sm text-gray-600">
          {/* Regular price will be $10. Lifetime access. Mac only. */}
        </p>
      </div>

      {/* Preorder Button */}
      <button
        onClick={handlePreorder}
        className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 text-white rounded-full font-bold hover:from-orange-600 hover:via-red-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg ${
          size === "large" ? "text-xl" : "text-lg"
        }`}
      >
        <ShoppingCart
          className={`${size === "large" ? "w-6 h-6" : "w-5 h-5"}`}
        />
        <span>Preorder Now</span>
        <Zap className={`${size === "large" ? "w-6 h-6" : "w-5 h-5"}`} />
      </button>

      {/* Trust Indicators */}
      <div className="mt-4 text-sm text-gray-500">
        <div className="flex items-center justify-center gap-4">
          <span>✅ Lifetime Access</span>
          <span>✅ Early Access</span>
          <span>✅ 30-Day Refund</span>
        </div>
      </div>
    </div>
  );
};

export default PreorderButton;
