import Home from './Components/Home';
import Header from './Components/Header';
import Work from './Components/Work';
import Timeline from './Components/Timeline';
import Services from './Components/Services';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer.js';
import { Toaster } from 'react-hot-toast';








function App() {
  return (
    <div >
      <Header/>
      <Home/> 
      <Work/>
      <Timeline />
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster/>

    </div>
  );
}

export default App;
