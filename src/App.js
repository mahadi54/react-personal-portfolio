
import './App.css';
import './css/styles.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills';
import PortfolioData from './PortfolioData/PortfolioData';
import SinglePortfolio from './components/SinglePortfolio/SinglePortfolio';

function App() {
  const elements = PortfolioData.map((singlePort)=>{
    return  <SinglePortfolio singlePort={singlePort}  />
   

})
console.log(elements)

  return (
    <div className="page-top">
      <Navbar/>
      <Header />
      <Portfolio elements={elements}/>
      <Skills/>
      <About />
      
      <Contact />
      <Footer />
   
     
    </div>
  );
}

export default App;
