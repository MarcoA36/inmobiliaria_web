// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

// export function HeroSearch() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const type = searchParams.get("type") || "";
//   const propertyType = searchParams.get("property_type") || "";
//   const bedrooms = searchParams.get("bedrooms") || "";
//   const city = searchParams.get("city") || "";

//   const handleSearch = () => {
//     const params = new URLSearchParams();

//     if (type) params.set("type", type);
//     if (propertyType) params.set("property_type", propertyType);
//     if (bedrooms) params.set("bedrooms", bedrooms);
//     if (city) params.set("city", city);

//     router.push(`/properties?${params.toString()}`);
//   };

//   const handleChange = (key: string, value: string) => {
//     const params = new URLSearchParams(searchParams.toString());

//     if (value) {
//       params.set(key, value);
//     } else {
//       params.delete(key);
//     }

//     router.replace(`/properties?${params.toString()}`);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//       <select
//         value={type}
//         onChange={(e) => handleChange("type", e.target.value)}
//         className="bg-white/90 px-4 py-3 text-sm rounded"
//       >
//         <option value="">Operación</option>
//         <option value="venta">Venta</option>
//         <option value="alquiler">Alquiler</option>
//       </select>

//       <select
//         value={propertyType}
//         onChange={(e) => handleChange("property_type", e.target.value)}
//         className="bg-white/90 px-4 py-3 text-sm rounded"
//       >
//         <option value="">Tipo</option>
//         <option value="casa">Casa</option>
//         <option value="departamento">Departamento</option>
//         <option value="lote">Lote</option>
//       </select>

//       <select
//         value={bedrooms}
//         onChange={(e) => handleChange("bedrooms", e.target.value)}
//         className="bg-white/90 px-4 py-3 text-sm rounded"
//       >
//         <option value="">Habitaciones</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4+</option>
//       </select>

//       <select
//         value={city}
//         onChange={(e) => handleChange("city", e.target.value)}
//         className="bg-white/90 px-4 py-3 text-sm rounded"
//       >
//         <option value="">Localidad</option>
//         <option value="Olavarria">Olavarría</option>
//         <option value="Loma Negra">Loma Negra</option>
//         <option value="Sierra Chica">Sierra Chica</option>
//         <option value="Hinojo">Hinojo</option>
//         <option value="Colonia Hinojo">Colonia Hinojo</option>

//         <option value="sierras bayas">Sierras Bayas</option>

//       </select>

//     </div>
//   );
// }

/////CON BOTON BUSCAR

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const getSelectClass = (value: string) =>
  `px-4 py-3 text-sm rounded transition ${
    value
      ? "bg-white border border-black shadow-sm"
      : "bg-white/90 border border-transparent"
  }`;

export function HeroSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [type, setType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [city, setCity] = useState("");

  // 🔹 Sincroniza estado cuando cambia la URL
  useEffect(() => {
    setType(searchParams.get("type") || "");
    setPropertyType(searchParams.get("property_type") || "");
    setBedrooms(searchParams.get("bedrooms") || "");
    setCity(searchParams.get("city") || "");
  }, [searchParams]);

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (type) params.set("type", type);
    if (propertyType) params.set("property_type", propertyType);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (city) params.set("city", city);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="bg-white/90 px-4 py-3 text-sm rounded"
      >
        <option value="">Operación</option>
        <option value="venta">Venta</option>
        <option value="alquiler">Alquiler</option>
      </select>

      <select
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
        className="bg-white/90 px-4 py-3 text-sm rounded"
      >
        <option value="">Tipo</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="lote">Lote</option>
      </select>

      <select
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        className="bg-white/90 px-4 py-3 text-sm rounded"
      >
        <option value="">Habitaciones</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4+</option>
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="bg-white/90 px-4 py-3 text-sm rounded"
      >
        <option value="">Localidad</option>

        <option value="olavarria">Olavarría</option>
        <option value="sierras bayas">Sierras Bayas</option>
        <option value="hinojo">Hinojo</option>
        <option value="colonia hinojo">Colonia Hinojo</option>
        <option value="colonia san miguel">Colonia San Miguel</option>
        <option value="loma negra">Loma Negra</option>

        <option value="azul">Azul</option>
        <option value="laprida">Laprida</option>
        <option value="bolivar">Bolívar</option>
        <option value="tandil">Tandil</option>
      </select>

      <button
        onClick={handleSearch}
        className="bg-black text-white px-6 py-3 text-sm font-semibold rounded cursor-pointer"
      >
        Buscar
      </button>
    </div>
  );
}
