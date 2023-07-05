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
  let [goodCount, setGoodCount] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);

  function changeTitle() {
    let copyTitle = [...title];
    copyTitle[0] = "여자코트추천";
    setTitle(copyTitle);
  }
  function changeOrder() {
    let changeTitle = [...title];
    setTitle(changeTitle.sort());
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactBlog</h4>
      </div>
      <button onClick={changeOrder}>가나라다순으로 변경</button>
      <button onClick={changeTitle}>글제목 변경</button>

      {title.map((x, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => setModal(!modal)}>
              {x}
              <span
                onClick={() => {
                  let copy = [...goodCount];
                  copy[i] = copy[i] + 1;
                  setGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[i]}
            </h4>
          </div>
        );
      })}
      {modal ? <Modal /> : null}
    </div>
  );
}

export default App;
