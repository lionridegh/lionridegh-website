import EnquiryForm from '@/components/EnquiryForm';

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Send us an enquiry, or reach out over WhatsApp.</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Our team is ready to answer product questions, support requests, and custom order details.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_0.55fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft">
          <EnquiryForm endpoint="/api/enquiries" submitLabel="Send enquiry" />
        </div>
        <div className="space-y-6 rounded-[2rem] bg-brand-cyan p-8 text-white shadow-soft">
          <div>
            <h2 className="text-3xl font-semibold">WhatsApp</h2>
            <p className="mt-4 text-slate-100">Message us directly for fast responses and order follow-up.</p>
          </div>
          <a
            href="https://wa.me/233207032222"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-center font-semibold text-brand-cyan transition hover:bg-slate-100"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
          <div className="rounded-3xl bg-white/10 p-6 text-sm leading-7 text-slate-100">
            <p><strong>Phone:</strong> +233 20 703 2222</p>
            <p><strong>Email:</strong> lionridegh@gmail.com</p>
            <p><strong>Address:</strong> 202 Apple Ave., Community 10, Tema, Accra, Ghana</p>
          </div>
        </div>
      </div>
    </section>
  );
}
