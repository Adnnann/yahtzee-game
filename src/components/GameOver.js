import { createPortal } from "react-dom"
import { Button } from "semantic-ui-react"

const GameOver = () => {

const restart = () => {
    window.location.reload()
}
   return createPortal(
    <div id="gameOver" style={{width:'100%',height:"50%", backgroundColor:'black', 
    visibility:"hidden", marginTop:"7%", textAlign:"center",position:"absolute",opacity:"0.8"}}>  
        <Button onClick={restart} style={{width:"20%",height:"50px", marginTop:"10%"}}>Start New Game</Button>
    </div>,
    document.getElementById('modal')
   )
}

export default GameOver;