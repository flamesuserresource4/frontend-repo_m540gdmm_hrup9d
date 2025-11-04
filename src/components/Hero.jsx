import { Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="bg-slate-900 text-slate-100 text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>ISO 9001 & BIS Certified • Low VOC, Eco-conscious paints</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#contact" className="inline-flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <Phone className="h-4 w-4" /> +91 98765 43210
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 hover:text-emerald-300 transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />

        <nav className="relative mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-emerald-600" />
            <div className="text-xl font-semibold text-slate-900">Chromacraft Paints</div>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-slate-700">
            <li><a className="hover:text-emerald-700" href="#products">Products</a></li>
            <li><a className="hover:text-emerald-700" href="#services">Services</a></li>
            <li><a className="hover:text-emerald-700" href="#projects">Projects</a></li>
            <li><a className="hover:text-emerald-700" href="#colors">Color Tools</a></li>
            <li><a className="hover:text-emerald-700" href="#dealers">Dealers</a></li>
            <li><a className="hover:text-emerald-700" href="#about">About</a></li>
            <li><a className="hover:text-emerald-700" href="#contact">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#quote" className="hidden md:inline-flex items-center gap-2 rounded-full border border-emerald-600 px-4 py-2 text-emerald-700 hover:bg-emerald-50">Get Free Quote</a>
            <a href="#dealers" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
              Partner With Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 md:pt-10 lg:pt-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Premium paints engineered for beautiful, lasting walls
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                From luxury interiors to weatherproof exteriors, our advanced low-odor, low-VOC formulas deliver rich coverage, superior finish, and long-term protection.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700">
                  Get Free Site Visit <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-50">
                  Explore Products
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500"/> Low Odor</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-500"/> UV Protection</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-amber-500"/> Easy Washable</div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  className="h-[420px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1591824438708-ce405f36ba3b?q=80&w=1600&auto=format&fit=crop"
                  alt="Painter rolling fresh color on a wall"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
              <div className="pointer-events-none absolute -top-6 -right-6 h-36 w-36 rounded-full bg-sky-200/50 blur-2xl" />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
