 //3)

 function calcularFaturamento(vetor) {
    let maior = vetor[0];
    let menor = vetor[0];
    let soma = 0;
    let diasFaturamento = 0;

    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] > 0){
            soma += vetor[i];
            diasFaturamento++;

            if(vetor[i] > maior){
                maior = vetor[i];
            }
            if(vetor[i] < menor){
                menor = vetor[i];
            }
        }
    }
    let media = soma / diasFaturamento;
    return {maior, menor, media};
 }
 let faturamentos = [1000, 2000, 3000, 0, 5000];

 let resultado = calcularFaturamento(faturamentos);

 console.log(`Maior valor: ${resultado.maior}`);
 console.log(`Menor valor: ${resultado.menor}`);
 console.log(`Média dos valores: ${resultado.media}`)
