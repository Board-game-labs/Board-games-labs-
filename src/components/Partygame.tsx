import Gamecard from "./Gamecard"
import tic from "../assets/Tictactoe.png"
import chess from "../assets/chess.png"
import sudoku from "../assets/sudoku.png"
import sequence from "../assets/sequence.png"
import mancala from "../assets/Mancala.png"
import novelty from "../assets/novelty.png"
import drinknopoly from "../assets/drinknopoly.png"
import ping from "../assets/Ping.png"
import { Link } from "react-router-dom"

const Partygame = () => {
  const games = [
    {
      id: 1,
      imgsource: tic,
      gameDetails: "Tic tac toe",
    },
    {
      id: 2,
      imgsource: chess,
      gameDetails: "Onchain Chess",
    },
    {
      id: 3,
      imgsource: sudoku,
      gameDetails: "Sudoku game",
    },
    {
      id: 4,
      imgsource: sequence,
      gameDetails: "Sequence game",
    },
    {
      id: 5,
      imgsource: mancala,
      gameDetails: "Onchain Mancala",
    },
    {
      id: 6,
      imgsource: novelty,
      gameDetails: "Novelty game",
    },
    {
      id: 7,
      imgsource: drinknopoly,
      gameDetails: "Drink nopoly",
    },
    {
      id: 8,
      imgsource: ping,
      gameDetails: "Onchain Ping",
    },
    {
      id: 6,
      imgsource: novelty,
      gameDetails: "Novelty game",
    },
    {
      id: 7,
      imgsource: drinknopoly,
      gameDetails: "Drink nopoly",
    },
    {
      id: 8,
      imgsource: ping,
      gameDetails: "Onchain Ping",
    },
  ]
  return (
    <div className="w-full h-auto bg-[#100502] rounded-lg mt-4">
      <div className="w-full mx-auto pt-4 md:pt-5 px-4 md:px-8">
        <h1 className="nova text-[18px] md:text-[25px] text-white border-b-white border-b-[3px] md:border-b-[4px] w-[30%] sm:w-[25%] md:w-[20%]">
          Games
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 w-[95%] md:w-[90%] text-white text-center mx-auto mt-3 md:mt-4 overflow-y-auto max-h-[350px] sm:max-h-[380px] md:max-h-[400px] p-2 md:p-4">
        {games.map((item, index) => {
          return (
            <div key={index} className="w-full p-1 sm:p-2 md:p-4">
              <Link to={item.gameDetails == "Tic tac toe" ? "https://sanmoku-tictactoe.vercel.app/" : `/Game/${item.gameDetails}`} className="w-full h-full" rel="noopener noreferrer" target="_blank">
                <Gamecard imagesource={item.imgsource} gamedetails={item.gameDetails} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Partygame

