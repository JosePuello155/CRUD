const required = (evento, formulario) => {
    evento.preventDefault()
    let bandera = true
    const elementos = document.querySelectorAll(formulario)
    elementos.forEach(elemento =>{
        if (elemento.value === "") {
            bandera = false
        }
    })
    return bandera
}
export default required 



