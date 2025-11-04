import { ShieldCheck, Leaf, Sun, Sparkles, Building, Home, Factory } from "lucide-react";

const advantages = [
  { icon: ShieldCheck, title: "Waterproof Defense", desc: "Advanced acrylic technology resists dampness and peeling." },
  { icon: Leaf, title: "Low VOC & Low Odor", desc: "Cleaner indoor air quality with eco-conscious formulations." },
  { icon: Sparkles, title: "Easy-Washable", desc: "Tough film resists stains and allows effortless cleaning." },
  { icon: Sun, title: "UV Guard", desc: "Superior color retention and fade resistance under harsh sun." },
];

const projects = [
  {
    tag: "Home",
    title: "Premium 3BHK Repaint, Pune",
    story: "The homeowner wanted a fresh, low-odor makeover. We used Luxury Interior Emulsion with satin finish for rich depth and an easy-clean surface.",
    image: "https://images.unsplash.com/photo-1615452561066-bc5acb38482b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwzQkhLJTIwUmVwYWludCUyQyUyMFB1bmV8ZW58MHwwfHx8MTc2MjI1OTAwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    tag: "Commercial",
    title: "Co-working Space Facade, Bengaluru",
    story: "High exposure to sun and rain demanded robust protection. Our WeatherGuard Exterior delivered long-lasting sheen and UV stability.",
    image: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?q=80&w=1600&auto=format&fit=crop",
  },
  {
    tag: "Industrial",
    title: "Warehouse Waterproofing, Surat",
    story: "Moisture ingress was damaging interiors. We applied primer + elastomeric coat to seal leaks and strengthen surfaces.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section className="bg-slate-50" id="projects">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Why professionals choose Chromacraft</h2>
            <p className="mt-3 text-slate-600">Engineered for Indian conditions, trusted by homeowners, contractors and architects for consistency and performance.</p>
            <div className="mt-8 grid gap-5">
              {advantages.map((a) => (
                <div key={a.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <a.icon className="h-6 w-6 text-emerald-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900">{a.title}</h3>
                    <p className="text-sm text-slate-600">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2"><Home className="h-5 w-5 text-emerald-600"/> Home</div>
              <div className="flex items-center gap-2"><Building className="h-5 w-5 text-emerald-600"/> Commercial</div>
              <div className="flex items-center gap-2"><Factory className="h-5 w-5 text-emerald-600"/> Industrial</div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap gap-3 text-sm">
              {['All','Home','Commercial','Industrial'].map(f => (
                <button key={f} className={`rounded-full border px-3 py-1 ${f==='All' ? 'bg-emerald-600 text-white border-emerald-600' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}>{f}</button>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="h-48">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">{p.tag}</span>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{p.story}</p>
                  </div>
                </article>
              ))}
            </div>
            {/* Trust badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {title:'ISO 9001:2015', desc:'Quality Management'},
                {title:'BIS Certified', desc:'Bureau of Indian Standards'},
                {title:'Low VOC', desc:'Meets environmental norms'},
              ].map(b => (
                <div key={b.title} className="rounded-xl border border-slate-200 bg-white p-4 text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-emerald-600" />
                  <div className="mt-2 font-semibold text-slate-900">{b.title}</div>
                  <div className="text-xs text-slate-600">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
