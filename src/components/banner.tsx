import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllCarouselImages } from "../services/carousel";

interface BannerProps {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function Banner({
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: BannerProps) {
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const images = (await getAllCarouselImages()).data.map(
        (image: { imagem: any }) => image.imagem || "/logo.png",
      );

      setCarouselImages(images);
    })();
  }, []);

  useEffect(() => {
    if (!autoPlay || carouselImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, carouselImages.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (carouselImages.length === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full aspect-3/1 sm:aspect-4/1 md:aspect-5/2 lg:aspect-16/5 overflow-hidden rounded-2xl md:rounded-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <img
              src={carouselImages[currentIndex]}
              alt={`Anúncio ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
              loading={currentIndex === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {carouselImages.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-bg scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
