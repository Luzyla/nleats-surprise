//IMAGES
let quote1 = "./images/Quote-01.jpeg";
let quote2 = "./images/Quote-02.jpeg";
let quote3 = "./images/Quote-03.jpeg";
let quote4 = "./images/Quote-04.jpeg";
let quote5 = "./images/Quote-05.jpeg";
let quote6 = "./images/Quote-06.jpeg";
let quote7 = "./images/Quote-07.jpeg";
let quote8 = "./images/Quote-08.jpeg";
let quote9 = "./images/Quote-09.jpeg";
let quote10 = "./images/Quote-010.png";
let quote11 = "./images/Quote-011.jpeg";
let quote12 = "./images/Quote-012.jpeg";
let quote13 = "./images/Quote-013.jpeg";
let quote14 = "./images/Quote-014.jpeg";
let quote15 = "./images/Quote-015.jpeg";
let quote16 = "./images/Quote-016.jpeg";
let quote17 = "./images/Quote-017.jpeg";
let quote18 = "./images/Quote-018.jpeg";
let quote19 = "./images/Quote-019.jpeg";
let quote20 = "./images/Quote-020.jpeg";
let quote21 = "./images/Quote-021.jpeg";
let quote22 = "./images/Quote-022.jpeg";
let quote23 = "./images/Quote-023.jpeg";
let quote24 = "./images/Quote-024.jpeg";
let quote25 = "./images/Quote-025.jpeg";
let quote26 = "./images/Quote-026.jpeg";
let quote27 = "./images/Quote-027.jpeg";
let quote28 = "./images/Quote-028.jpeg";
let quote29 = "./images/Quote-029.png";
let quote30 = "./images/Quote-030.jpeg";
let quote31 = "./images/Quote-031.png";
let quote32 = "./images/Quote-032.jpeg";
let quote33 = "./images/Quote-033.jpeg";
let quote34 = "./images/Quote-034.jpeg";
let quote35 = "./images/Quote-035.jpeg";
let quote36 = "./images/Quote-036.jpeg";
let quote37 = "./images/Quote-037.jpeg";

// VARIABLES
let botonQuote = document.getElementById("get-lucky");
let contenedorImg = document.querySelector(".img-quote");

//ARRAY
let quote = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20, quote21, quote22, quote23, quote24, quote25, quote26, quote27, quote28, quote29, quote30, quote31, quote32, quote34, quote35, quote36, quote37]


//FUNCIÓN ON CLICK
botonQuote.onclick = () => {
  let direccionImg = obtenerQuote();
  contenedorImg.src = direccionImg;
}

//FUNCIÓN ALEATORIA CON ACTUALIZAR
function obtenerQuote () {
    let numeroAlAzar = Math.floor(Math.random() * 38);
    let texto = "";

    if (numeroAlAzar == 0) {
       
        texto = quote[0];
           
    }
    
    else if (numeroAlAzar == 1) {
        
        texto = quote[1];

    }
    
    else if (numeroAlAzar == 2) {
    
        texto = quote[2];

    }
    
    else if (numeroAlAzar == 3) {
    
        texto = quote[3];

    }

    else if (numeroAlAzar == 4) {
    
        texto = quote[4];

    }

    else if (numeroAlAzar == 5) {
    
        texto = quote[5];

    }

    else if (numeroAlAzar == 6) {
    
        texto = quote[6];

    }

    else if (numeroAlAzar == 7) {
    
        texto = quote[7];

    }

    else if (numeroAlAzar == 8) {
    
        texto = quote[8];

    }

    else if (numeroAlAzar == 9) {
    
        texto = quote[9];

    }

    else if (numeroAlAzar == 10) {
    
        texto = quote[10];

    }

    else if (numeroAlAzar == 11) {
        
        texto = quote[11];

    }
    
    else if (numeroAlAzar == 12) {
    
        texto = quote[12];

    }
    
    else if (numeroAlAzar == 13) {
    
        texto = quote[13];

    }

    else if (numeroAlAzar == 14) {
    
        texto = quote[14];

    }

    else if (numeroAlAzar == 15) {
    
        texto = quote[15];

    }

    else if (numeroAlAzar == 16) {
    
        texto = quote[16];

    }

    else if (numeroAlAzar == 17) {
    
        texto = quote[17];

    }

    else if (numeroAlAzar == 18) {
    
        texto = quote[18];

    }

    else if (numeroAlAzar == 19) {
    
        texto = quote[19];

    }

    else if (numeroAlAzar == 20) {
    
        texto = quote[20];

    }

    else if (numeroAlAzar == 21) {
        
        texto = quote[21];

    }
    
    else if (numeroAlAzar == 22) {
    
        texto = quote[22];

    }
    
    else if (numeroAlAzar == 23) {
    
        texto = quote[23];

    }

    else if (numeroAlAzar == 24) {
    
        texto = quote[24];

    }

    else if (numeroAlAzar == 25) {
    
        texto = quote[25];

    }

    else if (numeroAlAzar == 26) {
    
        texto = quote[26];

    }

    else if (numeroAlAzar == 27) {
    
        texto = quote[27];

    }

    else if (numeroAlAzar == 28) {
    
        texto = quote[28];

    }

    else if (numeroAlAzar == 29) {
    
        texto = quote[29];

    }

    else if (numeroAlAzar == 30) {
    
        texto = quote[30];

    }

    else if (numeroAlAzar == 31) {
        
        texto = quote[31];

    }
    
    else if (numeroAlAzar == 32) {
    
        texto = quote[32];

    }
    
    else if (numeroAlAzar == 33) {
    
        texto = quote[33];

    }

    else if (numeroAlAzar == 34) {
    
        texto = quote[34];

    }

    else if (numeroAlAzar == 35) {
    
        texto = quote[35];

    }

    else if (numeroAlAzar == 36) {
    
        texto = quote[36];

    }

    else {
        
        texto = quote[37];
    }
    
    return texto

}

