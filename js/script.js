let currentValue = "";
let previousValue = null;
let operator = null;


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
}

function handleClear(){
    
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