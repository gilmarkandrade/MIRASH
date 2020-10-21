function carregar(){
    var msg = window.document.getElementById('msg')
    var fotos = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutes = data.getMinutes()
    var MSP = window.document.getElementById('msgP')
    //var hora = Number(window.prompt("que horas são?"))


    msg.innerHTML = `Agora são ${hora} : ${minutes} h`
18
    if (hora >= 0 && hora <12){
        fotos.src = 'manhaicon.png'
        document.body.style.background = '#7c5d41'
        MSP.innerHTML = 'Bom Dia'

    } else if (hora >=12 && hora <18){
        fotos.src = "tardeicon.png"
        document.body.style.background = '#e56400'
        MSP.innerHTML = 'Boa Tarde'
    }else {
        fotos.src = "noiteicon.png"
        document.body.style.background = '#284655'
        MSP.innerHTML = 'Boa Noite'
    }
}