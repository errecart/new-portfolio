import './App.css';
import NavBar from "./components/navBar/NavBar";
import { Sidebar } from './components/sideBar/Sidebar';
import Container from './sections/Container/Container';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Container/>
      <NavBar/>
    </div>
  );
}

export default App;
