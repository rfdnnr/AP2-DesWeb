const Validacao = localStorage.getItem('Autorizacao')

const Body = document.body;
Body.style.background = 'black'

const BotaoVoltar = document.getElementById('BotaoVoltar')
BotaoVoltar.addEventListener("click", function(){
    window.location.href = "./PaginaJogadores.html"
})

if (Validacao == 'Autorizado'){

const params = new URLSearchParams(window.location.search);
const IdURL = params.get('id');
console.log(IdURL)







const DetalhesJogador = document.getElementById('DetalhesJogador')
const DivImagemNomePosicao = document.getElementById('DivImagemNomePosicao')
const ImagemDetalhes = document.getElementById('ImagemDetalhes')
const NomeDetalhes = document.getElementById('NomeDetalhes')
const PosicaoDetalhes = document.getElementById('PosicaoDetalhes')
const DivDescricaoNomeCompletoNascimentoAltura = document.getElementById('DivDescricaoNomeCompletoNascimentoAltura')
const DescricaoDetalhes = document.getElementById('DescricaoDetalhes')
const NomeCompletoDetalhes = document.getElementById('NomeCompletoDetalhes')
const NascimentoDetalhes = document.getElementById('NascimentoDetalhes')
const AlturaDetalhes = document.getElementById('AlturaDetalhes')

DetalhesJogador.style.color = 'white'
DetalhesJogador.style.fontFamily = 'Kanit'
DetalhesJogador.style.fontSize = '18px'
DetalhesJogador.style.margin = 'inherit'





const CriaDetalhes = (id) => {
    fetch('https://botafogo-atletas.mange.li/' + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("Não foi possível obter os dados.");
            }
            return response.json();
        })
        .then(Jogadores => {
            ImagemDetalhes.src = Jogadores.imagem;
            NomeDetalhes.innerHTML = 'Nome: ' + Jogadores.nome;
            PosicaoDetalhes.innerHTML = 'Posição: ' + Jogadores.posicao;
            DescricaoDetalhes.innerHTML = 'Descrição: ' + Jogadores.descricao;
            NomeCompletoDetalhes.innerHTML = 'Nome Completo: ' + Jogadores.nome_completo;
            NascimentoDetalhes.innerHTML = 'Nascimento: ' + Jogadores.nascimento;
            AlturaDetalhes.innerHTML = 'Altura: ' + Jogadores.altura;
            
            ImagemDetalhes.style.borderRadius = '6px'
            DivDescricaoNomeCompletoNascimentoAltura.style.margin = 'inherit'
            DivImagemNomePosicao.style.textAlign = 'center'


        })
        .catch(error => {
            console.error(error);
        });
}


if (IdURL > 60 || IdURL < 1) {
    const MensagemErro = document.getElementById('MensagemErro')
    MensagemErro.style.fontFamily = 'Kanit'
    MensagemErro.style.fontSize = '24px'
    MensagemErro.style.width = 'fit-content'
    MensagemErro.style.margin = 'auto'
    MensagemErro.style.color = 'white'
    MensagemErro.innerHTML = 'Não foi possível obter os dados!'

} else {
CriaDetalhes(IdURL);
}


} else {
    const MensagemAutorizacao = document.getElementById('MensagemAutorizacao')
    MensagemAutorizacao.innerHTML = 'Você não tem autorização para acessar essa página.'
    MensagemAutorizacao.style.fontFamily = 'Kanit'
    MensagemAutorizacao.style.fontSize = '28px'
    MensagemAutorizacao.style.width = 'fit-content'
    MensagemAutorizacao.style.margin = 'auto'
    MensagemAutorizacao.style.color = 'white'
}