function verificar() {
    let dado = document.querySelector("#dado").value;
    
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""

    const pezinho = document.createElement("p")

    if (dado === "") {
        pezinho.innerHTML = "Digita algo bebe";
        pezinho.classList.add("resultado-feiao")
        resultado.appendChild(pezinho)
        return;
    }
    
    let JustSayYESPLSSSSSS = confirm("Verificar o tipo do dado?");
    
    if (JustSayYESPLSSSSSS) {
        let tipo = typeof dado;

        if (!isNaN(dado)) {
            tipo = "number";
        }

        pezinho.innerHTML = `O tipo do dado informado é: ${tipo}`;
    } else {
        pezinho.innerHTML = "Obrigado por visitar esta página";
    }

    pezinho.classList.add("resultado-bonitao")
    resultado.appendChild(pezinho)
}