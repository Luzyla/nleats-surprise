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

// ARRAY
let quote = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20, quote21, quote22, quote23, quote24, quote25, quote26, quote27, quote28, quote29, quote30, quote31, quote32, quote33, quote34, quote35, quote36, quote37]


// ON CLICK
botonQuote.onclick = () => {
  let direccionImg = obtenerQuote();
  console.log(obtenerQuote("quoteAMoostrar"))  
  contenedorImg.src = direccionImg;
}

// FUNCTION
function obtenerQuote () {
    let numeroAlAzar = Math.floor(Math.random() * 36);
    let quoteAMoostrar = quote[numeroAlAzar];
    
    console.log(numeroAlAzar)
    return quoteAMoostrar;
   
}

/*------------------------
        @Luzyla
-------------------------*/