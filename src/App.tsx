import React, { useState } from "react";
import { Card, CardContent } from "./components/card";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    quote:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "Ethan Morgan",
    position: "Founder and CEO",
    company: "Serene Living Products",
    avatar: "/ethan.png",
    logo: "/serene.png",
  },
  {
    id: 2,
    quote:
      "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "Olivia Hayes",
    position: "Owner",
    company: "Starlight Creations",
    avatar: "./olivia.png",
    logo: "/starlight.png",
  },
  {
    id: 3,
    quote:
      "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "Alexander Reed",
    position: "Co-Founder",
    company: "Opulent Living Group",
    avatar: "/alexander.png",
    logo: "/opulent.png",
  },
];

export const Box = (): React.JSX.Element => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentStartIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentStartIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Функція для отримання правильного порядку карток
  const getOrderedTestimonials = () => {
    const ordered = [];
    for (let i = 0; i < testimonials.length; i++) {
      const index = (currentStartIndex + i) % testimonials.length;
      ordered.push(testimonials[index]);
    }
    return ordered;
  };

  const orderedTestimonials = getOrderedTestimonials();

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/back.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Heading - H1 with accent font */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black drop-shadow-2xl [font-family:'Space_Grotesk',Helvetica] leading-tight">
            Voices of Success with Sales Fortuna
          </h1>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0  top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 flex items-center justify-center ml-[-68px]"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0  top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 flex items-center justify-center mr-[-68px]"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {orderedTestimonials.map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${currentStartIndex}-${index}`}
                className="h-full bg-white rounded-2xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Company Logo */}
                  {testimonial.logo && (
                    <div className="mb-6 flex justify-center h-16 items-center">
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company || "Company"} logo`}
                        className="max-w-full max-h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Quote */}
                  <div className="relative flex-grow mb-6 min-h-[120px] flex items-center">
                    <div className="absolute -top-2 -left-2 text-4xl text-blue-400 [font-family:'Staatliches',Helvetica]">
                      "
                    </div>
                    <p className="[font-family:'Space_Grotesk',Helvetica] font-medium text-gray-600 text-lg leading-relaxed pl-6 pr-6">
                      {testimonial.quote}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-blue-400 [font-family:'Staatliches',Helvetica] rotate-180">
                      "
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.author} avatar`}
                      className="w-14 h-14 mr-4 rounded-full shadow-md ring-2 ring-white transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="[font-family:'Space_Grotesk',Helvetica]">
                      <h4 className="font-bold text-gray-800 text-lg leading-tight">
                        {testimonial.author}
                      </h4>
                      <p className="font-medium text-gray-500 text-sm leading-tight mt-1">
                        {testimonial.position}
                      </p>
                      {testimonial.company && (
                        <p className="font-medium text-gray-400 text-xs leading-tight mt-0.5">
                          {testimonial.company}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
                  index === currentStartIndex
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                onClick={() => setCurrentStartIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Додаємо головний компонент App
const App: React.FC = () => {
  return <Box />;
};

export { App };
export default App;
