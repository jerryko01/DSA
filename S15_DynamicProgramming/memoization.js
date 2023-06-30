function add80(n) {
    console.log("Long time");
    return n + 80;
}

// console.log(add80(6));
// console.log(add80(6));
// console.log(add80(6));
// console.log(add80(6));
// calling this function takes a long time - if we call it a lot
// the program will be slow

let cache = {};
function memoizedAdd80Old(n) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = add80(n)
    }
}

// We are going to move the cache object inside the function because 
// it is good practice


function memoizedAdd80New() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            cache[n] = add80(n);
            return cache[n];
        }
    }
}

const memoized = memoizedAdd80New();

console.log(memoized(4))
console.log(memoized(5))
console.log(memoized(4))