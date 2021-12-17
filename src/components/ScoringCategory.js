
import { useState } from 'react'
import { Table } from 'semantic-ui-react'
const ScoringCategory = ({arrayOfDices}) => {

    const [dicesArray, setDicesArr] = useState([])
    const [scoringCategory, setScoringCategory] = useState([
        {
            type: "Ones",
            disabled:false,
            color:"white",
            description:"Score 1 for every 1",
            arrOfOnes:[1,2,3,4,5],
            function: () => {
               const arr = {arrayOfDices}
            //    if(arr.includes(1)){
            //     const result = arr.filter(element => element === 1)
            //    .reduce((prev,curr)=>{return prev+curr})
            //    alert(result)
            //    }else{
            //        alert(0)
            //    }
               console.log(arr)
               //let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
               //const test = arr.reduce((prev,curr)=>{return prev+curr})
               //alert(unique.length)
            }
        },
        {
            type: "Twos",
            disabled:false,
            color:"white",
            description:"Score 2 for every 2",
            function: () => {
                const arr = [1,3,0,1,3]
                if(arr.includes(2)){
                 const result = arr.filter(element => element === 2)
                .reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type: "Threes",
            disabled:false,
            color:"white",
            description:"Score 3 for every 3",
            function: () => {
                const arr = {arrayOfDices}
                if(arr.includes(3)){
                 const result = arr.filter(element => element === 3)
                .reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type:"Fours",
            disabled:false,
            color:"white",
            description:"Score 4 for every 4",
            function: () => {
                const arr = [1,3,0,1,3]
                if(arr.includes(4)){
                 const result = arr.filter(element => element === 4)
                .reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type:"Fives",
            disabled:false,
            color:"white",
            description:"Score 5 for every 5",
            function: () => {
                const arr = [1,3,0,1,3]
                if(arr.includes(5)){
                 const result = arr.filter(element => element === 5)
                .reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type:"Sixes",
            disabled:false,
            color:"white",
            description:"Score 6 for every 6",
            function: () => {
                const arr = [6,3,6,1,3]
                if(arr.includes(6)){
                 const result = arr.filter(element => element === 6)
                .reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type:"3 of Kind",
            disabled:false,
            color:"white",
            description:"If 3+ of one value, score sum of all dice",
            function: () => {
                const arr = [1,1,3,1,3]
                let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
                if(unique.length === 2){
                 const result = arr.reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(0)
                }
            }
        },
        {
            type:"4 of Kind",
            disabled:false,
            color:"white",
            description:"If 4+ of one value, score sum of all dice",
            function: () => {
                const arr = [1,1,1,1,3]
                let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
                if(unique.length === 2){
                 const result = arr.reduce((prev,curr)=>{return prev+curr})
                alert(result)
                }else{
                    alert(unique.length)
                }
            }
        },
        {
            type:"Full House",
            disabled:false,
            color:"white",
            description:"If 3 of one value and two of another score 25"
        },
        {
            type:"Small Straight",
            disabled:false,
            color:"white",
            description:"If 4+ values in the row, score 30",
            function: () => {
                const arr = [1,2,3,4,4]
                let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
                if(unique.length === 4){
                 const result = 30
                alert(result)
                }else{
                    alert(unique.length)
                }
            }
        },
        {// GOOD
            type:"Large Straight",
            disabled:false,
            color:"white",
            description:"If 5 values in a row score 40",
            function: () => {
                const arr = [1,2,3,4,5]
                let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
                if(unique.length === 5){
                 const result = 40
                alert(result)
                }else{
                    alert(unique.length)
                }
            }
        },
        { //GOOD
            type:"Yatzy",
            disabled:false,
            color:"white",
            description:"If all values match, score 50",
            function: () => {
                const arr = [1,1,1,1,1]
                let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);
                if(unique.length === 1){
                 const result = 50
                alert(result)
                }else{
                    alert(unique.length)
                }
            }
        },
        { //GOOD
            type:"Chance",
            disabled:false,
            color:"white",
            description:"Score sum of all dice",
            function: () => {
                const arr = [1,3,0,1,3]
                const result = arr.reduce((prev,curr)=>{return prev+curr})
                alert(result)
            }
            
        }
    ])

 
let test = []
    for(let i = 0; i< scoringCategory.length; i++){
       test[i] = <Table.Row disabled={scoringCategory[i].disabled} key={i} onClick={scoringCategory[i].function}>
            <Table.HeaderCell>{scoringCategory[i].type}</Table.HeaderCell>
            <Table.HeaderCell>{scoringCategory[i].description}</Table.HeaderCell>
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
       { test.map(item=>{
            return item;
        })
       }
</Table.Body>
      </Table>
    )
}

export default ScoringCategory;