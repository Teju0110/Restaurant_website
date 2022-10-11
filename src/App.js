import './App.css';
import About from './Components/About';
import Awards from './Components/Awards';
import Chef from './Components/Chef';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import NavBar from './Components/NavBar';
import NewsLetter from './Components/NewsLetter';
import Video from './Components/Video';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Home/>
      <About/>
      <Menu/>
      <Chef/>
      <Video/>
      <Awards/>
      <Contact/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
