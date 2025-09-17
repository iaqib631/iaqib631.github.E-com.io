import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselControls from "./CarouselControls";

import testimonials from "./testimonialsData";

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const currentTestimonials = testimonials.slice(
    currentSlide * testimonialsPerSlide,
    (currentSlide + 1) * testimonialsPerSlide
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              OUR HAPPY CUSTOMERS
            </h2>
            <p className="text-gray-600 text-lg">
              See what our customers are saying about us
            </p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative">
          {currentTestimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}

          {/* Controls */}
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
            <CarouselControls
              onPrev={prevSlide}
              onNext={nextSlide}
              total={totalSlides}
              current={currentSlide}
              setCurrent={setCurrentSlide}
              variant="desktop"
            />
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          <CarouselControls
            onPrev={prevSlide}
            onNext={nextSlide}
            total={testimonials.length}
            current={currentSlide}
            setCurrent={setCurrentSlide}
            variant="mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
