import peticion from "./CRUD/modulos/nuevo.js";
import require from "./required.js";
const form = document.querySelector("form")
const nombre = document.querySelector("#nombre")

form.addEventListener("submit", (event) =>{
    let respuesta = require(event, "form [required]")
    const data = {
        name :nombre.value,
    }
    if(respuesta){
        fetch('http://localhost:3000/docs', 
            {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })

    }
});

addEventListener("DOMContentLoaded",(event) => {
    let variable = peticion().then(data => {
        const fragmaneto = document.createDocumentFragment()
        data.forEach(element => {
            let nombre = element.name
            let id = element.id
            let option = document.createElement("option")
            option.setAttribute ("value", id)
            option.textContent = nombre
            fragmaneto.appendChild(option)       
        });
        tipo.appendChild(fragmaneto)
    }
    )
})
