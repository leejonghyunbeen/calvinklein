// a안올라가게하기
const all_a = document.querySelectorAll ('a')
for(let i of all_a){
    i.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
// 상단 스와이프 및 내용
const text_box = document.querySelector('.text_box')
const close_btn =document.querySelector('.close_icon')
console.log(close_btn)
close_btn.addEventListener('click',()=>{
    text_box.style.display = 'none'
})
// swiper
let header_slide = new Swiper('.wrap',{
    slidesPerView: 1,
    autoplay:{delay:3000}
})
// 카테고리
const nav_background = document.querySelector('.nav_background')
const header_categori =document.querySelector('.header_categori')
const nav_close =document.querySelector('.nav_top .close a')
nav_background.style.display = 'none'

header_categori.addEventListener('click',()=>{
    nav_background.style.display = 'block'
    nav_background.classList.add('category_ani')
})

nav_close.addEventListener('click',()=>{
    nav_background.style.display = 'none'
})