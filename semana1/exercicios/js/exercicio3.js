function calcularFatorial() {
    let numero = document.querySelector("#numero").value;
    numero = parseInt(numero);
    
    if (isNaN(numero) || numero < 0) {
        alert("Insira um número inteiro não negativo válido.");
        return;
    }
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    
    alert(`O fatorial de ${numero} é ${fatorial}.`);
}