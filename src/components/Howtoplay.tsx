import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"

const Howtoplay = () => {
  return (
    <div className="min-h-[340px] bg-[#FF3D00] py-8 md:py-0">
      <div className="text-center w-[95%] md:w-[90%] lg:w-[600px] mx-auto pt-3 md:pt-5">
        <h1 className="nova text-[18px] md:text-[25px] text-[#FFFFFF] border-b-[#FFFFFF] border-b-[3px] md:border-b-[4px] w-[45%] md:w-[30%] mx-auto">
          How to Play
        </h1>
        <p className="text-[#FFFFFF] mt-2 nova text-[11px] md:text-[14px] px-2 md:px-4 lg:px-0">
          Challenge your skills, strategize your moves, and enjoy the thrill of competing against friends or players
          from around the world. Start your gaming adventure at Sanmoku Dojo and unleash the joy of playing
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-10 py-4 md:py-6">
        <div className="w-full text-center nova text-[#FFFFFF]">
          <img
            src={one || "/placeholder.svg"}
            alt="one"
            className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] mx-auto"
          />
          <h1 className="mt-1 text-[14px] md:text-[16px]">STEP ONE</h1>
          <p className="mt-2 text-[11px] md:text-[14px]">Launch app and Choose a game of choice </p>
        </div>

        <div className="w-full text-center nova text-[#FFFFFF]">
          <img
            src={two || "/placeholder.svg"}
            alt="one"
            className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] mx-auto"
          />
          <h1 className="mt-1 text-[14px] md:text-[16px]">STEP TWO</h1>
          <p className="mt-2 text-[11px] md:text-[14px]">
            Start a new game and Share your room ID with your opponent to play
          </p>
        </div>

        <div className="w-full text-center nova text-[#FFFFFF]">
          <img
            src={three || "/placeholder.svg"}
            alt="one"
            className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] mx-auto"
          />
          <h1 className="mt-1 text-[14px] md:text-[16px]">STEP THREE</h1>
          <p className="mt-2 text-[11px] md:text-[14px]">On every win, There's increment in token earned</p>
        </div>

        <div className="w-full text-center nova text-[#FFFFFF]">
          <img
            src={four || "/placeholder.svg"}
            alt="one"
            className="h-[35px] w-[35px] md:h-[40px] md:w-[40px] mx-auto"
          />
          <h1 className="mt-1 text-[14px] md:text-[16px]">STEP FOUR</h1>
          <p className="mt-2 text-[11px] md:text-[14px]">Enjoy fully onchain board games</p>
        </div>
      </div>
    </div>
  )
}

export default Howtoplay
