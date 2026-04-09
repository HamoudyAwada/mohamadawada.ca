import imgImage from "./ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImage1 from "./be41f4211ef435212f579e691a52d93c75ed69aa.png";
import imgImage2 from "./32177d010fae44d40047e2bb4a53dcbf6108c2a5.png";

function Image() {
  return (
    <div className="h-[466px] relative rounded-bl-[240px] rounded-br-[870px] rounded-tl-[460px] rounded-tr-[517px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-bl-[240px] rounded-br-[870px] rounded-tl-[460px] rounded-tr-[517px]">
        <img alt="" className="absolute max-w-none object-cover rounded-bl-[240px] rounded-br-[870px] rounded-tl-[460px] rounded-tr-[517px] size-full" src={imgImage} />
        <div className="absolute inset-0 overflow-hidden rounded-bl-[240px] rounded-br-[870px] rounded-tl-[460px] rounded-tr-[517px]">
          <img alt="" className="absolute h-[146.97%] left-[-55.7%] max-w-none top-[-33.87%] w-[194.62%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 top-[61px] w-[527px]">
      <Image />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
      <div className="absolute left-[19px] rounded-bl-[64px] rounded-br-[206px] size-[527px] top-0" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[64px] rounded-br-[206px] size-full" src={imgImage2} />
      </div>
    </div>
  );
}