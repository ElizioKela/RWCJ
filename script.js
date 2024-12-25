// script.js

document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Agora, estou a perguntar o que realmente importa...";
    document.getElementById("revealButton").classList.add("hidden");
    document.getElementById("questionSection").classList.remove("hidden");
});

document.getElementById("option1").addEventListener("click", function() {
    enviarMensagem("Aceito");
});

document.getElementById("option2").addEventListener("click", function() {
    enviarMensagem("Aceito");
});

document.getElementById("option3").addEventListener("click", function() {
    enviarMensagem("Aceito");
});

function enviarMensagem(resposta) {
    var numeroWhatsApp = "935678380"; // Substitua com seu número do WhatsApp, incluindo o código do país
    var mensagem = `Resposta ao pedido de namoro: ${resposta}`;
    var url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, "_blank");
}
