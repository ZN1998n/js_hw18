let btns = document.querySelectorAll('button')
let img = document.querySelector('.phone')
let p = document.querySelector('.col')
let current = "Color"

const images = {
    "Deep Purple": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896",
    "Gold": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907",
    "Silver": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892",
    "Space Black": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897"
}

btns.forEach(btn => {
    const key = btn.getAttribute('data-col')


    btn.onclick = () => {
        btns.forEach(btn => btn.classList.remove('active'))
        img.style.backgroundImage = `url(${images[key]})`
        btn.classList.add('active')
        current = `Color - ${key}`
        p.innerHTML = current
    }
    btn.onmouseenter = () => {
        btn.classList.add('passive')
        p.innerHTML = `Color - ${key}`
    }
    btn.onmouseleave = () => {
        btn.classList.remove('passive')
        p.innerHTML = current
    }
})