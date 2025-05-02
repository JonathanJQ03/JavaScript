        let nombre = prompt('Ingrese su nombre: ');
        alert(`Hola ${nombre}`);
        let numero = prompt('Ingrese un numero:');
        if(numero < 0){
            alert('El numero ingresado es negativo');
            let numero = prompt('Ingrese un numero:');
        }else{
            alert('El numero ingresado es positivo');
        }     
        let piramide = '';
        for(let i = 0; i<n; i++){
            piramide = piramide + '#';
            console.log(piramide);
        }