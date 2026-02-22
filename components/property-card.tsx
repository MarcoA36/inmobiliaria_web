


import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface PropertyCardProps {
  id: string | number
  image: string
  type: string
  address: string
  city: string
  price: string
  description: string
}

export function PropertyCard({
  id,
  image,
  type,
  address,
  city,
  price,
  description,
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-border/40 transition-all duration-300 hover:shadow-2xl">
      <Link href={`/property/${id}`}>

        {/* Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={`Propiedad en ${city}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Type badge */}
          <span
            className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide ${
              type.toLowerCase() === "venta"
                ? "bg-primary text-primary-foreground"
                : "bg-black/70 text-white"
            }`}
          >
            {type}
          </span>

          {/* Price */}
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-2xl font-serif font-bold drop-shadow">
              {price}
            </p>
          </div>
        </div>
      </Link>

      {/* Content */}
      <CardContent className="p-5 sm:p-6">
        {/* Location */}
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-foreground text-base sm:text-lg leading-tight">
              {address}
            </p>
            <p className="text-sm text-muted-foreground">
              {city}
            </p>
          </div>
        </div>

        {/* Description */}
        <div
          className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-2 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* CTA */}
        <Link
          href={`/property/${id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
        >
          Ver detalles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
