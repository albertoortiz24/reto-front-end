import './App.css';
import {Navbar} from "./Components/navbar/navbar"
import {Footer} from "./Components/footer/footer"
import {Main} from "./Components/main/main"
import {Section1} from  "./Components/main/section1"
import {Section2} from "./Components/main/section2"

function App() {
  return (
    <>
    <Navbar/><br/>
    <Main/><br/>
    <Section1/> <br/>
    <Section2/><br/>
    <Footer/>
    </>
  );
}

export default App;
