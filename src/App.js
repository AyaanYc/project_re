import { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [ 따봉, 따봉변경 ] = useState(0);
  let myFunction = () => { 따봉변경( 따봉 + 1 ) };
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'> 
        <h4>{ 글제목[0] } <span onClick={myFunction}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={() => { 
        let copy = [...글제목];
        copy[0] = "여자코트 추천";
        글제목변경(copy); 
      }}>버튼</button>
      <button onClick={() => {
        let copy1 = [...글제목];
        copy1.sort();
        console.log(copy1);
        글제목변경(copy1);
      }}>버튼1</button>
      <div className='list'> 
        <h4>{ 글제목[1] } <span onClick={myFunction}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'> 
        <h4>{ 글제목[2] } <span onClick={myFunction}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal/>
    </div> 
  );
}

function Modal() {
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
