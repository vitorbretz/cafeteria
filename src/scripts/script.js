let btnRight = document.querySelector('.btn-right')
let btnLeft = document.querySelector('.btn-left')
let opnioes  = document.querySelectorAll('.opnion')
let indice = 0;

function mostrarOpiniao(){
    opnioes.forEach((opnioes) => opnioes.style.display = 'none');
    
    opnioes[indice].style.display = 'block';
}

btnRight.addEventListener('click',(e)=>{
    if(indice === opnioes.length - 1){
        indice = 0;
    }else{
        indice++;
    }
    mostrarOpiniao();
})
btnLeft.addEventListener('click',(e)=>{
    if(indice === 0){
        indice = opnioes.length - 1;
    } else{
        indice--;
    }
    mostrarOpiniao();
})

mostrarOpiniao();