async function consultar() {
  const data = await fetch('http://127.0.0.1:3000/docs');
  const tipos = await response.json();

  tipos.forEach(element => {
    let options = document.createElement('option')
    selec.appendChild(options)
    options.innerText = element.nombre
  })
  console.log(data);
}
consultar()

const form = document.querySelector('form > select')

let nombre = document.querySelector



const nombre = document.querySelector("#nombre");


nombre.addEventListener('keydown', validar);



