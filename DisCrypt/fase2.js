function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "ANTONIO") {
        window.location.href = "terceira.html";
    }
    else if(password === "antonio") {
        window.location.href = "terceira.html";
    }
    else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}