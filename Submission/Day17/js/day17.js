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