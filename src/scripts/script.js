let btnRight = document.querySelector('.btn-right')
let btnLeft = document.querySelector('.btn-left')
let opnioes  = document.querySelectorAll('.opnion')
let indice = 0;
const menuMoba = document.querySelector('.menu-mobile')
const closeMenu = document.querySelector('.menu-mobile .close')



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


document.querySelector('.buttonBurger').addEventListener('click', (e) => {
	document.querySelector('.buttonBurger').classList.toggle('close');

    menuMoba.classList.add('ativo')
    closeMenu.classList.add('close')
})
closeMenu.addEventListener('click',()=>{
    menuMoba.classList.remove('ativo')
    document.querySelector('.buttonBurger').classList.toggle('close');
    closeMenu.classList.remove('close')
})


mostrarOpiniao();