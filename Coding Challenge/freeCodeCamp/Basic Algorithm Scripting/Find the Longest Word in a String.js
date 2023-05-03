Return the length of the longest word in the provided sentence.

Your response should be a number.

---
  
  function findLongestWordLength(str) {
  let length = 0
  let split = str.split(" ");
 
  for (let i = 0;i<split.length;i++){
    if (split[i].length > length){
      length = split[i].length
    }
  }
  return length

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
