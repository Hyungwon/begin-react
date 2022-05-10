import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Alert from './Alert';
import Car from './Car';
import Counter from './Counter';

import React from 'react';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <>
      <div style={style}>{name}</div>
      <div className="gray-box">
        <Hello color="red" name="Jjuu"/>
      </div>
      <Alert/>
      <Car color="white"/>
      <Counter/>
    </>
  );
}

export default App;
