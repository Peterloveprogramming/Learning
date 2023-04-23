function lookup (val){
    var result = "";
    var array = {
        "Name":"Adam",
        "Job": "Accountant",
    };
    result = array[val];
    return result
}

console.log(lookup("Job"))
