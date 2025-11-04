import Hero from "./components/Hero";
import ProductCategories from "./components/ProductCategories";
import Showcase from "./components/Showcase";
import TestimonialsCTA from "./components/TestimonialsCTA";
import { Mail, MapPin, Phone } from "lucide-react";

function App() {
  return (
    <div className="font-sans text-slate-800">
      <Hero />
      <main>
        <ProductCategories />
        <Showcase />
        <section id="colors" className="bg-gradient-to-br from-sky-50 to-emerald-50">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Color Tools</h2>
                <p className="mt-3 text-slate-600">Browse our curated shade cards and estimate paint requirement for your space using our coverage calculator.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href="#" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                    <div className="text-lg font-semibold">Shade Card Viewer</div>
                    <p className="text-sm text-slate-600">Filter by family, tone and finish.</p>
                  </a>
                  <a href="#" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                    <div className="text-lg font-semibold">Coverage Calculator</div>
                    <p className="text-sm text-slate-600">Input wall area & coats to get liters.</p>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-6 gap-0">
                  {[
                    "#FEE2E2","#FDE68A","#BBF7D0","#BFDBFE","#E9D5FF","#FBCFE8",
                    "#FCA5A5","#FCD34D","#86EFAC","#93C5FD","#D8B4FE","#F9A8D4",
                    "#F87171","#F59E0B","#22C55E","#3B82F6","#8B5CF6","#EC4899",
                    "#EF4444","#D97706","#16A34A","#2563EB","#7C3AED","#DB2777",
                  ].map((hex, i) => (
                    <div key={hex + i} title={hex} className="h-16" style={{ backgroundColor: hex }} />
                  ))}
                </div>
                <div className="p-4 text-center text-sm text-slate-600">A peek at our shade universe. Full interactive viewer available on request.</div>
              </div>
            </div>
          </div>
        </section>
        <TestimonialsCTA />

        {/* Services highlight */}
        <section id="services" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">End‑to‑End Painting Services</h2>
              <p className="mt-2 text-slate-600">Consultation → Color Selection → Painting → Clean Up → Warranty</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {["Residential Painting","Commercial Painting","Waterproofing"].map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-lg font-semibold text-slate-900">{s}</div>
                  <p className="mt-2 text-sm text-slate-600">Professional teams, surface prep and precise application for a lasting finish.</p>
                  <a href="#quote" className="mt-4 inline-block text-emerald-700 hover:text-emerald-800">Get a free site visit →</a>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-emerald-600 p-6 text-center text-white">
              Free color consultation on booked projects.
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Contact & Support</h2>
                <p className="mt-2 text-slate-600">Talk to our paint experts for product selection, shade guidance and quotations.</p>
                <div className="mt-6 grid gap-4">
                  <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-slate-800"><Phone className="h-5 w-5 text-emerald-600"/> +91 98765 43210</a>
                  <a href="mailto:sales@chromacraftpaints.com" className="inline-flex items-center gap-2 text-slate-800"><Mail className="h-5 w-5 text-emerald-600"/> sales@chromacraftpaints.com</a>
                  <div className="inline-flex items-center gap-2 text-slate-800"><MapPin className="h-5 w-5 text-emerald-600"/> Mumbai • Pune • Bengaluru • Delhi</div>
                </div>
                <div className="mt-8 overflow-hidden rounded-xl">
                  <iframe title="map" className="h-64 w-full" src="https://www.google.com/maps?q=Mumbai&output=embed" loading="lazy"></iframe>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200" id="quote">
                <div className="text-xl font-semibold text-slate-900">Request a Free Quote</div>
                <p className="mt-1 text-sm text-slate-600">Get a quick estimate for your project.</p>
                <form className="mt-5 grid gap-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Full Name" />
                    <input className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Phone Number" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-600 focus:ring-2 focus:ring-emerald-600">
                      <option>City</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bengaluru</option>
                      <option>Pune</option>
                    </select>
                    <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-600 focus:ring-2 focus:ring-emerald-600">
                      <option>Service Type</option>
                      <option>Residential Painting</option>
                      <option>Commercial Painting</option>
                      <option>Waterproofing</option>
                      <option>Repainting</option>
                    </select>
                  </div>
                  <textarea className="min-h-[100px] w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Project details"></textarea>
                  <button type="button" className="inline-flex justify-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-xl font-semibold">Chromacraft Paints</div>
            <p className="mt-2 text-sm text-slate-400">Premium interior & exterior paints designed for performance and sustainability.</p>
          </div>
          <div>
            <div className="font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#dealers" className="hover:text-white">Dealers</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#colors" className="hover:text-white">Color Tools</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Reach Us</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> sales@chromacraftpaints.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Chromacraft Paints • GST: 27AAACX0000A1Z1
        </div>
      </footer>
    </div>
  );
}

export default App;
