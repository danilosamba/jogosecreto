// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo da Advinhação';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;

let numerosecreto = gerarNumeroAleatorio();
let tentativa = 1;
function escreverTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial(){
    escreverTextoNaTela('h1', 'Jogo da Advinhação');
    escreverTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()



function verificarChute(){
    console.log(`numero de tentativas ${tentativa}`)
    let chute = document.querySelector('input').value
//console.log(numerosecreto);

    if (chute == numerosecreto){
        escreverTextoNaTela('H1', 'Parabéns');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let numeroTentativas = `Você acertou com ${tentativa} ${palavraTentativa}`;
        escreverTextoNaTela('p', `${numeroTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if (chute > numerosecreto){
           escreverTextoNaTela('p', `O Número Secreto é Menor que ${chute}`);
      } else{
        escreverTextoNaTela('p', `O Número Secreto é Maior que ${chute}`);
      }
      tentativa++;
      limparCampos();

    }

}

function limparCampos(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
       } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
       }
} 

function reiniciarJogo(){
numerosecreto = gerarNumeroAleatorio();
limparCampos();
tentativas = 1;
exibirMensagemInicial()
document.getElementById('reiniciar').setAttribute('disabled', true)
}

// //exercicio

// let listaGenerica = ['JavaScript','C','C++', 'Kotlin', 'Python'];
// listaGenerica.push = ['Java', 'Ruby', 'GoLang']
// let ultimo = listaGenerica[listaGenerica.length -1]
// console.log(listaGenerica)
// console.log (`Mostrar Resultados ${ultimo}`)

