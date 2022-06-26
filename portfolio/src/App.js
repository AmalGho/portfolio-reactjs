import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Works from './components/works/Works';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background : darkMode ? 'black' : '',
        color : darkMode ? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
