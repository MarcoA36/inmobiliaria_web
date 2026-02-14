import {
    Twitter,
    Facebook,
    Youtube,
    Instagram,
    Mail,
    Phone,
  } from "lucide-react"
  
  export function TopBar() {
    return (
      <div className="bg-black/90 text-white text-xs">
        <div className="container mx-auto px-4 sm:px-6 h-8 flex items-center justify-between">
  
          {/* Redes */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-gray-300">
              <Twitter size={14} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <Youtube size={14} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <Instagram size={14} />
            </a>
          </div>
  
          {/* Contacto */}
          <div className="flex items-center gap-4 sm:gap-6">
  
            {/* Mail */}
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hidden sm:inline">
                inmobiliarias@gmail.com
              </span>
            </div>
  
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span className="hidden sm:inline">
                Alquileres 2284-132343 / Ventas 2284-123242
              </span>
            </div>
  
          </div>
        </div>
      </div>
    )
  }
  