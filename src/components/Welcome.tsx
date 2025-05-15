import welcomeframe from "../assets/welcomeframe.png"

const Welcome = () => {
  const data = [
    {
      name: "kenzman",
      amount: "145,000",
    },
    {
      name: "sniper",
      amount: "25,000",
    },
    {
      name: "flemz",
      amount: "35,000",
    },
    {
      name: "scooper",
      amount: "2,000",
    },
    {
      name: "deadlypause",
      amount: "1,000",
    },
    {
      name: "masher",
      amount: "500",
    },
    {
      name: "scout",
      amount: "200",
    },
  ]

  return (
    <div className="w-full h-auto bg-[#100502] rounded-lg flex flex-col md:flex-row p-3 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-[70%] h-[200px] md:h-[310px]">
        <img src={welcomeframe || "/placeholder.svg"} alt="welcome" className="h-full w-full object-cover rounded-lg" />
      </div>
      <div className="h-auto w-full md:w-[30%] bg-[#353D44] rounded-lg p-3 md:p-4">
        <h1 className="text-[#FFFFFF] nova text-[12px] md:text-[14px] text-center">Top winners</h1>
        <div className="h-0.5 w-full bg-[#FFFFFF] flex items-center mt-1"></div>
        <div className="overflow-y-auto max-h-[200px] md:max-h-[90%] mt-2">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between w-[95%] md:w-[90%] h-[35px] md:h-[40px] text-[10px] md:text-[13px] nova mt-2 md:mt-3 bg-gradient-to-r from-[#0057FF1F] to-[#6F767E00] shadow-2xl p-2 md:p-3 rounded-xl items-center mx-auto"
              >
                <div className="flex text-white">
                  <h1>{item.name}</h1>
                </div>
                <div className="text-white">
                  <h1>${item.amount}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Welcome
