const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Qual a nota mínima: "));


let linhas =''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinhas();
    atualizaTabela();
    mediaFinal()

});

function adicionarLinhas(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

        if(atividades.includes(inputNomeAtividade.value)){
            alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
        }else{
            atividades.push((inputNomeAtividade.value)); // parseFloat porque pode ser um número quebrado //
            notas.push(parseFloat(inputNotaAtividade.value));

            let linha = '<tr>';
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
            linha += `</tr>`;

            linhas += linha;
        }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculoMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < notas.length; i++){ // Realiza a soma das notas que são introduzidas na planilha //
        somaDasNotas += notas[i];

    }

    // ******* Formula para tirar a média ******** //
    // const media = somaDasNotas / notas.length; // 

    // *** Também pode ser feito desse jeito com o RETURN *** //
                return somaDasNotas / notas.length;
}

function mediaFinal(){
    const media = calculoMediaFinal();

    document.getElementById("media-final-valor").innerHTML = media;
    document.getElementById("media-final-resultado").innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
}