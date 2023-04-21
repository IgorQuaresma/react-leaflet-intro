import "./App.css";
import Map from "./components/Map";
import Navbar from "./components/NavBar";
import { React } from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Map">
        <Map />
      </div>
    </div>
  );
}

export default App;
