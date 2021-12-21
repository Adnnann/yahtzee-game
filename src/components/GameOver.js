import { createPortal } from "react-dom"
import { Button } from "semantic-ui-react"

const GameOver = () => {

const restart = () => {
    window.location.reload()
}
   return createPortal(
    <div id="gameOver" className="gameOver">  
        <Button onClick={restart} style={{width:"25%",height:"60px", marginTop:"15%",opacity:"1"}}>Start New Game</Button>
    </div>,
    document.getElementById('modal')
   )
}

export default GameOver;