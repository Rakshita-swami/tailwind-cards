
import React from "react";

const ProductCard = ({ title, price, imageUrl, rating = 4.5, onAddToCart }) => {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition p-4 flex flex-col">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-4 flex-1 space-y-1">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-black/60">Rated {rating}★</p>
        <p className="text-2xl font-bold tracking-tight">₹{price.toLocaleString()}</p>
      </div>

      {/* Button */}
      <button
        onClick={onAddToCart}
        className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-black text-white hover:bg-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 active:scale-[0.99] transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
