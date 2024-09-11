import YWave from "../assets/waveyellow.png";
import { BsDropletHalf } from "react-icons/bs";
import { TbFilterCheck } from "react-icons/tb";
import { GiPillDrop } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import BWave from '../assets/waveBlack.png'

function Quality() {
  return (
    <>
      <div className="w-[70%] mx-auto">
        <div>
          <h1 className="heading text-[50px] text-center mt-16">
            A Trusted Name In
            <br />
            Bottled Water Industry
          </h1>
          <img className="h-[7px] mx-auto my-4" src={YWave} alt="" />
        </div>

        <div className="flex gap-x-2 justify-between mt-20 cursor-pointer text-center">
          <div className="px-5">
            <BsDropletHalf className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" />
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Maximum Purity
            </h1>
            <p className="text-center mt-5 text-gray-500">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <TbFilterCheck className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" />
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              5 Steps Filteration
            </h1>
            <p className="text-center mt-5 text-gray-500">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <GiPillDrop className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" />
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Chlorine Free
            </h1>
            <p className="text-center mt-5 text-gray-500">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button className="text-[#F5A93F] underline mt-5">Read More...</button>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <IoShieldCheckmarkOutline className="text-[80px] text-sky-500 hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto mb-10" />
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Quality Certified
            </h1>
            <p className="text-center mt-5 text-gray-500">
              Exercitation ullamco laboris nisl aliquip duis aute irure dolor
              iny rep henderit voluptate velit.
            </p>
            <button className="text-[#F5A93F] underline mt-5">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quality;
