import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Button from "./components/Button"
import Image from "./components/Image";

function App() {
  return (
    <>
      <div className="App">
        <Hello></Hello>
        <Hello />
        <Button>{1+1}</Button>
        <Image src="https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance" alt="puppy"/>
      </div>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
