'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 lg:px-10 bg-bg">
      <div className="max-w-container mx-auto">
        <Reveal className="text-center mb-16">
          <div className="section-label mb-4">Get in touch</div>
          <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[52px] tracking-tight max-w-3xl mx-auto">
            Let&apos;s talk about <span className="italic-pink">your portfolio</span>.
          </h2>
          <div className="mt-7 relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-pink/10">
            <Mail size={26} className="text-pink" strokeWidth={1.6} />
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent-teal flex items-center justify-center">
              <CheckCircle2 size={12} className="text-white" strokeWidth={2.4} />
            </span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="card p-9 h-full flex flex-col gap-8 rounded-card">
              <InfoRow icon={Mail} label="Email" value="hello@radarseq.ai" href="mailto:hello@radarseq.ai" />
              <InfoRow icon={Phone} label="Phone" value="+44 20 7946 0958" href="tel:+442079460958" />
              <InfoRow icon={MapPin} label="Office" value="Centre for FinTech, University of East London" />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form
              className="card p-9 rounded-card"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <Field label="Your name" id="name" type="text" />
                <Field label="Work email" id="email" type="email" />
              </div>
              <div className="mb-7">
                <label htmlFor="use-case" className="block text-sm font-semibold mb-2">
                  Tell us about your use case
                </label>
                <textarea
                  id="use-case"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-border bg-white/70 px-5 py-4 text-[15px] focus-ring focus:border-pink outline-none resize-none"
                  placeholder="What kind of risk are you trying to predict?"
                />
              </div>
              <button type="submit" className="btn-pill btn-primary w-full sm:w-auto focus-ring">
                Send message
              </button>
              {sent && (
                <p className="mt-4 text-sm font-semibold text-accent-teal">
                  Thanks — we&apos;ll be in touch shortly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a href={href} className="hover:text-pink transition-colors focus-ring rounded-md">
      {value}
    </a>
  ) : (
    value
  );
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-pink/10 flex items-center justify-center text-pink shrink-0">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div>
        <div className="section-label !text-xs mb-1.5">{label}</div>
        <div className="font-display font-semibold text-lg">{content}</div>
      </div>
    </div>
  );
}

function Field({ label, id, type }: { label: string; id: string; type: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        className="w-full rounded-2xl border border-border bg-white/70 px-5 py-3.5 text-[15px] focus-ring focus:border-pink outline-none"
      />
    </div>
  );
}
