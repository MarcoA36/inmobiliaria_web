"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialValue = searchParams.get("search") || "";
  const [search, setSearch] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    
    if (search.trim()) {
      params.set("search", search.trim());
      params.set("page", "1"); // resetea paginación
    } else {
      params.delete("search");
    }

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl mx-auto gap-2"
    >
      <input
        type="text"
        placeholder="Buscar por ciudad, tipo o título..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-3 border rounded-lg"
      />

      <button
        type="submit"
        className="px-6 py-3 bg-primary text-white rounded-lg"
      >
        Buscar
      </button>
    </form>
  );
}
