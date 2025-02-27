// new date(12345654); (geralmente recebe de 01/01/1970 até hoje)
// new date(0) = recebe de Epoch Time = 01/01/1970 as 00:00:00
function watch(){
    function getTimeFromSeconds(sec) {

     const data = new Date(sec * 1000); //multiplica por 1000 para transformar em milesegundos
    
     return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //corrige o timeZone do EpochTime
    });
};
    

const watch = document.querySelector('.watch');
let sec = 0;
let timer;

function startWatch() {
    timer = setInterval(function() { //define que a cada 1 seg adiciona 1 segundo na varaiavel sec
      sec++; 
      watch.innerHTML = getTimeFromSeconds (sec); //manda o sec somado e formatado para a div watch
    }, 1000);

}

document.addEventListener('click', function(event){

    const element = event.target;

    if (element.classList.contains('erase')) {
        watch.classList.remove('paused')
        clearInterval(timer); //pausa
        watch.innerHTML = '00:00:00'; //limpa string
        sec = 0;
    };

    if (element.classList.contains('start')) {
        watch.classList.remove('paused')
        clearInterval(timer);
        startWatch();
    };

    if (element.classList.contains('pause')) {
        
        clearInterval(timer); //pausa
        watch.classList.add('paused')
        
    };
    
});
};

watch();