import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Button from "./components/Button"

function App() {
  return (
    <>
      <div className="App">
        <Hello></Hello>
        <Hello />
        <Button/>
        <Button/>
        <Button/>
      </div>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
