"use client"

import type React from "react"
import { useState } from "react"
import { Center } from "@chakra-ui/react"
import { useAppContext } from "../context/Appcontext"

const Joingame = () => {
  const [input, setInputId] = useState("")
  const { setjoindialog, setjoininput, setjoininputdialog } = useAppContext()

  const handlejoinGame = () => {
    // spawnavatar(account,2,input, (list()[1].address).toString())
    setjoininputdialog(true)
    setjoindialog(false)
    console.log("joined")
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setInputId(event.target.value)
    setjoininput(event.target.value)
  }
  return (
    <Center
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      backgroundColor="rgba(0, 0, 0, 0.8)"
      zIndex="9999"
    >
      <div className="mt-10 md:mt-20 h-auto w-[90%] max-w-[400px] bg-[#D7D8EC] rounded-xl text-center space-y-2 p-4 py-6">
        <h1 className="mt-[3%] md:mt-[6%] press text-[14px]">Join Game</h1>
        <div className="w-[95%] md:w-[90%] search mx-auto rounded-2xl items-center">
          <form className="h-[100%] w-[100%] mx-auto items-center p-1">
            <div className="h-[45px] text-center">
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Game ID"
                className="w-[100%] h-full px-2 rounded-lg items-center text-[13px] md:text-base"
              />
            </div>
          </form>
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
            <div
              className="flex bg-[#FF3D00] w-full sm:w-[140px] mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer"
              onClick={handlejoinGame}
            >
              <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]">Next</h1>
            </div>
            <div
              className="flex bg-[#FF3D00] w-full sm:w-[140px] mx-auto h-[30px] rounded-lg items-center p-2 cursor-pointer"
              onClick={() => setjoindialog(false)}
            >
              <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]">Cancel</h1>
            </div>
          </div>
        </div>
      </div>
    </Center>
  )
}

export default Joingame
