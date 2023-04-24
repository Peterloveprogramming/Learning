var contacts = [
    {"firstname":"Jack",
    "Hobby":["Reading","Tennis"],
    "number":"023 323 123"
    },
    {"firstname":"Peter",
    "Hobby":"Java Script",
    "number":"043 223 231"
    }
];
//create a function that look up the array

function lookuparray (name,property){
    for (var i =0;i<contacts.length;i++){
        if (contacts[i].firstname === name){
            return contacts[i][property] || "No such property";
        } else {
            return "No such contacts"
        }
    }
}

console.log(lookuparray("Jack","number"))
