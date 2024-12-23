let urlbase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '5b41f0de6496a1d469cfad30a5cc2186'
let difkelvin = 273.15

let ciudad = 'London'

document.getElementById('botonBusqueda').addEventListener('click', () => {

    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosclima(ciudad)

    }
})

function fetchDatosclima(ciudad){

fetch(`${urlbase}?q=${ciudad}&appid=${api_key}`)
.then(response => response.json())
.then(response => mostrarDatosclima(response))

}

function mostrarDatosclima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturainfo = document.createElement('p')
    temperaturainfo.textContent = `La temperatura es: ${Math.floor(temperatura-difkelvin)}°C`
    
    const descripcioninfo = document.createElement('p')
    descripcioninfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturainfo)
    divDatosClima.appendChild(descripcioninfo)
}
   