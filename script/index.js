// swiper
let product_slide = new Swiper('.product_allbox',{
    slidesPerView: 3.9,
    spaceBetween:10,
})
//마우스 오버시 사이즈
const size_all =document.querySelectorAll('.size')
for(let i of size_all){
    i.style.display = 'none'
}
const product_all = document.querySelectorAll('ul li .product_main')
product_all.forEach((target,index)=>{
    target.addEventListener('mouseover',()=>{
        size_all[index].classList.add('product_ani')
        size_all[index].style.display ='block'
    })
    target.addEventListener('mouseout',()=>{
        size_all[index].style.display ='none'
    })
})