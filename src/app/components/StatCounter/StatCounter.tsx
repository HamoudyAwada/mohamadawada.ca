import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface StatCounterProps {
  value: string;
  className?: string;
}

function parse(raw: string) {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: raw, decimals: 0 };
  const decimals = (match[1].split('.')[1] || '').length;
  return { num: parseFloat(match[1]), suffix: match[2], decimals };
}

export default function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { num, suffix, decimals } = parse(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { val: 0 };
    let tween: gsap.core.Tween | null = null;
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          observer.disconnect();
          tween = gsap.to(obj, {
            val: num,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = obj.val.toFixed(decimals) + suffix; },
            onComplete: () => { el.textContent = value; },
          });
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => { observer.disconnect(); tween?.kill(); };
  }, [value, num, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {(0).toFixed(decimals)}{suffix}
    </span>
  );
}
