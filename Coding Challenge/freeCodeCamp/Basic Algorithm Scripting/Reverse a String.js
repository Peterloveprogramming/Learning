Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

---
  
  function reverseString(str) {
  let reverse = ""
  for(let i = str.length-1;i>=0;i--){
   reverse += str[i]
  }
  return reverse
}

console.log(reverseString("hello"))

