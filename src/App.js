import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Button from "./components/Button"
import Image from "./components/Image";
import Counter from "./components/Counter";
import APIData from "./components/API-Data";

function App() {
  return (
    <>
      <div className="App">
        <APIData/>
      </div>
    </>
  );
}

export default App;
