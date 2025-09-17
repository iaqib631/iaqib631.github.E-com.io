import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { SiApplepay, SiGooglepay } from "react-icons/si";

function FooterSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop/Tablet view (always open) */}
      <div className="hidden sm:block">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
          {title}
        </h3>
        <ul className="space-y-3">
          {links.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile accordion */}
      <div className="sm:hidden border-b border-gray-200">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center py-3 text-sm font-semibold text-gray-900 uppercase tracking-wider"
        >
          {title}
          <span>{open ? "−" : "+"}</span>
        </button>
        {open && (
          <ul className="space-y-2 pb-3 pl-2">
            {links.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">SHOP.CO</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              We have clothes that suit your style and make you proud to wear.
              From women to men.
            </p>

            {/* Social */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaTwitter className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaInstagram className="w-4 h-4 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaGithub className="w-4 h-4 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Links */}
          <FooterSection
            title="Company"
            links={["About", "Features", "Works", "Career"]}
          />
          <FooterSection
            title="Help"
            links={[
              "Customer Support",
              "Delivery Details",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
          <FooterSection
            title="FAQ"
            links={["Account", "Manage Deliveries", "Orders", "Payments"]}
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>

            {/* Payment Icons */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-4">
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <FaCcVisa className="text-3xl text-blue-600" />
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <FaCcMastercard className="text-3xl text-red-600" />
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <FaCcPaypal className="text-3xl text-blue-500" />
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <SiApplepay className="text-3xl text-black" />
              </div>
              <div className="bg-white px-3 py-2 rounded border border-gray-200">
                <SiGooglepay className="text-3xl text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
