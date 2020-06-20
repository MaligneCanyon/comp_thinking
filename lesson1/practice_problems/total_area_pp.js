// Part 1
// abstractions:
// - map the area repd by each subarr to the arr of shapes
// - reduce the arr of areas to a total area

// calc the total area of an arr of subarrs representing shapes
// pass the areas() fn as an arg to map() to determine area for each shape
function totalArea(shapes) {
  return shapes.map(areas).reduce((total, area) => total + area, 0);
}

// calc the area for a given subarr (arr of shape dims)
function areas(dimensions) {
  return dimensions[0] * dimensions[1];
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141


// Part 2
// abstractions:
// - filter shapes repd by squares
// - map the area repd by each subarr to the arr of shapes
// - reduce the arr of areas to a total area

// filter out shapes that aren't squares
// call totalArea() to calc the total area of square shapes
function totalSquareArea(rects) {
  let squares = rects.filter(isSquare);
  // console.log(squares);
  return totalArea(squares);
}

function isSquare(shape) {
  return shape[0] === shape[1];
}

console.log(totalSquareArea(rectangles)); // 121
