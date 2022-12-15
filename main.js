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

