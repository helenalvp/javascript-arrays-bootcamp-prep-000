var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var array=[];
function addElementToBeginningOfArray(array,element){
  return [element, ...array ];
}
//ill have to come back to this
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
//ill have to come back to this one too
function addElementToEndOfArray(array,element){
return  [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
//this did not come up at all for the thinks i want to do.
function accessElementInArray(array,index) {
  return array[index];
}

//i feel like there is a problem with me telling the computer what is an array
//what is an element and what is and index
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(0);
}
//what
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
}
