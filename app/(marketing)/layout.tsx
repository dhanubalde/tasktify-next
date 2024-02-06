import Footer from "./_components/footer"
import Navbar from "./_components/navbar"



const MarketingLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar/>
      <main className="pt-40 pb-40  md:p-[200px] lg:p-[250px]">
        { children}
      </main>
      <Footer/> 
    </div>
  )
}

export default MarketingLayout