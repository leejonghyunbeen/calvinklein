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

