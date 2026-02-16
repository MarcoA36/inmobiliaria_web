"use client";
import { useEffect, useState } from "react";

/* ===============================
   SLIDER DE IMÁGENES (COMENTADO)
   ===============================
   Descomentar este bloque si querés volver
   al hero con imágenes rotativas
*/
// const images = [
//   "/inmobiliaria-image.jpg",
//   "/inmo-hero-5.png",
//   "/inmo-hero-6.jpg",
// ];

export function Hero() {
  /* ===============================
     ESTADO DEL SLIDER (COMENTADO)
     ===============================
  */
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  /* ===============================
     IMAGEN ÚNICA DEL HERO
     ===============================
     Cambiá esta ruta por la imagen final
  */
  const heroImage = "/inmo-hero-6.jpg";

  return (
    <section className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
      {/* ===============================
          HERO CON IMAGEN ÚNICA
         =============================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* ===============================
          SLIDER ORIGINAL (COMENTADO)
         =============================== */}
      {/*
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Search box */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-4xl">
        <div className="flex flex-col sm:flex-row items-stretch bg-white/95 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden ring-1 ring-black/5">
          <input
            type="text"
            placeholder="Buscar por palabra clave, barrio o código"
            className="
              flex-1 px-6 py-5 text-sm sm:text-base
              text-foreground placeholder:text-muted-foreground
              outline-none bg-transparent
              focus:ring-0
            "
          />

          <button
            className="
              bg-primary text-primary-foreground
              px-8 py-5 text-sm sm:text-base font-semibold
              hover:bg-primary/90 transition-all
              flex items-center justify-center
            "
          >
            Buscar
          </button>
        </div>
      </div>
    </section>
  );
}
