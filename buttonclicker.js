function message(el) {
    if(el.innerText == "13 likes") {
        alert("Ninja was liked!")
    }
}

function login(element) {
    if(element.innerText == "Login") {
        element.innerText= "Logout"
    } 
    else {
        element.innerText = "Login"
    }
}

function hide(element) {
    element.remove()
}
