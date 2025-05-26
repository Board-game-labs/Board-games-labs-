"use client"

/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react"
import frame from "../assets/Frame202.png"
import "../index.css"
import { IoRocketSharp } from "react-icons/io5"
import { HiMenu, HiX } from "react-icons/hi"
import { Link } from "react-router-dom"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const address = "0x0kenzman"

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="w-[100%] h-auto min-h-[80px] absolute border border-b-[#000000]">
      <div className="flex flex-row justify-between items-center w-[95%] md:w-[85%] mx-auto py-3">
        <Link to={"/"}>
          <div className="flex w-[150px] md:w-[200px] my-[10px]">
            <img src={frame || "/placeholder.svg"} alt="logo" />
          </div>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-[#FF3D00]" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
          <h1 className="press text-[12px]">About us</h1>
          <Link to={"/app"}>
            <div className="flex space-x-1 bg-[#FF3D00] w-[140px] h-[40px] border border-[#000000] rounded-lg items-center p-2">
              <IoRocketSharp className="text-[#FFFFFF]" />
              <h1 className="press text-[10px] text-[#FFFFFF]">Launch App</h1>
            </div>
          </Link>
          {/* <div className="flex w-[140px] border border-[#FF3D00] h-[40px] rounded-lg items-center p-2">
            <h1 className="press text-[10px] text-[#FF3D00] flex mx-auto">{address}</h1>
          </div> */}
          {/* <div className="flex w-[140px] border border-[#FF3D00] h-[40px] rounded-lg items-center p-2">
            <button className="press text-[8px] text-center text-[#FF3D00] flex mx-auto">clear burners</button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 border-t border-gray-200 flex flex-col space-y-4">
          <h1 className="press text-[14px] text-center">About us</h1>
          <Link to={"/app"}>
            <div className="flex space-x-1 bg-[#FF3D00] w-full h-[40px] border border-[#000000] rounded-lg items-center justify-center p-2">
              <IoRocketSharp className="text-[#FFFFFF]" />
              <h1 className="press text-[12px] text-[#FFFFFF]">Launch App</h1>
            </div>
          </Link>
          {/* <div className="flex w-full border border-[#FF3D00] h-[40px] rounded-lg items-center justify-center p-2">
            <h1 className="press text-[12px] text-[#FF3D00]">{address}</h1>
          </div> */}
          {/* <div className="flex w-full border border-[#FF3D00] h-[40px] rounded-lg items-center justify-center p-2">
            <button className="press text-[12px] text-center text-[#FF3D00]">clear burners</button>
          </div> */}
        </div>
      )}
    </div>
  )
}

export default Header