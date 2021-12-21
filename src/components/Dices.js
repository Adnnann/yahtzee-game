import Die from "./Die";
import Image1 from '../assets/one.png'
import Image2 from '../assets/two.png'
import Image3 from '../assets/three.png'
import Image4 from '../assets/four.png'
import Image5 from '../assets/five.png'
import Image6 from '../assets/six.png'
import { Button, Card } from "semantic-ui-react";
import { useEffect, useState } from "react";
import ScoringCategory from "./ScoringCategory";
import GameOver from "./GameOver";
import {  
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yatzee,
    chance} from "../helpers";

const Dices = () => {

    const [numberOfTries, setNumberOfTries] = useState(2)
    const [diceImg, setDiceImag] = useState([])
    const [diceValues, setDiceValues] = useState([])
    const [disable, setDisable] = useState([])
    const [totalScore, setTotalScore] = useState(0)
    const [rolling, setRolling] = useState("die")
    const [round, setRound] = useState(0)
    const [gamesHistory, setGamesHistory] = useState([]);
    const [highScore, setHighScore] = useState()

    
    useEffect(()=>{
        setHistory()
    },[])

    const setHistory = () =>{
        if(localStorage.getItem('gamesHistory') === null){
                window.localStorage.setItem('gamesHistory', JSON.stringify([]));
                window.localStorage.setItem('gameHighScore',JSON.stringify())
            }else{
                let savedHistory = JSON.parse(localStorage.getItem('gamesHistory'))
                let highscore = JSON.parse(localStorage.getItem('gameHighScore'))
                setGamesHistory(savedHistory)         
                setHighScore(highscore)
            }
    }


    const updateResult = () =>{
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


if(round === 13){
    updateResult()
    document.getElementById('gameOver').style.visibility = "visible"
    document.querySelectorAll('.diceImages').forEach(el=>{
        el.style.visibility = "hidden"
    })
    document.getElementById('shuffleDices').style.visibility = "hidden"
    
    setRound(0)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



    let status = []
    status = Array(5).fill(false)

    const dice = {"img0":Image1, "img1":Image2, "img2":Image3, "img3":Image4, "img4":Image5,"img5":Image6}

    useEffect(()=>{
        initImages()
    },[])

 
    if(numberOfTries === 2){
        
    }
    const diceFunction = (e) => {

        
        const id = e.target.id
        e.target.classList.add('dont')
        e.preventDefault()

        if(id === 'dice-0'){
            status[0] = true;
        }else if(id === 'dice-1'){
            status[1] = true;
        }else if(id === 'dice-2'){
            status[2] = true;
        }else if(id === 'dice-3'){
            status[3] = true;
        }else if(id === 'dice-4'){
            status[4] = true;
        }else if(id === 'dice-5'){
            status[5] = true;
        }
        setDisable(status)
        e.target.style.opacity = "0.2"  
     
    }
   
    let dices = []
    const shuffleDices = () => {

        if(rolling === 'die'){
            setRolling('die2')
        }else{
            setRolling('die')
        }

        if(disable.length > 0){
            disable.map((item, index)=>{
                status[index] = item
            })
        }
 
        let arrayOfDices = []
        for(let i=0;i<5;i++){
            if(!disable[i]){
                let random = Math.floor(Math.random()*6)
                let image = dice[`img${random}`]
                dices[i] = <Die image={image} key={i} value={random+1} diceHandler={diceFunction} id={`dice-${i}`} disabled={disable[i]} rolling={rolling}/>   
            }else if(disable){
                dices[i] = <Die image={dice[`img${diceValues[i]-1}`]} key={i} value={diceValues[i]} diceHandler={diceFunction} id={`dice-${i}`} disabled={disable[i]} 
                />  
            }
            
        }

        setDiceImag(dices)
        setNumberOfTries(numberOfTries - 1)                  
        
        dices.forEach(el=>{
            arrayOfDices.push(el.props.value)
        })

        setDiceValues([...arrayOfDices])

    }

    
    const newRound = () => {

        if(rolling === 'die'){
            setRolling('die2')
        }else{
            setRolling('die')
        }

        let dices = []
        let arrayOfDices = []

        for(let i=0;i<5;i++){
            let random = Math.floor(Math.random()*6)
            let image = dice[`img${random}`]
            dices[i] = <Die image={image} key={i} value={random+1} diceHandler={diceFunction} id={`dice-${i}`} disabled={disable[i]} rolling={rolling}/>   
        }

        setNumberOfTries(2)    
        setDiceImag(dices)
                 
        dices.forEach(el=>{
            arrayOfDices.push(el.props.value)
        })

        setDiceValues([...arrayOfDices])

        document.querySelectorAll('.dices').forEach(el=>{
            el.style.opacity = 1
        })
   
    }

    const initImages = () =>{
        
        if(rolling === 'die'){
            setRolling('die2')
        }else{
            setRolling('die')
        }
  
        let arrayOfDices = []
        for(let i=0;i<5;i++){
            if(!disable[i]){
                let random = Math.floor(Math.random()*6)
                let image = dice[`img${random}`]
                dices[i] = <Die image={image} key={i} value={random+1} diceHandler={diceFunction} id={`dice-${i}`} disabled={disable[i]} rolling={rolling}/>   
   
                arrayOfDices.push(random+1)
            }else if(disable){
                dices[i] = <Die image={dice[`img${diceValues[i]-1}`]} key={i} value={diceValues[i]} diceHandler={diceFunction} id={`dice-${i}`} 
                disabled={disable[i]} rolling={rolling}/>  
                arrayOfDices.push(diceValues[i])

            }

        }
 
        setDiceImag(dices)
        setDiceValues([...arrayOfDices])
    }

    
    
     const scoreHandler = (e) => {
        
      const id = e.target.id
      
      if(e.target.className === `test`){
        let num = 0
        setRound(round+1)
      
        switch(id){
          case 'scoreCategory-1':
              ones(id, diceValues)
              num = ones(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-2':
              
              twos(id, diceValues)
              num = twos(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              
              break;
          case 'scoreCategory-3':
              threes(id, diceValues)
              num = threes(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-4':
              fours(id, diceValues)
              num = fours(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-5':
              fives(id, diceValues)
              num = fives(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-6':
              sixes(id, diceValues)
              num = sixes(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-7':
              threeOfKind(id, diceValues)
              num = threeOfKind(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-8':
              fourOfKind(id, diceValues)
              num = fourOfKind(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-9':
              fullHouse(id, diceValues)
              num = fullHouse(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-10':
              smallStraight(id, diceValues)
              num = smallStraight(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-11':
              largeStraight(id, diceValues)
              num = largeStraight(id,diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
          case 'scoreCategory-12':
             yatzee(id, diceValues)
             num = yatzee(id, diceValues)
             setTotalScore(totalScore+num)
             newRound()
              break;
          case 'scoreCategory-13':
              chance(id, diceValues)
              num = chance(id, diceValues)
              setTotalScore(totalScore+num)
              newRound()
              break;
      }
     
      }else{
          console.log(e.target.id)
          return
      }
      
    }



    useEffect(()=>{
        localStorage.setItem('gamesHistory', JSON.stringify(gamesHistory))
    }, [gamesHistory])
    
    return(
       
 <>
    <div className="highScoreContainer"><h1 className="highScore">{highScore ? `High score: ${highScore}` : null}</h1></div>
    <br />
  <h1 className="gameName">Yatzy</h1>
        
 <GameOver />
 <div className="diceContainer">
        {diceImg.map(item=>{
            return <Card  className="diceImages">{item}</Card>
        })}
</div>
        <div className="shuffleDice">
       <button id="shuffleDices" className="shuffleDices" type="button" onClick={shuffleDices} disabled={numberOfTries === 0 ? true : false}>{numberOfTries} 
       {numberOfTries === 2 || numberOfTries === 0 ? ' rolls' : ' roll'} left</button>
       </div>
       <ScoringCategory scoringHandler={scoreHandler} totalScore={totalScore} />
       </>      
    )
}

export default Dices;