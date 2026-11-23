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

    const origem = document.getElementById("origem").value;

    const sens = parseFloat(
        document.getElementById("sensConvert").value
    );

    if(!sens){
        alert("Digite uma sensibilidade.");
        return;
    }

    let resultado;

    if(origem === "valorant"){
        resultado = sens * 3.181818;

        document.getElementById("resultadoConversao").innerHTML =
            `<h3>CS2: ${resultado.toFixed(2)}</h3>`;
    }
    else{

        resultado = sens / 3.181818;

        document.getElementById("resultadoConversao").innerHTML =
            `<h3>Valorant: ${resultado.toFixed(2)}</h3>`;
    }
}
function recomendar(){

    const mousepad =
        document.getElementById("mousepad").value;

    const estilo =
        document.getElementById("estilo").value;

    const funcao =
        document.getElementById("funcao").value;

    let recomendacao = "";

    if(estilo === "arm" && mousepad === "grande"){

        recomendacao = `
            <h3>Faixa Recomendada</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.25 - 0.35</p>
            <p>eDPI: 200 - 280</p>
        `;
    }
    else if(estilo === "wrist"){

        recomendacao = `
            <h3>Faixa Recomendada</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.35 - 0.55</p>
            <p>eDPI: 280 - 440</p>
        `;
    }
    else{

        recomendacao = `
            <h3>Faixa Recomendada</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.28 - 0.40</p>
            <p>eDPI: 224 - 320</p>
        `;
    }

    document.getElementById(
        "resultadoRecomendacao"
    ).innerHTML = recomendacao;
}
function mostrarPro(){

    const jogador =
        document.getElementById("proPlayer").value;

    let info = "";

    if(jogador === "aspas"){

        info = `
            <h3>Aspas</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.33</p>
            <p>eDPI: 264</p>
        `;
    }

    else if(jogador === "tenz"){

        info = `
            <h3>TenZ</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.35</p>
            <p>eDPI: 280</p>
        `;
    }

    else if(jogador === "less"){

        info = `
            <h3>Less</h3>
            <p>DPI: 800</p>
            <p>Sensibilidade: 0.315</p>
            <p>eDPI: 252</p>
        `;
    }

    else{

        info = `
            <h3>Zekken</h3>
            <p>DPI: 1600</p>
            <p>Sensibilidade: 0.175</p>
            <p>eDPI: 280</p>
        `;
    }

    document.getElementById(
        "resultadoPro"
    ).innerHTML = info;
}
