import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MainInfo from './Components/MainInfo';
import Gallery from './Components/Gallery';
import MenuSection from './Components/MenuSection';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <MainInfo />
        <Gallery />
        <MenuSection />
    </div>
  );
}

export default App;
