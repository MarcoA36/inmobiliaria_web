// import { Building2, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
// import Link from "next/link"

// export function Footer() {
//   return (
//     <footer className="bg-foreground text-background py-12 sm:py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Building2 className="h-7 w-7 text-primary" />
//               <span className="font-serif text-xl sm:text-2xl font-bold">INMOBILIARIA</span>
//             </div>
//             <p className="text-background/80 text-sm leading-relaxed">
//               Tu socio de confianza en bienes raíces. Encontramos la propiedad perfecta para ti.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-serif text-lg font-bold mb-4">Navegación</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="#propiedades"
//                   className="text-background/80 hover:text-background text-sm transition-colors"
//                 >
//                   Propiedades
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contacto" className="text-background/80 hover:text-background text-sm transition-colors">
//                   Contacto
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-serif text-lg font-bold mb-4">Contacto</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2 text-background/80 text-sm">
//                 <Phone className="h-4 w-4 text-primary flex-shrink-0" />
//                 <span>+34 600 000 000</span>
//               </li>
//               <li className="flex items-center gap-2 text-background/80 text-sm">
//                 <Mail className="h-4 w-4 text-primary flex-shrink-0" />
//                 <span>info@inmobiliaria.com</span>
//               </li>
//               <li className="flex items-start gap-2 text-background/80 text-sm">
//                 <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
//                 <span>
//                   Calle Principal 123
//                   <br />
//                   28001 Madrid, España
//                 </span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-serif text-lg font-bold mb-4">Síguenos</h3>
//             <div className="flex gap-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-background/10 hover:bg-primary p-2.5 rounded-full transition-all hover:scale-110"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-background/20 pt-6 sm:pt-8 text-center">
//           <p className="text-background/70 text-sm">
//             © {new Date().getFullYear()} Inmobiliaria Premium. Todos los derechos reservados.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 sm:py-16">

          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-md bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Inmobiliaria
              </span>
            </div>

            <p className="text-background/75 text-sm leading-relaxed max-w-xs">
              Acompañamos cada operación con profesionalismo, transparencia y
              compromiso, cuidando cada detalle del proceso inmobiliario.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#propiedades"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Propiedades
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-4 w-4 text-white" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-4 w-4 text-white" />
                <span>info@inmobiliaria.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-4 w-4 text-white mt-0.5" />
                <span>
                  Calle Principal 123 <br />
                  28001 Madrid
                </span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Seguinos
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/15 py-6 text-center">
          <p className="text-background/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} Inmobiliaria Premium. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}
