import serviceMan from "../assets/serviceMan.png";
import YWave from "../assets/waveyellow.png";
import { FaCheck } from "react-icons/fa";

function Services() {
  return (
    <>
      <div className="services h-[700px] flex">
        <div>
          <img src={serviceMan} alt="" />
        </div>
        <div>
          <h1 className="heading text-white text-[50px] mt-28 -ml-28 font-semibold">
            Bottled Water Delivery
            <br /> & Services
          </h1>
          <img className="w-[40px] mt-3 -ml-[100px]" src={YWave} alt="" />
          <p className="text-white -ml-24 mt-7 text-[16px] w-[500px]">
            Neque porro quisquam esty qui dolorem ipsum quia dolor sit amet
            consectetur adipisci velit sed quia non numquam eius modi tempora.
          </p>

          <h3 className="flex text-white text-[18px] font-semibold font-sans mt-5 -ml-[100px]">
            <FaCheck className="text-[#F5A934] text-[20px] mt-1 mr-1" />
            Hygenic and Ergonomic Bottles
          </h3>
          <h3 className="flex text-white text-[18px] font-semibold font-sans mt-1 -ml-[100px]">
            <FaCheck className="text-[#F5A934] text-[20px] mt-1 mr-1" />
            Free Delivery On Weekends
          </h3>
          <h3 className="flex text-white text-[18px] font-semibold font-sans mt-1 -ml-[100px]">
            <FaCheck className="text-[#F5A934] text-[20px] mt-1 mr-1" />5 Step
            Filteration Plants
          </h3>
          <h3 className="flex text-white text-[18px] font-semibold font-sans mt-1 -ml-[100px]">
            <FaCheck className="text-[#F5A934] text-[20px] mt-1 mr-1" />
            Best For Health and Hydration
          </h3>

          <div className="mt-12 -ml-[100px]">
          <button className="btn bg-sky-500 rounded-full py-4 px-6 text-white font-bold uppercase hover:bg-[#F5A93F] transition-all duration-500 ease-in-out">
            Order Today!
          </button>
          <button className="bg-[#F5A93F] rounded-full ml-3 py-4 px-6 text-white font-bold uppercase hover:bg-sky-500 transition-all duration-500 ease-in-out">
            Free Estimate
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
