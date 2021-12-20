import { createPortal } from "react-dom"
import { Button } from "semantic-ui-react"

const GameOver = () => {

const restart = () => {
    window.location.reload()
}
   return createPortal(
    <div id="gameOver" style={{width:'40%',height:"30%", backgroundColor:'black',position:"fixed", 
    marginLeft:"30%", visibility:"hidden", marginTop:"10%", textAlign:"center"}}>
        <h1>Game Over</h1>   
        <h1>Play Again?</h1>
        <Button onClick={restart}>Yes</Button>
    </div>,
    document.getElementById('modal')
   )
}

export default GameOver;