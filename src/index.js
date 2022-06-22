module.exports = function toReadable (number) {

    const oneDigitView = {
        "1": "one",   "2": "two",   "3": "three",
        "4": "four",  "5": "five",  "6": "six",
        "7": "seven", "8": "eight", "9": "nine"
    };

    const twoDigitView = {
        "10": "ten",      "11": "eleven",  
        "12": "twelve",   "13": "thirteen", 
        "14": "fourteen", "15": "fifteen", 
        "16": "sixteen",  "17": "seventeen",  
        "18": "eighteen", "19": "nineteen"
    };
    

    const twoDigitSuffix = {
        "1": "teen",    "2": "twenty", "3": "thirty",
        "4": "forty",   "5": "fifty",  "6": "sixty",
        "7": "seventy", "8": "eighty", "9": "ninety"
    };

    const getOneDigitReadable = (nstr) => { 
        if (nstr == "0"){
            return "zero";
        }
        return oneDigitView[numberStr];
    };

    const getTwoDigitReadable = (nstr) => {     
        if (nstr[0] == "0"){
            return oneDigitView[nstr[1]] ? oneDigitView[nstr[1]]: "" ;
        }

        if (twoDigitView[nstr]){
            return twoDigitView[nstr];
        }
        
        return twoDigitSuffix[nstr[0]] + 
                (oneDigitView[nstr[1]] ? " " + oneDigitView[nstr[1]] : "");
    }; 

    const getThreeDigiReadable = (nstr) => {
        let twoDigitReadable = getTwoDigitReadable(nstr.slice(1,3));
        return oneDigitView[nstr[0]] + " hundred" + 
                (twoDigitReadable ? " " + twoDigitReadable : "");
    };

    let numberStr = String(number);

    switch(numberStr.length){
        case 1: return getOneDigitReadable(numberStr);
        case 2: return getTwoDigitReadable(numberStr);
        case 3: return getThreeDigiReadable(numberStr);
    };    
};

