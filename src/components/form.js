import React from 'react';
import memesData from "../memesData"

export default function Form() {
  const [memeImage, setImage] = React.useState('') 
  function myOnClick() {
    const memeArr = memesData.data.memes
    const randomN = Math.floor(Math.random() * memeArr.length)
    let url = memeArr[randomN].url

    setImage(url)
  }
  return (
    <main>
      <div className="textInputs">
        < input type="text" name="text1" placeholder="Top text"/>
        < input type="text" name="text2" placeholder="Bottom text"/>
        <button onClick={myOnClick}>Get me a new Meme 🖼️</button>
        <div className="imageContainer">
          <img src={memeImage}  alt="meme image"/>
        </div>
      </div>
    </main>
  )
}