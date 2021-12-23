import '../App.css'


const Die = ({image, disabled, diceHandler, id, rolling}) => {


    return(
        
        <img src={image}  onClick={diceHandler} status={disabled} id={id} className= {`dices ${rolling}`}  alt="die"/>
       
    )
}

export default Die;