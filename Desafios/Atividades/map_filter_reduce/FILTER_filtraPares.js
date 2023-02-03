function filtraPares(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    });
}

const meyArray = [2, 8, 11, 12, 24, 23, 42, 7, 5, 10];

console.log(filtraPares(meyArray));
// [ 2, 8, 12, 24, 42, 10 ]