/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.titles[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  );
}

function App() {
  let [titles, setTitles] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [goodCount, setGoodCount] = useState([0, 1, 2]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  function changeTitle() {
    let copyTitle = [...titles];
    copyTitle[0] = "여자코트추천";
    setTitles(copyTitle);
  }
  function changeOrder() {
    let changeTitle = [...titles];
    setTitle(changeTitle.sort());
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>reactBlog</h4>
      </div>
      <button onClick={changeOrder}>가나라다순으로 변경</button>
      <button onClick={changeTitle}>글제목 변경</button>

      {titles.map((x, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
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
      {modal ? (
        <Modal titles={titles} title={title} changeTitle={changeTitle} />
      ) : null}
    </div>
  );
}

export default App;
