import Navbar from "./Navbar";
import Bottle2 from "../assets/bottle2.png";
import Wave from "../assets/wave.png";


function Hero() {
  return (
    <>
      <div id="home" className="hero lg:h-[100vh]">
        <Navbar className="z-10" />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-[50vw] mt-20 lg:mt-48 p-6 h-auto lg:h-[400px] items-center justify-center">
            <div className="flex">
              <img className="h-[10px] mt-2 ml-24" src={Wave} alt="" />
              <div className="text-blue-500 text-[18px]">
                Understand the importance of life
              </div>
            </div>

            <h1 className=" heading leading-tight text-[20px] lg:text-[75px] font-bold text-center ">
              Pure & Healthy Drinking Water
            </h1>
            <p className="font-bold mix-blend-plus-darker text-[18px] w-[80%] mt-8 ml-20">
              Sint iure officiis reprehenderit aliquid blanditiis quasi
              aspernatur ipsa molestiae nemo voluptas
            </p>

            <div className="flex mt-10 ml-20 text-[20px]">
                <button className="btn bg-[#246396] rounded-full py-4 px-6 text-white font-bold uppercase hover:bg-[#F5A93F] transition-all duration-500 ease-in-out">Order Today!</button>
                <button className="bg-[#F5A93F] rounded-full ml-3 py-4 px-6 text-white font-bold uppercase hover:bg-[#246396] transition-all duration-500 ease-in-out">Free Estimate</button>
            </div>

          </div>
          <div className="w-1/2">
            <img className="lg:mt-36 ml-20 h-[85%]" src={Bottle2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
