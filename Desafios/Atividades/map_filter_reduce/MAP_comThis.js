const apple = {
    value: 2,
}

const banana = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [4, 7]

console.log('this -> apple', mapComThis(nums, apple));
console.log('this -> banana', mapComThis(nums, banana));