// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(soughtAfterClassName) {
  // traverse the DOM: when you hit a node with the specified className => add it to the foundNodeArr;

  // declare foundNodeArr;
  let foundNodeArr = [];
  const checkAndCollectNodesBeforeInquiringAboutTheirChildren = node => {
    // deal with undefined
    if (node.classList) {
      // checkIf Node has soughtAfterClassName
      if (node.classList.contains(soughtAfterClassName)) foundNodeArr.push(node);
    }

    // move to next level down
    let nodesBelow = node.childNodes;

    // run everything at this next level down through the checker
    nodesBelow.forEach(checkAndCollectNodesBeforeInquiringAboutTheirChildren);
    //NB: this is the Open Loop Maker that engenders recursion
    //NBB: the inquiry into the children is what encourages function spawning
  };

  // oh yeah, make sure to start feeding the tree trunk into the wood-chipper
  checkAndCollectNodesBeforeInquiringAboutTheirChildren(document.body);

  // return everything found
  return foundNodeArr;
};


