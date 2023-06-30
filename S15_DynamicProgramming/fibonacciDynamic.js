function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Since there are so many calls to fibonacci() as the index goes
// higher, this function is not efficient (Currently O(2^n))

function fibonacciDynamic() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

const fasterFib = fibonacciDynamic();

console.log(fasterFib(5))