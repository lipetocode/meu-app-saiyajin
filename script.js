let generoAtual = '';
let totalTreinos = 0;

// ... (Mantenha as listas dadosMasculinos e dadosFemininos como estão)

function iniciar(sexo) {
    generoAtual = sexo;
    document.getElementById('selectionScreen').classList.remove('active');
    document.getElementById('appScreen').classList.add('active');
    // Busca o progresso salvo
    totalTreinos = localStorage.getItem('dbz_total_' + sexo) ? parseInt(localStorage.getItem('dbz_total_' + sexo)) : 0;
    atualizarTudo();
}

function atualizarTudo() {
    const lista = generoAtual === 'homem' ? dadosMasculinos : dadosFemininos;
    
    // ALTERADO: Agora divide por 15 para calcular o nível
    const nivelMax = Math.min(Math.floor(totalTreinos / 15) + 1, lista.length);
    const progresso = totalTreinos % 15;

    const slider = document.getElementById('levelSlider');
    slider.max = nivelMax;
    slider.value = nivelMax;

    const info = lista[nivelMax - 1];
    document.getElementById('levelDisplay').innerText = nivelMax;
    document.getElementById('transName').innerText = info.nome;
    document.getElementById('transName').style.color = info.cor;
    document.getElementById('charImg').src = info.img;
    document.documentElement.style.setProperty('--current-color', info.cor);
    
    // ALTERADO: Cálculo da barra de progresso agora sobre 15
    document.getElementById('progressFill').style.width = (progresso / 15 * 100) + "%";
    document.getElementById('progressText').innerText = `TREINOS: ${progresso} / 15`;
    
    localStorage.setItem('dbz_total_' + generoAtual, totalTreinos);
}

document.getElementById('trainCheck').onclick = function() {
    if(this.checked) {
        totalTreinos++;
        this.checked = false;
        
        if (navigator.vibrate) navigator.vibrate(50);
        
        // ALTERADO: Verifica se completou o ciclo de 15
        if(totalTreinos % 15 === 0) {
            alert("VOCÊ ATINGIU UM NOVO NÍVEL DE PODER, APROVEITE SUA NOVA TRANSFORMAÇÃO!");
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        }
        atualizarTudo();
    }
}

document.getElementById('levelSlider').oninput = function() {
    const lista = generoAtual === 'homem' ? dadosMasculinos : dadosFemininos;
    const info = lista[this.value - 1];
    document.getElementById('levelDisplay').innerText = this.value;
    document.getElementById('transName').innerText = info.nome;
    document.getElementById('charImg').src = info.img;
}

function resetar() {
    if(confirm("Deseja apagar seu progresso e voltar ao início?")) {
        localStorage.removeItem('dbz_total_' + generoAtual);
        location.reload();
    }
}
