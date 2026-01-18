
import React from "react"
import { useEffect } from "react"

/**
 * props:
 * - breeds: 犬種リスト（配列）
 * - selectedBreed: 現在選択中の犬種
 * - onBreedChange: 犬種変更時に呼ばれる関数
 */
export const BreedsSelect = ({ breeds, selectedBreeds, onBreedChange }) => {
  return (
    <select value={selectedBreeds} onChange={onBreedChange}>
      {/* 犬種の一覧を <option> 要素として展開 */}
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
};

export default BreedsSelect;
