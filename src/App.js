import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactBlog</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
      </div>
    </div>
  );
}

export default App;
