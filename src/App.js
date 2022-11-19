import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Help from "./component/Help";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"></Link>
        <Link to="/Login"></Link>
        <Link to="./Help"></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
