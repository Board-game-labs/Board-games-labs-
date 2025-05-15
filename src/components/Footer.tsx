const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-[70px] bg-[#D0D1E5] flex justify-center items-center text-center nova p-4 md:p-6 text-[12px] md:text-[14px]">
      <p>&copy; {currentYear} Sanmoku dojo. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
