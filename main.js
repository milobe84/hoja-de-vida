const masaMarcos= 78;
console.log ("Masa Marcos: " + masaMarcos);
const masaJuan= 92;
console.log ("Masa Juan: " + masaJuan)
const alturaMarcos= 1.69;
console.log ("Altura Marcos: " + alturaMarcos)
const alturaJuan= 1.95;
console.log ("Altura Juan: " + alturaJuan)

const imc1= masaMarcos / (alturaMarcos * alturaMarcos);
console.log ("Este es el IMC de Marcos: " + imc1.toFixed (1))
const imc2= masaJuan / (alturaJuan * alturaJuan);
console.log ("Este es el IMC de Juan: " + imc2.toFixed (1))

const marcosMayorIMC = imc1 > imc2;

console.log(marcosMayorIMC);

if (marcosMayorIMC){
   // console.log("El IMC de Marcos (" + imc1 + ") es mas alto que el de Juan (" + imc2 + ")");
    console.log(`El IMC de Marcos (${imc1.toFixed (1)}) es mas alto que el de Juan (${imc2.toFixed (1)})`);
}else{
    //console.log("El IMC de Juan (" + imc2 + ") es mas alto que el de de Marcos (" + imc1 + ")");
    console.log(`El IMC de Juan (${imc2.toFixed (1)}) es mas alto que el de de Marcos (${imc1.toFixed (1)})`);
}

// en el siguiente codigo se debe identificar quien es el equipo ganador teniendo en cuenta las codiciones del reto

const delfinesPuntuacion1 = 96;
const delfinesPuntuacion2 = 108;
const delfinesPuntuacion3 = 89;

const koalasPuntuacion1 = 88;
const koalasPuntuacion2 = 91;
const koalasPuntuacion3 = 110;

const promedioDelfines = (delfinesPuntuacion1 + delfinesPuntuacion2 + delfinesPuntuacion3) / 3;
console.log("promedio Delfines: " + promedioDelfines)

const promedioKoalas = (koalasPuntuacion1 + koalasPuntuacion2 + koalasPuntuacion3) / 3;
console.log("promedio Koalas: " + promedioKoalas)

if (promedioDelfines >= 100 && promedioDelfines > promedioKoalas){
    console.log("Ganan los Delfines");
}else if (promedioKoalas > promedioDelfines && promedioKoalas >= 100){
    console.log("Ganan los Koalas");
}else if (promedioDelfines == promedioKoalas && (promedioDelfines >= 100 && promedioKoalas >= 100)){
    console.log("Hay un empate");
}else{
    console.log("Nadie Gana");
}


// en el siguiente codigo se debe identificar la propina y presentar el valor total segun las condiciones del reto.

let propina = 0;



