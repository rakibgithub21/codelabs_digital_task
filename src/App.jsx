
import './App.css'
import Banner from './component/Banner'
import ComprehensiveCare from './component/ComprehensiveCare'
import Faq from './component/Faq'
import Navbar from './component/Navbar'
import Service from './component/Service'
import Testimonial from './component/Testimonial'
import WhoWeAre from './component/WhoWeAre'

function App() {

  return (
    <div className='container mx-auto '>
      <Navbar />
      <Banner />
      <ComprehensiveCare />
      <WhoWeAre />
      <Service />
      <Testimonial />
      <Faq/>
    </div>
  )
}

export default App
