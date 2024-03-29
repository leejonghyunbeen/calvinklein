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


const category_a = document.querySelectorAll('.nav_left a')
for(let i of category_a){
    i.addEventListener('click',()=>{
        window.location = './product_all2.html'
    })
}
const nav_right = document.querySelectorAll('.nav_right a')

for(let i of nav_right){
    i.addEventListener('click',()=>{
        window.location = './product.html'
    })
}
// 전체 상품 가기
const gender_nav =document.querySelectorAll('.gender_nav')
for(let i of gender_nav){
    i.addEventListener('click',()=>{
        window.location = './product_all.html'
    })
}

// 모바일
const mo_bar =document.querySelector('.mo_bar')
const men_contents = document.querySelector('.mo_men_category')
const women_contents = document.querySelector('.mo_women_category')
const mo_close = document.querySelector('.mo_close')
const mo_nav =document.querySelector('.mo_nav')
const men_title = document.querySelector('.mo_men .mo_title')
const women_title = document.querySelector('.mo_women .mo_title')
const men_plus =document.querySelector('.men_plus img')
const women_plus =document.querySelector('.women_plus img')
const mo_login = document.querySelector('.mo_join')
const mo_help = document.querySelector('.mo_help')
const mo_bg= document.querySelectorAll('.mo_bg a')

mo_nav.style.display='none'
mo_bar.addEventListener('click',()=>{
    mo_nav.classList.add('basket')
    mo_nav.style.display='block'
})
mo_close.addEventListener('click',()=>{
    mo_nav.style.display='none'
})
men_contents.style.display='none'
women_contents.style.display='none'
let men_result = true
let women_result = true

men_title.addEventListener('click',()=>{
    men_result = !men_result
    if(men_result == false){
        men_contents.style.display='block'
        women_contents.style.display='none'
        men_plus.src = './img/icon/check_indeterminate_small_white.png'
        women_plus.src = './img/icon/add_white.png'
        women_result = true
    }else{
        men_contents.style.display='none'
        men_plus.src = './img/icon/add_white.png'
    }
})
women_title.addEventListener('click',()=>{
    women_result = !women_result
    if(women_result == false){
        men_contents.style.display='none'
        women_contents.style.display='block'
        women_plus.src = './img/icon/check_indeterminate_small_white.png'
        men_result = true
        men_plus.src = './img/icon/add_white.png'
    }else{
        women_contents.style.display='none'
        women_plus.src = './img/icon/add_white.png'
    }
})

mo_login.addEventListener('click',()=>{
    window.location = './login.html'
})

mo_help.addEventListener('click',()=>{
    window.location = './service.html'
})

for(let i of mo_bg){
    console.log(i)
    i.addEventListener('click',()=>{
        window.location = './product_all.html'
    })
}