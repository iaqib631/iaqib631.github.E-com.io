import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/Zustand";
import { Navbar } from "../components/comon/NavBar";
import Testimonials from "../components/Testimonal/Testimonial";
import Footer from "../components/comon/Footer";

export const ProductDetails = () => {
  const { id } = useParams();
  const { selectedProduct, loading, fetchProductsById, addToCart } =
    useProductStore();

  useEffect(() => {
    fetchProductsById(id);
  }, [id, fetchProductsById]);

  if (loading) return <div className="text-center py-6">Loading...</div>;
  if (!selectedProduct)
    return <div className="text-center py-6">Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="h-64 mx-auto"
        />
        <h1 className="text-3xl font-bold mt-4">{selectedProduct.title}</h1>
        <p className="text-lg text-gray-600 mt-2">${selectedProduct.price}</p>
        <p className="mt-4 text-gray-700">{selectedProduct.description}</p>

        <button
          className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-black/90 hover:cursor-pointer"
          onClick={() => addToCart(selectedProduct.id, 1)}
        >
          Add to Cart
        </button>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};
