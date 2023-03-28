import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home";
import { useAuth0 } from "@auth0/auth0-react";
import ExerciseList from "./pages/exerciseList/ExerciseList";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
function App() {
  const [userList, setUserList] = useState([]);
  const { isAuthenticated, isLoading } = useAuth0();
  const getUsers = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/allUsers`;
    const { data } = await axios(url);
    setUserList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Spinner
          animation="border"
          variant="info"
          style={{ height: "100vh" }}
        />
      ) : (
        <>
          <NavBar />
          {!isAuthenticated ? (
            <MainPage />
          ) : (
            <Routes>
              <Route path="/" element={<Home userList={userList} />}></Route>
              <Route path="/exercise-list" element={<ExerciseList />}></Route>
            </Routes>
          )}

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
