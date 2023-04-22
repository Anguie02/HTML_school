const evento = new Date('April 22, 2023  9:27:30');
evento.setDate(22);
console.log(evento.getDate());

//*************
evento.setDate(14) ;
console.log(evento.getDate());

//*********Fecha actual************** */

const hoy = new Date();
hoy.toDateString; //Añadir este método para obtener la fecha actual
console.log(hoy);//Mostramos


