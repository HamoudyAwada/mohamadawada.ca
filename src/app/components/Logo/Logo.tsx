import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "default" | "footer";
  showText?: boolean;
}

export default function Logo({ variant = "default", showText = false }: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoMark}>
        <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6003 20.7995L3.71002 47.0663C3.49608 48.1835 4.04281 49.6811 6.82403 49.9425C10.1373 50.254 10.4527 48.4608 10.8651 47.7794L13.7889 39.2219H18.1152C18.2895 39.7924 18.9234 40.3629 20.0644 40.3629C21.1103 40.3629 21.7917 39.7924 21.9423 39.2219H26.1022L29.549 48.5401C30.3334 49.6573 30.7137 50.3942 33.8039 49.9425C35.8267 49.6469 36.7991 48.1835 36.5614 47.0663L27.3383 20.7995L29.6916 12.9076L33.7326 25.4655C34.2794 26.2975 35.6105 27.9171 38.1065 27.2483C40.6024 26.5795 40.2603 24.6187 39.8324 23.1766L33.9026 5.36161L33.8811 5.2972C33.4914 4.12562 33.0769 2.87958 32.1393 2.0808C31.6513 1.66503 30.9693 1.40228 29.6916 1.35494C27.4276 1.27106 26.8628 2.37708 26.3399 3.20906C25.817 4.04104 24.0341 11.1723 24.0341 11.1723L21.8535 5.14344C21.23 3.41987 18.7884 3.4314 18.1813 5.16078L16.0709 11.1723L14.1205 3.20906C13.5512 1.85413 12.0774 1.11723 10.3863 1.35494C8.51931 1.61737 7.63223 2.32192 6.91977 3.62932L0.477209 23.0976C0.0870221 23.9851 -0.481784 26.4129 2.04609 27.2483C4.47069 28.0496 5.89827 26.7016 6.5604 25.4655L10.3863 12.9076L12.6003 20.7995Z" fill="white"/>
          <g filter="url(#filter0_d_645_11080)">
            <g filter="url(#filter1_d_645_11080)">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.8393 33.2677L20.0197 14.5693L22.2678 21.2853L24.0662 15.1639L21.2358 6.68601C20.8455 5.51694 19.1921 5.51635 18.801 6.68515L9.90527 33.2678H9.90622L8.56756 37.2643L5.65255 45.9761C5.24237 47.2019 6.15461 48.4691 7.44728 48.4691C8.26365 48.4691 8.98801 47.9457 9.24421 47.1705L12.5185 37.2643L18.949 37.2643L17.7715 33.2677H13.8393Z" fill="#28A070"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M24.1289 26.8432L26.2753 33.2555H22.251L21.0625 37.268H27.6179L30.9535 47.2327C31.2007 47.9712 31.8923 48.4691 32.6712 48.4691C33.9079 48.4691 34.7809 47.2572 34.3893 46.0841L31.4447 37.2642L30.1108 33.2676L25.9181 20.7045L24.1289 26.8432Z" fill="#28A070"/>
            </g>
            <g filter="url(#filter2_d_645_11080)">
              <g filter="url(#filter3_d_645_11080)">
                <path d="M15.916 26.9869L19.1035 37.7968C19.372 38.7071 20.662 38.7056 20.9282 37.7945L29.3883 8.84217C29.4677 8.57057 29.8513 8.5675 29.935 8.83779L34.6657 24.1145C35.0172 25.2496 36.0669 26.0234 37.2551 26.0234C38.241 26.0234 38.9395 25.0609 38.6338 24.1236L32.2984 4.69912C31.9346 3.58359 30.8944 2.82874 29.7211 2.82874C28.5181 2.82874 27.4589 3.62151 27.1199 4.77576L20.48 27.3822C20.346 27.8387 19.6989 27.8371 19.5671 27.38L17.8073 21.2774L15.916 26.9869Z" fill="#145038"/>
              </g>
              <g filter="url(#filter4_d_645_11080)">
                <path d="M5.58395 24.0388L10.0745 8.86086C10.1552 8.58787 10.542 8.58833 10.6221 8.8615L14.0962 20.7068L16.017 14.997L13.098 4.82199C12.7594 3.64189 11.6802 2.82874 10.4525 2.82874C9.26269 2.82874 8.20761 3.59328 7.83711 4.72391L1.50192 24.0567C1.18415 25.0264 1.90664 26.0234 2.9271 26.0234C4.15456 26.0234 5.23572 25.2158 5.58395 24.0388Z" fill="#145038"/>
              </g>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_645_11080" x="0.382005" y="2.54349" width="39.4899" height="46.6267" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.190167"/>
              <feGaussianBlur stdDeviation="0.237708"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_11080"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_11080" result="shape"/>
            </filter>
            <filter id="filter1_d_645_11080" x="-0.42625" y="2.37751" width="41.249" height="48.314" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.760667"/>
              <feGaussianBlur stdDeviation="0.713125"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_11080"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_11080" result="shape"/>
            </filter>
            <filter id="filter2_d_645_11080" x="-0.568828" y="2.16315" width="41.249" height="40.9275" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.760667"/>
              <feGaussianBlur stdDeviation="0.713125"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_11080"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_11080" result="shape"/>
            </filter>
            <filter id="filter3_d_645_11080" x="14.4898" y="2.16315" width="25.6425" height="38.5024" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.760667"/>
              <feGaussianBlur stdDeviation="0.713125"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_11080"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_11080" result="shape"/>
            </filter>
            <filter id="filter4_d_645_11080" x="-0.000469089" y="2.16315" width="17.4433" height="26.0472" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.760667"/>
              <feGaussianBlur stdDeviation="0.713125"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.3 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_645_11080"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_645_11080" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className={styles.logoText}>
          <div className={styles.logoName}>Mohamad Awada</div>
          {variant === "footer" && (
            <div className={styles.logoSlogan}>Made by Moe, designed with care.</div>
          )}
        </div>
      )}
    </div>
  );
}
