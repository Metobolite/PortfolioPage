import Navbar from './js/navbar';
import Home from './js/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './js/About';
import Projects from './js/Projects';
import Contact from './js/Contact';
import Footer from './js/Footer';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
