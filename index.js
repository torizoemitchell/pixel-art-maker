
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

canvas.classList.add('canvas-styles')

// // Add an event listener to each div so when clicked the background turns red.
// let turnRed = function(event){
//   let square = event.target
//   square.classList.toggle('red')
// }
// canvas.addEventListener('click', turnRed)


// Add an event listener to div tags so when clicked the brush color is saved

let saveCurrentColor = function(event){
  //---------------------------get the paintbrush color---------------------------------------
  //store the paintbrush element that was clicked in brush
  //console.log("event.target: ", event.target)
  let brush = event.target
  //brush.classList[1] stores a string which is the class with the background color of the paintbrush element
  let brushColor = brush.classList[1]
  //rename to "currentColor" for clarity
  let currentColor = brushColor

  //----------------display the paintbrush color in the display box----------------------------
  //store the current color display box element in a variable
  let currentColorDisplayBox = document.getElementById('currentColorDisplayBox')
  //check to see if default-color is in currentColorDisplayBox.classList. This means that no paintbrush has been selected yet.
  if(currentColorDisplayBox.classList.value === 'default-color'){
    //replace the current default-color with the class storing the currentColor background-color
    //console.log('before removing default class: ', currentColorDisplayBox.classList)
    currentColorDisplayBox.classList.remove('default-color')
    //console.log('after removing default class: ', currentColorDisplayBox.classList)
    currentColorDisplayBox.classList.add(currentColor)
    //console.log('after adding new color: ', currentColorDisplayBox.classList)
  }else{
    //console.log('before removing paintbrush color: ', currentColorDisplayBox.classList)
    currentColorDisplayBox.classList.remove(currentColorDisplayBox.classList.value)
    //console.log('after removing color: ', currentColorDisplayBox.classList)
    currentColorDisplayBox.classList.add(currentColor)
    //console.log('after adding new color: ', currentColorDisplayBox.classList)
  }


  //-----------------turn the pixel the color of the current color display box-------------------
  //change pixel color

  let turnColor = function(event){
    //store the pixel that was clicked in a variable
    let square = event.target
    //change the color of the square to the color that is stored in currnt color display box.
    // console.log('square classList before adding new color: ', square.classList)
    // console.log('square.classList.value before: ', square.classList.value)
    //create a string that will always be "square" to keep the square css properties. You'll append the scurrent color to this.
    let squareClass = square.classList.value.substring(0,6)
    //create a string with the name of the class you want to get rid of
    let oldColor = square.classList.value.substring(7)

    //check to see if the classList value string is less than 6 (this means) no paintbrush class has been added before
    if(square.classList.value.length < 7){
      //just add the current color
      //console.log("adding: ", currentColor)
      square.classList.add(currentColor)
    }else{
      //remove the old color and add the new color
      //console.log("removing: ", oldColor)
      square.classList.remove(oldColor)
      //console.log("adding: ", currentColor)
      square.classList.add(currentColor)
    }

    //console.log('square classList after adding new color: ', square.classList)
    //console.log('squareclassList.value after: ', square.classList.value)
  }
  canvas.addEventListener('click', turnColor)

}
let paintBrushGroup = document.getElementsByClassName('paintbrush-group')[0]
paintBrushGroup.addEventListener('click', saveCurrentColor)



// Improve the look and feel of the canvas and color palette. Be careful not to break your program's behavior!





})
