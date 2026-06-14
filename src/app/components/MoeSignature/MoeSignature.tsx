import { useRef, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./MoeSignature.module.css";

gsap.registerPlugin(useGSAP);

interface MoeSignatureProps {
  className?: string;
}

const SESSION_KEY = "moe-signature-animated";

// Soft glow stroke (blurred), stroke-width 16
const GLOW_PATH =
  "M1535.69 278.748C1657.26 146.908 1669.88 110.128 1657.74 107.81C1656.19 107.515 1654.69 107.884 1653.25 108.518C1651.31 109.37 1650.02 110.526 1648.46 111.957C1565.46 188.184 713.602 484.797 84.052 114.998M1535.69 278.748C1523.02 292.482 1509.18 307.249 1494.05 323.115C1507.48 307.888 1521.43 293.052 1535.69 278.748ZM1535.69 278.748C1706.89 106.982 1921.82 11.9884 1790.09 240.051M2111.69 231.534C2009.46 310.336 1962.6 325.245 1934.92 308.206C1912.77 294.576 1931.37 264.191 1943.44 250.702C1961.89 231.534 2000.51 186.809 2007.33 161.251C2042.31 30.0779 1841.21 167.641 1790.09 240.051C1728.35 312.438 1726.2 314.592 1724.07 316.723M2111.69 231.534C2126.6 191.068 2188.36 110.136 2286.33 93.0981C2323.1 89.2948 2374.37 106.198 2369.39 148.473C2365.13 184.679 2277.81 283.149 2211.79 310.336C2175.58 325.245 2092.52 325.245 2111.69 231.534ZM2364.55 122.894C2336.86 103.727 2286.33 156.992 2318.28 229.404C2328.93 240.055 2350.22 261.353 2392.82 259.223C2435.5 257.089 2466.65 233.664 2475.88 225.145M2475.88 225.145C2479.98 209.422 2492.2 190.408 2508.95 171.625M2475.88 225.145C2470.27 246.66 2458.84 280.519 2501.44 312.466C2530.93 334.587 2626.94 318.181 2708.77 270.872C2760.57 240.929 2805.32 199.135 2863.88 186.898C3174.35 122.023 4099.17 172.039 4089.55 108.998M2475.88 153.998C2480.45 156.565 2502.89 168.751 2508.95 171.625M2508.95 171.625C2548.14 190.21 2614.77 211.725 2659.04 191.066C2722.94 161.25 2718.68 131.433 2714.42 122.913C2710.16 114.394 2703.77 82.4475 2642.01 88.8369C2600.07 93.1755 2544.38 131.885 2508.95 171.625Z";

// Sharp signature stroke, stroke-width 12
const LINE_PATH =
  "M1535.69 278.748C1657.26 146.908 1669.88 110.128 1657.74 107.81C1655.83 107.445 1653.99 108.093 1652.24 109.002C1651.02 109.64 1650.17 110.282 1649.1 111.152C1565.25 179.099 724.589 496.82 78.2288 110.028M1535.69 278.748C1523.02 292.482 1509.18 307.249 1494.05 323.115C1507.48 307.888 1521.43 293.052 1535.69 278.748ZM1535.69 278.748C1706.89 106.982 1921.82 11.9884 1790.09 240.051M2111.69 231.534C2009.46 310.336 1962.6 325.245 1934.92 308.206C1912.77 294.576 1931.37 264.191 1943.44 250.702C1961.89 231.534 2000.51 186.809 2007.33 161.251C2042.31 30.0779 1841.21 167.641 1790.09 240.051C1728.35 312.438 1726.2 314.592 1724.07 316.723M2111.69 231.534C2126.6 191.068 2188.36 110.136 2286.33 93.0981C2323.1 89.2949 2374.37 106.198 2369.39 148.473C2365.13 184.679 2277.81 283.149 2211.79 310.336C2175.58 325.245 2092.52 325.245 2111.69 231.534ZM2364.55 122.894C2336.86 103.727 2297.32 139.087 2329.27 211.498C2339.91 222.149 2355.24 242.628 2397.84 240.498C2440.52 238.364 2466.65 233.664 2475.88 225.145M2475.88 225.145C2479.98 209.422 2492.2 190.408 2508.95 171.625M2475.88 225.145C2471.41 242.306 2463.23 267.321 2481.72 292.955C2492.54 307.952 2509.93 317.086 2528.32 319.01C2577.64 324.165 2658.03 305.484 2725.77 262.111C2765.68 236.552 2800.45 202.3 2846.32 190.38C3135.69 115.188 4100.04 174.341 4090.23 110.028M2475.88 153.998C2480.45 156.565 2502.89 168.751 2508.95 171.625M2508.95 171.625C2548.14 190.21 2614.77 211.725 2659.04 191.066C2722.94 161.25 2715.52 132.374 2714.42 122.913C2713.27 112.999 2703.77 82.4475 2642.01 88.8369C2600.07 93.1755 2544.38 131.885 2508.95 171.625Z";

export default function MoeSignature({ className }: MoeSignatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const uid = useId().replace(/:/g, "");
  const glowFilterId = `moe-signature-glow-${uid}`;
  const lineFilterId = `moe-signature-line-${uid}`;

  useGSAP(
    () => {
      const glow = glowRef.current;
      const line = lineRef.current;
      if (!glow || !line) return;

      if (sessionStorage.getItem(SESSION_KEY)) {
        return;
      }

      const paths = [glow, line];
      const lengths = paths.map((path) => path.getTotalLength());

      paths.forEach((path, i) => {
        gsap.set(path, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i] });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 7,
        ease: "sine.inOut",
        onComplete: () => sessionStorage.setItem(SESSION_KEY, "true"),
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${styles.container} ${className ?? ""}`}>
      <svg
        className={styles.svg}
        viewBox="0 0 4178 411"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g filter={`url(#${glowFilterId})`}>
          <path ref={glowRef} d={GLOW_PATH} stroke="#28A070" strokeWidth="16" />
        </g>
        <g filter={`url(#${lineFilterId})`}>
          <path ref={lineRef} d={LINE_PATH} stroke="#28A070" strokeWidth="12" />
        </g>
        <defs>
          <filter id={glowFilterId} x="0" y="0" width="4177.63" height="410.18" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
          </filter>
          <filter id={lineFilterId} x="74.1477" y="80.9675" width="4023.16" height="247.287" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
