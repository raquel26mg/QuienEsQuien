function turn(element) {
    element.classList.toggle("invisible");
}

function ampliar(element) {
	element.classList.toggle("ampliada");
}

new URLSearchParams(window.location.search).forEach((value, name) => {
    document.getElementById("personaje_seleccionado").src = `${value}` + ".jpg"
})