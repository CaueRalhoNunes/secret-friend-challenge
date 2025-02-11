const nameList = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultList = document.querySelector('.result-list');
const result = document.getElementById('resultado');

function adicionarAmigo() {
    if (nameList.length === 0) {
        alert("Adicione um nome!");
        return;
    }
    listaAmigos.style.display = 'block';
    resultList.style.display = 'none';
    const li = document.createElement('li');
    const friend = document.getElementById('amigo').value;
    nameList.push(friend);

    li.textContent = friend;
    listaAmigos.appendChild(li);
    document.getElementById('amigo').value = ""
}

function sortearAmigo() {
    if (nameList.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }
    const random = Math.floor(Math.random() * nameList.length);
    const test = nameList.at(random);
    result.textContent = `O amigo sorteado é: ${test}`;
    listaAmigos.style.display = 'none';
    resultList.style.display = 'flex';

}