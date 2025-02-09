

/*

What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 100xdev . How will you do it?

A: You will have to brute force until you find a value that starts with 00000


sample input and output

Input: 596138
Output: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab

*/

const crypto = require('crypto');

function findHash(input, prefix) {
    let number = 0;
    while (true) {
        const testString = input + number;
        const hash = crypto.createHash('sha256').update(testString).digest('hex');

        if (hash.startsWith(prefix)) {
            return { number, hash };
        }
        number++;
    }
}

const input = "100xdevs";
const prefix = "00000";

const result = findHash(input, prefix);
console.log(`Number: ${result.number}`);
console.log(`Hash: ${result.hash}`);
