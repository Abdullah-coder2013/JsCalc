body = document.getElementById("body");
question = "";
result = document.getElementById("result");
canUseOperator = true;
elements = ["btn-plus", "btn-minus", "btn-times", "btn-divide", "btn-mod"];
operators = ["+", "-", "*", "/", "%"];
show_op = ["+", "-", "x", "÷", "%"];

for (let i = 0; i < 10; i++) {
    document.getElementById(`btn-${i}`).addEventListener("click", function () {
        question = question + i;
        result.innerHTML = result.innerHTML + i;
    }
    )
}
for (let i = 0; i < 5; i++) {
    document.getElementById(elements[i]).addEventListener("click", function () {
        question = question + operators[i];
        result.innerHTML = result.innerHTML + show_op[i];
    })
}
document.getElementById("c").addEventListener("click", function onClick() {
    result.innerHTML = "";
    question = "";
    canUseOperator = true;
});
document.getElementById("e").addEventListener("click", function onClick() {
    var res = eval(question);
    console.log(res);
    result.innerHTML = res;
});
document.getElementById("b").addEventListener("click", function onClick() {
    result.innerHTML = result.innerHTML.slice(-2,-1)
});
