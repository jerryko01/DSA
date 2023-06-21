let counter = 0;
function inception() {
    if (counter > 3) {
        console.log("done");
    } else {
        console.log(counter)
        counter += 1;
        inception();
    }
    // debugger; -> shows the call stack, variables, etc

}

function findFactorialRecursive(num) {
    if (num === 2) {
        return 2;
    }
    return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
    let answer = 1;
    if (num === 2) {
        answer = 2;
    }
    for (let i = 2; i <= num; i += 1) {
        answer = answer * i;
    }
    return answer;
}

function fibonacciIterative(n) { // O(n) due to for loop
    let arr = [0, 1];
    for (let i = 2; i < n; i += 1) {
        arr.push(arr[n - 1] + arr[n - 2]);
    }
    return arr[n];
}

function fibonacciRecursive(n) { // O(2^N)
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}


console.log(fibonacciRecursive(8));