const Body = document.body;
const DivContainer = document.createElement('div');
DivContainer.id = 'Container';
Body.appendChild(DivContainer);



const CriaCartao = (Entrada) => {
    const ContainerAtleta = document.createElement ('div');
    
    ContainerAtleta.style.width = '20 rem';
    ContainerAtleta.style.backgroundColor = '#020202';
    ContainerAtleta.style.textAlign = 'center';
    ContainerAtleta.style.margin = 'auto';
    ContainerAtleta.style.color = 'white'
    ContainerAtleta.style.fontFamily = 'Kanit'
    ContainerAtleta.style.borderRadius = '6px'
    ContainerAtleta.style.width = 'minContent'
    ContainerAtleta.style.padding = '9px'
    ContainerAtleta.style.marginBottom = '9px'

    ContainerAtleta.id = 'ContainerAtleta'
    
    const Titulo = document.createElement('h3');
    Titulo.innerHTML = Entrada.nome;
    
    const Imagem = document.createElement('img');
    Imagem.src = Entrada.imagem;
    Imagem.alt = 'Foto de '+ Entrada.nome
    Imagem.style.borderRadius = '6px'
    
    const Descricao = document.createElement('p');
    Descricao.innerHTML = Entrada.descricao;

    const BotaoDetalhes = document.createElement('button')
    BotaoDetalhes.innerHTML = 'Detalhes'
    BotaoDetalhes.style.marginBlock = '10px'
    BotaoDetalhes.style.backgroundColor = 'white'
    BotaoDetalhes.style.color = 'black'
    BotaoDetalhes.style.fontSize = '18px'
    BotaoDetalhes.style.fontFamily = 'Kanit'
    BotaoDetalhes.style.border = 'none'
    BotaoDetalhes.style.borderRadius = '6px'
    BotaoDetalhes.style.height = '30px'
    BotaoDetalhes.style.width = '160px'

    const Br = document.createElement('br')

    ContainerAtleta.appendChild(Titulo)
    ContainerAtleta.appendChild(Imagem)
    //ContainerAtleta.appendChild(Descricao)
    ContainerAtleta.appendChild(Br)
    ContainerAtleta.appendChild(BotaoDetalhes)

    DivContainer.appendChild(ContainerAtleta)

    ContainerAtleta.addEventListener("click", function(){
        var IdClicado = Entrada.id
        console.log("ID do jogador clicado:", IdClicado);
        localStorage.setItem('IdClicado', IdClicado);
        window.location.href = "./PaginaDetalhes.html"
    })
}


let BotaoFeminino = document.getElementById('BotaoFeminino')
let BotaoMasculino = document.getElementById('BotaoMasculino')
let BotaoCompleto = document.getElementById('BotaoCompleto')

BotaoFeminino.addEventListener("click", function() {
    DivContainer.innerHTML = ""
    let indice = 0
    while (indice < 26){
        CriaCartao(Jogadores[indice]);
        
        indice++;}
})

BotaoMasculino.addEventListener("click", function() {
    DivContainer.innerHTML = ""
    let indice = 26
    while (indice < 60){
        CriaCartao(Jogadores[indice]);
        
        indice++;
    }
})

BotaoCompleto.addEventListener("click", function(){
    DivContainer.innerHTML = ""
    Jogadores.forEach((Jogador) => {CriaCartao(Jogador)})
})


