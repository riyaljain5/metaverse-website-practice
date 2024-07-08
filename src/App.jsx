import About from "./sections/About"
import Hero from "./sections/Hero"
import HowItWorks from "./sections/HowItWorks"
import Insights from "./sections/Insights"
import People from "./sections/People"
import Samantha from "./sections/Samantha"
import WhatsNew from "./sections/WhatsNew"
import World from "./sections/World"

function App() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col px-8  bg-#1A232E py-4">
      <Hero/>
      <About/>
      <World/>
      <HowItWorks/>
      <WhatsNew/>
      <People/>
      <Insights/>
      <Samantha/>
      
    </div>
  )
}

export default App
