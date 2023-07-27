// Checking sum zero
// [-5,-4,-3,-2,0,2,4,6,8]

function getSumPair(array) {
  for (let number of array) {
    var a = number;

    for (let number of array) {
      var b = number;

      if (a + b == 0) {
        console.log(a);
        console.log(b);
        return;
      } else {
        continue;
      }
    }
  }
}

getSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
