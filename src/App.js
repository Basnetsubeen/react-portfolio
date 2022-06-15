import "./App.css";
import Skills from "./Components/Skills";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Footer";

function App() {
  return (
    <div class="wrapper">
      {/* <!-- hero section --> */}
      <Hero />
      {/* <!-- skills section --> */}
      <Skills />
      {/* <!-- project section --> */}
      <Projects />
      {/* <!-- About Me section --> */}
      <AboutMe />
      {/* <!-- Contact section --> */}
      <ContactMe />
      {/* <!-- footer section --> */}
      <Footer />
    </div>
  );
}

export default App;
