const contact = document.querySelector('.contact')
const faq =document.querySelector('.faq')
const size = document.querySelector('.size')
const nav_a =document.querySelectorAll ('.category a')
const content_box =document.querySelectorAll ('.content_box')
const hide = ()=>{
    for(let i of content_box){i.style.display='none'}
    nav_a.forEach(link => {
        link.classList.remove('active');
    });
}

hide ()
contact.style.display='block'

let a_link = [contact,faq,size,contact,faq,size,contact,faq,size]
nav_a.forEach((target,index)=>{
    // console.log(target)
    target.addEventListener('click',(e)=>{
        e.preventDefault()
        hide()
        a_link[index].style = 'block'
        target.classList.add ('active')
    })
})