import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { cloudinaryUrl } from '@/lib/cloudinary';

export default function ProductsPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Products</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Electric tricycles and bicycle models.</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Choose from our full range of electric models built for cargo, passenger and city commuting.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {products.map((product) => (
          <article key={product.slug} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="relative h-72 w-full">
              <Image
                src={cloudinaryUrl(product.imagePublicId, { width: 1000 })}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{product.category}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">{product.name}</h2>
                </div>
                <span className="rounded-full bg-brand-red/10 px-3 py-1 text-sm font-semibold text-brand-red">{product.type}</span>
              </div>
              <p className="text-slate-600">{product.description}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">{spec.label}</p>
                    <p>{spec.value}</p>
                  </div>
                ))}
              </div>
              <Link href="/order" className="inline-flex items-center rounded-full bg-brand-cyan px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600">
                Enquire about {product.name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
