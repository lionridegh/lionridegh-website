import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { cloudinaryUrl } from '@/lib/cloudinary';

function ModelsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 002 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function FuelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M3 22h12" />
      <path d="M4 22V9a2 2 0 012-2h3l4-4h3v4h-1" />
      <path d="M15 9a2 2 0 012 2v3a2 2 0 002 2h0a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L19 6" />
      <path d="M7 12h.01" />
      <path d="M7 15h.01" />
      <path d="M7 18h.01" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CapacityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M20 7.5l-8 12.5L4 7.5" />
      <path d="M2 7.5h20" />
      <path d="M6 7.5V5a2 2 0 012-2h8a2 2 0 012 2v2.5" />
      <path d="M12 11v5" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="11" x2="6" y2="13" />
      <line x1="10" y1="11" x2="10" y2="13" />
      <line x1="14" y1="11" x2="14" y2="13" />
    </svg>
  );
}

function RangeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
      <circle cx="12" cy="12" r="9" />
      <path d="M17.5 17.5L20 20" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function LoadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M4 19l4-14M12 19V5M20 19l-4-14" />
      <path d="M2 19h20" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function WhatsAppLargeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const stats = [
  {
    value: '5+',
    label: 'Models',
    icon: ModelsIcon,
  },
  {
    value: 'Zero',
    label: 'Fuel Cost',
    icon: FuelIcon,
  },
  {
    value: 'Greater Accra',
    label: 'Delivery',
    icon: DeliveryIcon,
  },
  {
    value: '500KG',
    label: 'Maximum Capacity',
    icon: CapacityIcon,
    highlight: 'red',
  },
];

const benefits = [
  {
    title: 'Save on Fuel',
    description: 'Ditch expensive petrol. Our electric vehicles run on clean battery power, cutting your daily transport costs dramatically.',
    icon: SaveIcon,
    accent: 'from-brand-red/25 to-brand-red/5',
    iconColor: 'red',
  },
  {
    title: 'Built for Ghana Roads',
    description: 'Rugged frames, reinforced suspension, and high-torque motors engineered specifically for Accra and Tema road conditions.',
    icon: RoadIcon,
    accent: 'from-orange-500/20 to-orange-500/5',
  },
  {
    title: 'Clean Energy',
    description: 'Zero emissions, zero noise pollution. Join Ghana\'s green mobility revolution and reduce your carbon footprint today.',
    icon: LeafIcon,
    accent: 'from-green-500/20 to-green-500/5',
  },
  {
    title: 'Business Ready',
    description: 'Perfect for cargo delivery, passenger transport, and commercial fleets. Local service and parts support included.',
    icon: BriefcaseIcon,
    accent: 'from-brand-cyan/20 to-brand-cyan/5',
  },
];

function getSpecIcon(label: string) {
  const l = label.toLowerCase();
  if (l.includes('battery')) return BatteryIcon;
  if (l.includes('range')) return RangeIcon;
  if (l.includes('speed') || l.includes('motor')) return SpeedIcon;
  if (l.includes('load') || l.includes('capacity') || l.includes('cargo') || l.includes('seating') || l.includes('space') || l.includes('weight') || l.includes('comfort') || l.includes('frame') || l.includes('suspension') || l.includes('brakes')) return LoadIcon;
  return LoadIcon;
}

export default function HomePage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute inset-0 bg-teal-corner-glows" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,191,179,0.65) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-12 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,191,179,0.55) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-20 right-1/4 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-32 left-1/4 h-72 w-72 rounded-full opacity-18 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.55) 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-20 sm:px-6 lg:px-8 lg:pb-36 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex flex-wrap animate-fade-in items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-widest text-slate-300">
                  Premium Electric Mobility
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-brand-red/15 px-4 py-2 backdrop-blur-sm shadow-glowRed">
                <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-brand-red">
                  Tema Showroom · Open Now
                </span>
              </div>
            </div>

            <h1 className="animate-slide-up text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ghana&apos;s{' '}
              <span className="bg-gradient-to-r from-brand-cyan via-brand-cyanLight to-brand-cyanLighter bg-clip-text text-transparent">
                Electric Revolution
              </span>{' '}
              Starts Here
            </h1>

            <p className="mx-auto mt-8 max-w-2xl animate-slide-up text-lg leading-8 text-slate-300 sm:text-xl opacity-0" style={{ animationDelay: '0.1s' }}>
              Premium electric bicycles and tricycles engineered for Ghana&apos;s roads. Dependable, affordable, and built for the future of Accra and Tema mobility.
            </p>

            <div className="mt-12 flex animate-slide-up flex-col items-center justify-center gap-4 sm:flex-row opacity-0" style={{ animationDelay: '0.2s' }}>
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-cyan px-8 py-4 text-base font-bold text-black shadow-glow transition-all hover:bg-brand-cyanLight hover:shadow-xl hover:shadow-brand-cyan/30 hover:-translate-y-0.5 sm:w-auto"
              >
                View Our Products
                <ArrowRightIcon />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-bold text-white shadow-glowRed ring-2 ring-brand-red/40 transition-all hover:bg-red-600 hover:shadow-glowRedLg hover:-translate-y-0.5 sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Visit Showroom / Book Test Ride
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-24 animate-fade-in max-w-5xl opacity-0" style={{ animationDelay: '0.35s' }}>
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-brand-cyan/20 via-brand-cyanLight/10 to-brand-red/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-navyLight to-black shadow-2xl">
              <div className="aspect-[16/9] w-full">
                <Image
                  src={cloudinaryUrl('hero_bike.jpg.png', { width: 1600 })}
                  alt="Lion Ride Gh electric tricycle"
                  fill
                  className="object-cover opacity-95"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 isolate">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/8 via-brand-cyan/5 to-brand-red/10" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-cyan to-brand-red" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-red via-brand-cyan to-brand-red" />
            <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                const isRed = (stat as any).highlight === 'red';
                return (
                  <div key={stat.label} className="group relative flex flex-col items-center text-center">
                    <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110 ${
                      isRed
                        ? 'from-brand-red/25 to-brand-red/8 text-brand-red ring-2 ring-brand-red/40 shadow-glowRed'
                        : 'from-brand-red/12 to-brand-red/3 text-brand-red group-hover:from-brand-red/20 group-hover:ring-2 group-hover:ring-brand-red/20 group-hover:shadow-glowRed'
                    }`}>
                      <Icon />
                    </div>
                    <p className={`text-3xl font-black tracking-tight sm:text-4xl bg-gradient-to-br from-brand-red via-red-600 to-red-500 bg-clip-text text-transparent ${
                      isRed ? 'drop-shadow-[0_0_25px_rgba(255,0,0,0.35)] text-brand-red' : ''
                    }`}>
                      {stat.value}
                    </p>
                    <p className={`mt-2 text-sm font-black uppercase tracking-widest ${
                      isRed ? 'text-brand-red' : 'text-slate-600'
                    }`}>
                      {stat.label}
                    </p>
                    {isRed && (
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-glowRed ring-2 ring-white/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        Industry Leading
                      </div>
                    )}
                    {!isRed && i % 2 === 0 && (
                      <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-red">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                        Verified
                      </div>
                    )}
                    {!isRed && i % 2 === 1 && (
                      <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-brand-red/30 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-red">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                        Ghana Ready
                      </div>
                    )}
                    {i < stats.length - 1 && (
                      <div className="absolute right-0 top-1/2 hidden h-20 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-brand-red/30 to-transparent md:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-red-corner-glows opacity-60" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-red" />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-red">
                In Stock · Tema Showroom
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-red" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-cyan">
              Our Product Lineup
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              Electric Vehicles Built For <span className="bg-gradient-to-br from-brand-red via-red-600 to-red-500 bg-clip-text text-transparent">Purpose</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From heavy-duty cargo tricycles to agile city e-bikes, find the perfect model for your business or personal transport needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => {
              const displaySpecs = product.specs.slice(0, 3);
              const isPremium = product.slug === 'ed3-02p';
              const badgeText =
                product.slug === 'ed3-02p' ? 'New Arrival' :
                product.slug === 'ed3-01m' ? 'Best Seller' :
                product.slug === 'ed3-03' ? 'Heavy Duty' :
                product.slug === 'lion-bmx' ? 'Hot Pick' :
                'Available Now';
              return (
                <article
                  key={product.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-red/50 hover:shadow-2xl hover:shadow-brand-red/15"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-cyan to-brand-red z-20" />
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                    <Image
                      src={cloudinaryUrl(product.imagePublicId, { width: 800 })}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 z-10">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/85 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan backdrop-blur-sm ring-1 ring-brand-red/30">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                        {product.type}
                      </span>
                    </div>
                    {isPremium ? (
                      <div className="absolute right-0 top-0 z-10">
                        <div className="relative h-28 w-28 overflow-hidden">
                          <div className="absolute left-[22px] top-[22px] flex h-[100px] w-[100px] -rotate-45 items-end justify-center bg-gradient-to-br from-brand-red to-red-600 shadow-glowRed ring-2 ring-white/40">
                            <span className="pb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white">
                              {badgeText}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-red to-red-600 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-glowRed ring-2 ring-white/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        {badgeText}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/90 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-sm shadow-glowRed">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        In Stock
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-black/85 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-sm">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                        Tema
                      </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-brand-red transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                      {product.category}
                      <span className="h-1 w-1 rounded-full bg-brand-red" />
                      <span className="text-brand-red">Ready to Ride</span>
                    </p>
                    <p className="mb-6 flex-1 text-sm leading-6 text-slate-600">
                      {product.tagline}
                    </p>

                    <div className="mb-6 space-y-2.5">
                      {displaySpecs.map((spec) => {
                        const SpecIcon = getSpecIcon(spec.label);
                        return (
                          <div key={spec.label} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5 group-hover:border-brand-red/20 group-hover:bg-red-50/40 transition-all">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                              <SpecIcon />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">{spec.label}</p>
                              <p className="truncate text-sm font-semibold text-black">{spec.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <Link
                      href="/products"
                      className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-red to-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-glowRed transition-all hover:from-red-600 hover:to-brand-red hover:shadow-glowRedLg group/btn"
                    >
                      Learn More
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-base font-bold text-brand-cyan transition-all hover:gap-3"
            >
              View All Products
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 sm:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-cyan/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/3 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-brand-cyan" />
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-red">
                Why Choose Lion Ride Gh
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-brand-cyan" />
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">
              More Than Just <span className="bg-gradient-to-br from-brand-red via-red-600 to-red-500 bg-clip-text text-transparent">Vehicles</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We&apos;re building a mobility company for Ghana — with vehicles, service, and support that work for our roads and our people.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isRed = (benefit as any).iconColor === 'red';
              return (
                <div
                  key={benefit.title}
                  className={`group relative overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-10 ${
                    isRed
                      ? 'border-brand-red/30 bg-gradient-to-br from-brand-red/5 via-white to-brand-red/3 hover:border-brand-red/60 hover:shadow-glowRed'
                      : 'border-slate-200 hover:border-brand-red/20 hover:shadow-brand-red/10'
                  }`}
                >
                  {isRed && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red" />
                  )}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 ${
                        isRed
                          ? 'bg-gradient-to-br from-brand-red to-red-600 shadow-glowRed ring-2 ring-brand-red/30 group-hover:ring-brand-red/50'
                          : 'bg-black group-hover:bg-brand-red group-hover:text-white group-hover:shadow-glowRed'
                      }`}>
                        <Icon />
                      </div>
                      {isRed && (
                        <div className="inline-flex items-center gap-1 rounded-full bg-brand-red/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-red ring-1 ring-brand-red/30">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                          Key Benefit
                        </div>
                      )}
                      {!isRed && idx % 2 === 0 && (
                        <div className="inline-flex items-center gap-1 rounded-full border border-brand-red/20 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-red">
                          Premium
                        </div>
                      )}
                      {!isRed && idx % 2 === 1 && (
                        <div className="inline-flex items-center gap-1 rounded-full bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-red">
                          Standard
                        </div>
                      )}
                    </div>
                    <h3 className={`mb-3 text-2xl font-black tracking-tight transition-colors ${
                      isRed ? 'text-brand-red' : 'text-black group-hover:text-brand-red'
                    }`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-base leading-7 ${
                      isRed ? 'text-slate-700' : 'text-slate-600'
                    }`}>
                      {benefit.description}
                    </p>
                    {isRed && (
                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-red">
                        <span>Save up to GH₵ 2,000/year on fuel</span>
                        <ArrowRightIcon />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-teal-corner-glows" />
        <div className="absolute inset-0 bg-red-corner-glows opacity-60" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
        <div
          className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,191,179,0.6) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-60 -right-20 h-[500px] w-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,191,179,0.5) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-20 left-10 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.65) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-20 h-72 w-72 rounded-full opacity-28 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-black/50 via-black/30 to-black/50 backdrop-blur-sm p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-radial-glow-red opacity-70" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-red to-brand-cyan" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-red via-brand-cyan to-brand-red" />
            <div className="absolute left-0 top-1/4 h-24 w-1 bg-gradient-to-b from-transparent via-brand-red to-transparent" />
            <div className="absolute right-0 top-1/4 h-24 w-1 bg-gradient-to-b from-transparent via-brand-red to-transparent" />

            <div className="relative text-center">
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex animate-float items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-5 py-2.5 shadow-glow">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-brand-cyan">
                    Join The Movement
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red/50 bg-brand-red/20 px-5 py-2.5 shadow-glowRed ring-1 ring-brand-red/30">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-sm font-black uppercase tracking-widest text-brand-red">
                    Limited Stock · Tema Showroom
                  </span>
                </div>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-red/15 border border-brand-red/40 px-5 py-2 shadow-glowRed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-red">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-red">
                  Book Test Ride This Week · Get Free Helmet
                </span>
              </div>

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Ready to{' '}
                <span className="bg-gradient-to-r from-brand-cyan via-brand-cyanLight to-brand-cyanLighter bg-clip-text text-transparent">
                  Ride?
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-slate-300">
                Chat with our team on WhatsApp right now. Get pricing, delivery info, and find the perfect electric vehicle for your needs.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://wa.me/233207032222?text=Hello%20Lion%20Ride%20Gh%2C%20I%27m%20interested%20in%20your%20electric%20vehicles"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-10 py-5 text-lg font-black text-white shadow-2xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:shadow-[#25D366]/40 sm:w-auto"
                >
                  <WhatsAppLargeIcon />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-red to-red-600 px-10 py-5 text-lg font-black text-white shadow-glowRedLg ring-2 ring-brand-red/40 transition-all hover:-translate-y-0.5 hover:from-red-600 hover:to-brand-red hover:ring-brand-red/60 sm:w-auto animate-[pulse_3s_ease-in-out_infinite]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  Visit Showroom / Book Test Ride
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center justify-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-2.5 text-slate-200 backdrop-blur-sm shadow-glowRed">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-red animate-pulse" />
                  <span className="font-black text-white">Open Today</span>
                  <span className="text-slate-400 text-sm">· 8AM – 6PM</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 backdrop-blur-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="font-bold text-white">Tema, Community 10</span>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-4 py-2.5 text-slate-300 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-brand-red">
                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span className="font-bold text-white">Free Delivery</span>
                  <span className="text-slate-400 text-sm">· Accra</span>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-brand-red/20 ring-2 ring-brand-red/40 flex items-center justify-center text-[10px] font-black text-brand-red">G</div>
                    <div className="h-8 w-8 rounded-full bg-brand-cyan/20 ring-2 ring-brand-cyan/40 flex items-center justify-center text-[10px] font-black text-brand-cyan">K</div>
                    <div className="h-8 w-8 rounded-full bg-brand-red/20 ring-2 ring-brand-red/40 flex items-center justify-center text-[10px] font-black text-brand-red">A</div>
                  </div>
                  <span className="text-sm text-slate-400"><span className="font-bold text-brand-red">200+</span> Happy Riders in Ghana</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-brand-red drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-bold text-white">5.0 Rating</span>
                </div>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                Fast response · Local support from Tema, Accra
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
