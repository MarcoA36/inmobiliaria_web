import { fetchFromDirectus, DIRECTUS_URL } from "./api"
import { Property } from "@/types/property"

interface Filters {
  type?: string
  property_type?: string
  bedrooms?: string
  city?: string
  page?: string
}
export async function getProperties(filters?: Filters): Promise<{
  properties: Property[]
  total: number
}> {
  try {
    const params = new URLSearchParams()

    const page = Number(filters?.page || 1)
    const limit = 9
    const offset = (page - 1) * limit

    params.append("fields", "*,images.directus_files_id")
    params.append("limit", String(limit))
    params.append("offset", String(offset))
    params.append("meta", "filter_count")

    if (filters?.type) {
      params.append("filter[type][_eq]", filters.type)
    }

    if (filters?.property_type) {
      params.append("filter[property_type][_eq]", filters.property_type)
    }

    if (filters?.bedrooms) {
      params.append("filter[bedrooms][_eq]", filters.bedrooms)
    }

    if (filters?.city) {
      params.append("filter[city][_icontains]", filters.city)
    }

    const res = await fetchFromDirectus(
      `/items/properties?${params.toString()}`
    )

    const properties = res.data.map((p: any) => {
      const images =
        p.images?.map((img: any) => {
          return `${DIRECTUS_URL}/assets/${img.directus_files_id}`
        }) || []

      return {
        id: p.id,
        slug: p.slug || `propiedad-${p.id}`,
        title: p.title,
        type: p.type,
        address: p.address,
        city: p.city,
        price: `$${p.price?.toLocaleString("es-AR")}`,
        description: p.description || "",
        image: images[0] || "",
        images,
      }
    })

    return {
      properties,
      total: res.meta?.filter_count || 0,
    }
  } catch (error) {
    console.error(error)
    return {
      properties: [],
      total: 0,
    }
  }
}
// export async function getProperties(
//   filters?: Filters
// ): Promise<Property[]> {
//   try {
//     const params = new URLSearchParams()

//     // 🔹 PAGINACIÓN SIMPLE
//     const page = Number(filters?.page || 1)
//     const limit = 9
//     const offset = (page - 1) * limit

//     params.append("fields", "*,images.directus_files_id")
//     params.append("limit", String(limit))
//     params.append("offset", String(offset))

//     if (filters?.type) {
//       params.append("filter[type][_eq]", filters.type)
//     }

//     if (filters?.property_type) {
//       params.append(
//         "filter[property_type][_eq]",
//         filters.property_type
//       )
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

//     return res.data.map((p: any) => {
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
//   } catch (error) {
//     console.error(error)
//     return []
//   }
// }

// export async function getPropertiesTotal(filters?: Filters): Promise<number> {
//   try {
//     const params = new URLSearchParams()

//     params.append("limit", "1")
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

//     return res.meta?.filter_count || 0
//   } catch (error) {
//     console.error(error)
//     return 0
//   }
// }