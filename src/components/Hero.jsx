import Navbar from "./Navbar";
import Bottle from "../assets/bottlehome.png";
import Wave from "../assets/wave.png";


function Hero() {
  return (
    <>
      <div id="home" className="hero lg:h-[100vh]">
        <Navbar className="z-10" />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-[50vw] mt-20 lg:mt-48 p-6 h-auto lg:h-[400px] items-center justify-center">
            <div className="flex">
              <img className="h-[10px] mt-2 px-2" src={Wave} alt="" />
              <div className="text-blue-500 text-[18px]">
                Understand the importance of life
              </div>
            </div>

            <h1 className=" heading leading-tight text-[20px] lg:text-[75px] font-bold text-center lg:text-left">
              Pure & Healthy Drinking Water
            </h1>
            <p className="font-bold text-[#4e4b44] text-[18px] w-[80%] mt-8">
              Sint iure officiis reprehenderit aliquid blanditiis quasi
              aspernatur ipsa molestiae nemo voluptas
            </p>

            <div className="flex mt-10 text-[20px]">
                <button className="btn bg-[#246396] rounded-full py-4 px-6 text-white font-bold uppercase hover:bg-[#eeb034] transition-all duration-500 ease-in-out">Order Today!</button>
                <button className="bg-[#eeb034] rounded-full ml-3 py-4 px-6 text-white font-bold uppercase hover:bg-[#246396] transition-all duration-500 ease-in-out">Free Estimate</button>
            </div>

          </div>
          <div className="w-1/2">
            <img className="lg:mt-36 h-[85%]" src={Bottle} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
