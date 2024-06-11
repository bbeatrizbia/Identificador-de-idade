function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
    alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   res.innerHTML = `Idade calculada: ${idade}`
   var genero = ''
   var img = document.createElement("img")
   if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade <10){
            img.setAttribute('src','img/criança M.jpg')
        }else if(idade < 21){
            img.setAttribute('src','img/adolescente M.jpg')
        }else if(idade < 50){
            img.setAttribute('src','img/adulto.jpg')
        }else{
            img.setAttribute('src','img/idoso.jpg')
        }
   }else if(fsex[1].checked){
    genero = 'Mulher'
    if(idade >=0 && idade <10){
        img.setAttribute('src','img/criança F.jpg')
    }else if(idade < 21){
        img.setAttribute('src','img/adolescente F.jpg')
    }else if(idade < 50){
        img.setAttribute('src','img/adulta.jpg')
    }else{
        img.setAttribute('src','img/idosa.jpg')
    }
   }
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
    }
}