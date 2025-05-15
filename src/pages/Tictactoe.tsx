"use client"

import { useEffect, useState } from "react"
import purple from "../assets/purple.png"
import blue from "../assets/blue.png"
import yellow from "../assets/yellow.png"
import zero from "../assets/zero.png"
import ex from "../assets/ex.png"
import Creategame from "../components/Creategame"
import Chooseavatar from "../components/Chooseavatar"
import JoinChooseavatar from "../components/Joinchooseavatar"
import Joingame from "../components/Joingame"
import Result from "../components/Result"
import { useAppContext } from "../context/Appcontext"
import { getEntityIdFromKeys } from "@dojoengine/utils"
import type { Entity } from "@dojoengine/recs"

type BoardStat = {
  a_1?: bigint // 88n = "X", 79n = "O"
  a_2?: bigint
  a_3?: bigint
  b_1?: bigint
  b_2?: bigint
  b_3?: bigint
  c_1?: bigint
  c_2?: bigint
  c_3?: bigint
}

type responsetype = {
  gameresponse?: bigint
}

const Tictactoe = () => {
  const [reg, setReg] = useState(true)
  const {
    sharedavatar,
    setCreategame,
    creategame,
    avatardialog,
    sharedgameID,
    setjoindialog,
    joindialog,
    joinInputdilog,
    A1,
    A2,
    A3,
    B1,
    B2,
    B3,
    C1,
    C2,
    C3,
    setA1,
    setA2,
    setA3,
    setB1,
    setB2,
    setB3,
    setC1,
    setC2,
    setC3,
    resultdialog,
    setresultdialog,
    setwinningresult,
    playerone,
    playertwo,
  } = useAppContext()

  const moves = []

  // entity id we are syncing
  const entityId = getEntityIdFromKeys([BigInt(sharedgameID ?? 0)]) as Entity
  // const entityIdtwo : Type.BigInt = BigInt(list()[0].address)
  // const contractaddress  = "0x300629f97a13bfe0575f59dd966260496e97caf3ab1944698a1773b3867845" as Entity

  // get current component values
  const boardstat: BoardStat = {
    a_1: 600n,
    a_2: 600n,
    a_3: 600n,
    b_1: 600n,
    b_2: 600n,
    b_3: 600n,
    c_1: 600n,
    c_2: 600n,
    c_3: 600n,
  }
  // console.log(boardstat)

  const response: responsetype = {
    gameresponse: undefined,
  }
  // console.log(response)

  // const ercbalance = useComponentValue(Ercbalance,contractaddress,entityIdtwo)
  // console.log(ercbalance);

  useEffect(() => {
    if (boardstat?.a_1 == 88n) {
      setA1("X")
    }
    if (boardstat?.a_1 == 79n) {
      setA1("O")
    }
    if (boardstat?.a_2 == 88n) {
      setA2("X")
    }
    if (boardstat?.a_2 == 79n) {
      setA2("O")
    }
    if (boardstat?.a_3 == 88n) {
      setA3("X")
    }
    if (boardstat?.a_3 == 79n) {
      setA3("O")
    }
    if (boardstat?.b_1 == 88n) {
      setB1("X")
    }
    if (boardstat?.b_1 == 79n) {
      setB1("O")
    }
    if (boardstat?.b_2 == 88n) {
      setB2("X")
    }
    if (boardstat?.b_2 == 79n) {
      setB2("O")
    }
    if (boardstat?.b_3 == 88n) {
      setB3("X")
    }
    if (boardstat?.b_3 == 79n) {
      setB3("O")
    }
    if (boardstat?.c_1 == 88n) {
      setC1("X")
    }
    if (boardstat?.c_1 == 79n) {
      setC1("O")
    }
    if (boardstat?.c_2 == 88n) {
      setC2("X")
    }
    if (boardstat?.c_2 == 79n) {
      setC2("O")
    }
    if (boardstat?.c_3 == 88n) {
      setC3("X")
    }
    if (boardstat?.c_3 == 79n) {
      setC3("O")
    }
    // if(boardstat?.a_1 != 0n && boardstat?.a_2 != 0n && boardstat?.a_3 != 0n && boardstat?.b_1 != 0n && boardstat?.b_2 != 0n && boardstat?.b_3 != 0n && boardstat?.c_1 != 0n && boardstat?.c_2 != 0n && boardstat?.c_3 != 0n && boardstat != undefined){
    //   setwinningresult("DRAW")
    //   setresultdialog(true)
    // }
    if (response?.gameresponse == 6361852863635204326893629820499n && response != undefined) {
      setwinningresult("PLAYER X WINS")
      setresultdialog(true)
    }
    if (response?.gameresponse == 6361852863635204316998025170515n && response != undefined) {
      setwinningresult("PLAYER 0 WINS")
      setresultdialog(true)
    }
    if (
      boardstat?.a_1 == 0n &&
      boardstat?.a_2 == 0n &&
      boardstat?.a_3 == 0n &&
      boardstat?.b_1 == 0n &&
      boardstat?.b_2 == 0n &&
      boardstat?.b_3 == 0n &&
      boardstat?.c_1 == 0n &&
      boardstat?.c_2 == 0n &&
      boardstat?.c_3 == 0n &&
      boardstat != undefined
    ) {
      setA1(null)
      setA2(null)
      setA3(null)
      setB1(null)
      setB2(null)
      setB3(null)
      setC1(null)
      setC2(null)
      setC3(null)
    }
  }, [boardstat])

  const handleA1 = async () => {
    console.log("a")
  }

  const handleA2 = async () => {
    console.log("a")
  }

  const handleA3 = async () => {
    console.log("a")
  }

  const handleB1 = async () => {
    console.log("a")
  }

  const handleB2 = async () => {
    console.log("a")
  }

  const handleB3 = async () => {
    console.log("a")
  }

  const handleC1 = async () => {
    console.log("a")
  }

  const handleC2 = async () => {
    console.log("a")
  }

  const handleC3 = async () => {
    console.log("a")
  }

  const handlerestart = async () => {
    console.log("a")
  }

  return (
    <>
      <div className="w-full min-h-screen bg-cover custom">
        {/* <Register /> */}
        {creategame && <Creategame />}
        {avatardialog && <Chooseavatar />}
        {joindialog && <Joingame />}
        {joinInputdilog && <JoinChooseavatar />}
        {resultdialog && <Result />}

        {/* Top Info Bar */}
        <div className="w-[95%] md:w-[90%] mx-auto pt-4 md:pt-[8%] flex justify-center md:justify-end">
          <div className="press flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 border border-[#000000] rounded-xl w-full sm:w-[350px] justify-between h-auto sm:h-[70px] p-3 items-center text-center bg-white/10 backdrop-blur-sm">
            <div className="w-full sm:w-[35%] space-y-1 sm:space-y-2">
              <h1 className="text-[12px] md:text-[14px]">Token</h1>
              <p className="text-[10px]">$345,096</p>
            </div>

            <div className="w-full sm:w-[35%] space-y-1 sm:space-y-2">
              <h1 className="text-[12px] md:text-[14px]">Wallet</h1>
              <p className="text-[10px]">0xghhghgshdf...</p>
            </div>

            <div className="w-full sm:w-[30%] space-y-1 sm:space-y-2">
              <h1 className="text-[12px] md:text-[14px]">Avatar</h1>
              <p className="text-[10px]">{sharedavatar ? sharedavatar : "load"}</p>
            </div>
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex flex-col md:flex-row w-[95%] md:w-[90%] h-auto space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10 mt-4 mx-auto p-2 md:p-4">
          {/* Moves List */}
          <div className="w-full md:w-[30%] h-auto md:h-[80%] p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <h1 className="press text-[12px] md:text-[14px] text-center">Moves</h1>
            <div className="space-y-1 md:space-y-2 mt-3 md:mt-4 max-h-[150px] sm:max-h-[200px] md:max-h-none overflow-y-auto">
              <p className="nova text-[10px] md:text-[14px] text-center">
                {A1 === "X" ? "X played to A1" : A1 === "O" ? "O played to A1" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {A2 === "X" ? "X played to A2" : A2 === "O" ? "O played to A2" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {A3 === "X" ? "X played to A3" : A3 === "O" ? "O played to A3" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {B1 === "X" ? "X played to B1" : B1 === "O" ? "O played to B1" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {B2 === "X" ? "X played to B2" : B2 === "O" ? "O played to B2" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {B3 === "X" ? "X played to B3" : B3 === "O" ? "O played to B3" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {C1 === "X" ? "X played to C1" : C1 === "O" ? "O played to C1" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {C2 === "X" ? "X played to C2" : C2 === "O" ? "O played to C2" : null}
              </p>
              <p className="nova text-[10px] md:text-[14px] text-center">
                {C3 === "X" ? "X played to C3" : C3 === "O" ? "O played to C3" : null}
              </p>
            </div>
          </div>

          {/* Game Board Area */}
          <div className="w-full md:w-[70%] lg:w-[60%]">
            {/* Game Controls */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-20 mb-4 justify-center sm:justify-start">
              <div
                className="flex space-x-2 md:space-x-3 items-center cursor-pointer"
                onClick={() => setCreategame(true)}
              >
                <img src={purple || "/placeholder.svg"} alt="purple" className="w-6 h-6 md:w-8 md:h-8" />
                <h1 className="press text-[10px] md:text-[12px]">Create Game</h1>
              </div>
              <div className="flex space-x-2 md:space-x-3 items-center cursor-pointer" onClick={handlerestart}>
                <img src={yellow || "/placeholder.svg"} alt="yellow" className="w-6 h-6 md:w-8 md:h-8" />
                <h1 className="press text-[10px] md:text-[12px]">Restart Game</h1>
              </div>
            </div>

            {/* Game Board */}
            <div className="w-full aspect-square max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto border-[6px] sm:border-[8px] border-[#FF3D00] customimage rounded-lg">
              <div className="w-[90%] h-[33.33%] flex mx-auto">
                <div
                  className="w-[33.33%] border-r-[6px] sm:border-r-[8px] border-b-[6px] sm:border-b-[8px] border-b-[#555555] border-r-[#555555] flex items-center justify-center cursor-pointer"
                  onClick={handleA1}
                >
                  {A1 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : A1 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div
                  className="w-[33.33%] border-b-[6px] sm:border-b-[8px] border-b-[#555555] h-[100%] flex items-center justify-center"
                  id="1"
                  onClick={handleA2}
                >
                  {A2 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : A2 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div
                  className="w-[33.33%] border-l-[6px] sm:border-l-[8px] border-l-[#555555] border-b-[6px] sm:border-b-[8px] border-b-[#555555] h-[100%] flex items-center justify-center"
                  id="2"
                  onClick={handleA3}
                >
                  {A3 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : A3 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
              </div>
              <div className="w-[90%] flex h-[33.33%] mx-auto">
                <div
                  className="w-[33.33%] border-r-[6px] sm:border-r-[8px] border-b-[6px] sm:border-b-[8px] border-b-[#555555] border-r-[#555555] h-[100%] flex items-center justify-center"
                  id="0"
                  onClick={handleB1}
                >
                  {B1 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : B1 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div
                  className="w-[33.33%] border-b-[6px] sm:border-b-[8px] border-b-[#555555] h-[100%] flex items-center justify-center"
                  id="1"
                  onClick={handleB2}
                >
                  {B2 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : B2 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div
                  className="w-[33.33%] border-l-[6px] sm:border-l-[8px] border-l-[#555555] border-b-[6px] sm:border-b-[8px] border-b-[#555555] h-[100%] flex items-center justify-center"
                  id="2"
                  onClick={handleB3}
                >
                  {B3 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : B3 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
              </div>
              <div className="w-[90%] flex h-[33.33%] mx-auto">
                <div
                  className="w-[33.33%] border-r-[6px] sm:border-r-[8px] border-r-[#555555] h-[100%] flex items-center justify-center"
                  id="0"
                  onClick={handleC1}
                >
                  {C1 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : C1 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div className="w-[33.33%] h-[100%] flex items-center justify-center" id="1" onClick={handleC2}>
                  {C2 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : C2 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
                <div
                  className="w-[33.33%] border-l-[6px] sm:border-l-[8px] border-l-[#555555] h-[100%] flex items-center justify-center"
                  id="2"
                  onClick={handleC3}
                >
                  {C3 === "X" ? (
                    <img src={ex || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : C3 === "O" ? (
                    <img src={zero || "/placeholder.svg"} alt="avatar" className="w-[60%] md:w-[80%]" />
                  ) : null}
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
              <h1 className="press text-[10px] md:text-[12px]">Game ID: {sharedgameID}</h1>
              <div
                className="flex space-x-2 md:space-x-3 items-center cursor-pointer"
                onClick={() => setjoindialog(true)}
              >
                <div className="flex bg-[#FF3D00] w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 border border-black rounded-full items-center justify-center cursor-pointer">
                  <span className="text-white text-[12px] md:text-[14px]">+</span>
                </div>
                <h1 className="press text-[10px] md:text-[12px]">Join Game</h1>
              </div>
              <div className="flex space-x-2 md:space-x-3 items-center">
                <img src={blue || "/placeholder.svg"} alt="blue" className="w-6 h-6 md:w-8 md:h-8" />
                <h1 className="press text-[10px] md:text-[12px]">Change Background</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tictactoe
