
document.addEventListener('DOMContentLoaded', function(){
//---------------------------Create Canvas Start-------------------
//find body
let body = document.getElementsByTagName('body')[0]
// make a table element to create the canvas
let canvas = document.createElement('table')
//add the table element to the body
body.appendChild(canvas)
//loop to create rows in the table
const rowNum = 25
for (let j = 0; j < rowNum; j++) {
  let row = document.createElement('tr')
  const colNum = 55
  for(let i = 0; i < colNum; i++){
    let col = document.createElement('td')
    col.classList.add('square')
    row.appendChild(col)
  }
  canvas.appendChild(row)
}

// // Add an event listener to each div so when clicked the background turns red.
// let turnRed = function(event){
//   let square = event.target
//   square.classList.toggle('red')
// }
// canvas.addEventListener('click', turnRed)
// Add an event listener to div tags so when clicked the brush color is saved.
//document.getElementsByClassName('brush')[0].style[0]

let saveCurrentColor = function(event){
  //---------------------------get the paintbrush color---------------------------------------
  //store the paintbrush element that was clicked in brush
  console.log("event.target: ", event.target)
  let brush = event.target
  //brush.classList[1] stores the class with the background color of the paintbrush element
  let brushColor = brush.classList[1]
  //rename to "currentColor" for clarity
  let currentColor = brushColor
  console.log("currentColor: ", currentColor)

  //----------------display the paintbrush color in the display box----------------------------
  //store the current color display box element in a variable
  let currentColorDisplayBox = document.getElementById('currentColorDisplayBox')
  //check to see if default-color is in currentColorDisplayBox.classList. This means that no paintbrush has been selected yet.
  if(currentColorDisplayBox.classList.value === 'default-color'){
    //replace the current default-color with the class storing the currentColor background-color
    currentColorDisplayBox.classList.remove('default-color')
    currentColorDisplayBox.classList.add(currentColor)
  }else{
    currentColorDisplayBox.classList.remove(currentColorDisplayBox.classList.value)
    currentColorDisplayBox.classList.add(currentColor)
  }
  console.log('classList: ', currentColorDisplayBox.classList)

  //-----------------turn the pixel the color of the current color display box-------------------
  //change pixel color
  let turnColor = function(event){
    let square = event.target
    square.classList.toggle(currentColor)
  }
  canvas.addEventListener('click', turnColor)

}
let paintBrushGroup = document.getElementsByClassName('paintbrush-group')[0]
paintBrushGroup.addEventListener('click', saveCurrentColor)



// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!





})
