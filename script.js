let generoAtual = '';
let totalTreinos = 0;

const dadosMasculinos = [
    { nome: "Forma Base", cor: "#ffffff", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDY0cjZ2d3A0NXczN28xc2tvanh5OHVzMWV5YWl0YmdzdnF3dWx0aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vThGQEkz4f9eg/giphy.gif" },
    { nome: "Super Saiyajin", cor: "#ffde00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZuenRsdW05bGNlNHZ1NncwdXV1YTR0aWlzYzhzYnFuM2ZnNmVxZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/efdPsC5zF28Lu/giphy.gif" },
    { nome: "Super Saiyajin 2", cor: "#ffff00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZpNnNwdTFoZ2VoaGFoaGp1MmNtM2hmMHYzN2lqdXgwZTU4aWN3NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2ITd4psR807cieh02J/giphy.gif" },
    { nome: "Super Saiyajin 3", cor: "#ffaa00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExejZsdGQxeG5xYjVkN2YxcmVnd29kdGh3dGNpa3RqNG1zamR0dG9tcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mfgWMmIbTx0NHSqs4F/giphy.gif" },
    { nome: "Super Saiyajin Deus", cor: "#ff0044", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnp4MXB2d21sNXgxaWRwb3p1dnljbzBydm9lc2oxMTFwc3FzM3puaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9hJDLEeSiPc6k/giphy.gif" },
    { nome: "Super Saiyajin Blue", cor: "#00ccff", img: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d25qNDcyM2NpcWt5bzY3N2FzZXd0MWFvbHZncXJuOWw0ajNiaXJ5bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dmFXUZ5up1T896HP8B/giphy.gif" },
    { nome: "Instinto Superior", cor: "#e0e0e0", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ltYncwcXN3MWNjam93NGFxbXVlM2o2cTVyc3RlcWd5ZmhxNjVlNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/t7jzGb5JT0B2D7w771/giphy.gif" },
    { nome: "Ego Superior", cor: "#9d00ff", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzV5Z2Z6ejc3dXl4ZDVxcDZ4YjJscWc5eDdtMDg1eXI0bnhiZm5wbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JWTrd0EVbByLuaBQUB/giphy.gif" },
    { nome: "Gohan Beast", cor: "#ff3333", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmxha3UxODJqMmFwd2gwa2U2YzA1dnNzOTQ4dnRyeHpwMjRhbjdsNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0CMwIq4vlyxgmmtqU6/giphy.gif" }
];

const dadosFemininos = [
    { nome: "Forma Base", cor: "#ff69b4", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmxkdXoxaHF3YXRoc3V2N2F5cHltN2VjenViOXlnbTBvY252Z3Q5NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1pA5l2lZmXWnVvxzSa/giphy.gif" },
    { nome: "Super Saiyajin (Caulifla)", cor: "#ffde00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmxkdXoxaHF3YXRoc3V2N2F5cHltN2VjenViOXlnbTBvY252Z3Q5NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2wZoLID8DmIRf0WUkx/giphy.gif" },
    { nome: "Super Saiyajin 2", cor: "#ffff00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGNvOWQxdjY4Y2N2aGV0dDd0aGlsazB6ZW9hNjM2YTZ6eXpvbmpjMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IpjTwaJFsSa2I/giphy.gif" },
    { nome: "S. Saiyajin Berserker (Kale)", cor: "#32cd32", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGNvOWQxdjY4Y2N2aGV0dDd0aGlsazB6ZW9hNjM2YTZ6eXpvbmpjMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YX6h9ymaQb686KXoFb/giphy.gif" },
    { nome: "Fusão Kefla", cor: "#00ff7f", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2YyNTZveWV5MGxkNWZjdGRvYm93MXI3OHM2b2Jua2V4NWp5MnM5aiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/E9P2MDyjcxwyyTO0Uc/giphy.gif" },
    { nome: "Kefla Super Saiyajin 2", cor: "#7fff00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNlaGhvZnEzZ3g1ZW4wdGdxcGhsaHhva3JsemZocGxoc2xxdnpuciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1o1uCy05L9yTOXfD80/giphy.gif" }
];

function iniciar(sexo) {
    generoAtual = sexo;
    document.getElementById('selectionScreen').classList.remove('active');
    document.getElementById('appScreen').classList.add('active');
    totalTreinos = localStorage.getItem('dbz_total_' + sexo) ? parseInt(localStorage.getItem('dbz_total_' + sexo)) : 0;
    atualizarTudo();
}

function atualizarTudo() {
    const lista = generoAtual === 'homem' ? dadosMasculinos : dadosFemininos;
    // Cálculo baseado em 15 treinos
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
    
    document.getElementById('progressFill').style.width = (progresso / 15 * 100) + "%";
    document.getElementById('progressText').innerText = `TREINOS: ${progresso} / 15`;
    
    localStorage.setItem('dbz_total_' + generoAtual, totalTreinos);

    // --- NOVA LÓGICA: VERIFICAÇÃO DIÁRIA ---
    const hoje = new Date().toDateString(); // Ex: "Thu Jan 22 2026"
    const ultimoTreino = localStorage.getItem('dbz_data_' + generoAtual);
    const checkbox = document.getElementById('trainCheck');
    const labelTexto = checkbox.parentNode.querySelector('b');

    if (ultimoTreino === hoje) {
        // Se já treinou hoje: Bloqueia o checkbox
        checkbox.checked = true;
        checkbox.disabled = true;
        labelTexto.innerText = "TREINO DE HOJE CONCLUÍDO (RECUPERANDO KI...)";
        labelTexto.style.opacity = "0.5";
    } else {
        // Se é um novo dia: Libera o checkbox
        checkbox.checked = false;
        checkbox.disabled = false;
        labelTexto.innerText = "CONCLUIR TREINO";
        labelTexto.style.opacity = "1";
    }
}

document.getElementById('trainCheck').onclick = function() {
    if(this.checked) {
        // Salva a data de hoje para bloquear futuros cliques
        const hoje = new Date().toDateString();
        localStorage.setItem('dbz_data_' + generoAtual, hoje);

        totalTreinos++;
        
        // Vibração
        if (navigator.vibrate) navigator.vibrate(50);
        
        if(totalTreinos % 15 === 0) {
            alert("VOCÊ ATINGIU UM NOVO PATAMAR DE PODER! APROVEITE SUA NOVA TRANSFORMAÇÃO!");
            if (navigator.vibrate) navigator.vibrate([100, 50, 100]);
        }
        
        atualizarTudo(); // Atualiza a tela e bloqueia o botão
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
        localStorage.removeItem('dbz_data_' + generoAtual); // Remove também a data
        location.reload();
    }
}
