import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Certification from "./Components/Certification";
import Starfield from "./Components/elements/Starfield";

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-300 via-blue-400 to-blue-950 bg-fixed bg-cover bg-no-repeat min-h-screen">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Work />
      <Certification />
      <Contact />
      <Starfield />
    </div>
  );
}

export default App;
