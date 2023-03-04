import { useEffect, useState } from 'react';
import {Button, Typography} from '@mui/material';
import logo from '../assets/yatzy.jpg'
import Dices from './Dices';
import Header from './Header';
import ScoringTable from './ScoringTable';
import { Grid } from '@mui/material';
import Image1 from '../assets/one.png'
import Image2 from '../assets/two.png'
import Image3 from '../assets/three.png'
import Image4 from '../assets/four.png'
import Image5 from '../assets/five.png'
import Image6 from '../assets/six.png'

export default function Game() {

const [numberOfTries, setNumberOfTries] = useState(2)
const [dices, setDices] = useState([])
const [diceValues, setDiceValues] = useState([])
const [selectedDice, setSelectedDice] = useState([false,false,false,false,false])

const [totalScore, setTotalScore] = useState(0)
const [round, setRound] = useState(0)
const [gamesHistory, setGamesHistory] = useState([]);
const [highScore, setHighScore] = useState()
const [rotate, setRotate] = useState(false)
const [usedCategory, setUsedCategory] = useState(Array(13).fill(false))
const [selectedValues, setSelectedValues] = useState(Array(5).fill(0))

useEffect(()=>{
    setHistory()
},[])

const setHistory = () => {
    if (
      localStorage.getItem("gamesHistory") === null &&
      localStorage.getItem("gameHighScore") === null
    ) {
      window.localStorage.setItem("gamesHistory", JSON.stringify([]));
      window.localStorage.setItem("gameHighScore", JSON.stringify(0));
    } else {
      let savedHistory = JSON.parse(localStorage.getItem("gamesHistory"));
      let highScore = localStorage.getItem("gameHighScore");

      setGamesHistory(savedHistory);
      setHighScore(highScore);
    }
  };

const updateResult = () => {
    setGamesHistory([...gamesHistory, totalScore])
    window.localStorage.setItem('gamesHistory',totalScore)
    

    if(gamesHistory.length !== 0){
        let score = Math.max(...gamesHistory)

        if(totalScore < score){
            setHighScore(score)
            window.localStorage.setItem('gameHighScore',score)
        }else{
            setHighScore(totalScore)
            window.localStorage.setItem('gameHighScore',totalScore)
        }   
    }else{
        setHighScore(totalScore)
        window.localStorage.setItem('gameHighScore',totalScore)
    }

}

useEffect(()=>{
    startGame()
},[])


const diceFunction = (event, index) => {
    selectedDice[index] = true
    setSelectedDice([...selectedDice])
  
    setRotate(false)
    selectedDice[index] = event.target.src 
    setSelectedDice([...selectedDice])  
    selectedValues[index] = diceValues[index]
    setSelectedValues([...selectedValues])

}

const shuffleDices = () => {
    play()
    setNumberOfTries(numberOfTries - 1) 
                  
}

const newRound = () => {
    setRotate(true)
    setNumberOfTries(2)    
    setDices(dices)
}

const play = () => {
const dices = [Image1, Image2, Image3, Image4, Image5, Image6]
let arr = []
let diceValues = []   
for(let i = 0; i < 5; i++){
    let diceIndex = Math.floor(Math.random() *  6)
    diceValues.push(diceIndex +1)
    arr.push(dices[diceIndex])
}
setDices(arr)
setDiceValues(diceValues)    
}

const startGame = () => {
    play()
    setNumberOfTries(2)
}

const scoringHandler = (event, index) => {
//in case user click the category without rolling the dices
//or selecting all the dices manually
    diceValues.map((item, index)=>{
        if(selectedValues[index] === 0){
            selectedValues[index] = item
            setSelectedValues([...selectedValues])
        }
        
       
    })
    console.log('selected val',selectedValues)
    usedCategory[index] = true
    setUsedCategory([...usedCategory])
    // functions for scoring for ones, twos, threes, fours, fives, sixes
    if(index < 6){
      const values = selectedValues.filter((value) => value === index+1)
      if(values.length > 0){
        const result = values.reduce((acc, value) => acc + value) 
        setTotalScore(totalScore+result)
      }else{
        setTotalScore(totalScore)
      }
  }else{
    // functions for scoring for three of a kind, four of a kind, full house, small straight, large straight, yatzy, chance
    switch(index){ 
     case 6:
        let threeOfKind = new Set(diceValues)
        threeOfKind = [...threeOfKind]
        threeOfKind.map(value=>{
            let res = selectedValues.filter((item) => item === value)
            if(res.length >= 3){
                const result = res.reduce((acc, value) => acc + value)
                setTotalScore(totalScore+result)
            }else{
                setTotalScore(totalScore)
            }

        })
         break;
        case 7:
            let fourOfKind = new Set(diceValues)
            fourOfKind = [...fourOfKind]
            fourOfKind.map(value=>{
                let res = selectedValues.filter((item) => item === value)
                if(res.length >= 4){
                    const result = res.reduce((acc, value) => acc + value)
                    setTotalScore(totalScore+result)
                }else{
                    setTotalScore(totalScore)
                }

            })
            break;
        case 8:
            let fullHouse = new Set(selectedValues)
            fullHouse = [...fullHouse]

            if(fullHouse.length === 2){
                setTotalScore(totalScore+25)
            }else{
                setTotalScore(totalScore)
            }
            break;
        case 9:
            const smallStraight = new Set(selectedValues)
            console.log('small straight', smallStraight)
                if(smallStraight.has(2) && smallStraight.has(3) && smallStraight.has(4) && (smallStraight.has(1) || smallStraight.has(5) || smallStraight.has(6))){
                    setTotalScore(totalScore+30)
                }else{
                    setTotalScore(totalScore)
                }
            break;
        case 10:

            const largeStraight = new Set(selectedValues)
                if(largeStraight.has(2) && largeStraight.has(3) && largeStraight.has(4) && largeStraight.has(5) && (largeStraight.has(1) || largeStraight.has(6))){
                    setTotalScore(totalScore+40)
                }else{
                    setTotalScore(totalScore)
                }
            break;
        case 11:
            let yatzy = new Set(selectedValues)
            yatzy = [...yatzy]
            if(yatzy.length === 1){
                setTotalScore(totalScore+50)
            }else{
                setTotalScore(totalScore)
            }
            break;
        case 12:
            const result = selectedValues.reduce((acc, value) => acc + value)
            setTotalScore(totalScore+result)
            break;
        default:
            break;
        }
    }

      
    setSelectedDice(Array(5).fill(false))
    setSelectedValues(Array(5).fill(0))
    play()
    setNumberOfTries(2)
    setRotate(true)
  
}

useEffect(()=>{
    localStorage.setItem('gamesHistory', JSON.stringify(gamesHistory))
}, [gamesHistory])

return (
<Grid container justifyContent='center' spacing={1}>
<Header logo={logo} />
   <Dices
    dices={dices}
    diceFunction={diceFunction}
    selectedDice={selectedDice}
    rotate={rotate}
    />

<Grid item xs={12} md={12} lg={12} xl={12} style={{textAlign:'center'}}>
    <Button 
    style={{minWidth:'260px', borderRadius:"25px", margin:'10px', minHeight:'80px', fontSize:'24px', fontWeight:'bold'}}
    variant="contained"
    onClick={shuffleDices} 
    disabled={numberOfTries === 0 ? true : false}>
    {numberOfTries}{numberOfTries === 2 || numberOfTries === 0 ? ' rolls' : ' roll'} left 
    </Button>
</Grid>
<Grid item xs={12} md={9} lg={9} xl={9}>
       <ScoringTable
        scoringHandler={scoringHandler}
        totalScore={totalScore}
        usedCategory={usedCategory}
        />
</Grid>
</Grid>
  )

    

}

