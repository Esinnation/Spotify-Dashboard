import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="h-screen hidden lg:block">
        <div className="flex h-[92%]  w-full">
          <Navbar/> 
          <div className="flex flex-col w-full">
            <Header/>
            <Hero/>
          </div>
        </div>
          <Footer/>
      </div>
      <div className="lg:hidden flex justify-center items-center h-screen ">
          <h2>Open on a Pc</h2>
      </div>
    </>
  )
}

export default App
