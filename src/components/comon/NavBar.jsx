import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useProductStore } from "../../store/Zustand";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchQuery, cart } = useProductStore();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if we are on search page
  const liveSearch = location.pathname.startsWith("/search");

  const navItems = [
    { id: 1, name: "Shop", path: "/" },
    { id: 2, name: "On Sale", path: "/sale" },
    { id: 3, name: "New Arrivals", path: "/new-arrival" },
    { id: 4, name: "Brands", path: "/brands" },
  ];

  // Handle live search or enter key
  useEffect(() => {
    if (liveSearch) {
      setSearchQuery(input); // update Zustand on every input
    }
  }, [input, liveSearch, setSearchQuery]);

  const handleKeyDown = (e) => {
    if (!liveSearch && e.key === "Enter" && input.trim()) {
      setSearchQuery(input.trim());
      navigate(`/search/${encodeURIComponent(input.trim())}`);
      setInput("");
      setIsOpen(false);
    }
  };

  const handleClickSearch = () => {
    if (input.trim()) {
      setSearchQuery(input.trim());
      if (!liveSearch) {
        navigate(`/search/${encodeURIComponent(input.trim())}`);
        setInput("");
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-3 flex items-center justify-between">
        {/* Left Section - Logo + Nav */}
        <div className="flex items-center space-x-8">
          <NavLink to="/" className="text-2xl sm:text-3xl font-extrabold">
            SHOP.CO
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-full bg-[#F0F0F0] border border-gray-300 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch
              className="absolute left-2 top-2.5 text-[#00000066] cursor-pointer"
              onClick={handleClickSearch}
            />
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <LuShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-4 -right-3 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/" className="text-xl hover:text-gray-600">
            <FaRegUserCircle />
          </NavLink>

          {/* Hamburger (Mobile Only) */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? "text-black border-b-2 border-black"
                      : "text-gray-600 hover:text-black"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-full bg-[#F0F0F0] border border-gray-300 pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch
              className="absolute left-2 top-2.5 text-[#00000066] cursor-pointer"
              onClick={handleClickSearch}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
