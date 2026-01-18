import { useState } from 'react'
import { useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  // 犬種リスト
  const [breeds, setBreeds] = useState([]);
  // 選択された犬種
  const [selectedBreed, setSelectedBreed] = useState('');
  // 犬画像リスト
  const [dogImageList, setDogImageList] = useState([]);

  /**
   * ドロップダウン変更時に呼び出し
   */
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  }

  /**
   * コンポーネント初期表示時に犬種一覧を取得
   */
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        const list = Object.keys(data.message);
        setBreeds(list);
        if(list.length > 0) setSelectedBreed(list[0]);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  /**
   * 「表示」ボタン押下時に、選択犬種の画像を取得
   */
  const handleClick = () => {
    if (!selectedBreed) return;
    // Dog APIのURLを作成（12件取得）
    const url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/12`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDogImageList(data.message);  // 画像URL配列を保存
      })
      .catch((error) => console.error('Error:', error));
  };

  return(
    <div className='breedsSelect'>
      {/* 犬種選択用ドロップダウン */}
      <BreedsSelect
        breeds={breeds}
        selectedBreeds={selectedBreed}
        onBreedChange={handleBreedChange} 
      />

      {/* 表示ボタン */}
      <button className='dogButton_2' onClick={handleClick}>表示</button>

      {/* 犬種名の表示 */}
      {selectedBreed && <p>{selectedBreed}の画像一覧</p>}

      {/* 画像リストを一覧表示 */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '10px', 
        marginTop: '20px',
        width: '700px' 
      }}>
        {dogImageList.map((url, index) => (
          <img
            key={index}
            src={url}
            alt='犬'

            style={{ 
              width: '150px', 
              height: '150px', 
              objectFit: 'cover', 
              borderRadius: '8px',
              border: '2px solid #ccc' 
            }}
          />
        ))}
      </div>

    </div>
  )
}

export default DogListContainer;
