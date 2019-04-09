function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

let add = makeAdder(2)(3);
console.log(add);