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