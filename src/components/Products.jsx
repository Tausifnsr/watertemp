import YWave from '../assets/waveyellow.png'



function Products() {
  return (
    <>
      <div className="bg-[#f3f9ff] mt-28">
        <div className="w-[70%] mx-auto">
        <div className="flex px-24 py-16 justify-between">
          <div>
          <h1 className="heading text-[50px] pr-5">Bottles We Deliver</h1>
          <img className='w-[80px] float-end pr-6' src={YWave} alt="" />
          </div>
          <div className="border-r-4 border-r-[#246396]"></div>
          <p className="w-[50%] pl-5 text-gray-500">Aliquaut enim mini veniam quis trud exercitation ullamco exa consequat. Duis aute rue dolor prehendrit lorem ipsum sit amet consectetur adipisicing sed.</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Products;
