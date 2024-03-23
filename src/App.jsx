import About from "./components/About/About";
import Arts from "./components/Arts/Arts";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MindMap from "./components/MindMap/MindMap";
import Mint from "./components/Mint/Mint";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About />
      <MindMap />
      <Faq />
      <Arts />
      <Mint />
      <Footer />
    </>
  );
}

export default App;
