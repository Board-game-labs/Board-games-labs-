import Layout from "../components/Layout"
import Sidepan from "../components/Sidepan"
import Infoboard from "../components/Infoboard"

const Launch = () => {
  return (
    <Layout>
      <div className="bg-[#DDDEF1] w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-[95%] md:w-[90%] mx-auto py-4 md:py-0">
          <Sidepan />
          <Infoboard />
        </div>
      </div>
    </Layout>
  )
}

export default Launch
