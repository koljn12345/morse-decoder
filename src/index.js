const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let code=[];
    let arrayResultStrong=[];
    let arrayStrong=expr.split("**********");
    count=0;
    for(let i=0;i<arrayStrong.length;i++) {
        for(let j=0,count=0;j<arrayStrong[i].length;j++,count++) {
            if(count==10) { arrayResultStrong+=MORSE_TABLE[code];code=[]; count=0;}
            if(arrayStrong[i][j]==1 && arrayStrong[i][j+1]==0) {code+='.'; j++;count++;}
            else if(arrayStrong[i][j]==1 && arrayStrong[i][j+1]==1) {code+='-'; j++;count++;}
            if(j==arrayStrong[i].length-1) { arrayResultStrong+=MORSE_TABLE[code];code=[]; count=0;}
            }
        if(i!=arrayStrong.length-1) arrayResultStrong+=" ";
            
    }
    return(arrayResultStrong);
}

module.exports = {
    decode
}