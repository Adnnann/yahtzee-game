import '../App.css'


const Die = ({image, disabled, diceHandler, id, classes}) => {


    return(
        
        <img 
        src={image}  
        onClick={diceHandler} 
        id={id} 
        className={classes} 
        alt="die"/>
       
    )
}

export default Die;