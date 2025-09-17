import { useEffect } from "react";
import { useProductStore } from "../store/Zustand";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { Navbar } from "../components/comon/NavBar";
import EmptyCart from "../components/Emptycart";
import Newsletter from "../components/comon/NewsLetter";
import Footer from "../components/comon/Footer";

export const Cart = () => {
  const {
    cart,
    allProducts,
    fetchProducts,
    removeFromCart,
    updateCartQuantity,
    clearCart,
  } = useProductStore();

  // make sure products are loaded
  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts();
    }
  }, [allProducts, fetchProducts]);

  // Map cart items with product details
  const cartItems = cart.map((item) => {
    const product = allProducts.find((p) => p.id === item.productId);
    return {
      ...item,
      ...product,
    };
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 flex gap-5 items-center font-serif">
          <FaOpencart className="text-blue-300 text-3xl" /> Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.productId}
                className="flex items-center bg-white shadow rounded-lg p-4"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />

                {/* Details */}
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-500">${item.price}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center mt-2 space-x-3">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        updateCartQuantity(item.productId, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() =>
                        updateCartQuantity(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-4">
              <h2 className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h2>
              <div className="space-x-4">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Clear Cart
                </button>
                <button className="px-4 py-2 bg-black text-white rounded hover:bg-black/90">
                  Checkout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
