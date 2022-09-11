const body = document.getElementById("body");
let question = "";
const result = document.getElementById("result");
const canUseOperator = true;
const operatorButtonIds = ["btn-plus", "btn-minus", "btn-times", "btn-divide", "btn-mod"];
const operators = ["+", "-", "*", "/", "%"];
const show_op = ["+", "-", "x", "÷", "%"];
let lastOperation = null;
const operator_map = {
    "+": "+",
    "-": "-",
    "x": "*",
    "÷": "/",
    "%": "%",
}

for (let i = 0; i < 10; i++) {
    document.getElementById(`btn-${i}`).addEventListener("click", function (e) {
        if (lastOperation == "=") {
            question = "";
            result.value = "";
        }
        question = question + e.target.innerHTML;
        result.value = result.value + e.target.innerHTML;
        lastOperation = e.target.innerHTML;
    }
    )
}
for (let i = 0; i < 5; i++) {
    document.getElementById(operatorButtonIds[i]).addEventListener("click", function (e) {

        question = question + e.target.innerHTML;
        result.value = result.value + e.target.innerHTML;
        lastOperation = operator_map[e.target.innerHTML];
    })
}
document.getElementById("c").addEventListener("click", function onClick() {
    result.value = "";
    question = "";
    canUseOperator = true;
});
document.getElementById("e").addEventListener("click", function onClick() {
    var res = eval(question);
    console.log(res);
    result.value = res;
    question = res;
    lastOperation = "="
});

document.getElementById("b").addEventListener("click", function onClick() {
    question = question.substring(0, question.length - 1)
    result.value = question

});
