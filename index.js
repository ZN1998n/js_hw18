
let deep = document.querySelector('.Deep')
let gold = document.querySelector('.Gold')
let silver = document.querySelector('.Silver')
let space = document.querySelector('.Space')
let img = document.querySelector('.phone')

deep.onclick = () => {
    img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896")`
}
gold.onclick = () => {
    img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907")`
}
silver.onclick = () => {
    img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892") `
}
space.onclick = () => {
    img.style.backgroundImage = `url("https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897")`
}