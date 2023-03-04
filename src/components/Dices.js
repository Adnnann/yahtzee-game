import '../App.css'
import { Card, CardMedia, Grid } from '@mui/material';

const Dices = ({dices, selectedDice, rotate, diceFunction}) => {
       
    return (
    dices.map((item, index)=>{
            if(index < 5){
                return (
                <Grid item xs={2} md={1} lg={1} xl={1} key={index}>
                <Card key={index}>
                    <CardMedia 
                    component={'img'} 
                    image={selectedDice[index] ? selectedDice[index] :  dices[index]} 
                    className={rotate && !selectedDice[index] ? "die2" : null }
                    onClick={(event)=>diceFunction(event, index)} 
                    style={{
                        cursorEvent: selectedDice[index] ? "none" : "all",
                        opacity: selectedDice[index] ? "0.2" : "1"
                    }}
                    />
                </Card>
                </Grid>)}
        }))  
}

export default Dices;