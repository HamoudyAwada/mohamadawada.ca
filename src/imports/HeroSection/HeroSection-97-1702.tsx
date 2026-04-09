function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[345px]">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#0e0e0e] text-[64px] text-center">My Process</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[345px]">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px relative text-[28px] text-black text-center">In an age where the how and the why matter more than ever, here is what the process means to me.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Hero Section">
      <Frame3 />
    </div>
  );
}