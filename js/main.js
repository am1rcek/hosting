let elMenuBtn = document.querySelector(".menu-btn");
let elModal = document.querySelector(".nav");
let elLinethird = document.querySelector(".line2");
let elLineOne = document.querySelector(".line1");
let elLineThree = document.querySelector(".line3");
let elToogleBtn = document.querySelector(".wares__toogle");
let elToogledBtn = document.querySelector(".wares__round")


elMenuBtn.addEventListener("click",function(){
    elModal.classList.toggle("grow-height")
    elLinethird.classList.toggle("remove-line");
    elLineOne.classList.toggle("rotate-line1");
    elLineThree.classList.toggle("rotate-line3");
})


elToogleBtn.addEventListener("click",function(){
    elToogledBtn.classList.toggle("toogled");
})