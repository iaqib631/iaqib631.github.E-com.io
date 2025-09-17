import { useEffect } from "react";
import { useProductStore } from "../store/Zustand";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { categories, categoryImages, fetchCategoriesWithImages } =
    useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategoriesWithImages();
    }
  }, [categories.length, fetchCategoriesWithImages]);

  return (
    <div className="p-12">
      <div className="bg-[#F0F0F0] rounded-2xl p-6 md:p-10">
        {/* Title */}
        <h1 className="text-2xl font-serif md:text-3xl font-extrabold text-center mb-8">
          BROWSE BY DRESS STYLE
        </h1>

        {/* Grid → 2x2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(`/specific-category/${cat}`)}
              className="relative rounded-xl overflow-hidden shadow-sm cursor-pointer group bg-white"
            >
              {/* Background Image */}
              <img
                src={categoryImages[cat]}
                alt={cat}
                className="w-full h-44 md:h-52 object-contain group-hover:scale-105 transition-transform duration-300"
              />

              {/* Text in top-left corner */}
              <div className="absolute top-3 left-3  px-3 py-1 rounded-md  text-xl font-semibold font-serif capitalize">
                {cat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
