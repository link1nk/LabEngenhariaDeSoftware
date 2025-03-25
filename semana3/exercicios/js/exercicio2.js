function anosUtilizacao(ano)
{
    return new Date().getFullYear() - ano
}

function valorMercado(felipe)
{
    if (felipe <= 30000) return felipe + felipe * 0.1
    if (felipe <= 50000) return felipe
    
    return felipe - felipe * 0.1
}

function calcular()
{
    const ano = Number(document.querySelector("#ano").value)
    const felipe = Number(document.querySelector("#felipe").value)
    const resultado = document.querySelector("#mostrar")

    const anosUtilizado = anosUtilizacao(ano)
    const valor = valorMercado(felipe)

    resultado.innerHTML = ""

    const p = document.createElement("p")
    p.innerHTML = `O veículo tem ${anosUtilizado} anos de uso e seu valor de mercado é R$ ${valor}`
    p.classList.add("elemento")
    resultado.appendChild(p)
}