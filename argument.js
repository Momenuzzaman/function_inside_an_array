function addNumber(number1,number2){
    var sum = 0;
    for(var i =0; i<arguments.length; i++){
        var number = arguments[i];
        sum = sum+ number;
    }
    return sum;
}
 var result = addNumber(20,30,40,45);
 console.log(result);

 
