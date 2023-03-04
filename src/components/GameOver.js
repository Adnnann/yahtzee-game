import React from 'react';
import {Button, Dialog, DialogActions, CardActions, Typography, DialogContent }from '@mui/material';
const GameOver = ({open, restart, score}) => {

  return(
    <Dialog open={open} >
    <DialogContent>
    <Typography variant="h3" style={{textAlign:"center"}}>Game Over</Typography>
   <br/>
    <Typography component={'p'} style={{textAlign:'center', fontSize:'24px'}} >Your score is {score}</Typography>
    </DialogContent> 
        <CardActions>
            <Button fullWidth onClick={restart} variant='contained'>Start New Game</Button>
        </CardActions>
    </Dialog>)
  
}

export default GameOver;