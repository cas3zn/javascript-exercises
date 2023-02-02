const sumAll = function(min, max) {
    // If null return zero
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (0 > min || 0 > max) return 'ERROR';
    let sum = 0;

    // Find the minimum between the two values
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    } 

    for(let count = min; count < max + 1; count++){
        sum += count;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;