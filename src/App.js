import "./App.css";
import CountrySelector from "./components/CountrySelector";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <div className="App">
        <h1>WORLD STATISTICS</h1>
        <Stats url="https://covid19.mathdro.id/api" />
        <CountrySelector />
      </div>
    </>
  );
}

export default App;
