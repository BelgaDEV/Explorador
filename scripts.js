// nomeando os itens do html
let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

// quando o botão for clicado, next e back.
btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type) {
    let = listItems = document.querySelectorAll('.list .list-item') 
    let = thumbItems = document.querySelectorAll('.thumb .thumb-item')
    
    if(type === 'next') {
        list.appendChild(listItems[0])  // appendchild() serve para node list para colocar item na posição 1;
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems[listItems.length - 1]) // prepend() serve para node list para colocar item na ultima posição;
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}

