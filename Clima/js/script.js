'use strict'

const key = ""
const btn = document.querySelector('.btn-busca')
const cidade = document.querySelector('.cidade')
const temp = document.querySelector('.tempo')
const prev = document.querySelector('.texto-prev')
const img = document.querySelector('.img-prev')
const umidade = document.querySelector('.umidade')
const caixaMenor = document.querySelector('.caixa-menor')


document.addEventListener('keydown', keyBtn)
btn.addEventListener('click', clickBtn)

function keyBtn(e){
    console.log(e)
    if (e.key === "Enter") {
        const cidade = document.querySelector('.input-cidade').value
        buscarCidade(cidade) 
        
    }

}

function clickBtn(){
    
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)    

}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    const resp = await dados.json();
    
    console.log(resp)

    mostrarDados(resp)
}

function mostrarDados(resp) {
    cidade.textContent = `${resp.name}, ${resp.sys.country}`
    temp.textContent = `Temperatura: ${Math.ceil(resp.main.temp)}°C`
    umidade.textContent = `Umidade: ${resp.main.humidity}%`
    prev.textContent = resp.weather[0].description

    img.src = `https://openweathermap.org/img/wn/${resp.weather[0].icon}.png`

   


    
        

    
    
}



