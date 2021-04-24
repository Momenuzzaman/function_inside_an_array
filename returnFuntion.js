function even(number){
    var result;
    if(number%2 == 0){
        result = number;
    }
    else{
        result = number*2;
    }
    return result;
}

var result = even(11);
console.log(result);

function evenify(numbers){
    even_array = [];
    for(var i = 0; i<numbers.length; i++){
        var number = numbers[i];
        var result=evenify(number);
         even_array.push(result);
    }
    return even_array;
}

var numbers = [1,2,3,4,5,6,7,8,9];
var numbers_even = evenify(numbers);
console.log(numbers_even);
