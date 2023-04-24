const btn = document.querySelector('.submit')
const btnOut = document.querySelector('.submitOut')
const div = document.querySelector('.img')

btn.onclick = function() {
    div.style.display = 'none'
}

btnOut.onclick = function() {
    div.style.display = 'block'
}