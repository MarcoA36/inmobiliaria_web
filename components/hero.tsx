// import { getHome } from "@/lib/get-home";

// export async function Hero() {
//   const { title, subtitle, imageUrl } = await getHome();

//   return (
//     <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${imageUrl || "/placeholder.svg?height=1080&width=1920&query=modern+luxury+residential+building"})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-balance">
//           {title || "⚠️ No se recibió título desde Strapi"}
//         </h1>
//         <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 sm:mb-12 text-balance leading-relaxed">
//           {subtitle || "⚠️ No se recibió subtítulo desde Strapi"}
//         </p>
//         <a
//           href="#propiedades"
//           className="inline-block bg-white text-primary px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-medium text-base sm:text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
//         >
//           Ver Propiedades
//         </a>
//       </div>
//     </section>
//   );
// }



import { getHome } from "@/lib/get-home";

export async function Hero() {
  const { title, imageUrl } = await getHome();

  return (
    <section className="relative h-[85vh] w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            imageUrl || "/placeholder.svg?height=1080&width=1920"
          })`,
        }}
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
          {title || "Encontrá la propiedad de tus sueños"}
        </h1>

        {/* Search box */}
        <div className="w-full max-w-4xl bg-white rounded-md shadow-lg flex flex-col sm:flex-row overflow-hidden">
          <input
            type="text"
            placeholder="Buscar palabras clave"
            className="flex-1 px-5 py-4 text-gray-700 outline-none"
          />

          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-4 transition">
            Buscar Propiedad
          </button>
        </div>

        {/* Advanced search */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2 text-sm text-white">
          <span>Para más opciones de filtro en búsqueda avanzada!</span>
          <a
            href="/busqueda-avanzada"
            className="underline hover:text-gray-200"
          >
            Probar Búsqueda Avanzada
          </a>
        </div>
      </div>
    </section>
  );
}
