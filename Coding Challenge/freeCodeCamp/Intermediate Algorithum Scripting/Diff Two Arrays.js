Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

----

function diffArray(arr1, arr2) {
  let newarrya = []
  
  function firstarray (first,second){
      for(let i =0;i<first.length;i++){
          if (second.indexOf(first[i])===-1){
              newarrya.push(first[i]);
          }
      }
  }
  firstarray (arr1,arr2)
  firstarray (arr2,arr1)
    return newarrya;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

