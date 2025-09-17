import { useParams, NavLink } from "react-router-dom";
import { useProductStore } from "../store/Zustand";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/comon/NavBar";
import Testimonials from "../components/Testimonal/Testimonial";
import Newsletter from "../components/comon/NewsLetter";
import Footer from "../components/comon/Footer";

export const SearchPage = () => {
  const { query } = useParams();
  const {
    allProducts,
    fetchProducts,
    loading,
    searchQuery,
    setSearchQuery,
    addToCart,
  } = useProductStore();

  useEffect(() => {
    setSearchQuery(query || "");
  }, [query, setSearchQuery]);

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts();
    }
  }, [allProducts, fetchProducts]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const filtered = allProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">
          Search results for:{" "}
          <span className="text-gray-600">{searchQuery}</span>
        </h1>

        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                className="bg-[#F0EEED] shadow-md rounded-xl p-4 flex flex-col hover:shadow-lg transition h-full min-h-[320px]"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Image */}
                <NavLink key={product.id} to={`/product/${product.id}`}>
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-40 object-contain mb-4 mx-auto"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </NavLink>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-center line-clamp-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 text-center">
                      ${product.price}
                    </p>
                  </div>

                  <motion.button
                    onClick={() => addToCart(product.id, 1)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9, rotate: -3 }}
                    className="mt-3 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-black/90 transition"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};
