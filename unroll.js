
const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];


  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];


function unroll(squareArray) {
    const arr = [];
    
    while (squareArray.length) {

        

      arr.push(
          //Take entire top array
        ...squareArray.shift(),
        //Take all last values of sub arrays
        ...squareArray.map(a => a.pop()),
        //Take entire bottom array backwards
        ...(squareArray.pop() || []).reverse(),
        //Iterate over arrays, take out first values in reverse
        ...squareArray.map(a => a.shift()).reverse()
      );
    }
    return arr
}

console.log(unroll(smallerSquare))


module.exports = unroll;

