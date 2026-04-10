import styles from "./ProcessDiagram.module.css";

export default function ProcessDiagram() {
  return (
    <div className={styles.diagram}>
      <svg 
        className={styles.svg}
        viewBox="0 0 480 428" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* THINK Circle (Top) */}
        <circle cx="240" cy="80.955" r="73" fill="#1E7854" />
        <text x="240" y="92" textAnchor="middle" fill="white" className={styles.labelLarge}>
          THINK
        </text>

        {/* MAKE Circle (Bottom Left) */}
        <circle cx="100.773" cy="293.296" r="73" fill="#1E7854" />
        <text x="100.773" y="305" textAnchor="middle" fill="white" className={styles.labelLarge}>
          MAKE
        </text>

        {/* CHECK Circle (Bottom Right) */}
        <circle cx="379.227" cy="293.296" r="73" fill="#1E7854" />
        <text x="379.227" y="305" textAnchor="middle" fill="white" className={styles.labelLarge}>
          CHECK
        </text>

        {/* LEAN UX Circle (Center) */}
        <circle cx="240.663" cy="225.612" r="53" fill="#D6F4E8" stroke="#1E7854" strokeWidth="3" />
        <text x="240.663" y="222" textAnchor="middle" fill="#1E7854" className={styles.labelMedium}>
          LEAN
        </text>
        <text x="240.663" y="238" textAnchor="middle" fill="#1E7854" className={styles.labelMedium}>
          UX
        </text>

        {/* Arrow Labels with Pill Backgrounds */}
        {/* Iterate (Think to LEAN UX) */}
        <g className={styles.label}>
          <rect x="217" y="145" width="58" height="24" rx="12" fill="#1E7854" />
          <text x="246" y="161" textAnchor="middle" fill="white" className={styles.labelSmall}>
            Iterate
          </text>
        </g>

        {/* Learn (Check to Think) */}
        <g className={styles.label}>
          <rect x="340" y="145" width="50" height="24" rx="12" fill="#1E7854" />
          <text x="365" y="161" textAnchor="middle" fill="white" className={styles.labelSmall}>
            Learn
          </text>
        </g>

        {/* Validate (Check to LEAN UX) */}
        <g className={styles.label}>
          <rect x="309" y="245" width="62" height="24" rx="12" fill="#1E7854" />
          <text x="340" y="261" textAnchor="middle" fill="white" className={styles.labelSmall}>
            Validate
          </text>
        </g>

        {/* Iterate (LEAN UX to MAKE) */}
        <g className={styles.label}>
          <rect x="145" y="245" width="58" height="24" rx="12" fill="#1E7854" />
          <text x="174" y="261" textAnchor="middle" fill="white" className={styles.labelSmall}>
            Iterate
          </text>
        </g>

        {/* Connection Lines/Arrows */}
        {/* Think to MAKE arrow */}
        <path
          d="M167 81L100.773 293.296"
          stroke="#1E7854"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* MAKE to CHECK arrow */}
        <path
          d="M173.702 293.296L306.298 293.296"
          stroke="#1E7854"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* CHECK to Think arrow */}
        <path
          d="M312.928 81L379.227 293.296"
          stroke="#1E7854"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.3"
        />

        {/* MAKE Button */}
        <g>
          <rect x="67.6243" y="404.112" width="67.6243" height="23.888" rx="11.944" fill="white" stroke="#1E7854" strokeWidth="2" />
          <text x="101.436" y="420" textAnchor="middle" fill="#1E7854" className={styles.buttonText}>
            MAKE
          </text>
        </g>

        {/* CHECK Button */}
        <g>
          <rect x="267.845" y="404.112" width="67.845" height="23.888" rx="11.944" fill="white" stroke="#1E7854" strokeWidth="2" />
          <text x="301.767" y="420" textAnchor="middle" fill="#1E7854" className={styles.buttonText}>
            CHECK
          </text>
        </g>

        {/* THINK Button */}
        <g>
          <rect x="412.376" y="110.816" width="67.624" height="23.888" rx="11.944" fill="white" stroke="#1E7854" strokeWidth="2" />
          <text x="446.188" y="126.5" textAnchor="middle" fill="#1E7854" className={styles.buttonText}>
            THINK
          </text>
        </g>

        {/* LEAN UX Button */}
        <g>
          <rect x="208.219" y="199.866" width="65" height="19.774" rx="9.887" fill="white" stroke="#1E7854" strokeWidth="2" />
          <text x="240.719" y="213.5" textAnchor="middle" fill="#1E7854" className={styles.buttonText}>
            LEAN UX
          </text>
        </g>
      </svg>
    </div>
  );
}
