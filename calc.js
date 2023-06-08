let number1=0
let number2=0
function sum(){
    number1=document.getElementById('number1').value
    number2=document.getElementById('number2').value 
    let x=document.getElementById("answer")
    return x.innerHTML=(parseFloat(number1)+parseFloat(number2))
}

function sub(){
    let number1=document.getElementById('number1').value
    let number2=document.getElementById('number2').value
    let x=document.getElementById("answer")
    return x.innerHTML=number1-number2
}

function mul(){
    let number1=document.getElementById('number1').value
    let number2=document.getElementById('number2').value
    let x=document.getElementById("answer")
    return x.innerHTML=number1*number2
}

function div(){
    let number1=document.getElementById('number1').value
    let number2=document.getElementById('number2').value
    let x=document.getElementById("answer")
    return x.innerHTML=number1/number2
}