function verificarPalindromo() {
    let texto = document.querySelector('#texto').value;

    texto = texto.replace(/\s/g, '').toLowerCase();
    
    // Compara a string original com a sua versão invertida
    if(texto === texto.split('').reverse().join(''))
    {
        alert("É Palindromo")
    }
    else
    {
        alert("Não é Palindromo")
    }
    
    
}