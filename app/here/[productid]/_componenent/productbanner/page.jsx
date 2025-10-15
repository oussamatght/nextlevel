"use client";

export default function ProductBanner({ pro }) {
  return (
    <div className="relative w-full">
      {pro?.banner?.map((img, index) => (
        <img
          key={index}
          src={img.url}
          alt={img.alt || pro.title}
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
        />
      ))}
    </div>
  );
}
