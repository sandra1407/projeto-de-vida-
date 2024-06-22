const botoes = document.querySelectorAll(&quot;.botao&quot;);
const textos = document.querySelectorAll(&quot;.aba-conteudo&quot;);
for (let i = 0; i &lt; botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j &lt; botoes.length; j++) {
            botoes[j].classList.remove(&quot;ativo&quot;);
            textos[j].classList.remove(&quot;ativo&quot;);
        }
        botoes[i].classList.add(&quot;ativo&quot;);
        textos[i].classList.add(&quot;ativo&quot;);
    }
}

const contadores = document.querySelectorAll(&quot;.contador&quot;);
const tempoObjetivo1 = new Date(&quot;2020-10-05T00:00:00&quot;);
const tempoObjetivo2 = new Date(&quot;2023-12-05T00:00:00&quot;);
const tempoObjetivo3 = new Date(&quot;2023-12-30T00:00:00&quot;);
const tempoObjetivo4 = new Date(&quot;2024-02-01T00:00:00&quot;);
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal &gt; 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}
function atualizaCronometro(){
    document.getElementById(&quot;dias0&quot;).textContent = calculaTempo(tempos[0])[0];
    document.getElementById(&quot;horas0&quot;).textContent = calculaTempo(tempos[0])[1];
    document.getElementById(&quot;min0&quot;).textContent = calculaTempo(tempos[0])[2];
    document.getElementById(&quot;seg0&quot;).textContent = calculaTempo(tempos[0])[3];
    for (let i=0; i&lt;contadores.length;i++){
       // contadores[i].textContent = calculaTempo(tempos[i]);  
    }
}
function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}
comecaCronometro();
