function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }

  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let items of string2) {
    if (!counter[items]) {
      return false;
    }

    counter[items] -= 1;
  }
  return true;
}

const check = isAnagram("hello", "llohe");
console.log(check);
