var Meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
"Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var diasDelMes = [31,28,31,30,31,30,31,31,30,31,30,31];
var Meses, Enero;Febrero;Marzo;


Enero = vector[0];
31 = 0;
Febrero = vector[1];
28 = 1;
Marzo = vector[2];
31 = 2;

diasDelMes = vector[0];



for(let i = 0; i < 10; i ++) {
    if(Meses < vector[i]) {
            Meses = vector[i];
            Enero = i;
    }
    
    if(diasDelMes > vector) {
            diasDelMes = vector[i];
            31 = i;
    
    }
    if(diasDelMes > vector) {
           diasDelMes = vector[i];
           30 = i;

}
    if(diasDelMes > vector) {
           diasDelMes = vector[i];
           28 = i;

}
}

console.log("Los meses con 31 dias son" + 31 + "y se encuentran en la posicion" + 0,2,4,6,7,9,11);
console.log("Los meses con 30 dias son" + 30 + "y se encuentran en la posicion" + 3,5,8,10);
console.log("El mes de febrero tiene 28 dias" + 28 + "y se encuentra en la posicion" + 1);