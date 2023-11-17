const BotaoVoltar = document.getElementById('BotaoVoltar0')
BotaoVoltar.addEventListener("click", function(){
    window.location.href = "./index.html"
})




const VerificacaoFalha = () => {
    const Botoes = document.getElementById('Botoes')
    const MensagemAutorizacao = document.getElementById('MensagemAutorizacao')
    MensagemAutorizacao.innerHTML = 'Você não tem autorização para acessar essa página.'
    MensagemAutorizacao.style.fontFamily = 'Kanit'
    MensagemAutorizacao.style.fontSize = '28px'
    MensagemAutorizacao.style.width = 'fit-content'
    MensagemAutorizacao.style.margin = 'auto'
    Botoes.innerHTML = ' '
    }




const Validacao = localStorage.getItem('Autorizacao')



if (Validacao == 'Autorizado') {





const Body = document.body;
const DivContainer = document.createElement('div')
DivContainer.id = 'Container';
Body.appendChild(DivContainer);

let BotaoFeminino = document.getElementById('BotaoFeminino')
let BotaoMasculino = document.getElementById('BotaoMasculino')
let BotaoCompleto = document.getElementById('BotaoCompleto')




const AcessandoAPI = (Escolha) => {
    fetch('https://botafogo-atletas.mange.li/' + Escolha)
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível obter os dados.");
            }
            return response.json();
        })
        .then(data => {
            data.forEach(atleta => {
                CriaCartao(atleta);
            });
        })
        .catch(error => {
            console.error(error);
        });
};

BotaoFeminino.addEventListener("click", function() {
    DivContainer.innerHTML = ""
    AcessandoAPI("feminino")
})

BotaoMasculino.addEventListener("click", function() {
    DivContainer.innerHTML = ""
    AcessandoAPI("masculino")
    }
)

BotaoCompleto.addEventListener("click", function(){
    DivContainer.innerHTML = ""
    AcessandoAPI("all")
})




const CriaCartao = (Escolha) => {
    
    
    
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
    Titulo.innerHTML = Escolha.nome;
    
    const Imagem = document.createElement('img');
    Imagem.src = Escolha.imagem;
    Imagem.alt = 'Foto de '+ Escolha.nome
    Imagem.style.borderRadius = '6px'
    
    const Descricao = document.createElement('p');
    Descricao.innerHTML = Escolha.descricao;

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
        var IdClicado = Escolha.id
        console.log("ID do jogador clicado:", IdClicado);
        window.location.href = "./PaginaDetalhes.html?id=" + IdClicado
    })

    window.addEventListener('beforeunload', function () {
    window.location.reload(true);
});

}

} else {
    VerificacaoFalha()
    
}
