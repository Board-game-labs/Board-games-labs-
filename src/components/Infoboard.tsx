import Welcome from "./Welcome"
import Partygame from "./Partygame"

const Infoboard = () => {
  return (
    <div className="w-full md:w-[70%] mt-4 md:mt-[9%] px-2 sm:px-0">
      <Welcome />
      <Partygame />
    </div>
  )
}

export default Infoboard
