
let fecha1 = new Date("21/04/2023");
let fecha2 = new Date("14/04/2023");


let diferencia = fecha2.getTime()- fecha1.getTime();                                                                                 

let diasDiferencia = diferencia /1000 /60 /60/24;
console.log(diasDiferencia);

console.log('El número de días que faltan es: '+ diasDiferencia);