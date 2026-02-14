// import { getHome } from "@/lib/get-home";

// export async function Hero() {
//   const { title, imageUrl } = await getHome();

//   return (
//     <section className="relative h-[85vh] w-full">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${
//             imageUrl || "/placeholder.svg?height=1080&width=1920"
//           })`,
//         }}
//       />

//       {/* Overlay suave */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
//         <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
//           {title || "Encontrá la propiedad de tus sueños"}
//         </h1>

//         {/* Search box */}
//         <div className="w-full max-w-4xl bg-white rounded-md shadow-lg flex flex-col sm:flex-row overflow-hidden">
//           <input
//             type="text"
//             placeholder="Buscar palabras clave"
//             className="flex-1 px-5 py-4 text-gray-700 outline-none"
//           />

//           <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-4 transition">
//             Buscar Propiedad
//           </button>
//         </div>

//         {/* Advanced search */}
//         <div className="mt-4 flex flex-col sm:flex-row gap-2 text-sm text-white">
//           <span>Para más opciones de filtro en búsqueda avanzada!</span>
//           <a
//             href="/busqueda-avanzada"
//             className="underline hover:text-gray-200"
//           >
//             Probar Búsqueda Avanzada
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";

const images = [
  "/inmobiliaria-image.jpg",
  "/apartment-interior-1.png",
  "/modern-apartment-living-room.png",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
      {/* Slider */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      {/* Search box */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl bg-white/90 backdrop-blur-md shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-px bg-gray-300">
          <select className="p-4 outline-none">
            <option>Operación</option>
            <option>Venta</option>
            <option>Alquiler</option>
          </select>

          <select className="p-4 outline-none">
            <option>Tipo</option>
            <option>Casa</option>
            <option>Departamento</option>
          </select>

          <select className="p-4 outline-none">
            <option>Ambientes</option>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>

          <select className="p-4 outline-none">
            <option>Localidad</option>
          </select>

          <button className="col-span-1 md:col-span-2 bg-black text-white font-medium">
            Buscar
          </button>
        </div>
      </div> */}

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

// "use client"

// export function Hero() {
//   return (
//     <section className="relative h-[55vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url(/inmobiliaria-image.jpg)" }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
//         {/* Title */}
//         <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mb-8 max-w-3xl">
//           Encontrá la propiedad que buscas
//         </h2>

//         {/* Search box */}
//         <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md shadow-xl rounded-sm">
//           <div className="flex flex-col sm:flex-row">
//             <input
//               type="text"
//               placeholder="Buscar por palabra clave, barrio o código"
//               className="flex-1 px-6 py-5 text-sm sm:text-base outline-none"
//             />

//             <button className="bg-black text-white px-8 py-5 text-sm sm:text-base font-medium hover:bg-black/90 transition">
//               Buscar
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
