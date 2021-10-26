function plusMinus(arr) {
    let pos = arr.filter(e => e >= 1);
    let neg = arr.filter(e => e < 0);
    let zero = arr.filter(e => e == 0);
    
    let posDec = pos.length/arr.length;
    let negDec = neg.length/arr.length;
    let zeroDec = zero.length/arr.length;
    
    console.log(posDec);
    console.log(negDec);
    console.log(zeroDec);
}
