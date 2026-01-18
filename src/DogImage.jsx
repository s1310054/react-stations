
export const DogImage = props => {
  console.log(props)
  return (
  <div>
    <img className='dogImage'
        src = {props.imageUrl}
        alt = "犬の画像"
    />
  </div>
  )
}

export default DogImage;
