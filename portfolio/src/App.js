import './App.css';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
