//exercicio1
// function adicionaItem(event){
//     let container = document.getElementById("container")
    
//     let novoItem = document.createElement("article")
//     container.appendChild(novoItem)
//     novoItem.innerHTML = "Olá mundo"
// }

// //exercicio2
function adicionaItem(event){
    let container = document.getElementById("container")
    container.innerHTML += "<article class= 'item' onclick='removeItem(event)'>Olá mundo!</article>"

}

//exercicio3
function removeItem(event){
    event.target.remove()
    // let item = document.querySelector(".item")
    // item.classList.remove("item")
}