const TOKEN = '5655735709:AAGdS5_Eqwf_P3i1hIIauV04HQ2mD1bp0l0'
const CHAT_ID = '-1001640113929'
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
const success = document.getElementById('success')

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault()

    let message = `<b>Заявка отправителя</b>\n`
    message += `<b>Отправитель: ${this.name.value}</b>\n`
    message += `<b>Почта: ${this.number.value}</b>\n`
    message += `<b>Message: ${this.textarea.value}</b>`


    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then(function(res) {
        this.name.value = ""
        this.number.value = ""
        this.textarea.value = ""
        success.innerText = 'Сообщение отправлено'
        success.style.dispaly = 'block'
    })
    .catch(function(err) {
        console.warn(err)
    })
    .finally(function() {
        console.log('Конец')
    })
})
