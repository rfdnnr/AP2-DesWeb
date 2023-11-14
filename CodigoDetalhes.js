var IdClicado = localStorage.getItem('IdClicado');

const Body = document.body;
const DivContainer = document.createElement('div');
DivContainer.id = 'Container';
Body.appendChild(DivContainer);
DivContainer.style.width = '50%'
DivContainer.style.margin = 'auto'

const CriaCartao = (Entrada) => {
    const ContainerAtleta = document.createElement ('div');
    
    ContainerAtleta.style.width = '20 rem';
    ContainerAtleta.style.backgroundColor = '#020202';
    ContainerAtleta.style.textAlign = 'center';
    ContainerAtleta.style.margin = 'auto';
    ContainerAtleta.style.color = 'white'
    ContainerAtleta.style.fontFamily = 'Kanit'
    ContainerAtleta.style.borderRadius = '6px'
    
    const Titulo = document.createElement('h3');
    Titulo.innerHTML = Entrada.nome;
    
    const Imagem = document.createElement('img');
    Imagem.src = Entrada.imagem;
    Imagem.alt = 'Foto de '+ Entrada.nome
    Imagem.style.borderRadius = '6px'
    
    const Descricao = document.createElement('p');
    Descricao.innerHTML = Entrada.descricao;

    ContainerAtleta.appendChild(Titulo)
    ContainerAtleta.appendChild(Imagem)
    ContainerAtleta.appendChild(Descricao)

    DivContainer.appendChild(ContainerAtleta)

    
}



CriaCartao(Jogadores[IdClicado])