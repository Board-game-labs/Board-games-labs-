"use client"

import type React from "react"
import { useState } from "react"
import { Center } from "@chakra-ui/react"

const Register = () => {
  const [username, setUsername] = useState("")

  const handleregisterplayer = async () => {
    console.log("registration")
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
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
      <div className="mt-10 md:mt-20 h-auto min-h-[200px] w-[90%] max-w-[400px] bg-[#D7D8EC] rounded-xl text-center space-y-2 p-4 py-6">
        <h1 className="mt-[3%] md:mt-[6%] press text-[14px] md:text-[16px]">Choose Username</h1>
        <div className="w-[95%] md:w-[90%] mx-auto rounded-2xl items-center">
          <form className="h-[100%] w-[100%] mx-auto items-center p-1">
            <div className="h-[45px] text-center">
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="username..."
                className="w-[100%] h-full px-2 rounded-lg items-center text-[12px] md:text-[14px]"
              />
            </div>
          </form>
          <div
            className="flex bg-[#FF3D00] w-[140px] mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer"
            onClick={handleregisterplayer}
          >
            <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]">Submit</h1>
          </div>
        </div>
      </div>
    </Center>
  )
}

export default Register
