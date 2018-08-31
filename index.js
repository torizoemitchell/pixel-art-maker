
document.addEventListener('DOMContentLoaded', function(){
//---------------------------Create Canvas Start-------------------
//find body
let body = document.getElementsByTagName('body')[0]
// make a table element to create the canvas
let canvas = document.createElement('table')
//add the table element to the body
body.appendChild(canvas)
//loop to create rows in the table
const rowNum = 10
for (let j = 0; j < rowNum; j++) {
  let row = document.createElement('tr')
  const colNum = 20
  for(let i = 0; i < colNum; i++){
    let col = document.createElement('td')
    col.classList.add('square')
    row.appendChild(col)
  }
  canvas.appendChild(row)
}


//-----------------------------Create Canvas End------------------------


// // Add an event listener to each div so when clicked the background turns red.
// let turnRed = function(event){
//   let square = event.target
//   square.classList.toggle('red')
// }
// canvas.addEventListener('click', turnRed)
// Add an event listener to div tags so when clicked the brush color is saved.
//document.getElementsByClassName('brush')[0].style[0]

let saveCurrentColor = function(event){
  //store the element that was clicked in brush
  console.log("event.target: ", event.target)
  let brush = event.target
  //save the
  let brushColor = brush.classList[1]
  let currentColor = brushColor
  console.log("currentColor: ", currentColor)
  let currentColorDisplayBox = document.getElementById('currentColorDisplayBox')
  //check to see if current color is in currentColorDisplayBox.classList
  if(currentColorDisplayBox.classList.value === 'current-color'){
    currentColorDisplayBox.classList.remove('current-color')
    currentColorDisplayBox.classList.add(currentColor)
  }else{
    currentColorDisplayBox.classList.remove(currentColorDisplayBox.classList.value)
    currentColorDisplayBox.classList.add(currentColor)
  }
  console.log('classList: ', currentColorDisplayBox.classList.value)
  //change pixel color
  let turnColor = function(event){
    let square = event.target
    square.classList.toggle(currentColor)
  }
  canvas.addEventListener('click', turnColor)

}
let paintBrushGroup = document.getElementsByClassName('paintbrush-group')[0]
paintBrushGroup.addEventListener('click', saveCurrentColor)




// Expand the dimensions of the pixel canvas.
// Expand the palette with more colors. (i.e. red, orange, yellow, green, blue, purple, brown, gray, black, white, etc.)
// Expand the palette with a brush color indicator.
// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!





})
