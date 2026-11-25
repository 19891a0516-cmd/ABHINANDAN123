type LogoProps = {
  compact?: boolean;
  variant?: 'full' | 'icon-only' | 'single-colour';
};

export default function Logo({ compact = false, variant = 'full' }: LogoProps) {
  const isSingleColour = variant === 'single-colour';
  const outerArc = isSingleColour ? 'currentColor' : 'rgb(var(--color-accent))';
  const innerArc = isSingleColour ? 'currentColor' : 'rgb(var(--color-ink))';
  const iconSize = compact ? 'h-8 w-8' : 'h-9 w-9';
  const wordmarkSize = compact ? 'text-xl' : 'text-2xl';

  return (
    <span role="img" aria-label="RadarSeq Logo" className="inline-flex items-center gap-2.5 text-ink">
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
        className={`shrink-0 object-contain ${iconSize}`}
      >
        <path d="M12 5a47 47 0 0 1 47 47" fill="none" stroke={outerArc} strokeLinecap="round" strokeWidth="4.5" />
        <path d="M12 18a34 34 0 0 1 34 34" fill="none" stroke={outerArc} strokeLinecap="round" strokeWidth="4.5" />
        <path d="M12 31a21 21 0 0 1 21 21" fill="none" stroke={innerArc} strokeLinecap="round" strokeWidth="4.5" />
        <circle cx="54" cy="58" r="4.5" fill={innerArc} />
      </svg>
      {variant !== 'icon-only' && (
        <span className={`font-display ${wordmarkSize} font-extrabold leading-none tracking-[0.01em]`}>
          <span>Radar</span>
          <span className={isSingleColour ? 'text-current' : 'text-accent-strong'}>Seq</span>
        </span>
      )}
    </span>
  );
}
