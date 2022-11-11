window.onload = function(){
console.log('conexión exitosa');

    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    const logo = document.querySelector('figure img')
    const menu = document.querySelector('#menu')

    logo.addEventListener('mouseenter', function() {
        console.log('estas sobre el logo!');
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    })

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    }
     
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}