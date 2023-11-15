var IdClicado = localStorage.getItem('IdClicado');

const Body = document.body;
Body.style.background = 'black'
const DivContainer = document.createElement('div');
DivContainer.id = 'Container';
//Body.appendChild(DivContainer);
DivContainer.style.width = '50%'
DivContainer.style.margin = 'auto'

const CriaCartao = (Entrada) => {
    const ContainerAtleta = document.createElement ('div');
    
    ContainerAtleta.style.width = '20 rem';
    ContainerAtleta.style.backgroundColor = '#020202';
    ContainerAtleta.style.textAlign = 'left';
    ContainerAtleta.style.margin = '25px';
    ContainerAtleta.style.color = 'white'
    ContainerAtleta.style.fontFamily = 'Kanit'
    ContainerAtleta.style.borderRadius = '6px'
    ContainerAtleta.style.display = 'flex'
    
    //ContainerAtleta.style.alignItems = 'center'
    
     
    const Br = document.createElement('br')

    const Titulo = document.createElement('h3');
    Titulo.innerHTML = Entrada.nome;
    
    const Imagem = document.createElement('img');
    Imagem.src = Entrada.imagem;
    Imagem.alt = 'Foto de '+ Entrada.nome
    Imagem.style.borderRadius = '6px'

    const Posicao = document.createElement('h3');
    Posicao.innerHTML = Entrada.posicao;

    const DivImagemNomePosicao = document.createElement('div');
    DivImagemNomePosicao.appendChild(Imagem)
    DivImagemNomePosicao.appendChild(Titulo)
    DivImagemNomePosicao.appendChild(Posicao)
    DivImagemNomePosicao.style.width = 'fit-content'
    DivImagemNomePosicao.style.textAlign = 'center'
    DivImagemNomePosicao.style.fontSize = '23px'

    const Descricao = document.createElement('p');
    Descricao.innerHTML = Entrada.descricao;

    const NomeCompleto = document.createElement('p')
    NomeCompleto.innerHTML = 'Nome completo: ' + Entrada.nome_completo

    const Nascimento = document.createElement('p')
    Nascimento.innerHTML = 'Nascimento: ' + Entrada.nascimento

    const Altura = document.createElement('p')
    Altura.innerHTML = 'Altura: ' + Entrada.altura

    const DivDescricaoDados = document.createElement('div')
    DivDescricaoDados.appendChild(Descricao)
    DivDescricaoDados.appendChild(NomeCompleto)
    DivDescricaoDados.appendChild(Nascimento)
    DivDescricaoDados.appendChild(Altura)
    DivDescricaoDados.style.fontSize = '22px'
    DivDescricaoDados.style.margin = 'inherit'

    ContainerAtleta.appendChild(DivImagemNomePosicao)
    
    ContainerAtleta.appendChild(DivDescricaoDados)
  
    
    
    Body.appendChild(ContainerAtleta)

    
}



CriaCartao(Jogadores[IdClicado-1])