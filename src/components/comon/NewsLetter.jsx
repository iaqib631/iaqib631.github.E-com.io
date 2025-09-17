import React, { useState } from "react";
import { Mail, Check } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const resetForm = () => {
    setIsSubscribed(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className="p-4 sm:p-8 md:p-14">
        <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              THANK YOU FOR SUBSCRIBING!
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 px-2">
              You'll receive our latest offers and updates directly in your
              inbox.
            </p>
            <button
              onClick={resetForm}
              className="bg-white text-black px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Subscribe Another Email
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 md:p-14">
      <section className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-1 sm:mb-2">
                STAY UP TO DATE ABOUT
              </h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                OUR LATEST OFFERS
              </h2>
            </div>

            <div className="flex-1 max-w-md w-full">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white text-black pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-full border-none outline-none focus:ring-2 focus:ring-gray-300 transition-all text-sm sm:text-base"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className="w-full bg-white text-black py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    "Subscribe to Newsletter"
                  )}
                </button>
              </form>

              <p className="text-gray-400 text-xs sm:text-sm text-center mt-3 sm:mt-4 px-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
