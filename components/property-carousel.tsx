"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageItem {
  id: string;
  url: string;
  type: string;
}

interface PropertyCarouselProps {
  images: ImageItem[];
  alt: string;
}

export function PropertyCarousel({ images, alt }: PropertyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const isVideo = (item: ImageItem) => {
    return item.type?.startsWith("video");
  };

  // 🔥 Primera imagen disponible (no video)
  const firstImage = images.find((item) => !isVideo(item));

  const firstImageThumbnail = firstImage
    ? `${firstImage.url}?width=300&height=300&fit=cover`
    : null;

  const currentItem = images[currentIndex];

  // const isVideo = (item: ImageItem) => {
  //   return item.type?.startsWith("video");
  // };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative w-full">
      {/* MAIN */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-lg bg-muted">
        {isVideo(currentItem) ? (
          <video
            key={currentItem.url}
            src={currentItem.url}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={currentItem.url}
            alt={`${alt} - ${currentIndex + 1}`}
            className="w-full h-full object-cover cursor-zoom-in"
            onClick={() => setIsOpen(true)}
          />
        )}

        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>

      {/* THUMBNAILS */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {images.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                index === currentIndex
                  ? "border-primary"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              {isVideo(item) ? (
                <div className="relative w-full h-full">
                  <img
                    src={firstImageThumbnail || item.url}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                      <div className="ml-1 w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                    </div>
                  </div>
                </div>
              ) : (
                <img
                  src={`${item.url}?width=300&height=300&fit=cover`}
                  className="w-full h-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
      {/* THUMBNAILS */}

      {/* LIGHTBOX */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center">
          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl"
          >
            ×
          </button>

          {/* PREV */}
          {images.length > 1 && (
            <button
              onClick={goToPrevious}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={48} />
            </button>
          )}

          {/* IMAGE */}
          {/* <img
            src={currentItem.url}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          /> */}
          {isVideo(currentItem) ? (
            <video
              key={currentItem.url}
              src={currentItem.url}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] object-contain"
              // className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={currentItem.url}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          )}

          {/* NEXT */}
          {images.length > 1 && (
            <button onClick={goToNext} className="absolute right-6 text-white">
              <ChevronRight size={48} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
