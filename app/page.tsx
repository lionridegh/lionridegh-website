import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid gap-10 rounded-[2rem] bg-white p-8 shadow-soft lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-brand-cyan/10 px-4 py-2 text-sm font-semibold text-brand-cyan">
            Electric mobility built in Tema
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Lion Ride Gh: premium electric bicycles and tricycles for modern Ghana.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Discover dependable electric transport with rugged design, local support, and affordable enquiry-based ordering.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/20 transition hover:bg-cyan-600">
              View products
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-cyan hover:text-brand-cyan">
              Contact us
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-5 text-center">
              <p className="text-4xl font-semibold text-brand-cyan">5+</p>
              <p className="mt-2 text-sm text-slate-600">Years of local mobility service</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-center">
              <p className="text-4xl font-semibold text-brand-red">6</p>
              <p className="mt-2 text-sm text-slate-600">Models built for Ghana roads</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5 text-center">
              <p className="text-4xl font-semibold text-slate-900">+233</p>
              <p className="mt-2 text-sm text-slate-600">Local support from Tema</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-6">
          <div className="absolute inset-0 opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle at top right, rgba(0,180,200,0.35), transparent 45%)' }} />
          <div className="relative z-10 rounded-[1.8rem] overflow-hidden border border-white/10 bg-slate-900 p-4 sm:p-6">
            <Image
              src={cloudinaryUrl('hero_bike.jpg.png', { width: 1200 })}
              alt="Lion Ride Gh electric tricycle"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-red">Featured models</p>
          <h2 className="mt-5 text-3xl font-semibold text-slate-900">Built for power, balance and comfort.</h2>
          <p className="mt-4 text-slate-600">Our flagship electric tricycles and bicycle units are designed for cargo, passenger hauling, and everyday city riding.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative h-60 w-full">
                <Image
                  src={cloudinaryUrl(product.imagePublicId, { width: 800 })}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                  <span className="rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan">
                    {product.type}
                  </span>
                </div>
                <p className="text-slate-600">{product.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.6fr_1fr]">
        <div className="rounded-[2rem] bg-brand-cyan text-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.28em]">Why choose Lion Ride Gh</p>
          <h2 className="mt-5 text-3xl font-semibold">Local engineering with trusted service.</h2>
          <ul className="mt-6 space-y-4 text-slate-100">
            <li className="rounded-3xl bg-white/10 p-4">Designed for Ghana roads with strong batteries and cargo capacity.</li>
            <li className="rounded-3xl bg-white/10 p-4">Fast enquiry response, service support, and parts availability.</li>
            <li className="rounded-3xl bg-white/10 p-4">Reliable electric solutions for business, delivery and daily travel.</li>
          </ul>
        </div>
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-900">Start your enquiry</h2>
          <p className="mt-4 text-slate-600">Contact our team for details, delivery timelines, and custom builds.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">+233 20 703 2222</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">lionridegh@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
