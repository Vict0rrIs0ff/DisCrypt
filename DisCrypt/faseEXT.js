function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "JORGE") {
        window.location.href = "fim.html";
    }
    else if (password === "jorge") {
        window.location.href = "fim.html";
    } else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}
