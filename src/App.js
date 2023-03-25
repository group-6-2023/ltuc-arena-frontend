import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app">

      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/exercise-list"></Route>
      </Routes>

      <Footer />
      
    </div>
  );
}


export default App;