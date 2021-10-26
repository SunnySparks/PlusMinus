function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            pos++;
        }else if (arr[i] == 0){
            zero++;
        }else if(arr[i] < 0){
            neg++;
        }
    }

    let posDec = pos/arr.length;
    let negDec = neg/arr.length;
    let zeroDec = zero/arr.length;
    
    console.log(posDec);
    console.log(negDec);
    console.log(zeroDec);
}
