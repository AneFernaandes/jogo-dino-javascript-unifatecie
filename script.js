

function pulo() {
    // se o dino NÃO CONTEM  a classe pulo
    if (!dino.classList.contains("pulo")) {
        dino.classList.add("pulo");
        setTimeout(function () {
            dino.classList.remove("pulo");
        },500);
        
    }
    
}

// teclas que estão pressionadas
document.addEventListener("keydown", function (event) {
    // se o espaço for pressionado ativar a função pulo
    if (event.code === "Space") {
        pulo();
        
    }
       
})