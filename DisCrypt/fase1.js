function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "STOP") {
        window.location.href = "Fase2.html";
    } 
    else if(password === "stop"){
        window.location.href = "Fase2.html"
    }else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}
