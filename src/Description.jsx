// @ts-check
import React, {useState} from 'react'
import DogImage from './DogImage'

export const Description = () => {
  // 表示中の犬画像URLを管理するstate
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
    
  // Dog APIからランダムな犬画像を1枚取得
  const dogAPI = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setDogUrl(data.message))
    .catch(error => console.error('Erroe:', error));
  };
  
  return(
    <>
      {/* アプリの説明 */}
      <div className='subTitle'>
        <p>犬の画像を表示するサイトです</p>
      </div>
      
      {/* 現在の犬画像を表示 */}
      <DogImage imageUrl={dogUrl} />

      {/* ランダム画像を再取得するボタン */}
      <button className='dogButton_1' onClick={dogAPI}>
        更新
      </button>
    </>
  )
}

export default Description;
