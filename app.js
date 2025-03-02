
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo"); 
    let nombreAmigo = inputAmigo.value;
    if(!nombreAmigo){
        alert("Debes escribir un nombre");
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigo();
     
}

function mostrarAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement ("li");
        item.textContent = amigo(i);
        listaAmigos.appendChild(item);

    }
}

function sortearAmigo(){
    
}