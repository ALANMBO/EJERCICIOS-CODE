/*Tipos de Datos y Variables
Declaración de Variables:

Declara una variable para almacenar tu nombre.
Declara una variable para almacenar tu edad.
Declara una variable para almacenar si eres estudiante o no. */

//1
/*  let a = "ALAN"
    console.log("MI NOMBRE ES :" + a)
    let b = "20"
    console.log("MI EDAD ES :" + b)
    let c = "ESTUDIANTE"
    console.log("SOY UN :"+c)

    console.log("MI NOMBRE ES "+ " " + a + " " + "MI EDAD ES"+ " " + b + " " + "SOY UN" + " " +c)

*/
/*Conversiones de Tipo:

   Convierte una cadena de texto que representa un número ("123") en un número.
    Convierte el número 456 en una cadena de texto. */

/*    let a = "123";
    let num = Number(a); 
    console.log("El número es: " + num); 
    console.log("El tipo de 'num' es: " + typeof num); 

    let b = 123
    let num1 = String(b);
    console.log("El número es: " + num1); 
    console.log("El tipo de 'num' es: " + typeof num1); 
*/


/*Condicionales
Condicional Básico:

Escribe una condición que verifique si un número almacenado en una variable es positivo, negativo o cero.

Condicionales Anidados:

Escribe una condición que verifique si una persona es menor de 13 años (niño), entre 13 y 19 años (adolescente) o mayor de 19 años (adulto).
Condicional con Múltiples Condiciones:

Escribe una condición que verifique si un año dado es bisiesto. (Un año es bisiesto si es divisible por 4, pero no por 100, a menos que sea divisible por 400).*/

    /*var a = 0;

    if(a > 0){
        console.log("ES POSITIVO")
    }else if( a < 0){
        console.log("negativo")
    }else{
        console.log("cero")
    }*/


/*  let a = 58;

    if(a < 13){
        console.log("ES NIÑO")
    }else if(a <= 13 || a <= 19 ){
        console.log("ADOLECENTE")
    }else{
        console.log("ADULTO")
    }

//OPERADOR TERNARIO 
    let a = 58;

    a < 13 ? console.log("ES NIÑO") : 
    (a >= 13 && a <= 19 ? console.log("ADOLESCENTE") : console.log("ADULTO"));

*/
    /* let a = 2004;

    if (a % 400 == 0) {
        console.log("es bisiesto");
    } else if (a % 100 == 0) {
        console.log("no es bisiesto");
    } else if (a % 4 == 0) {
        console.log("es bisiesto");
    } else {
        console.log("no es bisiesto");
    }
*/
/*    let b = 2004;

    b % 400 === 0 ? console.log('es bisiesto') :
    (b % 100 === 0 ? console.log('no es bisiesto') :
    (b % 4 === 0 ? console.log('es bisiesto') : console.log('no es bisiesto')));
*/

/*Suma de Dos Números

Declara una función llamada sumar que tome dos parámetros (a y b) y devuelva la suma de ambos. */

    /*function sumar(a,b){
        c = a +b
        console.log("la suma es :" + c)
    }
    sumar(1,2)


    function saludo(name ){
        console.log(`HOLA COMO ESTAS : ${name}`)
    }
    saludo("luis")

    function mul(a , b){
        c = a *b 
        console.log("EL PRODUCTO ES :" + c )
    }
    mul(3,3)

    function calcularAreaRectangulo(ancho , alto){
        d = (ancho * alto)/2
        console.log("EL calcularAreaRectangulo ES :" + d)
    }
    calcularAreaRectangulo(5,5)


    // f = ( c × 9/5) +32.


    function convertirAFahrenheit(x){
        y = (c * 8/5 ) +32
        console.log("LA CONVERSION ES :" + y )
    }
    convertirAFahrenheit(5)*/

//FUNCIONES ANONIMAS
       /* let q =  function(a , b){
            c = a + b
            console.log("LA SUMA  ES:" + c)
        }

        q(5,5)

        let f = function(a , b){
            c = a * b 
            console.log("LA MUL ES:" + c)
        }
        f(5,5)

        var a = function(name){
            console.log(`MI NOMBRE ES : ${name}`)
        }
        a("juan")

        var a = function(b){
            if(b % 2==0){
                console.log("par")
            }else{
                console.log("impar")
            }
        }
        a(2)

        let h = function(g){
            suma = 0
            for(var i = 0 ; i <= g ; i++){
                suma += i
            }
            console.log("LA SUMA ES:"+suma)
        }
        h(5)*/

//FUNCIONES FLECHA

/*       var x = (a , b) =>  a + b
        console.log("LA SUMA ES :"+x(5,5))

        var a = x => x
        console.log(`MI NOMBRE ES :`+ a("pedro"))

        var g = (t) => {
            if (t % 2 == 0) {
                console.log("par");
            } else {
                console.log("impar");
            }
        }
        
        g(2); 
        g(3);
*/
      

/*        var a = (n) => {
            f = 1 ;
            for(let i = 1 ; i<=n ;i++){
                f *= i
            }
            console.log("EL FACTORIAL DE UN NUMERO ES :"+f)
        }
        a(5)
*/
//ARREGLOS
/*
    let a = [1,2,3,4,5];
    suma = 0

    for(var i = 0 ; i <a.length ; i++){
        suma += a[i]
    }

    console.log("LA SUMA ES :"+ suma)
*/
/*
const arreglo = [5, 2, 8, 3, 1];
let mayor = arreglo[0];
let menor = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
        mayor = arreglo[i];
    }
    if (arreglo[i] < menor) {
        menor = arreglo[i];
    }
}

console.log("El número mayor es: " + mayor);
console.log("El número menor es: " + menor);
*/

/*const a = [1, 2, 3];
let contador = 0;

for (let i = 0; i < a.length; i++) {
    contador++;
}

console.log("El arreglo tiene " + contador + " elementos.");
*/

    /*Promedio de Elementos: Dado un arreglo de números, calcula el promedio de todos los elementos. */

    /*const a = [2,2,2]
    promedio =  0
    for(let i = 0 ; i <a.length ; i++){
        promedio += a[i]
    }
    promedio /= a.length
    console.log(promedio)*/

/*Contar Elementos Pares e Impares: Dado un arreglo de números, cuenta cuántos números son pares y cuántos son impares. */

/*var a = [1, 2, 3, 4]
var par = 0
var impar = 0

for(let i = 0 ; i<a.length;i++){
    if(a[i] % 2 === 0){
        par++;
    }else{
        impar++;
    }  
}
console.log("Cantidad de números pares: " + par);
console.log("Cantidad de números impares: " + impar);

*/


/*var a = [1, 2, 3, 4, 5];

for (let i = a.length - 1; i >= 0; i--) {
    console.log(a[i]);
}
*/

//METODOS ARRAYS

/*    var frutas = []
//EL ELEMENTO UNSHIFT SIRVE PARA AÑADIR NOMBRES.ECT
    frutas.unshift("Manzana", "Banana","Naranja")
    console.log(frutas)
    frutas [0] = "Mango"
//PUSH PARA AGREGAR AL ULTIMO 
    frutas.push("Uva")
    console.log(frutas)

//POP PARA ELIMINAR EL PRIMER ELEMENTO
    frutas.pop([0])
//SHIFT PARA ELIMIANR EL ULTIMO ELEMENTO 
    frutas.shift([3])
    console.log(frutas)

    frutas.pop([1])
    console.log(frutas)

// METODO PARA MODIFCAR EL CONTENIDO SPLICE , FILL , REVERSE

let numeros = [1,2,3,4,5,6,7,8,9,10]
//SE COMIENZA DESDE LA POSICION 4 , SE ELMINA LOS 3 SIGUIENTES Y SE AÑADE LOS NUMEROS 20 ,21 ,22
    numeros.splice(4,3,20,21,22)
    console.log(numeros)


    let frutas1=["manzana","platano","naranja","mango"]
    frutas1.splice(2,0,"kiwi","sandia")
    console.log(frutas1)

    let colores = ["rojo" , "azul" , "verde","amarillo"]
    colores.splice(1,2)
    console.log(colores)

//METODO FILL
    let numeros1 = [1,2,3,4,5,6,7,8,9,10]
    numeros1.fill(0)
    console.log(numeros1)


    let letras = ["a","b","c","d","e","f"]
    letras.fill("x",2,4)
    console.log(letras)

    let numeros2 = [5,10,15,20,25,30]
    numeros2.fill(100,0,3)
    console.log(numeros2)

//metodo reverse

    let numeros3 =[1,2,3,4,5]
    numeros3.reverse()
    console.log(numeros3)

//EJERCICIO CONBINADO

    let miArray =[10,20,30,40,50,60,70,80,90,100]

    miArray.splice(5,5,55,65,75)
    console.log(miArray)
    miArray.fill(25,0,3)
    console.log(miArray)
    miArray.reverse()
    console.log(miArray)
*/

 