const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById
    ('resultado');

    const valorIMC = (peso/(altura*altura)).toFixed(1);

    resultado.textContent = `${nome} seu IMC é ${valorIMC}!`;

    let cassificacao = "";
    if(valorIMC < 18.5){
    cassificacao = "abaixo do peso";
    } else if ( valorIMC < 25){
        classificacao = "peso ideal!"; 
    } else if ( valorIMC < 30){
        classificao = "Acima do peso ideal";
    } else{
        classificacao = "obeso";
    } 

}
    calcular.addEventListener('click',imc);