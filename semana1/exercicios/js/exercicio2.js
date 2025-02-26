function primo(num) {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (!(num % 2) || !(num % 3)) return false;

    for (const i = 5; i <= Math.sqrt(num); i += 6) {
        if (!(num % i) || !(num % (i + 2))) return false;
    }
    return true;
}

function verificarNumero() {
    let numero = document.querySelector("#numero").value;
    numero = parseInt(numero);
    
    if (isNaN(numero) || numero <= 0) {
        alert("Insira um número inteiro positivo válido.");
        return;
    }
    
    alert(`O numero ${numero} ` + (primo(numero) ? "é primo" : "não é primo"))
}