import StarRating from "./StarRating";
import Avatar from "./Avatar";
import VerifiedBadge from "./VerifiedBadge";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
    <StarRating rating={testimonial.rating} />
    <div className="flex items-center gap-3 mb-4">
      <Avatar initials={testimonial.avatar} />
      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
      <VerifiedBadge />
    </div>
    <p className="text-gray-600 leading-relaxed text-sm">
      "{testimonial.text}"
    </p>
  </div>
);

export default TestimonialCard;
