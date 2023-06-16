window.onload = () => {
    informacoes()
}

let div_detalhes = document.getElementById('detalhes')
let voltar = document.getElementById('voltar')

voltar.addEventListener('click', ()=>{
    window.location.href = '../'
})


function informacoes(){
    div_detalhes.innerHTML = `
    <h1>${localStorage.getItem('@Nome')}</h1>
    <img src="${localStorage.getItem('@Imagem')}">
    <h2>${localStorage.getItem('@Posicao')}</h2>
    <strong>Nome completo: </strong> <span> ${localStorage.getItem('@NomeCompleto')} </span>
    <p>${localStorage.getItem('@Descricao')}</p> 
    `;
}
