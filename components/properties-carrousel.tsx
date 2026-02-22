"use client"

import { useRef } from "react"
import Link from "next/link"
import { Property } from "@/types/property"
import { PropertyCard } from "./property-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  title: string
  properties: Property[]
  href: string
}

export function PropertyCarousel({ title, properties, href }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const width = scrollRef.current.clientWidth
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    })
  }

  if (!properties.length) return null

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <Link href={href} className="text-primary hover:underline">
          Ver todos →
        </Link>
      </div>

      <div className="relative">
        {/* Flecha izquierda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Contenedor scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {properties.map((property) => (
            <div key={property.id} className="min-w-[300px] flex-shrink-0">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  )
}
