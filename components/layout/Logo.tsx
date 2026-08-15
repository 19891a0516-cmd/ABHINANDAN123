export default function Logo({ size = 36, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`logoGrad-${size}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B4BFF" />
            <stop offset="1" stopColor="#FF4F87" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="36" height="36" rx="12" fill={`url(#logoGrad-${size})`} />
        <circle cx="20" cy="20" r="11" stroke="rgba(255,255,255,0.9)" strokeWidth="1.4" />
        <circle cx="20" cy="20" r="7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" />
        <path d="M20 7V13M20 27V33M7 20H13M27 20H33M11.3 11.3L15 15M25 25L28.7 28.7M28.7 11.3L25 15M15 25L11.3 28.7" stroke="rgba(255,255,255,0.75)" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.2" fill="white" />
      </svg>
      <span className={`font-display font-extrabold text-[19px] tracking-[-0.06em] ${dark ? 'text-white' : 'text-ink'}`}>
        RadarSeq
      </span>
    </div>
  );
}
