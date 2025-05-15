"use client"

import { useState } from "react"
import { Center } from "@chakra-ui/react"
import { useAppContext } from "../context/Appcontext"

const Result = () => {
  const [gaemeid, setGameID] = useState("")
  const { setresultdialog, winningresult, sharedgameID, playerone, playertwo } = useAppContext()

  const handlerestart = async () => {
    console.log("restart")
    setresultdialog(false)
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
      <div className="mt-10 md:mt-20 h-auto min-h-[230px] w-[90%] max-w-[300px] bg-[#D7D8EC] rounded-xl text-center space-y-2 p-4 py-6">
        <h1 className="mt-[10%] md:mt-[20%] press text-[14px] md:text-[16px]">{winningresult}</h1>
        <div className="w-[95%] md:w-[90%] mx-auto rounded-2xl items-center mt-4">
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
            <div
              className="flex bg-[#FF3D00] w-full sm:w-[140px] mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer"
              onClick={handlerestart}
            >
              <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]">Restart</h1>
            </div>
            <div
              className="flex bg-[#FF3D00] w-full sm:w-[140px] mx-auto h-[30px] rounded-lg items-center p-2 cursor-pointer"
              onClick={() => setresultdialog(false)}
            >
              <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]">Quit</h1>
            </div>
          </div>
        </div>
      </div>
    </Center>
  )
}

export default Result
