function askPassword() {
    const password = prompt(" ");
    if (password === null) {
        return;
    }
    if (password === "FROM BEING PREFEITO") {
        window.location.href = "ultimafase.html";
    }
    else if (password === "from being prefeito") {
        window.location.href = "ultimafase.html";
    }
    else {
        alert("Senha incorreta. Desista enquanto pode.");
    }
}
function showHint() {
    alert("Método de criptografia que usa uma série de diferentes cifras de César baseadas em letras de uma chave. Trata-se de uma versão simplificada de uma mais geral cifra de substituição polialfabética, inventada por Leon Battista Alberti cerca de 1465.");
}
