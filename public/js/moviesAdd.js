window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseenter', function() {
        titulo.style.color = '#008000'
    })

    const miInput = document.querySelector('input#titulo')

    let estadoSecreto = 0
    miInput.addEventListener('keypress', function(e) {
        console.log('se presiono la tecla ' + e.key);
        
        switch (true) {
            case (e.key=='s' || e.key=='S') && (estadoSecreto===0 || estadoSecreto===1):
                estadoSecreto = 1
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='e' || e.key=='E') && estadoSecreto===1:
                estadoSecreto = 2
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='c' || e.key=='C') && estadoSecreto===2:
                estadoSecreto = 3
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='r' || e.key=='R') && estadoSecreto===3:
                estadoSecreto = 4
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='e' || e.key=='E') && estadoSecreto===4:
                estadoSecreto = 5
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='t' || e.key=='T') && estadoSecreto===5:
                estadoSecreto = 6
                console.log('el estado es ' + estadoSecreto);
                break;
            case (e.key=='o' || e.key=='O') && estadoSecreto===6:
                estadoSecreto = 7
                console.log('el estado es ' + estadoSecreto);
                break;
        
            default:
                estadoSecreto = 0
                console.log('el estado es ' + estadoSecreto);
                break;
        }

        if (estadoSecreto === 7) {
            window.alert('SECRETO MAGICO')
        }
    })


}