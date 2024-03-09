const size_btn =document.querySelectorAll('.size a')
const size_text =document.querySelector('.size_text')
console.log(size_text)
const size = ['사이즈:XS','사이즈:S','사이즈:M']
size_btn.forEach((target,index)=>{
    target.addEventListener('click',()=>{
        size_text.innerHTML = size[index]
    })
})

const shopping =document.querySelector('.shopping dl')
const shopping_btn = document.querySelector ('.second_btn')
const imfo =document.querySelector('.imfo_btn')
const imfo_text = document.querySelector('.imfo_box')
const imfobtn_img = document.querySelector('.imfo_btn img')
const shopping_img =document.querySelector('.second_btn img')
console.log(shopping_btn)
shopping.style.display = 'none'
let reset_btn = true
shopping_btn.addEventListener('click',()=>{
    reset_btn = !reset_btn
    console.log(reset_btn)
    if(reset_btn == false){
        shopping.style.display = 'none'
        shopping_img.src = './img/icon/add.png'
    }else{
        shopping.style.display = 'block'
        shopping_img.src = './img/icon/check_indeterminate_small.png'
    }
})
let imfo_reset = true
imfo.addEventListener('click',()=>{
    imfo_reset = !imfo_reset
    console.log(imfo_reset)
    if(imfo_reset == false){
        imfo_text.style.display = 'none'
        imfobtn_img.src = './img/icon/add.png'
        imfobtn_img.style.transform = 'rotate(90deg)';
    }else{
        imfo_text.style.display = 'block'
        imfobtn_img.src = './img/icon/check_indeterminate_small.png'
        imfobtn_img.style.transform = 'rotate(0deg)';
    }
})

const heart = document.querySelector('.heart')
const popup =document.querySelector('.popup')
const popup_contents = document.querySelector('.popup_contents')
popup_contents.style.display = 'none'
let heart_reset = true
heart.addEventListener('click',()=>{
    heart_reset = !heart_reset
    if(heart_reset === false){
        popup_contents.innerHTML = '이 제품이 위시리스트에 추가되었습니다'
    }else{
        popup_contents.innerHTML = '이 제품이 위시리스트에 삭제되었습니다'
    }
    popup_contents.style.display = 'block'
    setTimeout(()=>{
        popup_contents.style.display = 'none'
    },3000)
})
const favorite = document.querySelectorAll('.favorite')
let favorite_reset = true
for(let i of favorite){
    favorite_reset =!favorite_reset
    i.addEventListener('click',()=>{
        if(favorite_reset ===false){
            popup_contents.innerHTML = '이 제품이 위시리스트에 추가되었습니다'
        }else{
            popup_contents.innerHTML = '이 제품이 위시리스트에 삭제되었습니다'
        }
        popup_contents.style.display = 'block'
        setTimeout(()=>{
            popup_contents.style.display = 'none'
        },3000)
    })
}








// swiper
let product_slide = new Swiper('.product_box',{
    slidesPerView: 4,
    spaceBetween:8,
})

