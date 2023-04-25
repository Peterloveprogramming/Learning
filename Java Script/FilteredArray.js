const PLAYERS =[
    {"name":"Peter", 
    "hobby":"Javascript",
    "Age":24
    },
    {"name":"Jack",
    "hobby":"Finance",
    Age:30
    }
];

const filteredArray = PLAYERS.filter(player => player.Age>25);
console.log(filteredArray)


--------------------------------------------------------------------------------------------------------------------------------------------------------------------

const Numbers = [-1,0.2,2,3,4,-2,-12,2.3,4.2];
// I want to remove all the negative and decimals 
// then sqaure the numbers 

const filteredarray = Numbers.filter(n=> Number.isInteger(n)&& n>0);
const updatedarray = filteredarray.map(n => n*n);

console.log(updatedarray)
