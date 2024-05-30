
function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = Math.floor(segundos % 60);
    const segundosFormatados = segundosRestantes < 10 ? `0${segundosRestantes}` : segundosRestantes;
    return `${minutos}:${segundosFormatados}`;
}



    let play = document.getElementById("play")
    let player = document.getElementById("player-audio")
    let pause = document.getElementById("pause")
    let playIcon = document.getElementById("playIcon")
    let progressbar = document.getElementById("progressBar")
    let barraTime = document.getElementById("barra-time")
    let tempoInical = document.getElementById("tempoInical")
    let duracao = document.getElementById("duracao")
    let cor = document.getElementById("cor")
    let reapet = document.getElementById("reapet");
    let reapetIco = document.getElementById("reapetIco")
    let reapetIco1 = document.getElementById("reapetIco1")
    let notReap = document.getElementById("notReap")

    let clicou = false;
    reapet.addEventListener("click",() => {
        if(!clicou){
            reapetIco.style.filter = 'invert(50%)';
            //reapetIco.style.filter = 'hue-rotate(120deg)';
            clicou = true
        }else{
            reapetIco.style.filter = 'invert(100%)';
            clicou = false

        }

    })


   


    play.addEventListener("click",() => {
        
        if(player.paused){
            playIcon.style.display = "none"
            pause.style.display = "block"
            player.play()
        }else{
            playIcon.style.display = "block"
            pause.style.display = "none"
            player.pause()
            
        }
    })

    

    player.addEventListener("timeupdate",() => {

        let porcentagem = (player.currentTime / player.duration)*100
        barraTime.value = porcentagem
        progressbar.value = porcentagem
        tempoInical.innerText = formatarTempo(player.currentTime);

        if(porcentagem >= 100){
            playIcon.style.display = "block"
            pause.style.display = "none"

        }

        if(clicou && porcentagem >= 100){

            //alert("fim")
            player.currentTime = 0.0;
            //player.autoload = true
          
            player.play()

        
        }


        
        
        //progressbar.max = player.duration
    })

    player.addEventListener("loadedmetadata", () => {
        duracao.textContent = formatarTempo(player.duration)
    if (!isNaN(player.duration)) {
        progressbar.max = 100;
    }
});

    progressbar.addEventListener("click", (e) => {
    let percent =( e.offsetX )/ progressbar.offsetWidth;
    player.currentTime = percent * player.duration;
});

    barraTime.addEventListener("input",(e) => {

        let percent1 = e.target.value;
        player.currentTime = (percent1 / 100) * player.duration;

        
    })
    