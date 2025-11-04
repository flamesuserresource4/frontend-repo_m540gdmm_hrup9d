import { Brush, Droplets, Sun, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Interior Paints",
    desc: "Rich, low-odor emulsions for elegant, durable interiors.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Exterior Paints",
    desc: "Weatherproof protection with UV resistance and long life.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Primer",
    desc: "Superior adhesion and sealing for flawless finish.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1582582429416-0d7c8a01de59?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Specialty Paints",
    desc: "Anti-fungal, waterproofing and textured designer finishes.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProductCategories() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Product Categories
            </h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Explore our complete portfolio for homes, commercial spaces, and industrial applications.
            </p>
          </div>
          <a href="#quote" className="hidden md:inline-flex rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">Request a Quote</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="h-40 overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <c.icon className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-900">{c.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <a href="#" className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">View products →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
