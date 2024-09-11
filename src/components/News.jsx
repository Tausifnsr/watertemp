import YWave from "../assets/waveyellow.png";

function News() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="heading text-[50px] text-center mt-16">
            The News
            <br /> About Kenko
          </h1>
          <img className="h-[7px] mx-auto my-4" src={YWave} alt="" />
        </div>
      </div>
    </>
  );
}

export default News;
