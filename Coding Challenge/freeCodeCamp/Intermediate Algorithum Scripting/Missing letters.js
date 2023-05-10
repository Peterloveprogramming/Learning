Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

---
  
  function fearNotLetter(str) {
  for (let i =0;i<str.length;i++){
      let charcode = str.charCodeAt(i)
    
    if (charcode!== str.charCodeAt(0)+i ){
        return String.fromCharCode(charcode-1)
    }
  }
  
  
}
