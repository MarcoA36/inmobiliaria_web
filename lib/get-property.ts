import { fetchFromDirectus, DIRECTUS_URL } from "./api";

export async function getPropertyById(id: string) {
  // try {
  //   const path = `/items/properties/${id}?fields=*,images.directus_files_id`;

  //   console.log("🔗 URL generada:", `${DIRECTUS_URL}${path}`);

  //   const data = await fetchFromDirectus(path);

  //   console.log("📦 Respuesta de Directus:", JSON.stringify(data, null, 2));

  //   if (!data || !data.data) return null;

  //   const property = data.data;

  //   // Generamos URLs de imágenes
  //   const images = property.images?.map((img: any) => {
  //     const url = `${DIRECTUS_URL}/assets/${img.directus_files_id}`;
  //     console.log("➡ IMAGE URL GENERATED:", url);
  //     return url;
  //   }) || [];
  try {
    const path = `/items/properties/${id}?fields=*,images.directus_files_id.id,images.directus_files_id.type`;

    const data = await fetchFromDirectus(path);

    if (!data || !data.data) return null;

    const property = data.data;

    const images =
      property.images?.map((item: any) => {
        const file = item.directus_files_id;

        return {
          id: file.id,
          url: `${DIRECTUS_URL}/assets/${file.id}`,
          type: file.type, // <-- acá está la magia
        };
      }) || [];

    return {
      ...property,
      images,
    };
  } catch (error) {
    console.error("❌ Error en getPropertyById:", error);
    return null;
  }
}
