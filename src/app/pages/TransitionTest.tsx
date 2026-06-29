import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navigation from '../components/Navigation';
import styles from './TransitionTest.module.css';

gsap.registerPlugin(useGSAP);

type TransitionStyle = 'current' | 'A' | 'B' | 'C';

const labels: Record<TransitionStyle, string> = {
  current: 'Current',
  A: 'Style A',
  B: 'Style B',
  C: 'Style C',
};

const descriptions: Record<TransitionStyle, string> = {
  current: 'Opacity + slide up — the current implementation',
  A: 'Green bar sweep — accent panel wipes left → right, page reveals beneath',
  B: 'Clip-path wipe — content unmasked left → right, no overlay',
  C: 'Blur-in — page snaps from soft focus to sharp',
};

export default function TransitionTest() {
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<TransitionStyle>('current');
  const [running, setRunning] = useState(false);

  const runTransition = (style: TransitionStyle) => {
    if (running) return;
    setActive(style);
    setRunning(true);

    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!content || !overlay) { setRunning(false); return; }

    gsap.killTweensOf([content, overlay]);

    if (style === 'current') {
      gsap.fromTo(
        content,
        { opacity: 0, y: 14 },
        {
          opacity: 1, y: 0, duration: 0.38, ease: 'power2.out',
          clearProps: 'all', onComplete: () => setRunning(false),
        }
      );

    } else if (style === 'A') {
      gsap.set(content, { opacity: 0 });
      gsap.set(overlay, { scaleX: 0, transformOrigin: 'left center', display: 'block' });
      gsap.timeline({ onComplete: () => setRunning(false) })
        .to(overlay, { scaleX: 1, duration: 0.22, ease: 'power2.inOut' })
        .set(content, { opacity: 1 })
        .set(overlay, { transformOrigin: 'right center' })
        .to(overlay, { scaleX: 0, duration: 0.22, ease: 'power2.inOut' })
        .set(overlay, { display: 'none', clearProps: 'all' });

    } else if (style === 'B') {
      gsap.fromTo(
        content,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)', duration: 0.48, ease: 'power3.inOut',
          clearProps: 'clipPath', onComplete: () => setRunning(false),
        }
      );

    } else if (style === 'C') {
      gsap.fromTo(
        content,
        { filter: 'blur(14px)', opacity: 0.3 },
        {
          filter: 'blur(0px)', opacity: 1, duration: 0.52, ease: 'power2.out',
          clearProps: 'all', onComplete: () => setRunning(false),
        }
      );
    }
  };

  return (
    <div className={styles.page}>
      <Navigation />

      {/* Full-viewport overlay — used by style A only */}
      <div ref={overlayRef} className={styles.overlay} />

      {/* Animatable page content */}
      <div ref={contentRef} className={styles.content}>
        <main className={styles.main}>
          <span className={styles.eyebrow}>Preview Page</span>
          <h1 className={styles.heading}>Transition Styles</h1>
          <p className={styles.body}>
            Use the controls below to replay each style. Each press simulates
            what it looks like when the browser navigates to a new page.
          </p>
          <div className={styles.mockCards}>
            <div className={styles.mockCard} />
            <div className={styles.mockCard} />
            <div className={styles.mockCard} />
          </div>
          <div className={styles.mockTextBlock}>
            <div className={styles.mockLine} style={{ width: '88%' }} />
            <div className={styles.mockLine} style={{ width: '74%' }} />
            <div className={styles.mockLine} style={{ width: '93%' }} />
            <div className={styles.mockLine} style={{ width: '65%' }} />
          </div>
        </main>
      </div>

      {/* Fixed control bar */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.controlsBtns}>
            {(['current', 'A', 'B', 'C'] as TransitionStyle[]).map((s) => (
              <button
                key={s}
                className={`${styles.controlBtn} ${active === s ? styles.controlBtnActive : ''}`}
                onClick={() => runTransition(s)}
                disabled={running}
              >
                {labels[s]}
              </button>
            ))}
          </div>
          <p className={styles.desc}>{descriptions[active]}</p>
        </div>
      </div>
    </div>
  );
}
