import "./App.css";

import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';




function App() {
  return (
    <div className="App">
      <header>
        <Intro />
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
