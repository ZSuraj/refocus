import React, { useState, useEffect } from "react";
import { Menu, X, Github, Shield, Apple } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handlePreorder = () => {
    // Replace with your actual Gumroad/Stripe link
    window.open(
      "https://checkout.dodopayments.com/buy/pdt_6rMbw712NVJlMy5O7A9zL?quantity=1",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <img
                src="/512.png"
                alt="ReFocus Logo"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">ReFocus</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("who-its-for")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Who It's For
            </button>
            <button
              onClick={() => scrollToSection("why-different")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* Trust Indicators & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Apple className="w-4 h-4" />
                <span>Mac</span>
              </div>
              <div className="flex items-center gap-1">
                <Github className="w-4 h-4" />
                <span>Open Source</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">$10</span>
              <span className="text-lg font-bold text-orange-600">$4.20</span>
              <button
                onClick={handlePreorder}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 text-white rounded-full font-medium hover:from-orange-600 hover:via-red-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
              >
                Preorder Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("who-its-for")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Who It's For
              </button>
              <button
                onClick={() => scrollToSection("why-different")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                FAQ
              </button>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Apple className="w-4 h-4" />
                    <span>Mac</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    <span>Open Source</span>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      $10
                    </span>
                    <span className="text-xl font-bold text-orange-600">
                      $4.20
                    </span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
                      Early Access
                    </span>
                  </div>
                </div>
                <button
                  onClick={handlePreorder}
                  className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 text-white rounded-full font-medium hover:from-orange-600 hover:via-red-600 hover:to-teal-600 transition-all duration-200"
                >
                  Preorder Now for $4.20
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
