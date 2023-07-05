/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

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

class Modal3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: 20,
    };
  }
  render() {
    return (
      <div>
        {/* {this.props} */}
        안녕{this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "park" });
          }}
        >
          변경
        </button>
      </div>
    );
  }
}
function App() {
  let [titles, setTitles] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]);
  let [goodCount, setGoodCount] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");
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
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...goodCount];
                  copy[i] = copy[i] + 1;
                  setGoodCount(copy);
                }}
              >
                👍
              </span>
              {goodCount[i]}
            </h4>
            <button
              onClick={() => {
                let copy = [...titles].filter((x) => x !== titles[i]);
                setTitles(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input onChange={(e) => setInputValue(e.target.value)} />
      <button
        onClick={() => {
          if (inputValue !== "") {
            let copy = [inputValue, ...titles];
            setTitles(copy);
            setGoodCount([0, ...goodCount]);
          }
        }}
      >
        추가
      </button>
      {modal ? (
        <Modal titles={titles} title={title} changeTitle={changeTitle} />
      ) : null}
      <Modal3></Modal3>
    </div>
  );
}

export default App;
