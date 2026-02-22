// import Link from "next/link"
// import { getProperties } from "@/lib/get-properties"
// import { PropertyCard } from "@/components/property-card"
// import { HeroSearch } from "@/components/hero-search"

// interface PropertiesPageProps {
//   searchParams: {
//     type?: string
//     property_type?: string
//     bedrooms?: string
//     city?: string
//   }
// }

// export default async function PropertiesPage({
//   searchParams,
// }: PropertiesPageProps) {

//   const properties = await getProperties(searchParams)

//   // 🔎 Construcción del resumen
//   const { type, property_type, bedrooms, city } = searchParams

//   // const filtersSummary = [
//   //   property_type,
//   //   type,
//   //   bedrooms ? `${bedrooms} habitaciones` : null,
//   //   city ? `en ${city}` : null,
//   // ]
//   //   .filter(Boolean)
//   //   .join(" ")
//   const filtersSummary = [
//     property_type === "casa"
//       ? "casas"
//       : property_type === "departamento"
//       ? "departamentos"
//       : property_type === "lote"
//       ? "lotes"
//       : "propiedades",
  
//     type === "venta"
//       ? "en venta"
//       : type === "alquiler"
//       ? "en alquiler"
//       : type === "alquiler-temporario"
//       ? "en alquiler temporario"
//       : null,
  
//     bedrooms
//       ? `de ${bedrooms} ${bedrooms === "1" ? "ambiente" : "ambientes"}`
//       : null,
  
//     city
//       ? `en ${city.charAt(0).toUpperCase() + city.slice(1)}`
//       : null,
//   ]
//     .filter(Boolean)
//     .join(" ")

//   return (
//     <section className="py-8 bg-background">

//       <div className="container mx-auto px-4">

//         {/* BOTÓN VOLVER */}
//         <div className="mb-6">
//           <Link
//             href="/"
//             className="text-sm text-muted-foreground hover:underline"
//           >
//             ← Volver al inicio
//           </Link>
//         </div>

//         {/* BUSCADOR */}
//         <div className="bg-black/70 backdrop-blur-md py-6 rounded-lg mb-12">
//           <div className="max-w-6xl mx-auto px-6">
//             <HeroSearch />
//           </div>
//         </div>

//         {/* TÍTULO DINÁMICO */}
//         {/* <h1 className="text-3xl font-serif font-bold mb-10">
//           {properties.length}{" "}
//           {filtersSummary
//             ? `${filtersSummary}`
//             : "propiedades"}
//         </h1> */}
//         <div className="mb-10 space-y-2">

//   {/* Línea principal */}
//   <h1 className="text-3xl font-semibold tracking-tight">
//   Resultados ({properties.length})
// </h1>

//   {/* Resumen de filtros */}
//   {filtersSummary && (
//     <p className="text-muted-foreground text-lg">
//       {filtersSummary}
//     </p>
//   )}
// </div>
//         {/* <h1 className="text-3xl font-serif font-bold mb-10">
//   Resultados ({properties.length})
// </h1> */}

//         {properties.length === 0 ? (
//           <p className="text-muted-foreground">
//             No se encontraron propiedades con esos filtros.
//           </p>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {properties.map((property) => (
//               <PropertyCard key={property.id} {...property} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }
import Link from "next/link"
import { getProperties } from "@/lib/get-properties"
import { PropertyCard } from "@/components/property-card"
import { HeroSearch } from "@/components/hero-search"

interface PropertiesPageProps {
  searchParams: {
    type?: string
    property_type?: string
    bedrooms?: string
    city?: string
    page?: string
  }
}

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const { properties, total } = await getProperties(searchParams)

  const { type, property_type, bedrooms, city } = searchParams

  const currentPage = Number(searchParams.page || 1)

  const filtersSummary = [
    property_type === "casa"
      ? "casas"
      : property_type === "departamento"
      ? "departamentos"
      : property_type === "lote"
      ? "lotes"
      : "propiedades",

    type === "venta"
      ? "en venta"
      : type === "alquiler"
      ? "en alquiler"
      : type === "alquiler-temporario"
      ? "en alquiler temporario"
      : null,

    bedrooms
      ? `de ${bedrooms} ${bedrooms === "1" ? "ambiente" : "ambientes"}`
      : null,

    city
      ? `en ${city.charAt(0).toUpperCase() + city.slice(1)}`
      : null,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">

        {/* VOLVER */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* BUSCADOR */}
        <div className="bg-black/70 backdrop-blur-md py-6 rounded-lg mb-12">
          <div className="max-w-6xl mx-auto px-6">
            <HeroSearch />
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
          Resultados ({total})
          </h1>

          {filtersSummary && (
            <p className="text-muted-foreground text-lg">
              {filtersSummary}
            </p>
          )}
        </div>

        {/* RESULTADOS */}
        {properties.length === 0 ? (
          <p className="text-muted-foreground">
            No se encontraron propiedades con esos filtros.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            {/* PAGINACIÓN SIMPLE */}
        {/* PAGINACIÓN SIMPLE */}
<div className="flex justify-center gap-4 mt-12">

{currentPage > 1 && (
  <Link
    href={{
      pathname: "/properties",
      query: {
        type: searchParams.type,
        property_type: searchParams.property_type,
        bedrooms: searchParams.bedrooms,
        city: searchParams.city,
        page: currentPage - 1,
      },
    }}
    className="px-4 py-2 border rounded hover:bg-muted transition"
  >
    ← Anterior
  </Link>
)}

{properties.length === 9 && (
  <Link
    href={{
      pathname: "/properties",
      query: {
        type: searchParams.type,
        property_type: searchParams.property_type,
        bedrooms: searchParams.bedrooms,
        city: searchParams.city,
        page: currentPage + 1,
      },
    }}
    className="px-4 py-2 border rounded hover:bg-muted transition"
  >
    Siguiente →
  </Link>
)}

</div>
          </>
        )}
      </div>
    </section>
  )
}