function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function displayFibonacciSequence(length: number): void {
    for (let i = 0; i < length; i++) {
        console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
    }
}

function calculateFibonacciSum(length: number): number {
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += fibonacci(i);
    }
    return sum;
}

const sequenceLength = 15;
displayFibonacciSequence(sequenceLength);

const sum = calculateFibonacciSum(sequenceLength);
console.log(`Tổng các số Fibonacci trong dãy là: ${sum}`);
