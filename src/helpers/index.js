const ones = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"
   
    let result = 0
    if(arr.includes(1)){
     result = arr.filter(element => element === 1)
     .reduce((prev,curr)=>{return prev+curr})
     score.innerHTML = result
    }else{
    result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 const twos = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    if(arr.includes(2)){
     result = arr.filter(element => element === 2)
     .reduce((prev,curr)=>{return prev+curr})
     score.innerHTML = result
    }else{
    result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 const threes = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    if(arr.includes(3)){
     result = arr.filter(element => element === 3)
     .reduce((prev,curr)=>{return prev+curr})
     score.innerHTML = result
    }else{
     result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 
 const fours = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    if(arr.includes(4)){
     result = arr.filter(element => element === 4)
     .reduce((prev,curr)=>{return prev+curr})
     score.innerHTML = result
    }else{
     result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 
 const fives = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    if(arr.includes(5)){
     const result = arr.filter(element => element === 5)
    .reduce((prev,curr)=>{return prev+curr})
    score.innerHTML = result
    }else{
      result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 
 const sixes = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    if(arr.includes(6)){
     result = arr.filter(element => element === 6)
    .reduce((prev,curr)=>{return prev+curr})
    score.innerHTML = result
    }else{
     result = 0
     score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
 }

 const threeOfKind = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray


    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = arr.reduce((prev,curr)=>{return prev+curr})
    let count = [];
    arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    if(count.includes(3) || count.includes(4) || count.includes(5)){
        score.innerHTML = result
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
   
}

const fourOfKind = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"


    let result = arr.reduce((prev,curr)=>{return prev+curr})
    let count = [];
    arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    if(count.includes(4) || count.includes(5)){
        score.innerHTML = result
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
}

const fullHouse = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    let count = []
    arr.forEach(function(i) { count[i] = (count[i]||0) + 1;});

    if(count.includes(3) && count.includes(2)){
        result = 25
        score.innerHTML = 25
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
}

const smallStraight = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    const d = new Set(arr);
    let result = 0

    if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5))) {
        result = 30
        score.innerHTML = 30
    }else if(d.has(3) && d.has(4) && d.has(5) && (d.has(2) || d.has(6))) {
        result = 30
        score.innerHTML = 30
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
}

const largeStraight = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray

    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0
    const d = new Set(arr);

    if(d.size === 5 && (!d.has(1) || !d.has(6))){
        result = 40
        score.innerHTML = 40
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
}

const yatzee = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray
 
    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let unique = arr.filter((item, i, ar) => ar.indexOf(item) === i);

    let result = 0
    if(unique.length === 1){
        result = 50
        score.innerHTML = 50
    }else{
        result = 0
        score.innerHTML = 0
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return result
}

const chance = (id, diceArray) => {
    const description_id = id.split('-')
    const descriptionNumber = description_id[1]
    const arr = diceArray
    
    const element = document.getElementById(`${id}`)
    element.style.backgroundColor = "grey"
    element.setAttribute('class', 'disabled')
    const score = document.getElementById(`scoreDescription-${descriptionNumber}`)
    const category = document.getElementById(`scoreCategory-${descriptionNumber}`)
    category.style.color = "white"
    score.style.backgroundColor = "grey"
    score.style.color = "white"

    let result = 0;
    result = arr.reduce((prev,curr)=>{return prev+curr})
    score.innerHTML = result
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return result
}

export {
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
    chance
} 