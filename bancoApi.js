async function listarBancos() {
    const status = document.getElementById("status");

    status.textContent = "Carregando..."
    try {
        const response = await fetch("https://brasilapi.com.br/api/banks/v1");
        if (!response.ok) {
            throw new Error("Erro ao conectar a api de bancos");
        }
        const bancos = await response.json();
        renderBancos(bancos);
        status.textContent = "";
    }
    catch (error) {
        status.textContent = error.message;
    }
}

function renderBancos(bancos) {
    const listaBancos = document.getElementById("listaBancos");
    bancos.forEach(b => {
        //<li>...</li>
        const li = document.createElement("li");
        li.textContent = b.fullName;
        listaBancos.appendChild(li);
    });
}