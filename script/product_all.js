const porduct_box = document.querySelector('.porduct_box')
fetch('./script/product_dat.json')
.then(response => response.json())
.then(data=>{
    data.forEach((porduct,index)=>{
        const listItem =document.createElement('a');
        const list_title = document.createElement('h1')
        const price =document.createElement('p')
        const color = document.createElement('p')
        const indexFormatted = (index+1).toString().padStart(3,'0');
        const basktet_btn = document.createElement('button')
        listItem.href ='#'
        listItem.innerHTML = `<p class="photo"><img src="./img/product_all/thumbnail_${indexFormatted}.jpg"></p>`
        list_title.textContent =porduct.title
        price.textContent =porduct.price
        color.textContent = porduct.color
        basktet_btn.innerHTML = porduct.btn
        porduct_box.appendChild(listItem)
        listItem.appendChild(list_title)
        listItem.appendChild(price) 
        listItem.appendChild(color)
        listItem.appendChild(basktet_btn)
        // console.log(listItem.children[0].children[0].src)
        listItem.addEventListener('mouseover',function(){
            // console.log(indexFormatted)
            this.children[0].children[0].src = `./img/product_all/thumbnail_${indexFormatted}_sub.jpg`
        })
        listItem.addEventListener('mouseout',function(){
            this.children[0].children[0].src = `./img/product_all/thumbnail_${indexFormatted}.jpg`      
        })
        listItem.addEventListener('click',(e)=>{
            e.preventDefault()
        })
        // 필터 
        const btn_all = document.querySelectorAll('.width_btn')
        const img_all = document.querySelectorAll('.width_btn img')
        const img_gray = ['./img/product_all/wid_50_gray_png.png','./img/product_all/wid_33_gray_png.png','./img/product_all/wid_25_gray_png.png']
        const img_black = ['./img/product_all/wid_50_black_png.png','./img/product_all/wid_33_black_png.png','./img/product_all/wid_25_black_png.png']
        const wid = [50,33,25]
        const hide =()=>{
            img_all.forEach((target,index)=>{
                target.src = img_gray[index]
                console.log(img_black[index])
            })
        }
        img_all.forEach((target,index)=>{
            target.addEventListener('click',(e)=>{
                hide()
                target.src = img_black[index]
            })
        })
        btn_all.forEach((target,index)=>{
            target.addEventListener('click',()=>{
                listItem.style.width =`${wid[index]}%`
            })
        })
    })
})



const top_swiper = document.querySelector('.text_box')
console.log(top_swiper)
console.log(top_swiper.offsetTop)
window.addEventListener('scroll',()=>{
    
})
