var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var array=[];
function addElementToBeginningOfArray(array,element){
  [element, ...array ];
}
//ill have to come back to this
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
//ill have to come back to this one too
function addElementToEndOfArray(array,element){
  [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}
//this did not come up at all for the thinks i want to do.
function accessElementInArray(array,index) {
  cosole.log(array[index]);
}

//i feel like there is a problem with me telling the computer what is an array
//what is an element and what is and index
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
}
function removeElementFromBeginningOfArray(array) {
  array.slice();
}
//what
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
}

function removeElementFromEndOfArray(array) {
  array.slice(0,array.length-1);
}
