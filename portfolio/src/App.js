import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Works from './components/works/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
