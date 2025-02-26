function verificarNumero() {
    let numero = document.querySelector("#numero").value;
    numero = parseInt(numero);
    
    if (isNaN(numero) || numero <= 0) {
        alert("Insira um número inteiro positivo válido.");
        return;
    }
    
    alert(`O numero ${numero} é ` + ((numero & 1) ? "impar" : "par"));
}