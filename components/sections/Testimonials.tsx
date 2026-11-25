import Reveal from '@/components/ui/Reveal';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg px-6 py-24 lg:px-10">
      <Reveal className="mx-auto max-w-prose text-center">
        <div className="section-label mb-4">Testimonials</div>
        <h2 className="font-display">No customer testimonials are included.</h2>
        <p className="mt-4 leading-relaxed text-gray">
          Published customer statements require approved, attributable source material. None was available in the
          workspace or the official site pages reviewed.
        </p>
      </Reveal>
    </section>
  );
}
