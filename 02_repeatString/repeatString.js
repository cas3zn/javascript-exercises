const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    
    let char = '';
    for (i = 0; i < num; i++){
        char += string;
    }

    return char;
};

// Do not edit below this line
module.exports = repeatString;
