export default function AboutPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">About Us</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Lion Ride Gh empowers electric mobility in Tema.</h1>
        <p className="mt-3 max-w-3xl text-slate-600">We are a Ghanaian company committed to building rugged, dependable electric bicycles and tricycles for local riders and businesses.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-900">Our story</h2>
          <p className="text-slate-600">Lion Ride Gh began with a simple ambition: to make electric transport accessible, reliable, and purpose-built for Ghana. From our workshop in Tema, we assemble and support models that can handle cargo, passengers, and daily city riding.</p>
          <p className="text-slate-600">We focus on local service, fast response to enquiries, and practical engineering for everyday use. Every vehicle is designed to meet the needs of people who want strong range, sturdy frames, and easy maintenance.</p>
          <p className="text-slate-600">Our team blends mobility design, electrical systems, and customer support to deliver products that work for schools, delivery businesses, small shops, and family transport.</p>
        </div>

        <div className="rounded-[2rem] bg-brand-cyan text-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold">Location</h2>
          <p className="mt-4 text-slate-100">202 Apple Ave., Community 10, Tema, Accra, Ghana</p>
          <div className="mt-8 space-y-4 rounded-3xl bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-200">Contact</p>
            <p className="text-lg font-semibold">+233 20 703 2222</p>
            <p className="text-lg font-semibold">lionridegh@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
