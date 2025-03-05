import Link from "next/link"
import Image from "next/image"

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=200&auto=format&fit=crop",
      link: "/category/electronics",
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=200&auto=format&fit=crop",
      link: "/category/fashion",
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=200&auto=format&fit=crop",
      link: "/category/home-living",
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&auto=format&fit=crop",
      link: "/category/beauty",
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=200&auto=format&fit=crop",
      link: "/category/sports",
    },
    {
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?q=80&w=200&auto=format&fit=crop",
      link: "/category/toys",
    },
  ]

  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className="group flex flex-col items-center">
            <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg bg-muted">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

