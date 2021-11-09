function slasher(arr, howMany) {

    arr.splice(0, howMany);
    return arr;
}



slasher([1, 2, 3], 2);
slasher(["burgers", "fries", "shake"], 1)

// var arr = ["a", "b", "c", "d"];
// console.log(arr.splice(0,2));
// console.log(arr)