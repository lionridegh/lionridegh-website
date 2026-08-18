"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';

type EnquiryFormProps = {
  endpoint: string;
  submitLabel: string;
  includeSubject?: boolean;
};

export default function EnquiryForm({ endpoint, submitLabel, includeSubject }: EnquiryFormProps) {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '', subject: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message || 'Unable to submit form.');
      }

      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '', subject: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Form submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Name</span>
          <input
            required
            value={formState.name}
            onChange={handleChange('name')}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-cyan"
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Email</span>
          <input
            required
            type="email"
            value={formState.email}
            onChange={handleChange('email')}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-cyan"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Phone</span>
        <input
          required
          type="tel"
          value={formState.phone}
          onChange={handleChange('phone')}
          className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-cyan"
          placeholder="+233 20 703 2222"
        />
      </label>

      {includeSubject ? (
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Product / Subject</span>
          <input
            value={formState.subject}
            onChange={handleChange('subject')}
            className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-cyan"
            placeholder="ED3-02P enquiry or custom order"
          />
        </label>
      ) : null}

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Message</span>
        <textarea
          required
          value={formState.message}
          onChange={handleChange('message')}
          className="mt-2 h-40 w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand-cyan"
          placeholder="Tell us your needs, preferred model, or delivery location."
        />
      </label>

      {status === 'error' && <p className="text-sm text-brand-cyan">{error}</p>}
      {status === 'success' && <p className="text-sm text-brand-cyan">Message submitted successfully. We will contact you shortly.</p>}

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-brand-cyan px-6 py-3 text-sm font-semibold text-black shadow-glow transition hover:bg-brand-cyanLight hover:shadow-xl hover:shadow-brand-cyan/30"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
