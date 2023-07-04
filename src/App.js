/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function App() {
  let [title, setTitle] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [goodCount, setGoodCount] = useState(0);
  let [modal, setModal] = useState(false);
  function goodEvent() {
    setGoodCount(goodCount + 1);
  }
  function changeTitle() {
    let copyTitle = [...title];
    copyTitle[0] = "여자코트추천";
    setTitle(copyTitle);
  }
  function changeOrder() {
    let changeTitle = [...title];
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactBlog</h4>
      </div>
      <button onClick={changeOrder}>가나라다순으로 변경</button>
      <button onClick={changeTitle}>글제목 변경</button>
      <div className="list">
        <h4 onClick={() => setModal(!modal)}>
          {title[0]}
          <span onClick={goodEvent}>👍</span>
          {goodCount}
        </h4>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
      </div>
      {modal == true ? <Modal /> : null}
    </div>
  );
}

export default App;
