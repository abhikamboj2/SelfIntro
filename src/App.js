import './App.scss';
import Navbar  from '../src/components/navbar/Navbar.jsx';
import Services  from '../src/components/services/Services.jsx';
// import Test from './Test.js';
import Hero from './components/hero/Hero.jsx';
import Parallax from './components/parrallax/Parallax.jsx';
import Portfolio from './Portfolio/Portfolio.jsx';


function App() {
  return (
    <div className="App">
      <section id='Homepage'>
        
          <Navbar></Navbar>
          <Hero></Hero>

    
      </section>
      <section id='Services'>
           <Parallax type="services"></Parallax>
      </section>
      <section >
         <Services></Services>
      </section>
     
  
      
    </div>
    
 
  );
}

export default App;
