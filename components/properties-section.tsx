import Link from "next/link"
import { getProperties } from "@/lib/get-properties"
import { PropertyCard } from "./property-card"

export async function PropertiesSection() {
  const { properties } = await getProperties()


  const ventas = properties
    .filter((property) => property.type === "venta")
    .slice(0, 3)

  const alquileres = properties
    .filter((property) => property.type === "alquiler")
    .slice(0, 3)

  return (
    <section id="propiedades" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Propiedades Destacadas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubrí nuestras mejores oportunidades en alquiler y venta
          </p>
        </div>

        {/* ================== ALQUILER ================== */}
        {alquileres.length > 0 && (
          <div className="mb-20" id="alquiler">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">
                En alquiler
              </h3>

              <Link
                href="/properties?type=alquiler"
                className="text-sm font-medium hover:underline"
              >
                Ver todas →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {alquileres.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        )}

        {/* ================== VENTA ================== */}
        {ventas.length > 0 && (
          <div id="venta">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold">
                En venta
              </h3>

              <Link
                href="/properties?type=venta"
                className="text-sm font-medium hover:underline"
              >
                Ver todas →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ventas.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
