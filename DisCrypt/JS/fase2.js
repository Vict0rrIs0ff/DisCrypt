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
function showHint() {
    alert("Um esquema de codificação de textos usado há mais de 2000 anos. Esse esquema de codificação era utilizado pelo imperador romano para se comunicar com seus generais.");
}
