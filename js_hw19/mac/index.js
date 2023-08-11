let btns = document.querySelectorAll('.push')
let butns = document.querySelectorAll('.price_btn')
let img = document.querySelector('.photo')
let h4 = document.querySelector('h4')
let h1 = document.querySelector('.standart')
let priced = 1999
let current = " "
let curr = "$"

const images = {
    "White": "https://avatars.mds.yandex.net/get-images-cbir/1543452/Rmivil2Y_uAWLXhOh8fkbw8128/ocr",
    "Space Grey": "https://avatars.mds.yandex.net/get-images-cbir/1870278/0Vi2SosMDgEql3QxQzckTQ8272/ocr"
}

btns.forEach(btn => {
    const key = btn.getAttribute('data-col')


    btn.onclick = () => {

        btns.forEach(btn => btn.classList.remove('active'))

        img.style.backgroundImage = `url(${images[key]})`

        btn.classList.add('active')

        current = key

        h4.innerHTML = current


    }
    btn.onmouseenter = () => {
        h4.innerHTML = key
    }
    btn.onmouseleave = () => {

        h4.innerHTML = current
    }



})

const num = {
    "price 1": 200,
    "price 2": 600,
    "price 3": 1200,
    "price 4": 0
}

butns.forEach(btn => {
    const key = btn.getAttribute('data-prs')
    btn.onclick = () => {
        butns.forEach(btn => btn.classList.remove('active_price'))

        btn.classList.add('active_price')

        curr = `$${priced + num[key]}`


        h1.innerHTML = curr
    }
    btn.onmouseenter = () => {
        h1.innerHTML = `$${priced + num[key]}`
    }
    btn.onmouseleave = () => {
        h1.innerHTML = curr
    }

})