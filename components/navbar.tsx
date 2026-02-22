// import Link from "next/link"

// export function Navbar() {
//   return (
//     <nav className="bg-black text-white">
//       <div className="container mx-auto px-6 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <div>
//           <h1 className="text-2xl font-semibold tracking-wide">
//             Inmobiliaria
//           </h1>
//           <span className="text-xs tracking-widest text-gray-400">
//             NEGOCIOS INMOBILIARIOS
//           </span>
//         </div>

//         {/* Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
//           {/* <Link href="/">INICIO</Link> */}
//           <Link href="/empresa">NOSOTROS</Link>
//           <Link href="#propiedades">ALQUILERES</Link>
//           <Link href="#emprendimientos">VENTAS</Link>
//           <Link href="/tasaciones">TASACIONES</Link>
//           <Link href="/contacto">CONTACTO</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }
"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white relative z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          {/* <div>
            <h1 className="text-2xl font-semibold tracking-wide">
              Inmobiliaria
            </h1>
            <span className="text-xs tracking-widest text-gray-400">
              NEGOCIOS INMOBILIARIOS
            </span>
          </div> */}
          <Link href="/" className="block cursor-pointer">
            <h1 className="text-2xl font-semibold tracking-wide">
              Inmobiliaria
            </h1>
            <span className="text-xs tracking-widest text-gray-400">
              NEGOCIOS INMOBILIARIOS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link href="#nosotros">NOSOTROS</Link>
            <Link href="#alquiler">ALQUILERES</Link>
            <Link href="#venta">VENTAS</Link>
            <Link href="#contacto">CONTACTO</Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side Menu */}
      {/* <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-150 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-8 text-sm tracking-wide">
          <Link href="/empresa" onClick={() => setOpen(false)}>
            NOSOTROS
          </Link>
          <Link href="#propiedades" onClick={() => setOpen(false)}>
            ALQUILERES
          </Link>
          <Link href="#emprendimientos" onClick={() => setOpen(false)}>
            VENTAS
          </Link>
          <Link href="/tasaciones" onClick={() => setOpen(false)}>
            TASACIONES
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>
            CONTACTO
          </Link>
        </div>
      </div> */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform transition-transform duration-300 z-150 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl hover:text-gray-400 transition"
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 text-sm tracking-wide">
          <Link href="#nosotros" onClick={() => setOpen(false)}>
            NOSOTROS
          </Link>
          <Link href="#propiedades" onClick={() => setOpen(false)}>
            ALQUILERES
          </Link>
          <Link href="#propiedades" onClick={() => setOpen(false)}>
            VENTAS
          </Link>
          {/* <Link href="/tasaciones" onClick={() => setOpen(false)}>
      TASACIONES
    </Link> */}
          <Link href="#contacto" onClick={() => setOpen(false)}>
            CONTACTO
          </Link>
        </div>
      </div>
    </>
  );
}
