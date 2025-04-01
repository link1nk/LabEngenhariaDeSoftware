document.addEventListener('DOMContentLoaded', function() {
    const radioProfessor = document.querySelector('input[value="professor"]');
    const radioAluno = document.querySelector('input[value="aluno"]');
    const camposDinamicos = document.getElementById('campos-dinamicos');

    function criarCamposProfessor() {
        camposDinamicos.innerHTML = '';

        const areaDiv = document.createElement('div');
        areaDiv.className = 'bloco-input';
        areaDiv.innerHTML = `
            <label for="Area">Área: </label>
            <input type="text" id="Area" placeholder="Digite sua área de atuação">
        `;
        camposDinamicos.appendChild(areaDiv);

        const matriculaDiv = document.createElement('div');
        matriculaDiv.className = 'bloco-input';
        matriculaDiv.innerHTML = `
            <label for="Matricula">Matrícula: </label>
            <input type="text" id="Matricula" placeholder="Digite sua matrícula">
        `;
        camposDinamicos.appendChild(matriculaDiv);

        const lattesDiv = document.createElement('div');
        lattesDiv.className = 'bloco-input';
        lattesDiv.innerHTML = `
            <label for="Lattes">Lattes: </label>
            <input type="text" id="Lattes" placeholder="Digite o link do seu Lattes">
        `;
        camposDinamicos.appendChild(lattesDiv);
    }

    function criarCamposAluno() {
        camposDinamicos.innerHTML = ''; 

        const cursoDiv = document.createElement('div');
        cursoDiv.className = 'bloco-input';
        cursoDiv.innerHTML = `
            <label for="Curso">Curso: </label>
            <input type="text" id="Curso" placeholder="Digite seu curso">
        `;
        camposDinamicos.appendChild(cursoDiv);

        const matriculaDiv = document.createElement('div');
        matriculaDiv.className = 'bloco-input';
        matriculaDiv.innerHTML = `
            <label for="Matricula">Matrícula: </label>
            <input type="text" id="Matricula" placeholder="Digite sua matrícula">
        `;
        camposDinamicos.appendChild(matriculaDiv);
    }

    radioProfessor.addEventListener('change', function() {
        if (this.checked) {
            criarCamposProfessor();
        }
    });

    radioAluno.addEventListener('change', function() {
        if (this.checked) {
            criarCamposAluno();
        }
    });

    if (radioProfessor.checked) {
        criarCamposProfessor();
    } else if (radioAluno.checked) {
        criarCamposAluno();
    }
});