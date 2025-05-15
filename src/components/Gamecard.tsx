/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react"

interface CardProp {
  imagesource: any
  gamedetails: string
}

const Gamecard: React.FC<CardProp> = ({ imagesource, gamedetails }) => {
  return (
    <div className="border p-2 border-[#FF3D00] rounded-lg items-center w-full mx-auto bg-cover hover:scale-105 transition-transform duration-200">
      <img
        src={imagesource || "/placeholder.svg"}
        alt={gamedetails}
        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] mx-auto object-contain"
      />
      <p className="nova mt-1 text-[11px] sm:text-[12px] md:text-[14px] text-white text-center">{gamedetails}</p>
    </div>
  )
}

export default Gamecard
