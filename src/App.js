import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/"></Route>
        <Route path="/exercise-list"></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>

      <Footer/>
    </>
  );
}


export default App;