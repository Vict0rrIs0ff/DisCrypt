function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "BEFORE IT'S TOO LATE FOR CURRALINHO") {
        window.location.href = "Fim.html";
    } 
    else if (password === "before it's too late for curralinho") {
        window.location.href = "Fim.html";
    }else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}
function showHint() {
    alert("Um sistema de codificação transforma dados em uma sequência de caracteres usando um alfabeto específico para facilitar o armazenamento e a transferência. Criado por Paul Garvey e amplamente usado em tecnologia para converter dados binários em texto legível, seu objetivo é permitir a transmissão segura de informações em formatos que aceitam apenas caracteres de texto.");
}
