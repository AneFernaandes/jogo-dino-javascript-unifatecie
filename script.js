// Define uma variável que controla se o jogo está ativo ou não.
var jogoAtivo = true;

// Função responsável pelo pulo do dino.
function pulo() {
    // Se o jogo não estiver ativo, retorna.
    if (!jogoAtivo) return;
    // Se o dino NÃO CONTÉM a classe "pulo".
    if (!dino.classList.contains("pulo")) {
        // Adiciona a classe "pulo" ao dino.
        dino.classList.add("pulo");
        // Configura um temporizador para remover a classe "pulo" após 500 milissegundos.
        setTimeout(function () {
            dino.classList.remove("pulo");
        }, 500);
    }
}

// Adiciona um ouvinte de evento para capturar teclas pressionadas.
document.addEventListener("keydown", function (event) {
    // Se a tecla pressionada for a barra de espaço, chama a função pulo.
    if (event.code === "Space") {
        pulo();
    }
});

// Função de animação do chão.
let chaoPosition = 0;
function moverChao() {
    // Se o jogo não estiver ativo, retorna.
    if (!jogoAtivo) return;
    // Move o chão para a esquerda.
    chaoPosition -= 5;
    // Atualiza a posição do background do chão.
    chao.style.backgroundPositionX = chaoPosition + 'px';
    // Solicita uma nova animação na próxima renderização.
    requestAnimationFrame(moverChao);
}
// Inicia a animação do chão.
moverChao();

// Função de animação do cacto.
let cactoPosition = 0;
function moverCacto() {
    // Se o jogo não estiver ativo, retorna.
    if (!jogoAtivo) return;
    // Move o cacto para a esquerda.
    cactoPosition -= 5;
    // Atualiza a posição left do cacto.
    cacto.style.left = cactoPosition + 'px';
    // Se o cacto ultrapassar a posição x < 5, reinicia sua posição.
    if (cactoPosition < 5) {
        cactoPosition = 590;
    }
    // Solicita uma nova animação na próxima renderização.
    requestAnimationFrame(moverCacto);
}
// Inicia a animação do cacto.
moverCacto();

// Função de animação da nuvem1.
let nuvemPosition = 0;
function moverNuvem() {
    // Se o jogo não estiver ativo, retorna.
    if (!jogoAtivo) return;
    // Move a nuvem para a esquerda.
    nuvemPosition -= 1.4;
    // Atualiza a posição left da nuvem.
    nuvem.style.left = nuvemPosition + 'px';
    // Se a nuvem ultrapassar a posição x < 5, reinicia sua posição.
    if (nuvemPosition < 5) {
        nuvemPosition = 590;
    }
    // Solicita uma nova animação na próxima renderização.
    requestAnimationFrame(moverNuvem);
}
// Inicia a animação da nuvem1.
moverNuvem();

// Função de animação do dino.
var step = 1;
function moverDino() {
    // Se o jogo não estiver ativo, o dino fica assustado.
    if (!jogoAtivo) {
        dino.style.backgroundImage = "url(dino/scared.png)";
    } else {
        // Se o dino estiver pulando, utiliza a imagem normal.
        if (dino.classList.contains("pulo")) {
            dino.style.backgroundImage = "url(dino/normal.png)";
        }
        // Se não estiver pulando, alterna entre as imagens para simular movimento.
        else {
            if (step == 1) {
                dino.style.backgroundImage = "url(dino/dino1.png)";
                step = 2;
            } else {
                dino.style.backgroundImage = "url(dino/dino2.png)";
                step = 1;
            }
        }
    }
}
// Inicia a animação do dino com um intervalo de 100 milissegundos.
setInterval(moverDino, 100);

// Função que verifica se ocorreu uma colisão entre o dino e o cacto.
function colidiu(rect1, rect2) {
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

// Função que verifica a colisão e encerra o jogo se houver uma colisão.
function verificarColisao() {
    // Obtém os retângulos de bounding box do dino e do cacto.
    var dinoRect = document.getElementById("dino").getBoundingClientRect();
    var cactoRect = document.getElementById("cacto").getBoundingClientRect();

    // Se houver colisão, encerra o jogo.
    if (colidiu(dinoRect, cactoRect)) {
        jogoAtivo = false;
        // Limpa o intervalo de verificação de colisão.
        clearInterval(verificacao);
        // Exibe uma mensagem no console.
        console.log("Colisao detectada!");
        // Atualiza a tela para exibir o game over.
        atualizarTelaGameOver();
    }
}

// Função que atualiza a tela para exibir o game over.
function atualizarTelaGameOver() {
    var elementoGameOver = document.getElementById('gameover');
    // Torna o elemento de game over visível.
    elementoGameOver.style.visibility = 'visible';
}

// Inicia o intervalo de verificação de colisão com um intervalo de 100 milissegundos.
var verificacao = setInterval(verificarColisao, 100);




 