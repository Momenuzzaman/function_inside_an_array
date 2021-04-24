function evenify(numbers){
    for(var i=0; i<numbers.length; i++){
        number = numbers[i];
        if(number%2 ==0){
            console.log(number,": is even number");
        }
        else{
            console.log(number,": is odd number");
        }
    }
}

var numbers = [1,2,3,4,5,6,7,8,9];
evenify(numbers);

var friend_age = [10,20,13,35,66,56,47];
evenify(friend_age);
