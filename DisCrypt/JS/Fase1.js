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

function showHint() {
    alert("Um sistema de comunicação que usa pontos e traços para representar letras e números. \nFoi criado em 1835. E serve de comunicação através dos telégrafos eletrônicos, em que as mensagens eram transmitidas por meio de pulsos elétricos.");
}