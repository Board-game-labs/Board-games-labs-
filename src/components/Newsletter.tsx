const Newsletter = () => {
  return (
    <div className="min-h-[300px] bg-[#FF3D00] py-6 md:py-8">
      <div className="text-center w-[95%] sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto pt-3 md:pt-5">
        <h1 className="nova text-[18px] md:text-[25px] text-[#FFFFFF] border-b-[#FFFFFF] border-b-[3px] md:border-b-[4px] w-[45%] sm:w-[40%] md:w-[30%] mx-auto">
          About Us
        </h1>
        <p className="text-[#FFFFFF] mt-2 nova text-[11px] sm:text-[12px] md:text-[14px] px-2 sm:px-4 md:px-0">
          Welcome to Sanmoku Dojo, where innovation meets entertainment! We take pride in being a premier platform
          offering a thrilling range of fully on-chain multiplayer board games. At Sanmoku Dojo, we've reimagined gaming
          by harnessing the power of Dojo engine and starknet to bring you an immersive gaming experience like no other.
        </p>
        <div className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] h-auto mx-auto mt-6 md:mt-8 rounded-2xl items-center">
          <form className="h-[100%] w-[100%] mx-auto items-center">
            <div className="h-[100%] flex flex-col sm:flex-row text-center">
              <input
                type="text"
                placeholder="Enter your text here..."
                className="w-full sm:w-[60%] h-[45px] border-[#000000B2] rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border px-2 inner text-[12px] md:text-[14px]"
              />
              <button
                type="submit"
                className="w-full sm:w-[40%] h-[45px] border-[#000000B2] text-white rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none border bg-[#FF3D00] press text-[12px] md:text-[14px] mt-1 sm:mt-0"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
