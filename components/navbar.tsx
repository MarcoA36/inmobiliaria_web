// import Link from "next/link"
// import { Building2 } from "lucide-react"

// export function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 sm:h-20">
//           <Link href="/" className="flex items-center gap-2 group">
//             <Building2 className="h-6 w-6 sm:h-7 sm:w-7 text-primary transition-transform group-hover:scale-110" />
//             <span className="font-serif text-xl sm:text-2xl font-bold text-foreground tracking-tight">
//               INMOBILIARIA
//             </span>
//           </Link>

//           <div className="hidden md:flex items-center gap-8">
//             <Link
//               href="#propiedades"
//               className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Propiedades
//             </Link>
//             <Link
//               href="#contacto"
//               className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
//             >
//               Contacto
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }





import Link from "next/link"
import { Building2, ChevronDown, Lock } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 text-white">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-white" />
            <span className="font-serif text-xl font-bold tracking-tight">
              INMOBILIARIA
            </span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">

            {/* Venta */}
            <Link href="#propiedades" className="hover:text-white/80">
             Venta
            </Link>


            {/* Alquiler */}
            <Link href="#propiedades" className="hover:text-white/80">
              Alquiler
            </Link>


            <Link href="#propiedades" className="hover:text-white/80">
              Alquiler Temporal
            </Link>

            <Link href="/tasacion" className="hover:text-white/80">
              Tasación
            </Link>

            <Link href="/contacto" className="hover:text-white/80">
              Contáctenos
            </Link>

            {/* <Link
              href="/login"
              className="flex items-center gap-1 hover:text-white/80"
            >
              <Lock size={14} />
              Ingresar
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
