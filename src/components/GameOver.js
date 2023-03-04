import { createPortal } from "react-dom"
import {Button }from '@mui/material';
const GameOver = () => {

const restart = () => {
    window.location.reload()
}
   return createPortal(
    <div id="gameOver" className="gameOver">  
        <Button onClick={restart} className="restart" >Start New Game</Button>
    </div>,
    document.getElementById('modal')
   )
}

export default GameOver;