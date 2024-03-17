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

const login_btn_wrap =document.querySelector('.login_btn_wrap')
const userId =document.querySelector('#userId')
const userpW =document.querySelector('#userpW')
const error1 =document.querySelector('.error1')
const error2 =document.querySelector('.error2')
const email = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
login_btn_wrap.addEventListener('click',()=>{
    if(email.test(userId.value)&& userId.value.length >5){
        error1.innerHTML =''
    }else{
        error1.innerHTML = '이메일 형식으로 작성해주세요'
    }
    if(userId.value === '' && userId.value.length < 5){
        error1.innerHTML ='아이디를 입력해주세요'
    }
    if(userpW.value ===''){
        error2.innerHTML = '비밀번호를 입력해주세요'
    }else{
        error2.innerHTML = ''

    }
    if(email.test(userId.value)&&userId.value !== '' && userpW.value !==''){
        window.alert('환영합니다')
        window.location = './index.html'
    }
})
const join_clear =document.querySelector('#join_clear')
join_clear.addEventListener('click',()=>{
    window.alert('회원가입이 완료되었습니다')
    window.location = './index.html'
})






loginBtn.classList.add('boder_bottom')
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

const service_link = document.querySelector('#contents_bottom a')
service_link.addEventListener('click',()=>{
    window.location = './service.html'
})
// 네이버
const naver_login =document.querySelector('.naver_login button')
naver_login.addEventListener('click',()=>{
    window.open ('https://nid.naver.com/oauth2.0/authorize?client_id=95YblKaB84ynM4hRaAli&redirect_uri=https%3A%2F%2Fwww.calvinklein.co.kr%2Fko%2Foauth-callback%2F&scope=&state=61dcbc152ff5b097d43e985302238d6b7edd0da1&nonce=f1df15dafd83f181131eef2fdafafcdce7e87ee4&response_type=code')
})
// 카카오
const kakao_login =document.querySelector('.kakao_login button')
kakao_login.addEventListener('click',()=>{
    window.open('https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F1.43.2%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FWin32%2520origin%252Fhttps%25253A%25252F%25252Fwww.calvinklein.co.kr%26auth_tran_id%3D5dt9qkmul1a87616bd5bf234f37273e252d112d9b69ltvashz0%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.calvinklein.co.kr%252Fko%252Foauth-callback%252F%26through_account%3Dtrue%26client_id%3D87616bd5bf234f37273e252d112d9b69&talk_login=hidden#login')
})
//페이스북 로그인
const face_book =document.querySelector('.face_join button')
face_book.addEventListener('click',()=>{
    window.open('https://www.facebook.com/login.php?skip_api_login=1&api_key=258286082453122&kid_directed_site=0&app_id=258286082453122&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D258286082453122%26redirect_uri%3Dhttps%253A%252F%252Fwww.calvinklein.co.kr%252Fko%252Foauth-callback%252F%26response_type%3Dcode%26scope%3Demail%2Bpublic_profile%26state%3D1477185207%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D799ec4e1-6fda-4fe0-80d9-b0cd17619ee3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.calvinklein.co.kr%2Fko%2Foauth-callback%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D1477185207%23_%3D_&display=page&locale=ko_KR&pl_dbl=0')
})