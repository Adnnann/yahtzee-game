import { createPortal } from "react-dom"
import { Button } from "semantic-ui-react"

const GameOver = () => {

const restart = () => {
    window.location.reload()
}
   return createPortal(
    <div id="gameOver" className="gameOver">  
        <Button onClick={restart} className="restart" style={{position:"relative"}}>Start New Game</Button>
    </div>,
    document.getElementById('modal')
   )
}

export default GameOver;