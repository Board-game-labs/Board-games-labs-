import Gamecard from "./Gamecard"
import tictactoe from "../assets/Tictactoe.png"
import chess from "../assets/chess.png"
import sudoku from "../assets/sudoku.png"
import sequence from "../assets/sequence.png"

const Upcoming = () => {
  const games = [
    {
      imgsource: tictactoe,
      gameDetails: "Tic Tac Toe",
    },
    {
      imgsource: chess,
      gameDetails: "Chess",
    },
    {
      imgsource: sudoku,
      gameDetails: "Sudoku",
    },
    {
      imgsource: sequence,
      gameDetails: "Sequence",
    },
  ]

  return (
    <div className="min-h-[340px] md:min-h-[540px] bg-[#D0D1E5] py-6 md:py-8">
      <div className="text-center w-[95%] sm:w-[90%] md:w-[600px] mx-auto pt-3 md:pt-5">
        <h1 className="nova text-[18px] md:text-[25px] text-[#131212] border-b-[#131212] border-b-[3px] md:border-b-[4px] w-[30%] sm:w-[25%] md:w-[20%] mx-auto">
          Games
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-[95%] sm:w-[90%] text-center mx-auto mt-4 bg-[#FFFFFF] rounded-lg p-3 md:p-4">
        {games.map((item, index) => {
          return (
            <div key={index} className="w-full p-2 md:p-4">
              <Gamecard imagesource={item.imgsource} gamedetails={item.gameDetails} />
            </div>
          )
        })}
        <div className="flex justify-end mt-2 w-full text-[12px] md:text-[14px] pr-2">See all</div>
      </div>
    </div>
  )
}

export default Upcoming
