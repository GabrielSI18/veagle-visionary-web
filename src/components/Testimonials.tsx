
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  id: string; // Adicionando a propriedade id
}

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp Inc.",
      text: "Veagle transformed our e-commerce. Sales increased by 50% in 3 months!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "Retail Solutions",
      text: "The landing page they created for our product launch generated twice the leads we expected. Their understanding of conversion optimization is remarkable.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      company: "Digital Marketing Agency",
      text: "Working with Veagle has been a game-changer for our clients. Their technical expertise combined with business understanding delivers real results.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      company: "Fashion Boutique",
      text: "Our online store has never looked better or performed more efficiently. The Veagle team understood exactly what we needed and delivered beyond expectations.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Threshold for swipe detection
  const minSwipeDistance = 50;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset interval on manual navigation
  const handleNavigation = (callback: () => void) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    callback();
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  // Touch event handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNavigation(nextTestimonial);
    } else if (isRightSwipe) {
      handleNavigation(prevTestimonial);
    }
  };

  return (
    <section 
      id="testimonials" 
      className="section-padding bg-gradient-to-br from-purple-50 via-white to-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-veagle-purple/10 text-veagle-purple w-fit mx-auto mb-4">
            Client Success
          </div>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="subheading">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card-testimonial flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-veagle-purple/20 rounded-full flex items-center justify-center mb-6">
                      <span className="text-2xl font-bold text-veagle-purple">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    
                    <p className="text-lg text-gray-700 italic mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={() => handleNavigation(prevTestimonial)} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <button 
            onClick={() => handleNavigation(nextTestimonial)} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(() => setCurrentIndex(index))}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentIndex === index 
                    ? "bg-veagle-purple scale-110" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
