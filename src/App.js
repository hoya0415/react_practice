/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['호야 귀여워 오줌도 귀여워', '벨루호두 귀여워 오줌도 귀여워', '히로히동 귀여워 오줌도 귀여워']);
  let [하트, 하트변경] = useState(0)
  function 제목바꾸기() {
    let newArray = [...글제목];
    newArray[0] = '호야짱호야짱';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>제목 변경 버튼</button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 하트변경(하트 + 1); } }>💙🧡</span> {하트} </h3>
        <p>4월 15일 발행</p>
        <hr/>
        <h3> { 글제목[1] } </h3>
        <p>3월 08일 발행</p>
        <hr/>
        <h3> { 글제목[2] } </h3>
        <p>4월 02일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
    </div>
  );
}

export default App;
