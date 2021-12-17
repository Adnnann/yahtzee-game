import Die from "./Die";
import Image1 from '../assets/one.png'
import Image2 from '../assets/two.png'
import Image3 from '../assets/three.png'
import Image4 from '../assets/four.png'
import Image5 from '../assets/five.png'
import Image6 from '../assets/six.png'
import { Button } from "semantic-ui-react";
import { useEffect, useState } from "react";

const Dices = ({disabled, arrayOfDices}) => {

    const [numberOfTries, setNumberOfTries] = useState(3)
    const [diceImg, setDiceImag] = useState([])
    //const [arrayOfDices, setDicesArr] = useState()
    const dicesImages = [Image1, Image2, Image3, Image4, Image5, Image6]

    useEffect(()=>{
        initImages()
    },[])

    //let arrayOfDices = []
    const shuffleDices = () => {
        let dices = []
        let arrayOfDices = []
        let dicesVal = []
        for(let i=0;i<dicesImages.length;i++){
            let random = Math.floor(Math.random()*6)
            let image = dicesImages[random]
            dices[i] = <Die image={image} key={i} disabled={disabled} arrayOfDices={arrayOfDices}/>   
            arrayOfDices.push(random)
        }
        setDiceImag(dices)
        setNumberOfTries(numberOfTries - 1)
       
    }

   
    const initImages = () =>{
        let dices = []
        for(let i=0;i<dicesImages.length;i++){
            let image = dicesImages[Math.floor(Math.random()*6)]
            dices[i] = <Die image={image} key={i} disabled={disabled}/>   
        }
        setDiceImag(dices)
        setNumberOfTries(numberOfTries - 1)
    }
    
    
    return(
       
 <>
        {diceImg.map(item=>{
            return item;
        })}
        <div>
       <Button onClick={shuffleDices} disabled={numberOfTries === 0 ? true : false}>{numberOfTries} tries left</Button>
       </div>
       </>      
    )
}

export default Dices;