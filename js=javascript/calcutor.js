function clearscreen(){
    document.getElementById("result").value=""
}
function setScreenValue(value){
document.getElementById("result").value+=value
}
function calculateResult(){
    const resultelement =document.getElementById("result")
    const expression=resultelement.value.trim()
    if (expression ==""){
    resultelement.value    
    }
}