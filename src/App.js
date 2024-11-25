import './App.css';
import NavBar from "./components/navBar/NavBar";
import Contact from './sections/ContactMe/Contact';
import Education from './sections/Education/Education';
import Experience from './sections/Experience/Experience';
import Main from './sections/Main/Main';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Education/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
