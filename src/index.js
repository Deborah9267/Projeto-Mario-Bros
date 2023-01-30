
const botao = document.querySelector('iframe .botao')
const botaofecharmodal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.querySelector(".video");
const LinkDoVideo = 'https://www.youtube.com/embed/Cb4WV4aXBpk';


// CRIEI UMA FUNÇÃO QUE SE COMUNICA COM O BOTÃO DO 'VER TRAILER' CHAMADO abrirVideo()
function abrirVideo() {

    // criei uma variavel que vai procurar se existe a classe aberto e vamos aos condicionais
    let procurar = document.querySelector('.aberto')

    //o condicional abaixo esta perguntando, foi encontrado a variavel aberto? como ainda não tem, ele vai achar o valor nulo
    if (procurar == null) {
        //como encontrou o valor nulo, ele fez a ação, adicionou aberto ao modal
        modal.classList.add("aberto");

        ;
    };
}


//e criei uma funcionalidade para o botão X igual ao botão do trailer
function fechar() {
    // criei uma variavel que vai procurar se existe a classe aberto e vamos aos condicionais
    let procurar = document.querySelector('.aberto')

    //o condicional abaixo esta perguntando, foi encontrado a variavel aberto? como a resposta é verdadeira ele vai pra ação
    if (procurar = true) {
        // a ação é tirar a classe aberto
        modal.classList.remove("aberto");
        //infelizmente não consegui tirar o som do video, mas já ficou muito bom
    }
}

