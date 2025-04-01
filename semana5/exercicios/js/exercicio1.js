document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("conteudo");
    
    const contador = document.createElement('div');
    contador.className = 'contador';
    
    const titulo = document.createElement('h2');
    titulo.textContent = 'Contador';
    
    const total = document.createElement('div');
    total.className = 'total';
    total.textContent = '0';
    
    const grupos = document.createElement('div');
    grupos.className = 'grupos';
    
    function criarGrupo(tipo, icone) {
        const grupo = document.createElement('div');
        grupo.className = 'grupo';
        
        const divIcone = document.createElement('div');
        divIcone.className = 'icone';
        divIcone.textContent = icone;
        
        const btnMais = document.createElement('button');
        btnMais.className = 'botao';
        btnMais.textContent = '+';
        
        const numero = document.createElement('div');
        numero.className = 'numero';
        numero.textContent = '0';
        
        const btnMenos = document.createElement('button');
        btnMenos.className = 'botao';
        btnMenos.textContent = '-';
        
        const rotulo = document.createElement('div');
        rotulo.textContent = tipo;
        
        btnMais.addEventListener('click', () => {
            numero.textContent = parseInt(numero.textContent) + 1;
            atualizarTotal();
        });
        
        btnMenos.addEventListener('click', () => {
            if (parseInt(numero.textContent) > 0) {
                numero.textContent = parseInt(numero.textContent) - 1;
                atualizarTotal();
            }
        });
        
        grupo.appendChild(divIcone);
        grupo.appendChild(btnMais);
        grupo.appendChild(numero);
        grupo.appendChild(btnMenos);
        grupo.appendChild(rotulo);
        
        return { grupo, numero };
    }
    
    const grupoHomens = criarGrupo('Homens', '👨');
    const grupoMulheres = criarGrupo('Mulheres', '👩');
    
    grupos.appendChild(grupoHomens.grupo);
    grupos.appendChild(grupoMulheres.grupo);
    
    const btnReset = document.createElement('button');
    btnReset.className = 'botao reset';
    btnReset.textContent = 'Zerar';
    btnReset.addEventListener('click', () => {
        grupoHomens.numero.textContent = '0';
        grupoMulheres.numero.textContent = '0';
        total.textContent = '0';
    });
    
    function atualizarTotal() {
        const totalHomens = parseInt(grupoHomens.numero.textContent);
        const totalMulheres = parseInt(grupoMulheres.numero.textContent);
        total.textContent = totalHomens + totalMulheres;
    }
    
    contador.appendChild(titulo);
    contador.appendChild(total);
    contador.appendChild(grupos);
    contador.appendChild(btnReset);
    
    app.appendChild(contador);
});