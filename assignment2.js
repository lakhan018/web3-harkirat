

/*

What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 100xdev . How will you do it?

A: You will have to brute force until you find a value that starts with 00000


sample input and output

Input: 596138
Output: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab

*/

// Function to find an input string that produces a hash starting with '00000'
const crypto = require('crypto');

function sha256Hash(data) {
    return crypto.createHash('sha256').update(data.toString()).digest('hex');
}

// const input = "Hello, World!";

// console.log("SHA-256 Hash:", sha256Hash(input));

console.log(sha256Hash("100xdevs"));
