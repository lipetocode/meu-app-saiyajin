let generoAtual = '';
let totalTreinos = 0;

const dadosMasculinos = [
    { nome: "Forma Base", cor: "#ffffff", img: "https://media.giphy.com/media/GRSnxyhJnPsaQ/giphy.gif" },
    { nome: "Super Saiyajin", cor: "#ffde00", img: "https://media.giphy.com/media/ul1omBL2KdtO3MQvX8/giphy.gif" },
    { nome: "Super Saiyajin 2", cor: "#ffff00", img: "https://media.giphy.com/media/oH0mXbYJ066Q/giphy.gif" },
    { nome: "Super Saiyajin 3", cor: "#ffaa00", img: "https://media.giphy.com/media/qXJ2sAs20dn9u/giphy.gif" },
    { nome: "Super Saiyajin Deus", cor: "#ff0044", img: "https://media.giphy.com/media/6fNnK7PpsX7Gw/giphy.gif" },
    { nome: "Super Saiyajin Blue", cor: "#00ccff", img: "https://media.giphy.com/media/125amNw97qvSop/giphy.gif" },
    { nome: "Instinto Superior", cor: "#e0e0e0", img: "https://media.giphy.com/media/SIuI7syOPv1sY/giphy.gif" },
    { nome: "Ego Superior", cor: "#9d00ff", img: "https://media.giphy.com/media/6v309pSreYV9I86BqI/giphy.gif" },
    { nome: "Gohan Beast", cor: "#ff3333", img: "https://media.giphy.com/media/7mHhNf2u2S7x10pM5Y/giphy.gif" }
];

const dadosFemininos = [
    { nome: "Forma Base", cor: "#ff69b4", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/M9Zp1W5L5Jm1XN3kQq/giphy.gif" },
    { nome: "Super Saiyajin (Caulifla)", cor: "#ffde00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKu6WJXTZvbqKv6/giphy.gif" },
    { nome: "Super Saiyajin 2", cor: "#ffff00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l4FsL6mX7V5K2y8zG/giphy.gif" },
    { nome: "S. Saiyajin Berserker (Kale)", cor: "#32cd32", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l0Iy2WfPBvOiGpHY4/giphy.gif" },
    { nome: "Lendário Controlado", cor: "#adff2f", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/M9Zp1W5L5Jm1XN3kQq/giphy.gif" },
    { nome: "Fusão Kefla", cor: "#00ff7f", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKVUn7iM8FMEU24/giphy.gif" },
    { nome: "Kefla Super Saiyajin 2", cor: "#7fff00", img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndmR4ZWZ6bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4bmR4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l4FsL6mX7V5K2y8zG/giphy.gif" }
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
}

document.getElementById('trainCheck').onclick = function() {
    if(this.checked) {
        totalTreinos++;
        this.checked = false;
        
        // Vibração ao treinar
        if (navigator.vibrate) navigator.vibrate(50);
        
        if(totalTreinos % 15 === 0) {
            alert("VOCÊ ATINGIU UM NOVO NÍVEL DE PODER! APROVEITE SUA NOVA TRANSFORMAÇÃO!");
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
