const valueInput = document.getElementById("search")
const show = document.getElementById("muestra")
const showResult = document.getElementById("resultado")

const arr = [
  {name : "Leche"},
  {name : "Tomate"},
  {name : "Vinagre"},
  {name : "Espinaca"},
  {name : "Reloj"},
  {name : "Zapatillas"},
  {name : "Azucar"},
  {name : "Cafe en granos"},
  {name : "Deadpool"},
  {name : "Goku"},
  {name : "Bob Esponja"},
  {name : "Starbucks"}
]
const ordenado = arr.sort((a,b) =>  a.name > b.name ? 1 : -1)
const numbers = [0,1,2,3,4,5,6,7,8,9,10]

const binarySearch = (n) => {
  let indiceMasBajo = 0;
  let indiceMasAlto = numbers.length - 1;
  while (indiceMasBajo <= indiceMasAlto) {
    const indiceDelMedio = Math.floor((indiceMasBajo + indiceMasAlto) / 2)
    if(numbers[indiceDelMedio] === n) return ` Tu numero es ${numbers[indiceDelMedio]}`

    if(n < indiceDelMedio) {
      indiceMasAlto = indiceDelMedio - 1
    }
    else{
      indiceMasBajo = indiceDelMedio + 1
    }
  }
  return "Numero no valido"
}

const filtrar = () => {
  const value = valueInput.value.toLowerCase()
  showResult.innerHTML = ""
  let indiceMasBajo = 0;
  let indiceMasAlto = ordenado.length - 1;

  while(indiceMasBajo <= indiceMasAlto) 
  {
    const indiceDelMedio = Math.floor((indiceMasBajo + indiceMasAlto) / 2);
    if(ordenado[indiceDelMedio].name.indexOf(value) !== -1) {
      showResult.innerHTML = `<li> ${ordenado[indiceDelMedio].name}</li>`
    }
    if(ordenado[indiceDelMedio].name === value) return ordenado[indiceDelMedio]
    if(value < ordenado[indiceDelMedio].name) {
      indiceMasAlto = indiceDelMedio - 1
    }
    else {
      indiceMasBajo = indiceDelMedio + 1
    }
    if(indiceDelMedio === 0)
    {
      showResult.innerHTML = ""
    }
  }
  return -1
}

showResult.style.marginTop =  "250px"

const filtrarPorVarios = () => {
  showResult.innerHTML  = ""
  const valueText = valueInput.value.toLowerCase()
  for (let index = 0; index < arr.length; index++) {
    if(arr[index].name.indexOf(valueText) !== -1) {
      showResult.innerHTML += `<li> ${arr[index].name}</li>`
    }
  }
  if(valueText.length === 0) return showResult.innerHTML = "Sin resultados"
}

/* const filtrar = async () => {
  showResult.innerHTML = ""
  const texto = valueInput.value.toLowerCase()
  const llamado = await fetch("https://rickandmortyapi.com/api/character")
    const traido = await llamado.json()
    const resultados = traido.results
  for(let resultado of arr ) {
      const nombre = resultado.name.toLowerCase()
      const li = document.createElement("li")
    if(nombre.indexOf(texto) !== -1) {
      li.textContent = `${resultado.name}`
      showResult.appendChild(li)
    }
  }
  if(texto.length === 0){
    showResult.innerHTML = ""
  }
} */

/* const filtrar = () => {
  showResult.innerHTML = ""
  const texto = valueInput.value.toLowerCase()
  let filtrados = arr.filter(x => {
    return x.includes(texto)
  })
  showResult.innerHTML += filtrados
  if(filtrados.length > 1){
    showResult.innerHTML = ""
  }
} */

/* const filtrar = async () => {
  showResult.innerHTML = ""
  const texto = valueInput.value.toLowerCase()
  const llamado = await fetch("https://rickandmortyapi.com/api/character")
  const traido = await llamado.json()
  const resultados = traido.results
  for( let i = 0; i < resultados.length ; i++) {
    if(resultados[i].name.toLowerCase().includes(texto)) {
      showResult.innerHTML += ` <li> ${resultados[i].name} </li> `
    }
    if(resultados[i].name.toLowerCase().includes(texto) === false) { 
      showResult.innerHTML += ``

    }
  }

} */

let sortedList = [1,2,3,4,5,6,7]
let index = 0 
while(sortedList.length > ++index) {
  console.log(index);
}

valueInput.addEventListener("keyup", filtrar)