function mostrarPro(){

    const jogador =
        document.getElementById("proPlayer").value;

    const pros = {
        aspas: {
            nome: "Aspas",
            dpi: 800,
            sens: 0.33,
            edpi: 264
        },
        tenz: {
            nome: "TenZ",
            dpi: 800,
            sens: 0.35,
            edpi: 280
        },
        less: {
            nome: "Less",
            dpi: 800,
            sens: 0.315,
            edpi: 252
        },
        zekken: {
            nome: "Zekken",
            dpi: 1600,
            sens: 0.175,
            edpi: 280
        }
    };

    const p = pros[jogador];

    document.getElementById("resultadoPro").innerHTML = `
        <div style="
            margin-top:15px;
            padding:15px;
            border-radius:10px;
            background:#1e293b;
            border-left:4px solid #22c55e;
        ">
            <h3>${p.nome}</h3>
            <p><strong>DPI:</strong> ${p.dpi}</p>
            <p><strong>Sensibilidade:</strong> ${p.sens}</p>
            <p><strong>eDPI:</strong> ${p.edpi}</p>
        </div>
    `;
}
