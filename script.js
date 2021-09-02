function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cumprimento = document.getElementById('cumprimento')
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    msg.innerHTML = `A agora são ${hora} hora(s) e ${minuto} minuto(s)`
    if (hora >= 6 && hora <= 12 ) {
        img.scr = 'morning.jpg'
        cumprimento.innerHTML = 'Bom dia!'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora < 18) {
        img.src = 'afternoon.jpg'
        cumprimento.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846f'
    } else if (hora >= 0 && hora <= 6) {
        cumprimento.innerHTML = 'Boa madrugada!'
        document.body.style.background = '#515154'
        img.src = 'night.jpg'
    } else {
        cumprimento.innerHTML = 'Boa noite!'
        document.body.style.background = '#515154'
        img.src = 'night.jpg'
    }
}