let myLength = document.querySelectorAll('.number').length;


for(let i = 0; i < myLength; i++){
    let number = document.querySelectorAll('.number')[i].addEventListener('click', function (){
        let ids = this.id;
        myCalc(ids)
    })
}


let x = 0;
let y = 0;
let sum = '';
function myCalc(ids) {
    if(ids === '='){
        y = +y;
        x = +x;
        let result = x + y;
        document.getElementById('div').value = result;
    }else if(ids === "/" || ids === "*" || ids === "+" || ids === "-"){
        y = x;
        x = sum;
        sum = '';
        document.getElementById('div').value = "";
    } else {
        document.getElementById('div').value += ids;
        sum += ids;
        x = sum;
    }
    if(ids === '+'){
        y = +y;
        x = +x;
        let result = x + y;
        document.getElementById('div').value = result;
    }else if(ids === "-"){
        y = +y;
        x = +x;
        let result = x + y;
        document.getElementById('div').value = result;

    }else if(ids === '='){
        y = +y;
        x = +x;
        let result = x + y;
        document.getElementById('div').value = result;

} 
}