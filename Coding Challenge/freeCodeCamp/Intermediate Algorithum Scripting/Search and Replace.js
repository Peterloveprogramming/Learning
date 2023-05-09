Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

---
  
  function myReplace (sentence,...replace){
    replace[1] = replace[1][0].toUpperCase()+replace[1].slice(1)
    let sen = sentence.replace(replace[0],replace[1])
    return sen
}


myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
