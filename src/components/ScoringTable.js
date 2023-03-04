import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ScoringTable(props) {
const { 
  scoringHandler, 
  totalScore,
  usedCategory
} = props

const [scoringCategory, setScoringCategory] = useState([
  {
      category: "Ones",
      description:"Score 1 for every 1",
      
  },
  {
      category: "Twos",
      description:"Score 2 for every 2",
  },
  {
      category: "Threes",
      description:"Score 3 for every 3",
  },
  {
      category:"Fours",
      description:"Score 4 for every 4",
  },
  {
      category:"Fives",
      description:"Score 5 for every 5",
  },
  {
      category:"Sixes",
      description:"Score 6 for every 6",
  },
  {
      category:"3 of Kind",
      description:"If 3+ of one value, score sum of all dice",
      
  },
  {
      category:"4 of Kind",
      description:"If 4+ of one value, score sum of all dice",
    
  },
  {
      category:"Full House",
      description:"If 3 of one value and 2 of another score 25"
  },
  {
      category:"Small Straight",
      description:"If 4+ values in the row, score 30",
   
  },
  {
      category:"Large Straight",
      description:"If 5 values in a row score 40",
  },
  { 
      category:"Yatzy",
      description:"If all values match, score 50",
  },
  { 
      category:"Chance",
      description:"Score sum of all dice",      
  }
])

 const heading = ["Category", "Description"]

  return (
    <TableContainer 
    component={Paper} 
    style={{marginTop:"20px"}}
    sx={{
      width:{xs:360,md:'100%'},
      marginLeft:{xs:1, md: "0", lg: "0", xl: "0"},
      marginRight:{xs:1, md: "0", lg: "0", xl: "0"},
    }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
          {heading.map((head, index) => (
            <StyledTableCell 
            key={head}
            style={{
              backgroundColor:'grey',
              textAlign: index === 1 ? 'right':'left'}}>
            <Typography variant='h5'>{head}</Typography>
            </StyledTableCell>
          )
          )}

          </TableRow>
        </TableHead>
        <TableBody>
          {scoringCategory.map((row, index) => (
            <StyledTableRow 
            key={index} 
            onClick={(event)=>scoringHandler(event, index)}>
              <StyledTableCell 
              component="th" 
              scope="row" 
              id={index}
              style={{
                cursorEvent: usedCategory[index] ? "none" : "all",
                textDecoration: usedCategory[index] ? "line-through" : "none",
                backgroundColor: usedCategory[index] ? "grey" : "white"}}
              >
                {row.category}
              </StyledTableCell>
                <StyledTableCell 
                align="right"
                style={{
                cursorEvent: usedCategory[index] ? "none" : "all",
                textDecoration: usedCategory[index] ? "line-through" : "none",
                backgroundColor: usedCategory[index] ? "grey" : "white"}}>
                  {row.description}
                </StyledTableCell>
            </StyledTableRow>
          ))}
          <StyledTableRow>
                <StyledTableCell 
                component="th" 
                scope="row"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "grey",
                  color: "black",
                  fontSize: '240px',
                  backgroundColor: "lightblue",
                }}><Typography variant='h4'>Total Score</Typography>
                 </StyledTableCell>
                <StyledTableCell align="right"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "lightblue",
                  color: "black",
                  fontSize: 20,
                }}>
                <Typography variant='h4'>{totalScore}</Typography>
                </StyledTableCell>
            </StyledTableRow>
        </TableBody>
        
      
      </Table>
    </TableContainer>
  );
}