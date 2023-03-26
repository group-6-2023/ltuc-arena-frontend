import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import ExerciseList from "./pages/exerciseList/ExerciseList";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="app">
      <NavBar />
      {!isAuthenticated ? (
        <MainPage />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exercise-list" element={<ExerciseList />}></Route>
        </Routes>
      )}

      <Footer />
    </div>
  );
}

export default App;
