import { useState, useEffect } from "react";
import Logo from '../assets/logo.png'
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-scroll";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-[#2c3e50]");
  const [showPhoneInfo, setShowPhoneInfo] = useState(true);
  const [showGap, setGap] = useState("gap-x-4")
  const [showIcons, setShowIcons] = useState(true);
  const [IconsBackground, setIconsBackground] = useState("bg-white")
  const [IconText, setIconText] = useState("text-black")
  const [IconWidth, setIconWidth] = useState("lg:px-2")
  const [IconHeight, setIconHeight] = useState("py-0")

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Adjust the value as needed
      setNavbarBackground("bg-[#fff] shadow-2xl");
      setTextColor("text-[#000]");
      setShowPhoneInfo(false);
      setGap("gap-x-0")
      setShowIcons(false);
      setIconsBackground("hover:bg-[#F5A93F]")
      setIconText("hover:text-white")
      setIconWidth("lg:px-6")
      setIconHeight("py-7")
    } else {
      setNavbarBackground("bg-transparent");
      setTextColor("text-[#000]");
      setShowPhoneInfo(true);
      setGap("gap-x-4")
      setShowIcons(true);
      setIconsBackground("hover:bg-transparent")
      setIconText("hover:text-black")
      setIconWidth("lg:px-2")
      setIconHeight("py-0")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full h-20 flex justify-center items-center fixed top-0 z-50 transition-all duration-300 ${navbarBackground}`}
    >
      <div className="w-full">
        <div className="lg:w-4/5 w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2 mt-0">
              {/* <img src={""} alt="logo" className="h-[50px] w-[80px]" /> */}
              {/* <h2 className={`logo font-bold text-[20px] ${textColor}`}>
                Kenko
              </h2> */}
              <img className="h-10" src={Logo} alt="" />
              {showPhoneInfo && ( // Conditional rendering based on scroll position
                <div className="flex">
                  <h2 className="text-[#F5A93F] text-[28px] ml-2 mt-1 pr-5 py-4 border-r-2">
                    <FiPhone />
                  </h2>
                  <p className="navNumber text-gray-600 bg-white bg-opacity-60 mx-2">
                    Get Free Delivery <br />
                    <span className="text-[22px] font-bold text-black hover:text-[#F5A93F] hover:cursor-default transition-hover duration-500 ease-in-out">
                      812-070-3693
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <ul className={`nav flex items-center text-[16px] font-bold ${showGap} max-lg:hidden`}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`leading-normal ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight} hover:text-slate-700 cursor-pointer border-b-2 border-b-[#F5A93F]`}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className={`leading-normal no-underline ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight}  hover:text-slate-700 cursor-pointer hover:border-b-2 border-b-[#F5A93F] transition-border ease-out duration-100`}
            >
              About Us
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`leading-normal no-underline ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight}  hover:text-slate-700 cursor-pointer hover:border-b-2 border-b-[#F5A93F] transition-border ease-out duration-100`}
            >
              Shop
            </Link>
            {/* <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`leading-normal no-underline ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight} cursor-pointer hover:border-b-2 border-b-[#F5A93F] transition-border ease-out duration-100`}
            >
              Element
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`leading-normal no-underline ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight} cursor-pointer hover:border-b-2 border-b-[#F5A93F] transition-border ease-out duration-100`}
            >
              Blog
            </Link> */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`leading-normal no-underline ${textColor} ${IconText} ${IconsBackground} ${IconWidth} ${IconHeight} cursor-pointer hover:border-b-2 border-b-[#F5A93F] transition-border ease-out duration-100`}
            >
              Contact
            </Link>

            {showIcons && (
              <div>
                <button className="text-[22px] p-4 bg-white rounded-full hover:text-white hover:bg-[#fbbf41] transition-hover duration-200 ease-in">
                  <GoSearch />
                </button>

                <button className="text-[22px] p-4 ml-2 text-white bg-[#246396] rounded-full hover:bg-[#fbbf41] transition-hover duration-200 ease-in">
                  <BsCart2 />
                </button>
              </div>
            )}
          </ul>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer"
              style={{ color: textColor }}
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer"
              style={{ color: textColor }}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown && (
          <div className="lg:hidden w-full fixed top-[4.5rem] bg-white transition-all z-50">
            <div className="w-full flex flex-col items-baseline gap-4 p-4 pt-0">
              <ul className="flex flex-col justify-center w-[100%]">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={showDropdown}
                  className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={showDropdown}
                  className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  About Us
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={showDropdown}
                  className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Our Services
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={showDropdown}
                  className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={showDropdown}
                  className="flex justify-center py-2 leading-normal no-underline text-[#273DB4] text-lg hover:text-slate-600 hover:font-semibold cursor-pointer"
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
