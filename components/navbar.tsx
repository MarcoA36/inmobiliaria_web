// import Link from "next/link"
// import { Building2 } from "lucide-react"

// export function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
//       <div className="container mx-auto px-6">
//         <div className="flex items-center justify-between h-16 sm:h-20 text-white">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Building2 className="h-6 w-6 text-white" />
//             <span className="font-serif text-xl font-bold tracking-tight">
//               INMOBILIARIA
//             </span>
//           </Link>

//           {/* Menu */}
//           <div className="hidden md:flex items-center gap-6 text-sm font-medium">

//             {/* Venta */}
//             <Link href="#propiedades" className="hover:text-white/80">
//              Venta
//             </Link>


//             {/* Alquiler */}
//             <Link href="#propiedades" className="hover:text-white/80">
//               Alquiler
//             </Link>


//             <Link href="#propiedades" className="hover:text-white/80">
//               Alquiler Temporal
//             </Link>

//             <Link href="/tasacion" className="hover:text-white/80">
//               Tasación
//             </Link>

//             <Link href="/contacto" className="hover:text-white/80">
//               Contáctenos
//             </Link>

//             {/* <Link
//               href="/login"
//               className="flex items-center gap-1 hover:text-white/80"
//             >
//               <Lock size={14} />
//               Ingresar
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }


import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">
            Inmobiliaria
          </h1>
          <span className="text-xs tracking-widest text-gray-400">
            NEGOCIOS INMOBILIARIOS
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <Link href="/">INICIO</Link>
          <Link href="/empresa">EMPRESA</Link>
          <Link href="#propiedades">ALQUILERES</Link>
          <Link href="#emprendimientos">VENTAS</Link>
          <Link href="/tasaciones">TASACIONES</Link>
          <Link href="/contacto">CONTACTO</Link>
        </div>
      </div>
    </nav>
  )
}
