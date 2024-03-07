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
        listItem.href ='#'
        listItem.innerHTML = `<p class="photo"><img src="./img/product_all/thumbnail_${indexFormatted}.jpg"></p>`
        list_title.textContent =porduct.title
        price.textContent =porduct.price
        color.textContent = porduct.color
        porduct_box.appendChild(listItem)
        listItem.appendChild(list_title)
        listItem.appendChild(price) 
        listItem.appendChild(color)
        console.log(listItem.children[0].children[0].src)
        listItem.addEventListener('mouseover',function(){
            console.log(indexFormatted)
            this.children[0].children[0].src = `./img/product_all/thumbnail_${indexFormatted}_sub.jpg`
        })
        listItem.addEventListener('mouseout',function(){
            this.children[0].children[0].src = `./img/product_all/thumbnail_${indexFormatted}.jpg`
        })
    })
})