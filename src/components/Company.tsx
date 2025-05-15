import frame from "../assets/Frame202.png"

const Company = () => {
  return (
    <div className="h-auto min-h-[230px] w-[95%] md:w-[90%] lg:w-[80%] mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-24 space-y-6 md:space-y-0">
        <div className="w-[150px] md:w-[200px] mx-auto md:mx-0">
          <img src={frame || "/placeholder.svg"} alt="logo" className="mt-[10%] md:mt-[20%]" />
        </div>
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
          <div className="w-full sm:w-[200px]">
            <h1 className="mb-4 nova text-[20px] md:text-[24px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
          </div>
          <div className="w-full sm:w-[200px]">
            <h1 className="mb-4 nova text-[20px] md:text-[24px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
            <h1 className="nova text-[14px]">Lorem</h1>
          </div>
          <div className="w-full sm:w-[200px]">
            <h1 className="mb-4 nova text-[20px] md:text-[24px]">Lorem</h1>
            <p className="nova text-[14px]">
              Lorem ipsum dolor sit amet consectetur. Ut commodo amet accumsan blandit suscipit diam sed morbi elit.
              Eleifend egestas in tempus aliquet.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Company
