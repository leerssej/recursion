// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
const getElementsByClassName = (targetClassName, node = document.body) => {
  // traverse the DOM: when you hit a node with the specified className => add it to the foundNodeArr;

  // declare collection variable;
  let foundNodeArr = [];

  let nodesBelow = node.childNodes;

  // const checkAndCollectNodesBeforeInquiringAboutTheirChildren = node => {
    // deal with undefined
    if (node.classList) {
      console.log(node.classList.contains(targetClassName));
      // checkIf Node has targetClassName
      if (node.classList.contains(targetClassName)) foundNodeArr.push(node);
    }

    // move to next level down

    // run everything at this next level down through the checker
    nodesBelow.forEach(node => {
      console.log(node);
      foundNodeArr = foundNodeArr.concat(getElementsByClassName(targetClassName, node));
    });
    //NB: this is the Open Loop Maker that engenders recursion
    //NBB: the inquiry into the children is what encourages function spawning
  // };

  // oh yeah, make sure to start feeding the tree trunk into the wood-chipper
  // checkAndCollectNodesBeforeInquiringAboutTheirChildren(document.body);

  // return everything found
  return foundNodeArr;
};
