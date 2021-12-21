export default function Form() {
  function myOnClick() {
    return(
      console.log('hey kittie gurl!')
    )
  }
  return (
    <main>
      <div className="textInputs">
        < input type="text" name="text1" placeholder="Top text"/>
        < input type="text" name="text2" placeholder="Bottom text"/>
        <button onClick={myOnClick}>Get me a new Meme 🖼️</button>
      </div>
    </main>
  )
}