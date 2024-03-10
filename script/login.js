const join_contents=document.querySelector('#join_contents')
const id_login =document.querySelector('.id_login')
const loginBtn =document.getElementById('login_click')
const joinBtn =document.getElementById('join_click')
console.log(id_login)
join_contents.style.display = 'none'

loginBtn.addEventListener('click',()=>{
        joinBtn.classList.remove('boder_bottom')
        join_contents.style.display = 'none'
        id_login.style.display='block'
        loginBtn.classList.add('boder_bottom')
})
    
    
joinBtn.addEventListener('click',()=>{
    loginBtn.classList.remove('boder_bottom')
    join_contents.style.display = 'block'
    id_login.style.display='none'
    joinBtn.classList.add('boder_bottom')
})
const new_join = document.getElementById('new_join')
new_join.addEventListener('click',()=>{
    loginBtn.classList.remove('boder_bottom')
    join_contents.style.display = 'block'
    id_login.style.display='none'
    joinBtn.classList.add('boder_bottom')
})