window.onload = () => {
    loadAtleta()
}

//puxando os elementos
let efeminino = document.getElementById('efeminino')
let emasculino = document.getElementById('emasculino')

//functions
const loadAtleta = () => {  
   jogadores.forEach((atleta, index)=>{
        if(atleta["elenco"] == "feminino"){
            efeminino.innerHTML += `
            <div id="jogador${index}" onclick="infoAtleta(${index})">
                <h4>${atleta["nome"]}</h4>
                <img src="${atleta["imagem"]}">
            </div>`;
        } else {
            emasculino.innerHTML += `
            <div id="jogador${index}" onclick="infoAtleta(${index})">
                <h4>${atleta["nome"]}</h4>
                <img src="${atleta["imagem"]}">
            </div>`;
        }
   })
}



function infoAtleta(indexJogador) {
    const jogador = jogadores[indexJogador];
    console.log('falhou')
    localStorage.setItem('@Nome', jogador.nome)
    localStorage.setItem('@Imagem', jogador.imagem)
    localStorage.setItem('@Posicao', jogador.posicao)
    localStorage.setItem('@Descricao', jogador.descricao)
    localStorage.setItem('@NomeCompleto', jogador.nome_completo)
    localStorage.setItem('@Nascimento', jogador.nascimento)
    localStorage.setItem('@Altura', jogador.altura);

    window.location.href = './detalhes.html'
}