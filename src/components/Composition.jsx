import YWave from "../assets/waveyellow.png";
import Drop from "../assets/drop.png";
import Glass from "../assets/glass.png";
import BWave from "../assets/waveBlack.png";

function Composition() {
  return (
    <>
      <div className="bg-[#f3f9ff]">
        <div className="pt-20 mx-auto my-20">
          <h1 className="heading text-[50px] text-center -mt-4 pr-5">
            Kenko Basic Water
            <br /> Compositions
          </h1>
          <img className="w-[80px] mx-auto mt-3 pr-6" src={YWave} alt="" />
        </div>

        <div className="flex w-[80%] justify-between mx-auto">
          {/* 1st Div */}
          <div className="w-1/3 text-right flex justify-end">
            <div className="flex flex-col">
              <div className="flex mb-32">
                <div className="pr-5">
                  <h1 className="heading text-[25px] font-semibold">
                    Potassium
                    <br />
                    2.5 mg/L
                  </h1>
                  <p className="text-gray-500">
                    Exercitation lamco laboris aliquip duis aute irure dolor
                    rep...
                  </p>
                </div>
                <div className="text-[30px] flex chem text-sky-500">
                  <p>K+</p>
                  <img className="mr-28 h-[100px]" src={Drop} alt="" />
                </div>
              </div>
              <div className="flex">
                <div className="pr-5">
                  <h1 className="heading text-[25px] font-semibold">
                    Fluoride
                    <br />
                    0.5 mg/L
                  </h1>
                  <p className="text-gray-500">
                    Exercitation lamco laboris aliquip duis aute irure dolor
                    rep...
                  </p>
                </div>
                <div className="text-[30px] flex chem text-sky-500">
                  <p>Fl</p>
                  <img className="mr-28 h-[100px]" src={Drop} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd Div */}

          <div className="w-1/3">
            <span className="glassRipple relative">
              <img className="absolute -top-10" src={Glass} alt="" />
            </span>
          </div>

          {/* 3rd Div */}
          <div className="w-1/3 text-left flex justify-start">
            <div className="flex flex-col">
              <div className="flex mb-28">
                <div className="text-[30px] flex chem text-sky-500">
                  <img className="ml-10 h-[100px]" src={Drop} alt="" />
                  <p>Cl</p>
                </div>

                <div className="pr-5 ml-20">
                  <h1 className="heading text-[25px] font-semibold">
                    Chloride
                    <br />
                    350a mg/L
                  </h1>
                  <p className="text-gray-500">
                    Exercitation lamco laboris aliquip duis aute irure dolor
                    rep...
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="text-[30px] flex chem text-sky-500">
                  <img className="ml-10 h-[100px]" src={Drop} alt="" />
                  <p>Mg</p>
                </div>

                <div className="pr-5 ml-20">
                  <h1 className="heading text-[25px] font-semibold">
                    Magnesium
                    <br />
                    14.5 mg/L
                  </h1>
                  <p className="text-gray-500">
                    Exercitation lamco laboris aliquip duis aute irure dolor
                    rep...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-2 py-20 w-[60%] mx-auto justify-between cursor-pointer text-center">
          <div className="px-5">
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Nitrates
              <br />2 mg/L
            </h1>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Bicarbonates
              <br />
              157 mg/L
            </h1>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Sulphates
              <br />
              5.6 mg/L
            </h1>
          </div>
          <img className="h-[50px] my-auto" src={BWave} alt="" />
          <div className="px-5">
            <h1 className="heading text-[22px] font-bold text-center hover:text-[#F5A93F] transition-hover duration-500 ease-in-out mx-auto">
              Sodium
              <br />
              0.4 mg/L
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Composition;
