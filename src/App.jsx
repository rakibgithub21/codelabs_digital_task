
import './App.css'
import Banner from './component/Banner'
import ComprehensiveCare from './component/ComprehensiveCare'
import Faq from './component/Faq'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Offer from './component/Offer'
import Service from './component/Service'
import Testimonial from './component/Testimonial'
import WhoWeAre from './component/WhoWeAre'

function App() {

  return (
    <div >
      <Navbar />
      <Banner />
      {/* <ComprehensiveCare /> */}
      <WhoWeAre />
      <Service />
      <Testimonial />
      <Faq />
      <Offer />
      <Footer/>
    </div>
  )
}

export default App
