// write a function to take number between 0 to 9 and return in words

const numtoWords =(digit)=> {
    switch (digit) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        default:
            return "Invalid Number";
    }
};
console.log(numtoWords(0));
console.log(numtoWords(1));
console.log(numtoWords(2));
console.log(numtoWords(3));
console.log(numtoWords(4));
console.log(numtoWords(5));
console.log(numtoWords(6));
console.log(numtoWords(7));
console.log(numtoWords(8));
console.log(numtoWords(9));