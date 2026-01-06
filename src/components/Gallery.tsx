import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/img-1.jpg", alt: t.gallery.images[0] },
    { src: "/images/img-2.jpg", alt: t.gallery.images[1] },
    { src: "/images/img-3.jpg", alt: t.gallery.images[2] },
    { src: "/images/img-4.jpg", alt: t.gallery.images[3] },
    { src: "/images/img-5.jpg", alt: t.gallery.images[4] },
    { src: "/images/img-6.jpg", alt: t.gallery.images[5] },
    { src: "/images/img-7.jpg", alt: t.gallery.images[6] },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galleria" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl text-foreground">{t.gallery.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-medium">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-lg font-medium text-white">{images[currentIndex].alt}</p>
            </div>
          </div>

          <Button
            onClick={prevSlide}
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-white/30 hover:bg-background/90"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-white/30 hover:bg-background/90"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="mt-6 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-lg transition-all ${
                index === currentIndex ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
