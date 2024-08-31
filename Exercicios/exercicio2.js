//2)Sequência Finabonacci

function finabonacci(num){
    let num1 = 0;
    let num2 = 1;
    if(num === num1 || num === num2) return true;
    let num3 = num1 + num2;
    while (num3 <= num) {
        if (num3 === num) return true;
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }
    return false;
 }

 let numero = 34;

 if (finabonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
 } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`)
 }
