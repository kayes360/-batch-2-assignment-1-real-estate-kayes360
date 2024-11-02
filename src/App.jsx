 
import AboutSection from './Sections/AboutSection'
import AvailableRooms from './Sections/AvailableRooms'
import ContactSection from './Sections/ContactSection'
import CTASection from './Sections/CTASection'
import FAQSection from './Sections/FAQSection'
import FeaturesSection from './Sections/FeaturesSection'
import HeroSection from './Sections/HeroSection'
import NavBar from './Sections/NavBar'
import TeamSection from './Sections/TeamSection'
import FooterSection from './Sections/FooterSection'

function App() { 

  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <AvailableRooms/>
      <AboutSection/>
      <CTASection/>
      <FAQSection/>
      <TeamSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default App
