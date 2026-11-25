'use client';

import { motion } from 'framer-motion';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-alternative px-6 py-32 text-ink lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display mb-8">
            Detect risk signals early.<br /><span className="editorial-accent">Act with certainty.</span>
          </h2>

          <p className="text-lg lg:text-xl text-ink/70 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Transform raw data into actionable intelligence. See what others miss, when it matters most. Built for risk leaders who can&apos;t afford to guess.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            href="#contact"
            className="btn-pill btn-primary focus-ring inline-flex items-center gap-2"
          >
            Get a strategic briefing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
