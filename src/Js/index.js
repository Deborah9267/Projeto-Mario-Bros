const botao=document.querySelector(".botao");
const botaofecharmodal=document.querySelector(".fecharmodal");
const video=document.getElementById("video");
const modal=document.querySelector(".modal");
const LinkDoVideo= video.scr;


botao.addEventListener("click", ()=>{
    alternarmodal();
    video.setAttribute("src", LinkDoVideo);
});

function alternarmodal() {
    modal.classList.toggle("aberto");


}

botaofecharmodal.addEventListener("click",()=>{
    alternarmodal();
    video.setAttribute("src","");
})


