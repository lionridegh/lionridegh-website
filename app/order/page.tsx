import EnquiryForm from '@/components/EnquiryForm';

export default function OrderPage() {
  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-cyan">Order</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Place your order enquiry</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Complete the form below and our team will follow up on availability, pricing, and delivery details.</p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-soft">
        <EnquiryForm endpoint="/api/orders" submitLabel="Submit order enquiry" includeSubject />
      </div>
    </section>
  );
}
