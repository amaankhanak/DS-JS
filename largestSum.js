// 1,2,3,4,3,5,4,6,7,8

function findLargest(array, num) {
  if (num > array) {
    console.log("Number greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
