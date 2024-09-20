function chunkString(str, chunkLength) {
  if (str === null) {
    return [];
  }

  const result = [];
  let i = 0;

  while (i < str.length) {
    result.push(str.substring(i, i + chunkLength));
    i += chunkLength;
  }

  return result;
}

console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2)); // ["12", "34", "5"]
console.log(chunkString("abc", 5));   
 // ["abc"]