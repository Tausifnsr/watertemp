import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YWave from "../assets/waveyellow.png";

const testimonials = [
  {
    name: "Brendon Taylor",
    role: "Office Delivery",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget quam vel mauris.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget quam vel mauris.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Doe",
    role: "Marketing Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget quam vel mauris.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Sales Executive",
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget quam vel mauris.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eget quam vel mauris.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="flex w-[60%] mx-auto mt-24 py-16 justify-between">
        <div>
          <h1 className="heading text-[50px] -mt-4 pr-5">Our Testimonials</h1>
          <img className="w-[80px] float-end mt-3 pr-6" src={YWave} alt="" />
        </div>
        <div className="border-r-4 border-r-[#246396]"></div>
        <p className="w-[50%] pl-5 text-gray-500">
          Aliquaut enim mini veniam quis trud exercitation ullamco exa
          consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
          consectetur adipisicing sed.
        </p>
      </div>

      <div className="w-[60%] mx-auto py-10">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-lg italic font-light text-gray-600 relative px-5">
                <span className="text-8xl text-gray-200 absolute left-0 top-0 transform -translate-x-6 -translate-y-3">
                  &ldquo;
                </span>
                {item.text}
              </p>
              <h3 className="mt-6 text-xl font-bold text-blue-700">
                {item.name}
              </h3>
              <p className="uppercase text-xs tracking-widest text-gray-500">
                {item.role}
              </p>
              <div className="flex justify-center mt-4">
                <img
                  className="rounded-full w-16 h-16 border-4 border-white shadow-lg"
                  src={item.avatar}
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-14 h-14 bg-white rounded-full shadow-xl absolute transform -translate-y-1/3 right-[250px] top-[200px] mr-4 z-10 flex justify-center items-center cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        className="w-10 h-5 text-gray-500 pl-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-14 h-14 bg-white rounded-full shadow-xl absolute transform -translate-y-1/3 left-[250px] top-[200px] ml-4 z-10 flex justify-center items-center cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg className="w-10 h-5 text-gray-500 pl-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </div>
  );
};

export default TestimonialSlider;
