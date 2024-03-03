/*console.log("hola")
console.log(5+5);*/

//uso de variables 

/*var nombre = 'ALAN';
console.log(typeof(nombre));

var edad= 20;
console.log(typeof(edad));

var sueldo = '0';
console.log(typeof(sueldo));

var tienetrabajo = false;
console.log(typeof(tienetrabajo));

var puestodetrabajo ;
console.log(puestodetrabajo);

puestodetrabajo=null;
console.log(puestodetrabajo);

var a = 5;
let b = 5;
suma = a + b ;
console.log(suma);*/


//OPERADORES MATEMATICOS


/*var edadAna , edadMaria ,direferenciaEdad;
var sumaEdades,  yearAna , yearMaria , yearActual ;

edadAna = 30 ;
edadMaria = 28 ;
yearActual =  2024 ;

direferenciaEdad  = edadAna - edadMaria ;
sumaEdades =  edadAna + edadMaria ; 

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria ;

console.log(direferenciaEdad);
console.log(sumaEdades);
console.log('año que nacio Ana' + ' ' + yearAna);
console.log('año que nacio Maria' + ' ' + yearMaria);*/


//OPERADORES LOGICOS , UNARIOS Y DE ASIGANACION < > <= >= == */


/*var EdadLeo , EdadRuiz ;

EdadLeo = 50 ; 
EdadRuiz = 60 ;

var mayorLeo = !(EdadLeo == EdadRuiz) ;
console.log(mayorLeo)


//OPERADORES UNARIOS ++INCREMENTO -- DECREMENTO


EdadLeo++ ; 
console.log(EdadLeo++);


//OPERADORES += , -= , *= , /= , %= 

var  a = 12;
var b = 5 ;

var c = a % 5 //residuo o resto de division 
console.log(c);
a += b ;
console.log(a); */


// SENTENCIA IF  , ELSE 


/*var nombre  = 'alan ';
var esEstudiante = false ;

if(esEstudiante == true){
    console.log(nombre + 'esEstudiante');
}
else{
console.log(nombre+ 'noesEstudiante');
}*/     


//SENTENCIAS LOGICAS : NOT ,ANS & OR 

// AND(&&) TRUE SI TODO ES TRUE
// OR(||)  TRUE SI UNO ES TRUE 
// NOT(!) INVIERTE TRUE/FALSE 


/*var nombre = 'arturo';
var edad = 90 ;

// edad < 12 es un nuño .
//edad > 11, es < 18 es un adolecente.
// edad > 17, es <  60 es un adulto 
// edad > 60 es un anciano 

if(edad < 12){
    console.log(nombre + ' ' + 'es un niño' );
;}else if((edad > 11) && (edad < 18)){
    console.log(edad + ' ' +'es un adolecente')
}else if((edad > 17) && (edad < 60)){
    console.log(nombre + ' ' + 'es un adulto')
}else{
    console.log(nombre + ' ' +'es un anciano ' )
}*/

//SENTENCIA SWITCH


/*var mes = 13;

switch(mes){
    case 1:
        console.log('enero');
    break;
    case 2:
        console.log('febrero');
    break;
    case 3:
        console.log('marzo');
    break;
    case 4:
        console.log('abril');
    break;
    case 5:
        console.log('mayo');
    break;
    case 6:
        console.log('junio');
    break;
    case 7:
        console.log('julio');
    break;
    case 8:
        console.log('agosto');
    break;
    case 9:
        console.log('septiembre');
    break;
    case 10:
        console.log('octubre');
    break;
    case 11:
        console.log('noviembre');
    break;
    case 12:
        console.log('diciembre');
    break;
 default :
  console.log('mes no encontrado');
}*/



//SENTENCIA FOR 

/*for( var  i = 0 ; i <= 12 ; i++ ){
    console.log(i);
}*/

//  SENTENCIA WHILE Y DO-WHILE


/*var i = 0 ;
while(i <= 12){
console.log(i);
i++;
}
console.log(i);*/

/*var i = 1 ;
do{
  console.log(i);
  i++;
}
while(i < 20);
console.log(i);
*/

//FUNCIONES