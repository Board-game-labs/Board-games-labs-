"use client"

import { useState, useEffect } from "react"
import { Center } from "@chakra-ui/react"
import { useAppContext } from "../context/Appcontext"

const Joinchooseavatar = () => {
  const [selectedAvatar, setSelected] = useState(0)
  const [xbackgroundColor, setXBackgroundColor] = useState(false)
  const [obackgroundColor, setOBackgroundColor] = useState(false)
  const [gameID, setgameID] = useState("")
  const { setSharedavatar, setjoininputdialog, sharedgameID, joininput, setSharedgameID } = useAppContext()

  const handleXSelection = () => {
    setSelected(1)
    setXBackgroundColor(true)
    setOBackgroundColor(false)
    setSharedavatar("X")
  }
  const handleOSelection = () => {
    setSelected(2)
    setXBackgroundColor(false)
    setOBackgroundColor(true)
    setSharedavatar("O")
  }
  const handleAvatarSpawn = async () => {
    // getplayerdet(account)
    setSharedgameID(joininput)
    console.log("avatar spawn")
    //   console.log('shared',sharedgameID.toString() )
    //   console.log('set',gameID )

    setjoininputdialog(false)
  }
  useEffect(() => {
    setgameID(sharedgameID)
  }, [sharedgameID])

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
        <h1 className="mt-[3%] md:mt-[6%] press text-[14px]">Choose your Avatar</h1>
        <div className="w-[95%] md:w-[90%] search mx-auto rounded-2xl items-center">
          <div className="flex space-x-4 press w-[100%] h-[45px] mx-auto my-[5%] md:my-[7%]">
            <div
              className="border-r border-r-black w-[50%] cursor-pointer px-2 flex items-center justify-center"
              onClick={handleXSelection}
              style={xbackgroundColor ? { backgroundColor: "grey" } : { backgroundColor: "" }}
            >
              X
            </div>
            <div
              className="w-[50%] cursor-pointer flex items-center justify-center"
              onClick={handleOSelection}
              style={obackgroundColor ? { backgroundColor: "grey" } : { backgroundColor: "" }}
            >
              O
            </div>
          </div>
          <div className="flex bg-[#FF3D00] w-[140px] mx-auto h-[30px] mt-4 rounded-lg items-center p-2 cursor-pointer">
            <h1 className="press text-[10px] text-[#FFFFFF] text-center w-[100%]" onClick={handleAvatarSpawn}>
              Start
            </h1>
          </div>
        </div>
      </div>
    </Center>
  )
}

export default Joinchooseavatar
