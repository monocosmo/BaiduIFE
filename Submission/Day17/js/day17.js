// date
function mOver(obj){
    var myDate = new Date();
    var myTime = myDate.getHours();
    if (myTime < 12){
        obj.innerHTML = "Good morning! " + "Today is " + myDate.toLocaleDateString();
    } else if (myTime < 17){
        obj.innerHTML = "Good afternoon! " + "Today is " + myDate.toLocaleDateString();
    } else if (myTime < 20){
        obj.innerHTML = "Good evening! " + "Today is " + myDate.toLocaleDateString();
    } else{
        obj.innerHTML = "Good night! " + "Today is " + myDate.toLocaleDateString();
    }
    
}
function mOut(obj){
    obj.innerHTML = "What a wonderful day!";
}
// add
function add(){
    var first = Number(document.getElementById("first-number").value);
    var second = Number(document.getElementById("second-number").value);
    var result = first + second;
    document.getElementById("result1").innerHTML = result;
}
// minus
function minus(){
    var first = Number(document.getElementById("first-number").value);
    var second = Number(document.getElementById("second-number").value);
    var result = first - second;
    document.getElementById("result1").innerHTML = result;
}
// times
function times(){
    var first = Number(document.getElementById("first-number").value);
    var second = Number(document.getElementById("second-number").value);
    var result = first * second;
    document.getElementById("result1").innerHTML = result;
}
// divide
function divide(){
    var first = Number(document.getElementById("first-number").value);
    var second = Number(document.getElementById("second-number").value);
    if (second == 0){
        result = "0: invalid input"
    } else{
        var result = first / second;
    }
    document.getElementById("result1").innerHTML = result;
    }
//decimal to binary
function dec2bin(decNumber) {
    var output;
    var dec = Number(document.getElementById("dec-number").value);
    if (dec < 0) {
        output = "Invalid negative input";
    } else if (dec == 0) {
        output = "0";
    } else {
        var resisual = dec;
        output = "";
        while(resisual / 2 > 0){
            output = output + (resisual % 2);
            resisual = parseInt(resisual / 2);
        } 
    }
    document.getElementById("result2").innerHTML = output;
}
//Celsius to Fahrenheit
//Fahrenheit to Celsius
//Pound to Kilogram
//Kilogram to Pound