const arrayzinho = []

function adicionar()
{
    const valor = document.querySelector("#arrayzinho").value
    const resultado = document.querySelector("#mostrar-array")

    arrayzinho.push(valor)

    resultado.innerHTML = ""

    for (i=0; i < arrayzinho.length; i++)
    {
        const p = document.createElement("p")
        p.classList.add("elemento")
        p.innerHTML = arrayzinho[i]
        resultado.appendChild(p)
    }
}