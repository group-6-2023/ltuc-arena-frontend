import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route to="/"></Route>
        <Route to="/exercise-list"></Route>
      </Routes>
    </>
  );
}

export default App;
