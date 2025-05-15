import { IoRocketSharp } from "react-icons/io5"
import shapes from "../assets/shapes.png"
import avatar from "../assets/avatar.png"
import tile from "../assets/tile.png"
import mech from "../assets/Mech.png"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="bg-herobg w-full min-h-[750px] bg-cover">
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-36 h-[80%] w-[95%] md:w-[90%] lg:w-[80%] mx-auto items-center py-6 md:py-8 lg:py-0">
        <div className="h-auto md:h-[280px] w-full md:w-[530px] bg-[#FFFFFF80] rounded-lg p-4 md:p-6 space-y-4 md:space-y-6">
          <h1 className="press text-[16px] md:text-[20px] text-[#FF3D00]">Welcome to Sanmoku Dojo Game Hub</h1>
          <p className="press text-[10px] md:text-[12px]">
            Experience the Excitement at Sanmoku Dojo Game Hub! Dive into a world of thrilling games and engaging
            challenges. Join us and explore the thrill of Sanmoku Dojo's vibrant gaming community today!
          </p>

          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-[80%] md:w-[70%] mx-auto">
            <div className="flex space-x-1 w-full sm:w-[150px] border border-[#FF3D00] h-[30px] text-center rounded-lg items-center p-2">
              <h1 className="press text-[10px] mx-auto text-center text-[#FF3D00]">Deploy Burner</h1>
            </div>
            <Link to={"/app"} className="w-full sm:w-auto">
              <div className="flex space-x-1 bg-[#FF3D00] w-full sm:w-[140px] h-[30px] border border-[#000000] rounded-lg items-center p-2">
                <IoRocketSharp className="text-[#FFFFFF]" />
                <h1 className="press text-[10px] text-[#FFFFFF]">Launch App</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-6 md:mt-14 flex justify-center">
          <img
            src={mech || "/placeholder.svg"}
            alt="mech"
            className="h-auto w-[220px] sm:w-[280px] md:h-[500px] md:w-[320px] object-contain"
          />
        </div>
      </div>

      <div className="w-[95%] md:w-[90%] lg:w-[75%] h-auto rounded-3xl mx-auto bg-[#FFFFFF] flex flex-col md:flex-row justify-between p-4 md:p-6 lg:p-8 nova text-[12px] sm:text-[14px] md:text-[16px]">
        <div className="flex space-x-3 md:space-x-4 w-full md:w-[250px] items-center item-divider mb-4 md:mb-0 justify-center md:justify-start">
          <img
            src={shapes || "/placeholder.svg"}
            alt="shape"
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px]"
          />
          <p>Fully Onchain games arena</p>
        </div>

        <div className="flex space-x-3 md:space-x-4 w-full md:w-[250px] items-center item-divider mb-4 md:mb-0 justify-center md:justify-start">
          <img
            src={avatar || "/placeholder.svg"}
            alt="shape"
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px]"
          />
          <p>Multiplayer features on games</p>
        </div>

        <div className="flex space-x-3 md:space-x-4 w-full md:w-[250px] items-center justify-center md:justify-start">
          <img
            src={tile || "/placeholder.svg"}
            alt="shape"
            className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[70px] md:w-[70px]"
          />
          <p>Play for free from anywhere in the world</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
