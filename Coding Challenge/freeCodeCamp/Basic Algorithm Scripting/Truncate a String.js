Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

---
  
  function truncateString(str, num) {
  let updated = str.slice(0,num) 
  if(updated.length < str.length){
      return updated + "..."
  }
  return updated
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
