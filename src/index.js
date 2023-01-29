const botao=document.querySelector(".botao");

const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fecharmodal");

const linkdovideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";
const video = document.getElementById("video");
console.log("https://www.youtube.com/embed/Cb4WV4aXBpk");

botao.addEventListener("Click",( ) => {   
    console.log("clicou no botao");
    
    modal.classList.add("aberto");
    video.SetAttribute("src","https://www.youtube.com/embed/Cb4WV4aXBpk");
;
});


botaoFecharModal.addEventListener("Click", () => {
    modal.classList.remove("aberto");
    video.SetAttribute("src", "Linkdovideo");
});



