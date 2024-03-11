// swiper
let product_slide = new Swiper('.product_allbox',{
    slidesPerView: 3.9,
    spaceBetween:10,
})

let allbox_second = new Swiper('#allbox_second',{
    slidesPerView: 3.9,
    spaceBetween:10,
})

let thide_box = new Swiper('#thide_box',{
    slidesPerView: 3.9,
    spaceBetween:10,
})









//마우스 오버시 사이즈
const size_all =document.querySelectorAll('.size')
for(let i of size_all){
    i.style.display = 'none'
}
const product_all = document.querySelectorAll('ul li')
product_all.forEach((target,index)=>{
    target.addEventListener('mouseover',()=>{
        size_all[index].classList.add('product_ani')
        size_all[index].style.display ='block'
    })
    target.addEventListener('mouseout',()=>{
        size_all[index].style.display ='none'
    })
})








const header_nav =document.querySelectorAll('header .right a')
const nav_link = ['#','./login.html','./wishlist.html','./shopping_basket.html']

header_nav.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        window.location = nav_link[index]
    })
})

const produck_link = document.querySelectorAll ('ul li a')
for(let i of produck_link){
    i.addEventListener('click',()=>{
        window.location = './product.html'
    })
}