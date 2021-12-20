
import { useState } from 'react'
import { Table } from 'semantic-ui-react'
const ScoringCategory = ({scoringHandler, totalScore}) => {

    const [dicesArray, setDicesArr] = useState([])
    const [status, setStatus] = useState(0)
    const [scoringCategory, setScoringCategory] = useState([
        {
// WORKS FINE. REPLICATE IN ALL FOLLOWING PARTS
            type: "Ones",
            description:"Score 1 for every 1",
            
        },
        {
            type: "Twos",
            description:"Score 2 for every 2",
        },
        {
            type: "Threes",
            description:"Score 3 for every 3",
        },
        {
            type:"Fours",
            description:"Score 4 for every 4",
        },
        {
            type:"Fives",
            description:"Score 5 for every 5",
        },
        {
            type:"Sixes",
            description:"Score 6 for every 6",
        },
        {
            type:"3 of Kind",
            description:"If 3+ of one value, score sum of all dice",
            
        },
        {
            type:"4 of Kind",
            description:"If 4+ of one value, score sum of all dice",
          
        },
        {
            type:"Full House",
            description:"If 3 of one value and two of another score 25"
        },
        {
            type:"Small Straight",
            description:"If 4+ values in the row, score 30",
         
        },
        {// GOOD
            type:"Large Straight",
            description:"If 5 values in a row score 40",
        },
        { //GOOD
            type:"Yatzy",
            description:"If all values match, score 50",
        },
        { //GOOD
            type:"Chance",
            description:"Score sum of all dice",      
        }
    ])

 
let test = []
    for(let i = 0; i< scoringCategory.length; i++){
       test[i] = <Table.Row key={i} /*onClick={scoringCategory[i].function}*/ onClick={scoringHandler} id={`scoreRow-${i+1}`}>
            <Table.Cell id={`scoreCategory-${i+1}`}>{scoringCategory[i].type}</Table.Cell>
            <Table.Cell id={`scoreDescription-${i+1}`} className='description'>{scoringCategory[i].description}</Table.Cell>
          </Table.Row>
    }

    return(
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body >
        
       { status === 0 ? 
           test.map(item=>{
            return item;
        }) : null
       }
       <Table.Row style={{backgroundColor:"grey"}}>
            <Table.Cell id="totalScore">Total score</Table.Cell>
            <Table.Cell style={{fontSize:"24px", fontWeight:"bold"}}>{totalScore}</Table.Cell>
          </Table.Row>    
</Table.Body>
      </Table>
    )
}

export default ScoringCategory;