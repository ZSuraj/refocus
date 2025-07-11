import React from "react";
import { Github, Twitter, Mail, Apple, Shield, X, XIcon } from "lucide-react";
import PreorderButton from "./PreorderButton";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ReFocus</h3>
            <p className="text-gray-400 mb-6">
              Your friendly focus assistant for Mac. Stay focused, stay private,
              stay motivated.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Privacy-First</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Apple className="w-4 h-4" />
                <span>macOS Native</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Pricing Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Early Access Pricing</h4>
            <div className="text-gray-400 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-500 line-through">$10</span>
                <span className="text-2xl font-bold text-white">$4.20</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                  Limited Time
                </span>
              </div>
              <p className="text-sm">
                Lifetime access • Early access • All updates included
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://x.com/zurajjain"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
                <span>X (formerly twitter)</span>
              </a>
              <a
                href="mailto:zsurajjain@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact</span>
              </a>
            </div>
            <div className="text-sm text-gray-400">
              Made with ❤️ for focused creators
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>© 2025 ReFocus. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center mx-auto">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-teal-500 rounded-2xl p-2">
            <div className="bg-white pt-6 rounded-xl">
              <h3 className="text-2xl text-orange-900 font-bold mb-4">
                Secure your early access today
              </h3>
              <p className="text-orange-900 mb-2">
                Limited time offer - save $5.80 and get lifetime access
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                <PreorderButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
