import { useRef, useId } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./MoeSignature.module.css";

gsap.registerPlugin(useGSAP);

interface MoeSignatureProps {
  className?: string;
}

const VIEWBOX_WIDTH = 4172;
const SPOTLIGHT_RADIUS = 260;

// Soft glow stroke (blurred), stroke-width 8
const GLOW_PATH =
  "M1533.66 274.749C1655.24 142.909 1667.86 106.129 1655.71 103.811C1654.17 103.515 1652.66 103.885 1651.22 104.519C1649.28 105.371 1647.99 106.526 1646.43 107.958C1563.44 184.185 711.576 480.798 82.0259 110.999M1533.66 274.749C1521 288.483 1507.15 303.249 1492.03 319.116C1505.45 303.889 1519.41 289.053 1533.66 274.749ZM1533.66 274.749C1704.87 102.983 1919.79 7.98924 1788.07 236.052M2109.66 227.535C2007.43 306.337 1960.58 321.245 1932.89 304.207C1910.74 290.577 1929.34 260.192 1941.41 246.703C1959.87 227.535 1998.49 182.809 2005.3 157.252C2040.28 26.0788 1839.18 163.641 1788.07 236.052C1726.33 308.439 1724.17 310.593 1722.04 312.724M2109.66 227.535C2124.57 187.069 2186.34 106.137 2284.31 89.099C2321.07 85.2957 2372.34 102.199 2367.37 144.473C2363.11 180.68 2275.79 279.15 2209.76 306.337C2173.56 321.245 2090.49 321.245 2109.66 227.535ZM2362.52 118.895C2334.83 99.7276 2284.31 152.993 2316.25 225.405C2326.9 236.056 2348.2 257.354 2390.79 255.224C2433.47 253.09 2464.63 229.665 2473.86 221.146M2473.86 221.146C2477.96 205.423 2490.18 186.409 2506.92 167.625M2473.86 221.146C2468.24 242.661 2456.82 276.52 2499.41 308.467C2528.91 330.588 2624.92 314.182 2706.75 266.873C2758.54 236.93 2803.3 195.136 2861.86 182.899C3172.33 118.024 4097.14 168.04 4087.53 104.999M2473.86 149.999C2478.42 152.566 2500.86 164.751 2506.92 167.625M2506.92 167.625C2546.11 186.211 2612.75 207.726 2657.02 187.067C2720.91 157.25 2716.65 127.433 2712.39 118.914C2708.13 110.395 2701.74 78.4484 2639.98 84.8377C2598.04 89.1763 2542.35 127.886 2506.92 167.625Z";

// Sharp signature stroke, stroke-width 12, round caps
const LINE_PATH =
  "M1533.66 274.749C1655.24 142.909 1667.86 106.129 1655.71 103.811C1653.81 103.446 1651.96 104.094 1650.22 105.003C1648.99 105.641 1648.14 106.283 1647.07 107.153C1563.23 175.1 722.562 492.821 76.2026 106.029M1533.66 274.749C1521 288.483 1507.15 303.249 1492.03 319.116C1505.45 303.889 1519.41 289.053 1533.66 274.749ZM1533.66 274.749C1704.87 102.983 1919.79 7.98926 1788.07 236.052M2109.66 227.535C2007.43 306.337 1960.58 321.245 1932.89 304.207C1910.74 290.577 1929.34 260.192 1941.41 246.703C1959.87 227.535 1998.49 182.809 2005.3 157.252C2040.28 26.0788 1839.18 163.641 1788.07 236.052C1726.33 308.439 1724.17 310.593 1722.04 312.724M2109.66 227.535C2124.57 187.069 2186.34 106.137 2284.31 89.099C2321.07 85.2957 2372.34 102.199 2367.37 144.473C2363.11 180.68 2275.79 279.15 2209.76 306.337C2173.56 321.245 2090.49 321.245 2109.66 227.535ZM2362.52 118.895C2334.83 99.7276 2295.29 135.087 2327.24 207.499C2337.89 218.15 2353.22 238.629 2395.81 236.499C2438.49 234.365 2464.63 229.665 2473.86 221.146M2473.86 221.146C2477.96 205.423 2490.18 186.409 2506.92 167.625M2473.86 221.146C2469.38 238.307 2461.2 263.322 2479.7 288.956C2490.51 303.953 2507.91 313.087 2526.3 315.01C2575.61 320.166 2656 301.485 2723.74 258.112C2763.66 232.553 2798.42 198.301 2844.29 186.38C3133.66 111.189 4098.01 170.341 4088.2 106.029M2473.86 149.999C2478.42 152.566 2500.86 164.751 2506.92 167.625M2506.92 167.625C2546.11 186.211 2612.75 207.726 2657.02 187.067C2720.91 157.25 2713.49 128.375 2712.39 118.914C2711.24 109 2701.74 78.4484 2639.98 84.8377C2598.04 89.1763 2542.35 127.886 2506.92 167.625Z";

function setupSpotlight(
  svg: SVGSVGElement,
  gradient: SVGRadialGradientElement | null,
  hotGroup: SVGGElement | null
) {
  if (!gradient || !hotGroup) return undefined;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return undefined;

  const pos = { x: 0, y: 0 };
  const setX = gsap.quickTo(pos, "x", {
    duration: 0.4,
    ease: "power3",
    onUpdate: () => gradient.setAttribute("cx", pos.x.toFixed(2)),
  });
  const setY = gsap.quickTo(pos, "y", {
    duration: 0.4,
    ease: "power3",
    onUpdate: () => gradient.setAttribute("cy", pos.y.toFixed(2)),
  });

  const handleMove = (e: MouseEvent) => {
    // viewBox aspect ratio is preserved, so one scale factor maps screen px to viewBox units
    const rect = svg.getBoundingClientRect();
    const scale = VIEWBOX_WIDTH / rect.width;
    setX((e.clientX - rect.left) * scale);
    setY((e.clientY - rect.top) * scale);
  };
  const handleEnter = () => gsap.to(hotGroup, { opacity: 1, duration: 0.3, overwrite: true });
  const handleLeave = () => gsap.to(hotGroup, { opacity: 0, duration: 0.4, overwrite: true });

  svg.addEventListener("mousemove", handleMove);
  svg.addEventListener("mouseenter", handleEnter);
  svg.addEventListener("mouseleave", handleLeave);

  return () => {
    svg.removeEventListener("mousemove", handleMove);
    svg.removeEventListener("mouseenter", handleEnter);
    svg.removeEventListener("mouseleave", handleLeave);
  };
}

export default function MoeSignature({ className }: MoeSignatureProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const hotGroupRef = useRef<SVGGElement>(null);
  const gradientRef = useRef<SVGRadialGradientElement>(null);
  const uid = useId().replace(/:/g, "");
  const glowFilterId = `moe-signature-glow-${uid}`;
  const hotGlowFilterId = `moe-signature-hot-glow-${uid}`;
  const spotlightGradientId = `moe-signature-spotlight-${uid}`;

  useGSAP(
    () => {
      const glow = glowRef.current;
      const line = lineRef.current;
      const svg = svgRef.current;
      if (!glow || !line || !svg) return;

      const cleanupSpotlight = setupSpotlight(svg, gradientRef.current, hotGroupRef.current);

      const paths = [glow, line];
      const lengths = paths.map((path) => path.getTotalLength());

      paths.forEach((path, i) => {
        gsap.set(path, { strokeDasharray: lengths[i], strokeDashoffset: lengths[i] });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 7,
        ease: "sine.inOut",
      });

      return () => cleanupSpotlight?.();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${styles.container} ${className ?? ""}`}>
      <svg
        ref={svgRef}
        className={styles.svg}
        viewBox="0 0 4172 403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g filter={`url(#${glowFilterId})`}>
          <path ref={glowRef} d={GLOW_PATH} stroke="#ADE9D1" strokeWidth="8" />
        </g>
        <path ref={lineRef} d={LINE_PATH} stroke="#28A070" strokeWidth="12" strokeLinecap="round" />
        <g ref={hotGroupRef} className={styles.spotlight} filter={`url(#${hotGlowFilterId})`}>
          <path d={LINE_PATH} stroke={`url(#${spotlightGradientId})`} strokeWidth="28" />
        </g>
        <defs>
          <filter id={glowFilterId} x="0" y="0" width="4171.6" height="402.181" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur" />
          </filter>
          <filter id={hotGlowFilterId} x="0" y="0" width="4171.6" height="402.181" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <radialGradient
            ref={gradientRef}
            id={spotlightGradientId}
            gradientUnits="userSpaceOnUse"
            cx="2086"
            cy="201.5"
            r={SPOTLIGHT_RADIUS}
          >
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#7CFFC2" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#28A070" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
