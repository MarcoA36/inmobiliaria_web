// "use client"

// import { MessageCircle } from "lucide-react"

// export function WhatsAppButton() {
//   const phoneNumber = "34600000000" // Replace with actual phone number
//   const message = encodeURIComponent("Hola, estoy interesado en sus propiedades")

//   return (
//     <a
//       href={`https://wa.me/${phoneNumber}?text=${message}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
//       aria-label="Contactar por WhatsApp"
//     >
//       <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
//       <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//         Chatea con nosotros
//       </span>
//     </a>
//   )
// }

"use client"

export function WhatsAppButton() {
  const phoneNumber = "34600000000"
  const message = encodeURIComponent("Hola, estoy interesado en sus propiedades")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A]
                 text-white p-4 rounded-full shadow-2xl
                 transition-all hover:scale-110 group"
    >
      {/* WhatsApp SVG oficial */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7 sm:h-8 sm:w-8"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.734 5.586 2.125 8.023L0 32l8.223-2.098A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.43 0-4.816-.652-6.91-1.887l-.492-.293-4.883 1.246 1.305-4.758-.32-.52A13.1 13.1 0 012.91 16C2.91 8.77 8.77 2.91 16 2.91S29.09 8.77 29.09 16 23.23 29.09 16 29.09zm7.545-9.758c-.41-.207-2.426-1.195-2.805-1.332-.379-.137-.656-.207-.93.207-.273.414-1.07 1.332-1.313 1.605-.242.273-.484.309-.895.102-.41-.207-1.73-.637-3.293-2.031-1.215-1.086-2.035-2.426-2.277-2.836-.242-.41-.027-.63.18-.836.187-.186.41-.484.617-.727.207-.242.273-.414.41-.688.137-.273.07-.516-.035-.723-.102-.207-.93-2.242-1.273-3.07-.332-.797-.672-.688-.93-.7l-.793-.016c-.273 0-.723.102-1.102.516-.379.414-1.445 1.414-1.445 3.445 0 2.031 1.48 3.992 1.688 4.27.207.273 2.918 4.453 7.07 6.242.988.426 1.758.68 2.36.871.992.316 1.895.27 2.605.164.793-.117 2.426-.992 2.773-1.953.344-.961.344-1.785.242-1.953-.102-.164-.379-.273-.793-.48z"/>
      </svg>

      {/* Tooltip */}
      <span
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2
                   bg-black text-white px-3 py-1.5 rounded-lg text-sm
                   font-medium whitespace-nowrap opacity-0
                   group-hover:opacity-100 transition-opacity
                   pointer-events-none"
      >
        Chatea con nosotros
      </span>
    </a>
  )
}
