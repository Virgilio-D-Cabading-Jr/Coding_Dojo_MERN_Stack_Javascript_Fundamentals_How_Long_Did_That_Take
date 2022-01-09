/////////////////////////////////////////////////////////
//  MAIN JAVASCRIPT
/////////////////////////////////////////////////////////

// console.log("********************************************");
// console.log("Calculating Prime Numbers\n");

// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {
//             return false;
//         }
//     }
//     return true;
// }

// function calcPrimeNumber() {
//     const { performance } = require('perf_hooks');
//     const start = performance.now();
//     let primeCount = 0;
//     let num = 2; // for math reasons, 1 is considered prime
//     while( primeCount < 1e4 ) {
//         if( num.isPrime() ) {
//             primeCount++;
//         }
//         num++;
//     }
//     console.log(`The 10,000th prime number is ${num-1}`);
//     console.log(`This took ${performance.now() - start} milliseconds to run`);
// }

// calcPrimeNumber();
// console.log("\n********************************************");
// console.log("Calculating Prime Numbers Version 2\n");

// Number.prototype.isPrimeV2 = function() {
//     for( let i=2; i<this;) {
//         if( this % i === 0 ) {
//             return false;
//         }
//         if (i==2) {
//             i++;
//         } else {
//             i += 2;
//         }
//     }
//     return true;
// }

// function calcPrimeNumberV2(number, nth) {
//     const { performance } = require('perf_hooks');
//     const start = performance.now();
//     let primeCount = 0;
//     let num = 2; // for math reasons, 1 is considered prime
//     while( primeCount < number ) {
//         if( num.isPrimeV2() ) {
//             primeCount++;
//         }
//         num++;
//     }
//     console.log(`The ` + nth + ` prime number is ${num-1}`);
//     console.log(`This took ${performance.now() - start} milliseconds to run`);
// }
// calcPrimeNumberV2(1e4, "10,000th");

// console.log("\n********************************************");
// console.log("Calculating Prime 100,00th Number\n");

// calcPrimeNumberV2(1e5, "100,000th")

console.log("\n********************************************");
console.log("Fibonacci Recursive\n");

// recursive
function recursiveFib() {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
    }
    console.log ("Fibonacci recursive of 40: " + rFib(40));
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}
recursiveFib();

console.log("\n********************************************");
console.log("Fibonacci Iterative\n");

function iterativeFib() {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
            let len = vals.length;
            vals.push( vals[len-1] + vals[len-2] );
        }
        return vals[n];
    }
    console.log ("Fibonacci recursive of 40: " + iFib(40));
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}
iterativeFib();

console.log("\n********************************************");
console.log("Reverse String Given\n");

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores! orem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores! orem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores! orem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores! orem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

function reverseStringV1() {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    const reversed1 = story.split("").reverse().join("");
    console.log("Reversed String:", reversed1);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}
reverseStringV1();

console.log("\n********************************************");
console.log("Reverse String Refactored\n");

function reverseStringV2() {
    const { performance } = require('perf_hooks');
    const start = performance.now();
    let reversed2 = "";

    for (let x=story.length-1; x>=0; x--) {
        reversed2 += story[x];
    }

    console.log("Reversed String:", reversed2);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}
reverseStringV2();