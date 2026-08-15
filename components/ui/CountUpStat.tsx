'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

/**
 * Renders a stat value with an animated count-up when it contains a plain
 * leading number. Falls back to a static label for ranges/currency strings
 * like "1–3%" or "£50k–£250k" where a single-number count-up would misrepresent
 * the figure — those are shown as-is, matching the source data exactly.
 */
export default function CountUpStat({ value, className = '' }: { value: string; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const match = value.match(/^(-?\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return (
      <div ref={ref} className={className}>
        {value}
      </div>
    );
  }

  const [, numStr, suffix] = match;
  const num = parseFloat(numStr);
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp end={num} duration={1.6} decimals={decimals} suffix={suffix} />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
}
