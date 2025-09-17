import { Star } from "lucide-react";

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ))}
  </div>
);

export default StarRating;
