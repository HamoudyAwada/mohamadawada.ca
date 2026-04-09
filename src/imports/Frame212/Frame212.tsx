import imgImage38 from "./9a104c4450cd78152e79143f08a53b02e00af7e0.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#0e0e0e] text-[48px]">Who I Am As A Designer</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Quicksand:Medium',sans-serif] leading-[0] min-h-px min-w-px not-italic relative text-[#0e0e0e] text-[20px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Something we’re losing, and losing fast, is personality. In a time when so much has become automated and things become more efficient in so short a time that processes literally change between the time you clock in and clock out, how do we actually define what makes a good designer? `}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">{`I believe that increasingly so, we are beginning to almost exclusively prioritize the how and the why. That's why the reason behind the design holds immense importance to me as a designer. Aside from the metrics and numbers (which are still important!) I'd like to think that placing more emphasis on the person sitting on the other side of the screen is what actually separates good design from great design.`}</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal]">{`Because at the end of the day, I'm not designing for dashboards or deliverables. I'm designing for the person who just had a long day and needs something to just work. For the person who feels overwhelmed and needs to feel guided. I got into this field because I love knowing that at the end of what doing, I’m helping a real person, and I genuinely care about making their lives a little easier.`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

function CopyBlock() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-[1312px]" data-name="Copy Block">
      <Frame3 />
      <div className="relative shadow-[0px_8px_15px_0px_rgba(14,14,14,0.3)] shrink-0 size-[463px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage38} />
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <CopyBlock />
    </div>
  );
}