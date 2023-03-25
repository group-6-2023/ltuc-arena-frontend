import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/"></Route>
        <Route path="/exercise-list"></Route>
      </Routes>

      <Footer />
    </div>
  );
}


export default App;