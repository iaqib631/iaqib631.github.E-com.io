import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="w-full bg-black text-white px-4 py-2 relative flex items-center justify-center text-center">
      <p className="text-xs sm:text-sm leading-snug max-w-md">
        Sign up and get 20% off your first order.{" "}
        <Link to="/" className="underline hover:text-gray-300">
          Sign Up Now
        </Link>
      </p>

      <button
        className="absolute right-4 text-white text-lg font-bold hover:text-gray-400"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        <MdClose />
      </button>
    </div>
  );
};
