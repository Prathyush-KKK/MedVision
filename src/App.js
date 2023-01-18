import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BodyFrame from "./components/BodyFrame/BodyFrame";
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const paragraphs = document.getElementsByTagName("p");
      console.log(paragraphs);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyFrame />
      <Example />
    </div>
  );
}

export default App;
