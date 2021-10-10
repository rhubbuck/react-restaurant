import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MainInfo from './Components/MainInfo';
import Gallery from './Components/Gallery';
import Menu from './Components/MenuSection';
import Footer from './Components/Footer';

function App() {

  // function sendEmail (e) {
  //   e.preventDefault();

  //   emailjs.sendForm('gmail', 'template_javau0m', e.target, 'user_ViWYiGu4yLdFIXPcCAgcc')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // 

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <MainInfo />
        <Gallery />
        <Menu />
        <Footer />
    </div>
  );
}

export default App;
