resultado.style.visibility = 'hidden'

function comprar() {
    
    lista.innerHTML = null
    res.innerHTML = null
    
    let q01 = Number(qtd01.value)
    let p01 = 300
    let t01 = q01 * p01
    let q02 = Number(qtd02.value)
    let p02 = 1000
    let t02 = q02 * p02 
    let q03 = Number(qtd03.value)
    let p03 = 10000
    let t03 = q03 * p03
    let geral = t01 + t02 + t03
    
    if( q01 > 0) {
        lista.innerHTML += `<li>${q01}x Mouse Gamer = R$${t01.toFixed(2)}</li>`
    }

    if( q02 > 0) {
        lista.innerHTML += `<li>${q02}x Teclado Gamer = R$${t02.toFixed(2)}</li>`
    }

    if( q03 > 0) {
        lista.innerHTML += `<li>${q03}x Placa de Vídeo = R$${t03.toFixed(2)}</li>`
    }
    
    res.innerHTML = `TOTAL: R$${geral}`
    
    resultado.style.visibility = 'visible'
}