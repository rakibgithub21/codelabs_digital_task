
import './App.css'
import Banner from './component/Banner'
import ComprehensiveCare from './component/ComprehensiveCare'
import Navbar from './component/Navbar'
import Service from './component/Service'
import WhoWeAre from './component/WhoWeAre'

function App() {

  return (
    <div className='container mx-auto '>
      <Navbar />
      <Banner />
      <ComprehensiveCare />
      <WhoWeAre />
      <Service/>
    </div>
  )
}

export default App
