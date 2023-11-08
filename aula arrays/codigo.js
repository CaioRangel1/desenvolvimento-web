const ingrid = atletas[3];

const espaco_nome = document.getElementById('nome');
const imagem = document.querySelector('div#container > img');
const espaco_des = document.querySelector('div#container > p');

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_des.innerText = atleta.descricao;
}

preenche(atletas[3])

