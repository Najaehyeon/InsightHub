import Nav from "./components/Nav";
import style from './App.module.css';
import Menu from "./components/Menu";
import Home from "./routes/Home";

function App() {
  return (
    <div className={style.app}>
      <header>
        <Nav/>
      </header>
      <main>
          <Menu/>
          <Home/>
      </main>
    </div>
  );
}

export default App;
