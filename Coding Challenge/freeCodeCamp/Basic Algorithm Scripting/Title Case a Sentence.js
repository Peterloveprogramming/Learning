Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

--
function changeToCapital(sentence){
    let temparray = sentence.split(" ");
    let newarray = []
    for (let str in temparray){
        newarray[str] = temparray[str][0].toUpperCase()+temparray[str].slice(1).toLowerCase();
    }
    return newarray.join(" ")
}


console.log(changeToCapital("i like to move"))
