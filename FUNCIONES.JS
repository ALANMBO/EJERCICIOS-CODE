/*function suma(a,b){
    var resultado = a + b ;
    return resultado;
}

console.log(8+8);*/

/*function resta(a,b,c){
    var resultado = a - b - c ;
    return resultado; 
}
console.log(100 - 50 - 25)*/


/*var producto  = function (a , b ,c=3){
    return a * b * c;
}

var result = producto(3 , 7);
console.log(result);*/

// FUNCIONES RECURSIVIDAD  
/*var factorial = function(n){
    if((n == 0) || (n == 1))
      return 1 ; 
   else
   return (n * factorial (n-1));
}

console.log(factorial(5))*/


/*var nombre = ['ALAN' , 'PEDRO','JUAN', 'JOSÉ'];
var lugares = ['LA_PAZ', 'SANTA CRUZ', 'SUCRE', 'POTOSI'];

console.log(nombre[0]);
console.log(lugares[2]);


nombre [2] ='MAURICIO';
lugares[2] = 'CHUQUISACA';

console.log(nombre[0]);
console.log(lugares[2]);*/

//VARIABLES 

/*1).var nombre = 'Pedro';
let apellido = 'Dominguez';

console.log(nombre + " " + apellido)*/

/*2)var nombre = 'Juan';
let apellido = 'Perez';

console.log(nombre + " " + apellido);


nombre = 'Perez'
apellido = 'Juan'
console.log(nombre + " " + apellido);*/

/*var numero = 100 ;
resultado = numero * 2 ;
console.log(numero = resultado)*/



/*var nombreCompleto = "Programación_facil";
alert(nombreCompleto)*/



//TIPOS DE VARIABLES 
/*var nombre = 'Mauricio' 
var edad =  20

console.log(nombre + " " + edad)*/




/*var precioProducto = 99.99
resultado = precioProducto * 2
console.log(precioProducto = resultado)*/

/*var frase = ['hola' , 'como estas' , 'hasta luego ' ]
console.log(frase.length)*/


  /*var a = 'hola' 
  console.log(typeof(a))*/


//ARRAYS 

/*var elemento = [5,7,9,11,13]
console.log(elemento[3])*/

/*var diasdelaSemana = ['lunes', 'martes', 'miercoles','jueves','viernes','sabado','domingo']
console.log("EL PRIMER DIA ES"+ "  " +diasdelaSemana[0])
console.log("EL ULTIMO DIA ES"+ "  " +diasdelaSemana[6])*/
/*var t1 = 9 ;
for( i=0 ; i<=10 ; i++){
    console.log(t1 + '*' + i + '=' + t1 * i   )
}*/


//CICLO WHILE 

 /*var contador = 0;
while(contador <= 10){
    console.log("El NUMERO IMPRIMIDO ES:" + " " + contador )
    contador++;
}*/

/*var ingreseunNumero =prompt("ingrese un numero")
let contador = 0;

while(contador <= ingreseunNumero){
    console.log("EL NUMERO INGRESADO ES:" + " " + contador)
    contador ++;
}*/


/*var limite = parseInt(prompt("Ingrese el límite para la secuencia de Fibonacci:"));
var a = 0, b = 1;
var resultado = "";

while (a <= limite) {
    resultado += a + " ";
    var temp = a + b;
    a = b;
    b = temp;
}

console.log("Secuencia de Fibonacci hasta " + limite + ":");
console.log(resultado);
*/



/*var numero = parseInt(prompt("INGRESE UN NúMERO "));
let i = 1;

while(i <= 10){
    let resultado = numero * i; 
    console.log(numero  + '*' + i + '=' +  resultado )
    i++
}*/
/*var t1 = 9 ;
for( i=0 ; i<=10 ; i++){
    console.log(t1 + '*' + i + '=' + t1 * i   )
}*/

/*var nombres = ["luis","juan","pedro"];
console.log(nombres[0]);
console.log(nombres[nombres.length-1]);*/

 //TAMBIEN PUEDE SER console.log(nombres[2]);PERO SOLO SE USA SI SON POCOS NOMBRES 



/*var numeros = [10,20,30,40,50];
let invertidos =[];
for(let i = numeros.length ; i >=0 ; i--){
     invertidos.push(numeros[i])
}
console.log(invertidos)*/

/*let palabras = ["hola","mundo","platzi","hero"];
function concatenar(array){
   let resultado = "";
   for(let i = 0 ; i < array.length ; i++){
    resultado += array[i];
    if( i < array.length - 1){
        resultado += "-";
    }
   } 
   return resultado;
}
 console.log(concatenar(palabras));*/



 /*let numeros = [1,2,3,4,5]
 console.log(numeros)*/

/* let colores = ["rojo", "verde","azul"]
console.log(colores)
colores[0] = "amarillo"
console.log(colores)*/



/*let animales =["gato","perro","loro","pez"];
console.log(animales[2]);
console.log(animales.length)*/

//ELIMINA AL ULTIMO ELEMENTO 
/*var nombres = ["juan","pedro", "luis","pepe"]
nombres.pop()
console.log(nombres)*/

/* OPITENE LOS 3 PRIMEROS ELEMNTOS 
var numeros = [10,20,30,40,50];
let nuevos = numeros.slice(0,3)
console.log(nuevos)*/

/*var frutas = ["manzana", "plátano", "naranja", "uva", "pera", "sandía", "piña", "melón", "fresa", "kiwi", "mandarina", "cereza", "mango", "papaya", "limón", "granada", "guayaba", "coco", "ciruela", "frambuesa", "durazno", "higo", "zarzamora", "maracuyá", "tamarindo", "pomelo", "chirimoya", "guanábana", "membrillo", "litchi", "toronja", "caimito", "papaya", "mamey", "caqui", "guaba", "zapote", "noni", "carambola", "níspero", "pitahaya", "nance", "naranjilla", "pitanga", "pepino dulce", "feijoa", "bor"]
console.log(frutas)*/

/*let numeros = [1,2,3,4,5,6,7,8,9,10]
console.log(numeros)*/


/*var paises = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
console.log(paises.length)*/

/*var colores = ["blanco", "negro", "rojo", "verde", "azul", "amarillo", "rosa", "naranja", "morado", "marrón", "gris", "celeste", "violeta", "turquesa", "beige", "salmon", "dorado", "plateado", "teal", "lavanda", "ocre", "aguamarina", "índigo", "borgoña", "carmesí", "cian", "escarlata", "esmeralda", "fucsia", "granate", "café", "malva", "marfil", "melocotón", "mostaza", "oliva", "púrpura", "salmón", "verde oliva"];
console.log(colores.length)*/


/*var pelis = ["El Padrino", "Titanic", "Forrest Gump", "Avatar", "La lista de Schindler", "El señor de los anillos: El retorno del Rey", "El rey león", "El caballero oscuro", "La La Land", "Pulp Fiction", "Gladiador", "Matrix", "Toy Story", "Jurassic Park", "Harry Potter y la piedra filosofal", "El gran Gatsby", "Cadena perpetua", "La vida es bella", "Los increíbles", "Shrek", "El exorcista", "El bueno, el malo y el feo", "El club de la pelea", "El sexto sentido", "La naranja mecánica", "Coco", "Buscando a Nemo", "El silencio de los corderos", "El laberinto del fauno", "Ciudad de Dios", "Intocable", "El curioso caso de Benjamin Button", "El resplandor", "El gran hotel Budapest", "La forma del agua", "Interestelar", "El sexto sentido", "El protegido", "El gran Showman", "El irlandés", "Perdida", "Bajo la misma estrella", "El discurso del rey", "La red social", "Bohemian Rhapsody", "El viaje de Chihiro", "El caballero de la noche", "Avengers: Endgame", "Interestelar", "El pianista", "Moulin Rouge", "El discurso del rey", "El niño con el pijama de rayas", "El renacido", "La La Land", "El club de la lucha", "El aviador", "El francotirador", "Guerra mundial Z", "El lobo de Wall Street", "En busca de la felicidad", "300", "Mad Max: Fury Road", "Bastardos sin gloria", "El último samurái", "El juego de la imitación", "Interstellar", "American Sniper", "Toy Story 3", "Spider-Man: un nuevo universo", "La llamada de lo salvaje", "1917", "El juicio de los 7 de Chicago", "Volver al futuro"]
pelis.sort()
console.log(pelis)*/



/*var edades = [25, 30, 42, 19, 55, 38, 21];
var sumaEdades = 0;
for (var i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}
var edadPromedio = sumaEdades / edades.length;

console.log("La edad promedio es: " + edadPromedio);*/


/*var frutas1 = ["manzana", "plátano", "naranja"];
var frutas2 = ["uva", "pera", "sandía"];

var todasLasFrutas = frutas1.concat(frutas2);

console.log(todasLasFrutas); */



/*var libros = [
    "Cien años de soledad",
    "El principito",
    "1984",
    "Matar un ruiseñor",
    "Don Quijote de la Mancha",
    "Harry Potter y la piedra filosofal",
    "Orgullo y prejuicio",
    "El señor de los anillos",
    "La sombra del viento",
    "El nombre del viento",
    "Crimen y castigo",
    "Las aventuras de Sherlock Holmes",
    "Rayuela",
    "Anna Karenina",
    "El alquimista"
];
libros.shift()//SE ELIMINA EL PRIMERO 
libros.pop()//SE ELIMINA EL ULTIMO
console.log(libros)
*/

/*var numeros = [10, 5, 20, 15, 25];

var mayorValor = Math.max(...numeros);
console.log("El mayor valor es:", mayorValor); 
*/
/*var numeros = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6 ,8, 7];

var numerosSinRepetir = [...new Set(numeros)];


console.log(numerosSinRepetir); */


//FUNCION ESTANDAR 


/*function suma(a,b){
    return a + b
}
console.log(suma(5,5))
*/


/*function producto(a,b){
    return a * b
}
console.log(producto(5,5))*/


/*function suma(a,b){
    if(a > b)
    console.log("es mayor")
    else if(a < b)
    console.log("es menor ")
    else if(a == b)
    console.log("son iguales")
    else 
    console.log(":/")
    return a ,b
}

console.log(suma(101,101))*/


/*var peso = 78; 
var altura = 1.77; 

var imc = peso / (altura * altura);
console.log("Tu IMC es: " + imc);
*/



/*var suma = function(a, b) {
    return a + b;
};

console.log(suma(10, 4)); 
*/

/*var mul = function(b,c){
    return b * c
}
console.log(mul(5, 10))*/

/*let esPar = function (numero) {
    return numero % 2 === 0;

}

console.log(esPar(4)); 
console.log(esPar(5)); */



/*var temperaturaCelsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");

var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit);
*/


/*var a = function (hola){
   return hola;

}
console.log("HOLA,BIENVENIDO USUARIO ....")
*/
/*var a = prompt("INGRESE SU NOMBRE")

let b = function(saludar){
    return saludar
}

console.log("hola"+" "+a)*/

/*var numero1 = prompt("Por favor, ingresa el primer número:");
var numero2 = prompt("Por favor, ingresa el segundo número:");


var mensaje;
if (numero1 > numero2) {
    mensaje = "El primer número es mayor que el segundo.";
} else if (numero2 > numero1) {
    mensaje = "El segundo número es mayor que el primero.";
} else {
    mensaje = "Ambos números son iguales.";
}

alert(mensaje);*/



/*var numero1 = prompt("Por favor, ingresa el primer número:");
var numero2 = prompt("Por favor, ingresa el segundo número:");
var numero3 = prompt("Por favor, ingresa el tercer número:");


let calcularelPromedio = function(num1, num2, num3) {
    var promedio;
    promedio = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
    return promedio;
}


var resultado = calcularelPromedio(numero1, numero2, numero3);

console.log("EL PROMEDIO ES: " + resultado);
*/

/*const saludarUsuario = (nombre) => {
    return `¡Hola, ${nombre}! Bienvenido.`;
};

console.log(saludarUsuario("Juan")); */


/*var c = (a) =>{
    return `El valor es: ${a%2==0}`;
};

console.log(c(6));*/

/*const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`¡Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años!`);
    }
};

persona.saludar();*/


/*const persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
      calle: 'Calle Principal',
      ciudad: 'Ciudad Ejemplo'
    }
  };
  const ciudad = persona.direccion?.ciudad;
  console.log(ciudad);
*/
  

/*const numeros = [10, 20, 30, 40, 50];

numeros.forEach((numero, indice) => {
  console.log(`Número ${indice + 1}: ${numero}`);
});*/


/*function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("División por cero");
        }
        return a / b;
    } catch (error) {
        return error.message;
    }
}

console.log(dividir(10, 0)); 
console.log(dividir(10, 2)); 
*/

var a = 55 , b = 55;
console.log(a+b);

var c = 5 ;
console.log(c) 

