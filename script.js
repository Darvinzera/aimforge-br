function calcular() {

    const dpi = parseFloat(document.getElementById("dpi").value);
    const sensi = parseFloat(document.getElementById("sensi").value);

    if (!dpi || !sensi) {
        alert("Preencha todos os campos.");
        return;
    }

    const edpi = dpi * sensi;

    let faixa = "";
    let descricao = "";

    if (edpi < 200) {
        faixa = "Baixa";
        descricao = "Mais precisão para flicks e headshots.";
    }
    else if (edpi <= 400) {
        faixa = "Média";
        descricao = "Equilíbrio entre velocidade e precisão.";
    }
    else {
        faixa = "Alta";
        descricao = "Movimentos rápidos, porém menos precisos.";
    }

    document.getElementById("resultado").innerHTML = `
        <h2>eDPI: ${edpi.toFixed(0)}</h2>
        <p>Faixa: ${faixa}</p>
        <p>${descricao}</p>
    `;
}
