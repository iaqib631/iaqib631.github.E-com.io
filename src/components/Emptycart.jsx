import { ShoppingCart, Smartphone } from "lucide-react";
import { NavLink } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          {/* Left side - Text and Button */}
          <div className="flex-1 max-w-md text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black mb-2">
              YOUR CART IS
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black">
                EMPTY
              </h1>
              <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">
                DEMO
              </span>
            </div>

            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xs mx-auto lg:mx-0">
              Must add items on the card before you proceed to checkout
            </p>
            <NavLink to="/">
              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-800 transition-colors">
                Go to Shop
              </button>
            </NavLink>
          </div>

          {/* Right side - Illustration */}
          <div className="flex-1 flex items-center justify-center relative order-1 lg:order-2 w-full max-w-sm lg:max-w-none">
            {/* Phone mockup */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl w-48 h-72 sm:w-64 sm:h-96 relative z-10">
              <div className="bg-gray-200 rounded-2xl h-full p-3 sm:p-4">
                {/* Status bar */}
                <div className="bg-black rounded-lg h-4 sm:h-6 w-16 sm:w-24 mx-auto mb-3 sm:mb-4"></div>

                {/* App interface mockup */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="bg-gray-300 rounded-lg h-8 w-8 sm:h-12 sm:w-12"></div>
                    <div className="bg-gray-300 rounded-lg h-8 w-8 sm:h-12 sm:w-12"></div>
                  </div>
                  <div className="bg-gray-300 rounded-lg h-12 sm:h-16 w-full"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-300 rounded-lg h-8 sm:h-12"></div>
                    <div className="bg-gray-300 rounded-lg h-8 sm:h-12"></div>
                    <div className="bg-gray-300 rounded-lg h-8 sm:h-12"></div>
                    <div className="bg-gray-300 rounded-lg h-8 sm:h-12"></div>
                  </div>
                  <div className="bg-gray-300 rounded-lg h-12 sm:h-20 w-full"></div>
                </div>
              </div>
            </div>

            {/* Person with shopping cart */}
            <div className="absolute right-0 bottom-0 flex items-end scale-75 sm:scale-100">
              {/* Person figure */}
              <div className="relative mr-4">
                {/* Head */}
                <div className="w-8 h-8 bg-gray-800 rounded-full mb-1"></div>
                {/* Body */}
                <div className="w-6 h-16 bg-blue-600 rounded-t-lg mx-1"></div>
                {/* Arms */}
                <div className="absolute top-8 -right-2 w-4 h-1 bg-blue-600 rounded rotate-12"></div>
                <div className="absolute top-8 -left-2 w-4 h-1 bg-blue-600 rounded -rotate-12"></div>
                {/* Legs */}
                <div className="flex justify-center gap-1">
                  <div className="w-2 h-12 bg-gray-800 rounded"></div>
                  <div className="w-2 h-12 bg-gray-800 rounded"></div>
                </div>
              </div>

              {/* Shopping cart */}
              <div className="relative">
                <ShoppingCart className="w-20 h-20 text-gray-400 stroke-2" />
                {/* Items in cart */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-black rounded"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-black rounded"></div>
                <div className="absolute bottom-6 left-3 w-3 h-3 bg-black rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
