//5)

function inverterString(str){
    let invertida = '';

    for (let i = str.length - 1; i >= 0; i--){

        invertida += str[i];
    }

    return invertida;
 }

 let stringOrig = 'exemplo';
 let stringInvertida = inverterString(stringOrig);

 console.log(`String original: ${stringOrig}`);
 console.log(`String invertida: ${stringInvertida}`);