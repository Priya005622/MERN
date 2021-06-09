function number(num){
    var result = document.getElementById("cal");
    result.value += num;
}
function result(){
    var result = document.getElementById("cal");
    result.value = eval(result.value);
}
function clearkey(){
    var result = document.getElementById("cal");
    result.value = ("");
}
function deletekey(){
    var number = document.getElementById("cal");
    var remove = number.value;
    remove = remove.slice(0, -1);
    number.value = remove;
}