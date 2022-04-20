let inputArea = document.getElementById("input")
let outputArea = document.getElementById("output")

let amount = document.getElementById("amount")
let min = document.getElementById("min")
let max = document.getElementById("max")

let gen = document.getElementById("gen")

function randNum(){
  
  let arr = []
  
  for (let i = 0;  i < amount.value; i++) {
    
    arr.push(Math.floor(Math.random() * max.value + 1))
  }
  
  let html = `
                <br><br>
                Here are ${amount.value} RANDOM numbers
                <br>
                ${arr.join(" || ")}`
  
  return html
}

gen.addEventListener('click' , () => outputArea.innerHTML = randNum())