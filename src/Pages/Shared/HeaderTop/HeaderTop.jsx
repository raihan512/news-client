import moment from "moment/moment";
import Logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";

const HeaderTop = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center">
        <img src={Logo} className="w-[471px] mb-5" alt="Dragon news logo" />
        <p className="text-lg text-[#706F6F]">
          Journalism Without Fear or Favour
        </p>
        <p className="text-[#403F3F] text-xl">
          {moment().format("dddd MMMM D, YYYY")}
        </p>
      </div>
      <div className="mt-5 p-5 bg-[#F3F3F3] flex items-center">
        <button className="bg-[#D72050] text-white font-semibold py-2 px-6 text-lg">
          Latest
        </button>
        <Marquee className="text-[#403F3F] text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </div>
  );
};

export default HeaderTop;
