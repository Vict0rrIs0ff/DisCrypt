function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "JORGE") {
        window.location.href = "fim.html";
    }
    else if (password === "jorge") {
        window.location.href = "creditos.html";
    } else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}

function showHint() {
    alert("K C U F N 1 4 R B");
}
