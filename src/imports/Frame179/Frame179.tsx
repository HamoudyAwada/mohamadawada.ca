import svgPaths from "./svg-0m3zegtu1n";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#0e0e0e] text-[64px] whitespace-nowrap">Resume</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[#0e0e0e] text-[28px]">{`If you're looking for my professional qualifications and resume, you're in the right place. Download my resume directly as a PDF, or look a little deeper.`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Right">
      <div className="absolute left-[-4px] overflow-clip size-[24px] top-[-4px]" data-name="Icons">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
            <path d={svgPaths.p269480} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[-4px] overflow-clip size-[24px] top-[-4px]" data-name="Icons">
        <div className="absolute inset-[9.38%_12.5%_15.63%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p329a7280} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="bg-[#1e7854] content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative rounded-[1024px] shrink-0" data-name="Button">
        <p className="font-['Quicksand:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f2f2] text-[20px] whitespace-nowrap">Take A Deeper Look</p>
      </div>
      <div className="bg-[#0b2e50] content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[8px] relative rounded-[1024px] shrink-0" data-name="Button">
        <p className="font-['Quicksand:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f2f2] text-[20px] whitespace-nowrap">Download Resume</p>
        <IconRight />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame6 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="relative shrink-0 w-full" data-name="Section Heading">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[64px] py-[4px] relative w-full">
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}