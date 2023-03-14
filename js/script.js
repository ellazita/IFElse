let button = document.getElementById('button');
let fundo_azul = false;

function mudar_fundo(){
    if (fundo_azul == false){
        fundo_azul = true;
        document.body.style.background = '#F08080';
        button.style.background = 'white';
        button.style.color = 'pink';
    }else{
        fundo_azul = false;
        document.body.style.background = 'white';
        button.style.background = '#F08080';
        button.style.color = 'black';
    }
    
}