function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "FROM BEING PREFEITO") {
        window.location.href = "ultima.html";
    }
    else if (password === "from being prefeito") {
        window.location.href = "ultima.html";
    }
    else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}