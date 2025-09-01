// src/App.jsx
import ProductCard from "./component/productCrad"

// ✅ import local images
import laptopImg from "./assets/laptop.jpg"
import mobileImg from "./assets/mobile.jpg"
import headphonesImg from "./assets/headphones.webp"

const products = [
  {
    id: 1,
    title: "Laptop",
    price: 55000,
    imageUrl: laptopImg,
    rating: 4.7,
  },
  {
    id: 2,
    title: "Mobile",
    price: 20000,
    imageUrl: mobileImg,
    rating: 4.4,
  },
  {
    id: 3,
    title: "Headphones",
    price: 2999,
    imageUrl: headphonesImg,
    rating: 4.6,
  },
]

export default function App() {
  const handleAdd = (name) => () => {
    alert(`${name} added to cart!`)
  }

  return (
    <div className="min-h-dvh bg-neutral-50">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Props Shop</h1>
          <nav className="text-sm text-black/70">Have A Good Day ❤️</nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Top Picks</h2>
        <p className="mt-1 text-black/60">Each card receives data via props.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(p => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              rating={p.rating}
              imageUrl={p.imageUrl}
              onAddToCart={handleAdd(p.title)}
            />
          ))}
        </div>
      </main>

      <footer className="mt-10 border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-black/60">
          Built with ❤️ using props.
        </div>
      </footer>
    </div>
  )
}
