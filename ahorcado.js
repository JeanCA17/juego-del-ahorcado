var marca;
var cantidad_errores = 0;
var cantidad_aciertos = 0;

const marcas = [
    "nissan",
    "toyota",
    "lexus",
    "audi",
    "porsche",
    "chevrolet",
    "ford",
    "lamborghini"
];
var btn = id("jugar");
var imagen = id('imagen');
btn.addEventListener("click", iniciar);
var btn_letras = document.querySelectorAll("#letras button" );

function id( str ){
    return document.getElementById(str);
}

function numero_random(min , maximo){
    var valores = maximo- min;
    var nuero_al_azar = Math.floor(Math.random() * valores) + min;
    return nuero_al_azar;
}

function iniciar(event){
    imagen.src = 'imagenes/img0.png';
    btn.disabled = true;
    cantidad_errores = 0;
    cantidad_aciertos = 0;

    var area_letras = id("palabra_random");
    area_letras.innerHTML = "";

    var cantidad_palabras = marcas.length
    var nuero_al_azar = numero_random(0, cantidad_palabras);
    marca = marcas[nuero_al_azar];
    console.log(marca);
    var cant_marcas = marca.length;

    for( let i = 0; i < btn_letras.length ; i++){
        btn_letras[i].disabled = false;
    } 

    for( let i = 0; i < cant_marcas; i++){
        var span = document.createElement("span");
        area_letras.appendChild(span);
    }
    
}

for( let i = 0; i < btn_letras.length ; i++){
   btn_letras[i].addEventListener("click" , click_letras);
}

function click_letras(event){
    var spans = document.querySelectorAll("#palabra_random span");
    var button = event.target;
    button.disabled = true;
    var letra = button.innerHTML.toLowerCase(); 
    var palabra = marca.toLowerCase();

    var acerto = false;
    for (let i = 0; i < palabra.length; i++ ){
        if (letra == palabra[i]){
            spans[i].innerHTML = letra;
            cantidad_aciertos++;

            acerto = true;
        }
    }


    if( acerto == false){
    
        cantidad_errores++;
        var imagenes = `imagenes/img${cantidad_errores}.png`;
        imagen.src = imagenes;
    
    }

    if(cantidad_errores == 7){
        id('resultado').innerHTML ="Perdiste, la palabra era " + marca;
        juego_terminado();
    }else if(cantidad_aciertos == marca.length){
        id('resultado').innerHTML ="Acertaste la Marca";
        juego_terminado();
    }

    console.log("la letra " + letra + "en la palabra " + palabra + "esiste? " + acerto);
}

function juego_terminado(){
    for( let i = 0; i < btn_letras.length ; i++){
        btn_letras[i].disabled = true;
    } 

    btn.disabled = false;
}

juego_terminado();