import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import YWave from "../assets/waveyellow.png";
import vidImg1 from "../assets/vidImg1.png";
import vidImg2 from "../assets/vidImg2.jpg";
import vidImg3 from "../assets/vidImg3.jpg";

function Video({ videoId, thumbnailUrl }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="mt-20 rounded-xl">
          {!showVideo ? (
            // Display the custom thumbnail with a play button overlay
            <div className="relative rounded-xl w-[70%] mx-auto">
              <img
                src={thumbnailUrl}
                alt="Video Thumbnail"
                className="w-full h-auto cursor-pointer rounded-xl"
                onClick={handlePlayVideo}
              />
              <button
                onClick={handlePlayVideo}
                className="absolute rounded-xl inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div className="vidBtn w-[100px] h-[100px] rounded-full bg-white relative">
                  <FaPlay className="absolute right-[40%]" />
                </div>
              </button>
            </div>
          ) : (
            // Replace the image with the iframe when clicked
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/nfP5N9Yc72A?si=7rg5oPxlMRiSB9gy`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-[450px] rounded-xl"
            ></iframe>
          )}
        </div>
        <div className="flex px-24 py-16 justify-between">
          <div>
            <h1 className="heading text-[50px] -mt-4 pr-5">
              Helping To Improve
            </h1>
            <img className="w-[80px] float-end mt-3 pr-6" src={YWave} alt="" />
          </div>
          <div className="border-r-4 border-r-[#246396]"></div>
          <p className="w-[50%] pl-5 text-gray-500">
            Aliquaut enim mini veniam quis trud exercitation ullamco exa
            consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet
            consectetur adipisicing sed.
          </p>
        </div>

        <div className="flex justify-center gap-x-12 mt-10 mb-20 mx-auto">
          <div className="relative overflow-hidden cursor-pointer rounded-xl hover-img-container">
            <img className="h-[250px] hoverImg" src={vidImg1} alt="" />
          </div>

          <div className="relative overflow-hidden cursor-pointer rounded-xl hover-img-container">
            <img className="h-[250px] hoverImg" src={vidImg2} alt="" />
          </div>

          <div className="relative overflow-hidden cursor-pointer rounded-xl hover-img-container">
            <img className="h-[250px] hoverImg" src={vidImg3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
