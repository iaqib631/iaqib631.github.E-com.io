import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselControls = ({ onPrev, onNext, total, current, setCurrent }) => (
  <div className="flex items-center justify-center gap-4 mt-8">
    <button
      onClick={onPrev}
      className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="h-4 w-4" />
    </button>

    <div className="flex gap-2">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === current ? "bg-gray-900" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    <button
      onClick={onNext}
      className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors"
      aria-label="Next testimonial"
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  </div>
);

export default CarouselControls;
