'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { overviewCards } from '@/lib/data';

export default function Overview() {
  return (
    <section id="about" className="py-32 px-6 lg:px-10 bg-bg">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-20">
          <div className="section-label mb-4">About RadarSeq</div>
          <h2 className="font-display">
            A temporal perspective on <span className="editorial-accent">changing behaviour.</span>
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink/60">
            RadarSeq grew from a research question: what do we miss when we reduce a history to a snapshot?
            The project connects temporal modelling, explainable AI and practical decision workflows.
          </p>
        </Reveal>

        <div className="space-y-16">
          {overviewCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8 lg:gap-12"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink to-purple flex items-center justify-center text-bg font-display font-bold text-lg">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display mb-4 text-ink">{c.title}</h3>
                <p className="text-lg text-ink/60 leading-relaxed max-w-2xl">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
