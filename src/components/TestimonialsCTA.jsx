import { Star, Users, Phone, Building } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Rao",
    city: "Mumbai",
    text: "Great coverage and very low smell. Our living room looks premium and the color stayed exactly as the shade card.",
  },
  {
    name: "Rahul Verma",
    city: "Delhi",
    text: "The team suggested the right exterior system for our villa. Zero peeling through monsoon—impressed!",
  },
  {
    name: "Studio Arcline",
    city: "Bengaluru",
    text: "Reliable finish and consistent batches. Our clients love the satin sheen for high-traffic spaces.",
  },
];

export default function TestimonialsCTA() {
  return (
    <section className="bg-white" id="dealers">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">What our customers say</h2>
            <p className="mt-2 text-slate-600">Trusted by homeowners, contractors and architects across India.</p>
            <div className="mt-6 grid gap-4">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-2 text-slate-700">“{t.text}”</p>
                  <div className="mt-2 text-sm text-slate-500">{t.name} • {t.city}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-8 text-white">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-2xl font-semibold">Partner with Chromacraft</h3>
            <p className="mt-2 text-emerald-50">Contractors and dealers get priority supply, technical training and marketing support.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-4">
                <Users className="h-5 w-5" />
                <div className="mt-1 font-medium">For Contractors</div>
                <p className="text-sm text-emerald-50">Bulk pricing, site trainings and shade consultancy.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <Building className="h-5 w-5" />
                <div className="mt-1 font-medium">For Dealers</div>
                <p className="text-sm text-emerald-50">High margins, display support and doorstep delivery.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-emerald-700 hover:bg-emerald-50">
                <Phone className="h-4 w-4"/> Talk to Sales
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/70 px-5 py-2 hover:bg-white/10">
                Dealer Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
