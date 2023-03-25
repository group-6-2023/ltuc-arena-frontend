import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/exercise-list"></Route>
      </Routes>
    </div>
  );
}

export default App;
