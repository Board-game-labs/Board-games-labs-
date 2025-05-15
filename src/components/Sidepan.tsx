import { MdRocketLaunch } from "react-icons/md"

const Sidepan = () => {
  return (
    <div className="w-full md:w-[23%] h-auto rounded-2xl bg-[#353D44] mt-4 md:mt-[9%] p-3 md:p-4 overflow-y-auto mx-2 sm:mx-0">
      {/* Search Bar */}
      <div className="w-[95%] md:w-[90%] h-[40px] md:h-[45px] search mx-auto rounded-2xl items-center">
        <form className="h-[100%] w-[100%] mx-auto items-center p-1">
          <div className="h-[100%] text-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-[100%] h-full px-2 rounded-lg items-center text-[12px] md:text-[14px]"
            />
          </div>
        </form>
      </div>

      {/* Game Categories */}
      <div className="flex items-center space-x-3 md:space-x-4 mt-5 md:mt-8">
        <h1 className="text-[#FFFFFF] nova text-[12px] md:text-[14px]">Game Categories</h1>
        <div className="h-0.5 w-[30%] md:w-[40%] bg-[#FFFFFF]"></div>
      </div>

      {/* Category Cards */}
      <div className="space-y-2 md:space-y-4 mt-3">
        <div className="flex justify-between w-full h-[40px] md:h-[50px] text-[10px] md:text-[13px] nova bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <div className="flex text-white space-x-1 items-center">
            <MdRocketLaunch className="text-[14px] md:text-[20px]" />
            <h1>Board games</h1>
          </div>
          <div className="text-white text-right">
            <h1 className="text-[10px] md:text-[13px]">$56,982</h1>
            <p className="text-[8px] md:text-[11px]">top win today</p>
          </div>
        </div>

        <div className="flex justify-between w-full h-[40px] md:h-[50px] text-[10px] md:text-[13px] nova bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <div className="flex text-white space-x-1 items-center">
            <MdRocketLaunch className="text-[14px] md:text-[20px]" />
            <h1>Arcade</h1>
          </div>
          <div className="text-white text-right">
            <h1 className="text-[10px] md:text-[13px]">$566,982</h1>
            <p className="text-[8px] md:text-[11px]">top win today</p>
          </div>
        </div>

        <div className="flex justify-between w-full h-[40px] md:h-[50px] text-[10px] md:text-[13px] nova bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <div className="flex text-white space-x-1 items-center">
            <MdRocketLaunch className="text-[14px] md:text-[20px]" />
            <h1>Adventure</h1>
          </div>
          <div className="text-white text-right">
            <h1 className="text-[10px] md:text-[13px]">$566,982</h1>
            <p className="text-[8px] md:text-[11px]">top win today</p>
          </div>
        </div>

        <div className="flex justify-between w-full h-[40px] md:h-[50px] text-[10px] md:text-[13px] nova bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <div className="flex text-white space-x-1 items-center">
            <MdRocketLaunch className="text-[14px] md:text-[20px]" />
            <h1>Bonus program</h1>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-3 md:space-x-4 mt-5 md:mt-8">
        <h1 className="text-[#FFFFFF] nova text-[12px] md:text-[14px]">User info</h1>
        <div className="h-0.5 w-[30%] md:w-[40%] bg-[#FFFFFF]"></div>
      </div>
      <div className="text-[#FFFFFF] w-full nova text-[10px] md:text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
        <h1>Username : Kenzman</h1>
        <h1>Address : 0xhjhd...</h1>
        <h1>Total games : 203</h1>
      </div>

      {/* Promotions */}
      <div className="flex items-center space-x-3 md:space-x-4 mt-5 md:mt-8">
        <h1 className="text-[#FFFFFF] nova text-[12px] md:text-[14px]">Promotions</h1>
        <div className="h-0.5 w-[30%] md:w-[40%] bg-[#FFFFFF]"></div>
      </div>
      <div className="space-y-2 md:space-y-3 mb-4">
        <div className="text-[#FFFFFF] w-full nova text-[10px] md:text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <h1>Lottery</h1>
        </div>
        <div className="text-[#FFFFFF] w-full nova text-[10px] md:text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <h1>Tornament</h1>
        </div>
        <div className="text-[#FFFFFF] w-full nova text-[10px] md:text-[14px] mt-3 bg-[#FF3D00] shadow-2xl p-2 md:p-3 rounded-xl items-center">
          <h1>Jackpot</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidepan
