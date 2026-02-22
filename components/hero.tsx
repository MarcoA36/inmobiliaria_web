"use client";
import { HeroSearch } from "./hero-search";

export function Hero() {
  return (
    <section className="relative h-[65vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/inmo-hero-6.jpg)` }}
      />

      <div className="absolute inset-0 bg-black/40" />

      {/* <div className="relative z-10 h-full flex items-end md:items-end">
        <HeroSearch />
      </div> */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md py-6">
        <div className="max-w-6xl mx-auto px-6">
          <HeroSearch />
        </div>
      </div>
    </section>
  );
}
