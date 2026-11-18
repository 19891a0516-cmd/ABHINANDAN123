'use client';

import { FormEvent, useState } from 'react';
import { Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const contactEmail = 'info@radarseq.ai';

export default function Contact() {
  const [draftHref, setDraftHref] = useState<string | null>(null);

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const organisation = String(formData.get('organisation') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `RadarSeq enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || 'Not provided'}`,
      '',
      message,
    ].join('\n');

    setDraftHref(`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }

  return (
    <section id="contact" className="bg-bg px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <div className="section-label mb-4">Contact</div>
          <h2 className="mx-auto max-w-3xl font-display text-[32px] font-extrabold tracking-tight md:text-[44px] lg:text-[52px]">
            Tell us what you need to see sooner.
          </h2>
          <p className="mx-auto mt-5 max-w-prose text-lg leading-relaxed text-gray">
            Share the decision you want to improve and the data you can work with. We will help identify a sensible starting point.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full rounded-card p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink/10 text-pink">
                <Mail size={22} />
              </div>
              <h3 className="font-display text-xl font-bold">Start a conversation</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray">
                A useful first discussion starts with a business question, relevant history and who would review the result.
              </p>
              <a href={`mailto:${contactEmail}`} className="mt-6 inline-flex rounded-md font-semibold text-pink underline underline-offset-4 focus-ring">
                {contactEmail}
              </a>
              <ul className="mt-8 space-y-3 text-sm text-gray">
                <li>Fit assessment before model selection</li>
                <li>Data and deployment agreed upfront</li>
                <li>A workflow built around human review</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-3">
            <form className="card rounded-card p-7 md:p-9" onSubmit={prepareEmail}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" id="name" name="name" type="text" />
                <Field label="Work email" id="email" name="email" type="email" />
              </div>
              <div className="mt-5">
                <Field label="Organisation (optional)" id="organisation" name="organisation" type="text" required={false} />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">What would you like to understand?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-2xl border border-border bg-white/70 px-5 py-4 text-[15px] outline-none focus-ring focus:border-pink"
                  placeholder="The business question, relevant history and who would act on the result..."
                />
              </div>
              <p id="contact-privacy" className="mt-5 text-xs leading-relaxed text-gray">
                This form prepares an email draft on your device. It does not submit to a server or send your information automatically.
                Please do not include personal customer records, credentials or confidential datasets.
              </p>
              <button type="submit" className="btn-pill btn-primary mt-6 focus-ring">
                Prepare email draft
              </button>
              {draftHref && (
                <p className="mt-5 text-sm font-semibold text-accent-teal" role="status">
                  Nothing has been sent. <a href={draftHref} className="underline underline-offset-4 focus-ring">Open the email draft</a>
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  type,
  required = true,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-border bg-white/70 px-5 py-3.5 text-[15px] outline-none focus-ring focus:border-pink"
      />
    </div>
  );
}
