// import { fetchFromDirectus, DIRECTUS_URL } from "./api";

// export async function getPropertyById(id: string) {

//   try {
//     const path = `/items/properties/${id}?fields=*,images.directus_files_id.id,images.directus_files_id.type`;

//     const data = await fetchFromDirectus(path);

//     if (!data || !data.data) return null;

//     const property = data.data;

//     const images =
//       property.images?.map((item: any) => {
//         const file = item.directus_files_id;

//         return {
//           id: file.id,
//           url: `${DIRECTUS_URL}/assets/${file.id}`,
//           type: file.type, // <-- acá está la magia
//         };
//       }) || [];

//     return {
//       ...property,
//       images,
//     };
//   } catch (error) {
//     console.error("❌ Error en getPropertyById:", error);
//     return null;
//   }
// }
import propertiesData from "@/data/properties.json"

export function getPropertyById(id: string) {
  const property = propertiesData.find(
    (p) => String(p.id) === id || p.slug === id
  )

  if (!property) return null

  // const images =
  //   property.images?.map((img: string, index: number) => ({
  //     id: index,
  //     url: img,
  //     type: "image/webp",
  //   })) || []
  const images =
  property.images?.map((img: string, index: number) => ({
    id: String(index), // 👈 CAMBIÁ SOLO ESTO
    url: img,
    type: "image/webp",
  })) || []

  return {
    ...property,
    price: `$${property.price.toLocaleString("es-AR")}`,
    image: images[0]?.url || "/placeholder.svg",
    images,
  }
}