// Checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8]

function getSumPair(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    sum = array[left] + array[right];

    if (sum == 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = getSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(result);
