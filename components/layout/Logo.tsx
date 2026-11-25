import Image from 'next/image';

export default function Logo({ compact = false, priority = false }: { compact?: boolean; priority?: boolean }) {
  const iconSize = compact ? 'h-8 w-8' : 'h-9 w-9';
  const wordmarkSize = compact ? 'text-lg' : 'text-[19px]';

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/Radarseq123/radarseq-logo.png"
        alt="RadarSeq Logo"
        width={67}
        height={67}
        priority={priority}
        className={`shrink-0 object-contain ${iconSize}`}
      />
      <span className={`font-display font-semibold tracking-[-0.05em] text-ink ${wordmarkSize}`}>
        RadarSeq
      </span>
    </div>
  );
}
