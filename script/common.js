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
console.log(text_box)


close_btn.addEventListener('click',()=>{
    text_box.style.display = 'none'
})


window.addEventListener('scroll',function(){
    let scroll_text = window.scrollY;
    if(scroll_text >=100){
        text_box.style.display = 'none'
    }else{
        text_box.style.display = 'block'
    }
})


// swiper
let header_slide = new Swiper('.wrap',{
    loop:true,
    slidesPerView: 1,
    autoplay:{delay:3000},
    navigation:{
        nextEl:'.wrap .swiper-button-next',
        prevEl:'.wrap .swiper-button-prev',
    },
})
// 카테고리
const nav_background = document.querySelector('.nav_background')
const header_categori =document.querySelector('.header_categori')
const nav_close =document.querySelector('.nav_top .close a')
const nav_category =document.querySelectorAll('.content_main')
const category_menu = document.querySelectorAll('.menu a')
const hide = ()=>{
    for(let i of nav_category){
        console.log(i)
        i.style.display = 'none'
    }
}
hide()

nav_category[0].style.display='flex'
category_menu[0].style.color ='#fff'
category_menu.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        target.style.color=''
        hide()
        nav_category[index].style.display='flex'
        target.style.color = '#fff'
    })
})


nav_background.style.display = 'none'

header_categori.addEventListener('click',()=>{
    nav_background.style.display = 'block'
    nav_background.classList.add('category_ani')
})

nav_close.addEventListener('click',()=>{
    nav_background.style.display = 'none'
})
const first_footer =document.querySelectorAll ('.first_footer a')
for(let i of  first_footer){
    i.addEventListener('click',()=>{
        window.location = './service.html'
    })
}

// 전체 상품 가기
const gender_nav =document.querySelectorAll('.gender_nav')
for(let i of gender_nav){
    i.addEventListener('click',()=>{
        window.location = './product_all.html'
    })
}

