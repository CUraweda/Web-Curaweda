import ClientPartner from "./components/ClientPartner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Media from "./components/Media";
import NavBar from "./components/NavBar";
import Portofolio from "./components/Portofolio";
import Usp from "./components/Usp";
import Video from "./components/Video";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Usp />
      <Portofolio />
      <ClientPartner />
      <Media />
      <Video />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
