// swiper
let product_slide = new Swiper('.product_allbox',{
    slidesPerView: 4.1,
    spaceBetween:10,
})

let allbox_second = new Swiper('#allbox_second',{
    slidesPerView: 4.1,
    spaceBetween:10,
})

let thide_box = new Swiper('#thide_box',{
    slidesPerView: 4.1,
    spaceBetween:10,
})







const basket_background =document.querySelector('.basket_background')
basket_background.style.display='none'

const basket_view =document.querySelector('.basket_view')
basket_view.addEventListener('click',()=>{
    window.location = './shopping_basket.html'
})


const basket_buy =document.querySelector('.bottom_last .buy')
basket_buy.addEventListener('click',()=>{
    window.location = './shopping_basket.html'
})




//마우스 오버시 사이즈
const size_all =document.querySelectorAll('.size')
for(let i of size_all){
    i.style.display = 'none'
}

function mouse_over(index){
    size_all[index].style.display = 'block'
}
function mouse_out(index){
    size_all[index].style.display = 'none'
}
const basket_close = document.querySelector('.basket_background .close')
basket_close.addEventListener('click',()=>{
    basket_background.style.display='none'
})

const product_all = document.querySelectorAll('.product_content li')
product_all.forEach((target,index)=>{
    target.addEventListener('mouseover',()=>{
        size_all[index].classList.add('product_ani')
        mouse_over(index)
    })
    target.addEventListener('mouseout',()=>{
        mouse_out(index)
    })

    size_all[index].addEventListener('click',()=>{
        basket_background.style.display='block'
        basket_background.classList.add('basket')
    })
})
const main1_product = document.querySelectorAll('#allbox_second li');
const second_size = document.querySelectorAll('#allbox_second .size');
main1_product.forEach((target, index) => {
    console.log(second_size[index])
    target.addEventListener('mouseover', function () {
        second_size[index].style.display = 'block'
        second_size[index].classList.add('product_ani')
    });
    
    target.addEventListener('mouseout', function () {
        
        second_size[index].style.display = 'none'
    });
    second_size[index].addEventListener('click',()=>{
        basket_background.style.display='block'
        basket_background.classList.add('basket')
    })
});
const thide_contents= document.querySelectorAll('#thide_box li');
const thide_size = document.querySelectorAll('#thide_box .size');
thide_contents.forEach((target, index) => {
    target.addEventListener('mouseover', function () {
        thide_size[index].style.display = 'block'
        thide_size[index].classList.add('product_ani')
    });
    target.addEventListener('mouseout', function () {
        thide_size[index].style.display = 'none'
    });
    thide_size[index].addEventListener('click',()=>{
        basket_background.style.display='block'
        basket_background.classList.add('basket')
    })
});





const header_nav =document.querySelectorAll('header .right a')
const nav_link = ['#','./login.html','./wishlist.html','./shopping_basket.html']

header_nav.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        window.location = nav_link[index]
    })
})

const produck_link = document.querySelectorAll ('ul li a img')
for(let i of produck_link){
    i.addEventListener('click',()=>{
        window.location = './product.html'
    })
}

