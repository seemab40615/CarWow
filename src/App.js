import './App.css';
import FirstSection from './Components/FirstSection/FirstSection';
import AdsHead from './Components/Header/AdsHead';
import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar';
import SecondSection from './Components/SecondSection/SecondSection';
import EightSection from './Components/eightSection/EightSection';
import FooterBar from './Components/footer/FooterBar';
import FooterLower from './Components/footer/FooterLower';
import FooterMiddle from './Components/footer/FooterMiddle';
import Footerupper from './Components/footer/Footerupper';
import Fourthsection from './Components/fourthsection/Fourthsection';
import SeventhSection from './Components/seventhSection/SeventhSection';
import SixthSection from './Components/sixthSection/SixthSection';
import ThirdSection from './Components/thirdsec/ThirdSection';

function App() {
  return (
    <div className="App">
      <div className='header'>
     <Navbar/>
     <Header/>
     <AdsHead/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <Fourthsection/>
     <SixthSection/>
     <EightSection/>
     <SeventhSection/>
     <Footerupper/>
     <FooterMiddle/>
     <FooterLower/>
     <hr/>
     <FooterBar/>
     </div>
    </div>
  );
}

export default App;
