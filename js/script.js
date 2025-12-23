let currentInput = "0";
let previousValue = null;
let currentOperator = null;
let shouldResetInput = false;

const operationDisplay = document.querySelector("#operation");
const totalDisplay = document.querySelector("#total");

document.querySelectorAll(".btn").forEach(btn =>{
    btn.addEventListener("click", handleClick)
});

function handleClick(){
    const value = this.textContent.trim();

    if(value === "AC"){
        handleClear();
    }
    else if(value === "DEL"){
        handleDelete();
    }
    else if (value === "="){
        handleEquals();
    }
    else if (["+", "−", "×", "÷"].includes(value)){
        handleOperator(value);
    }
    else if (!isNaN(value) || value === ".") {
        handleNumber(value);
    }
}

function handleClear(){
    currentInput = "0";
    previousValue = null;
    currentOperator = null;
    shouldResetInput = false;


    updateDisplay();
}

function handleDelete() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    

    updateDisplay();
}

function handleNumber(value) {

    // Prevent multiple dots
    if (value === "." && currentInput.includes(".")) return;

    // Start fresh after operator or equals
    if (currentInput === "0" || shouldResetInput) {
        currentInput = value === "." ? "0." : value;
        shouldResetInput = false;
    } else {
        currentInput += value;
    }

    updateDisplay();
}


function handleOperator(operator) {

    // If already have operator, calculate first
    if (currentOperator !== null && !shouldResetInput) {
        calculate();
    }

    previousValue = currentInput;
    currentOperator = operator;
    shouldResetInput = true;

    updateDisplay();
}

function handleEquals() {
    if (currentOperator === null) return;

    calculate();
    currentOperator = null;
    shouldResetInput = true;

    updateDisplay();
}

function calculate() {
    let result;

    const prev = parseFloat(previousValue);
    const current = parseFloat(currentInput);

    switch (currentOperator) {
        case "+":
            result = prev + current;
            break;
        case "−":
            result = prev - current;
            break;
        case "×":
            result = prev * current;
            break;
        case "÷":
            result = current === 0 ? 0 : prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousValue = result.toString();
}


function updateDisplay() {
    operationDisplay.innerHTML = currentInput;
    totalDisplay.innerHTML = previousValue ?? "0";
}

// document.querySelectorAll(".btn").forEach(btn =>{
//     btn.addEventListener("click", function(){
//         const value = this.textContent.trim();
//         console.log(value);
//         if(value === "AC"){
//             document.querySelectorAll("#total, #operation").forEach(divData =>{
//                 divData.textContent = "0";
//             })
//         }
//         else if(value === "DEL"){
//             if(document.querySelector("#operation").textContent.length > 1){
//                 document.querySelector("#operation").textContent = document.querySelector("#operation").textContent.slice(0, -1);
//             }
//             else{
//                 document.querySelector("#operation").textContent = "0";
//             }
//         }

//     })
// })