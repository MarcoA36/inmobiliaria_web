// import { fetchFromDirectus, DIRECTUS_URL } from "./api"
// import { Property } from "@/types/property"

// interface Filters {
//   type?: string
//   property_type?: string
//   bedrooms?: string
//   city?: string
//   page?: string
// }
// export async function getProperties(filters?: Filters): Promise<{
//   properties: Property[]
//   total: number
// }> {
//   try {
//     const params = new URLSearchParams()

//     const page = Number(filters?.page || 1)
//     const limit = 9
//     const offset = (page - 1) * limit

//     params.append("fields", "*,images.directus_files_id")
//     params.append("limit", String(limit))
//     params.append("offset", String(offset))
//     params.append("meta", "filter_count")

//     if (filters?.type) {
//       params.append("filter[type][_eq]", filters.type)
//     }

//     if (filters?.property_type) {
//       params.append("filter[property_type][_eq]", filters.property_type)
//     }

//     if (filters?.bedrooms) {
//       params.append("filter[bedrooms][_eq]", filters.bedrooms)
//     }

//     if (filters?.city) {
//       params.append("filter[city][_icontains]", filters.city)
//     }

//     const res = await fetchFromDirectus(
//       `/items/properties?${params.toString()}`
//     )

//     const properties = res.data.map((p: any) => {
//       const images =
//         p.images?.map((img: any) => {
//           return `${DIRECTUS_URL}/assets/${img.directus_files_id}`
//         }) || []

//       return {
//         id: p.id,
//         slug: p.slug || `propiedad-${p.id}`,
//         title: p.title,
//         type: p.type,
//         address: p.address,
//         city: p.city,
//         price: `$${p.price?.toLocaleString("es-AR")}`,
//         description: p.description || "",
//         image: images[0] || "",
//         images,
//       }
//     })

//     return {
//       properties,
//       total: res.meta?.filter_count || 0,
//     }
//   } catch (error) {
//     console.error(error)
//     return {
//       properties: [],
//       total: 0,
//     }
//   }
// }

import propertiesData from "@/data/properties.json"
import { Property } from "@/types/property"

interface Filters {
  type?: string
  property_type?: string
  bedrooms?: string
  city?: string
  page?: string
}

export async function getProperties(
  filters?: Filters
): Promise<{
  properties: Property[]
  total: number
}> {
  try {
    const page = Number(filters?.page || 1)
    const limit = 9
    const offset = (page - 1) * limit

    let filtered = [...propertiesData]

    // filtros (igual que Directus)
    if (filters?.type) {
      filtered = filtered.filter(p => p.type === filters.type)
    }

    if (filters?.property_type) {
      filtered = filtered.filter(
        p => p.property_type === filters.property_type
      )
    }

    if (filters?.bedrooms) {
      filtered = filtered.filter(
        p => String(p.bedrooms) === filters.bedrooms
      )
    }

 if (filters?.city) {
  const city = filters.city.toLowerCase()

  filtered = filtered.filter(p =>
    p.city.toLowerCase().includes(city)
  )
}

    const total = filtered.length

    const paginated = filtered.slice(offset, offset + limit)

    const properties: Property[] = paginated.map((p: any) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      type: p.type, // venta / alquiler
      property_type: p.property_type, // Casa / Depto
      address: p.address,
      city: p.city,
      price: `$${p.price.toLocaleString("es-AR")}`,
      description: p.description || "",
      image: p.images?.[0] || "/placeholder.svg",
      images: p.images || [],
      bedrooms: p.bedrooms,
    }))

    return {
      properties,
      total,
    }
  } catch (error) {
    console.error(error)
    return {
      properties: [],
      total: 0,
    }
  }
}