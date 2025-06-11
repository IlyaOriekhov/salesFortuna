import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./components/carousel";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    quote:
      "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    author: "Ethan Morgan",
    position: "Founder and CEO",
    avatar: "/ethan.png",
    logo: "/serene.png",
  },
  {
    id: 2,
    quote:
      "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    author: "Olivia Hayes",
    position: "Owner",
    avatar: "./olivia.png",
    logo: "/starlight.png",
  },
  {
    id: 3,
    quote:
      "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    author: "Alexander Reed",
    position: "Co-Founder",
    avatar: "/alexander.png",
    logo: "/opulent.png",
  },
];

export const Box = (): React.JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Встановлюємо початковий індекс
    setCurrent(api.selectedScrollSnap());

    // Слухаємо зміни вибраного слайду
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    // Очищуємо слухачі при демонтажі
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

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

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full bg-white rounded-2xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group">
                    <CardContent className="p-8 h-full flex flex-col">
                      {/* Company Logo */}
                      {testimonial.logo && (
                        <div className="mb-6 flex justify-center h-16 items-center">
                          <img
                            src={testimonial.logo}
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
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Arrows - Using Original Components */}
            <CarouselPrevious className="absolute -left-[28px] lg:-left-[28px] w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
              <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </CarouselPrevious>

            <CarouselNext className="absolute -right-[28px] lg:-right-[28px] w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group">
              <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </CarouselNext>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
                  index === current
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                onClick={() => api?.scrollTo(index)}
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
