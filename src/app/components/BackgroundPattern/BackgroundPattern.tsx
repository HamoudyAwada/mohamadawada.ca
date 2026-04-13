interface BackgroundPatternProps {
  contained?: boolean;
}

export default function BackgroundPattern({ contained = false }: BackgroundPatternProps) {
  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: contained ? 'absolute' : 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: contained ? '100%' : '100lvh',
        zIndex: contained ? 0 : -1,
        pointerEvents: 'none',
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Scattered blob pattern with varied sizes and random positions */}
      
      {/* Large blobs */}
      <ellipse cx="8%" cy="12%" rx="100" ry="75" fill="rgba(40, 160, 112, 0.07)" />
      <ellipse cx="88%" cy="18%" rx="110" ry="85" fill="rgba(91, 211, 163, 0.06)" />
      <ellipse cx="15%" cy="78%" rx="95" ry="105" fill="rgba(30, 120, 84, 0.08)" />
      
      {/* Medium blobs */}
      <ellipse cx="72%" cy="42%" rx="60" ry="72" fill="rgba(30, 120, 84, 0.05)" />
      <ellipse cx="45%" cy="68%" rx="68" ry="62" fill="rgba(40, 160, 112, 0.06)" />
      <ellipse cx="35%" cy="88%" rx="72" ry="58" fill="rgba(91, 211, 163, 0.08)" />
      <ellipse cx="35%" cy="28%" rx="65" ry="70" fill="rgba(91, 211, 163, 0.06)" />
      
      {/* Small blobs */}
      <ellipse cx="18%" cy="55%" rx="42" ry="50" fill="rgba(40, 160, 112, 0.05)" />
      <ellipse cx="65%" cy="22%" rx="48" ry="55" fill="rgba(30, 120, 84, 0.07)" />
      <ellipse cx="88%" cy="65%" rx="45" ry="40" fill="rgba(91, 211, 163, 0.05)" />
    </svg>
  );
}