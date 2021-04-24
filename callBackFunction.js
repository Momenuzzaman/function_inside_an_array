function explain_callback(name,age,task){
    console.log("hello",name);
    console.log("your age",age);
    task();
}

function washHand(){
    console.log("wash hand with soap");
}
function takeShower(){
    console.log("take shower");
}
function scrollFacebook(){
    console.log("Scorll facebook");
}


explain_callback("Ony",20,takeShower);
explain_callback("Muktadir",33,washHand);
explain_callback("MAsum",25,scrollFacebook);