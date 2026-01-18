
import './App.css'
// import {useState} from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import { DogImage } from './DogImage'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  console.log('You clicked update.');
  <DogImage/>
  return (
    <div className='backGround'>
      {/* ヘッダー部分（アプリタイトル） */}
      <Header />

      {/* アプリの簡単な説明とランダム画像表示ボタン */}
      <Description />

      {/* 犬種を選んでリスト表示する部分 */}
      <DogListContainer/>
    </div>
  );
};

export default App;
