import Nav from "./components/Nav";
import style from './App.module.css';
import Menu from "./components/Menu";
import Home from "./routes/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Best from "./routes/Best";

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
          <Nav/>
          <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/best/" element={<Best/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
