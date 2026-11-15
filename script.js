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
    let cor = "";

    if (edpi < 200) {
        faixa = "Baixa";
        descricao = "Ideal para quem busca máxima precisão.";
        cor = "#22c55e";
    }
    else if (edpi <= 400) {
        faixa = "Média";
        descricao = "Faixa usada por muitos jogadores competitivos.";
        cor = "#eab308";
    }
    else {
        faixa = "Alta";
        descricao = "Movimentos rápidos, mas menos precisos.";
        cor = "#ef4444";
    }

    document.getElementById("resultado").innerHTML = `
        <div style="border-top:2px solid ${cor}; padding-top:15px;">
            <h2 style="color:${cor};">eDPI: ${edpi.toFixed(0)}</h2>
            <p><strong>Faixa:</strong> ${faixa}</p>
            <p>${descricao}</p>
        </div>
    `;
}
function converter(){

    const origem =
        document.getElementById("origem").value;

    const sens =
        parseFloat(
            document.getElementById("sensConvert").value
        );

    if(!sens){
        alert("Digite uma sensibilidade.");
        return;
    }

    let resultado;

    if(origem === "valorant"){
        resultado = sens * 3.181818;
        document.getElementById(
            "resultadoConversao"
        ).innerHTML =
        `<h3>CS2: ${resultado.toFixed(2)}</h3>`;
    }
    else{
        resultado = sens / 3.181818;
        document.getElementById(
            "resultadoConversao"
        ).innerHTML =
        `<h3>Valorant: ${resultado.toFixed(2)}</h3>`;
    }
}
