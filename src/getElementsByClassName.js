// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// // But instead we're going to implement it from scratch:
// const getElementsByClassName = (targetClassName, node = document.body) => {
//   // traverse the DOM: inquiring about next level down each time.
//   // when you hit node with the specified className => add it to the foundNodeArr;
  
//   // declare collection variable;
//   let foundNodeArr = [];
  
//   // expand node collection to one level lower;
//   let nodesBelow = node.childNodes;
//   //NBB: the inquiry into the children is what encourages function spawning

//   // deal with undefined
//   if (node.classList) {
//     // checkIf Node has targetClassName - if Y, then add to foundNodeArr; 
//     if (node.classList.contains(targetClassName)) foundNodeArr.push(node);
//   }
  
//   // run everything at this next level down through the checker
//   nodesBelow.forEach(node => {
//     console.log(node);
//     foundNodeArr = [...foundNodeArr, ...getElementsByClassName(targetClassName, node)];
//   });
//   //NB: this is the Open Loop Maker that engenders recursion

//   // return everything found 
//   // (if lower level recursion - this gets tacked onto foundNodeArr)
//   return foundNodeArr;
// };
const getElementsByClassName = (targetClassName, node = document.body) => {
  let foundNodeArr = [];
  let nodesBelow = node.childNodes;
  
  if (node.classList) {
    if (node.classList.contains(targetClassName)) foundNodeArr.push(node);
  }
  
  nodesBelow.forEach(node => {
    console.log(node);
    foundNodeArr = [...foundNodeArr, ...getElementsByClassName(targetClassName, node)];
  });

  return foundNodeArr;
};
