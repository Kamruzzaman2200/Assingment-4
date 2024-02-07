function deleteInvalids(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Array";
    }
    else{
        var valid = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            valid.push(arr[i]);
        }
    }

    return valid;
    }
}
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [1, 18, -19]
console.log(deleteInvalids(["1", {num: 2}, NaN])); // Output: []
console.log(deleteInvalids([1, 2, -3])); // Output: [1, 2, -3]
console.log(deleteInvalids({num: [1, 2, 3]})); // Output: "Invalid Array"

