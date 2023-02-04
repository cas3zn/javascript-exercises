const fibonacci = function(n) {
    if (0 > n) return 'OOPS';
    if (n === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

/* NOTES

Creating a program where a number is the sum of the 2 preceding numbers, /
where the sequence starts from 0, to 1, 1, 2, 3, 5, 8, 13, 21, 34 and so on.

- If the number is less than zero return 'OOPS'
- If the number is zero then return 0
- Else start counting the numbers as you add them until you get to the number of times equal to the value given

*/

// Do not edit below this line
module.exports = fibonacci;
