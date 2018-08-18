$(document).foundation();

var estudiantes=[
  {
    "codigo":"001",
    "nombre":"Andrea Gutierrez",
    "nota":4.5
  },{
    "codigo":"002",
    "nombre":"Camilo Pertuz",
    "nota":3.4
  },{
    "codigo":"003",
    "nombre":"Laura Ortega",
    "nota":5
  },{
    "codigo":"004",
    "nombre":"Gladys Niño",
    "nota":5
  },{
    "codigo":"005",
    "nombre":"Kelly Angarita",
    "nota":4
  },{
    "codigo":"006",
    "nombre":"Alma Daza",
    "nota":4.5
  },{
    "codigo":"007",
    "nombre":"Lissete Ulloque",
    "nota":3
  },{
    "codigo":"008",
    "nombre":"Estephanie Bermeo",
    "nota":3.5
  },{
    "codigo":"009",
    "nombre":"Leonardo Esparragosa",
    "nota":4.5
  },{
    "codigo":"010",
    "nombre":"Jesus Palacio",
    "nota":5
  }
];

//Mostrar todos los objetos de JSON y sus propiedades.
function mostrarObjetos(json){
   var out="----------------------------Estudiantes----------------------------<br>";

   for (var i = 0; i < json.length; i++) {
     out+="Nombre: "+json[i].nombre+" - "+"Codigo: "+json[i].codigo+ " - " +"Nota: "+json[i].nota+" <br> ";
   }
   document.getElementById("infoEstudiantes").innerHTML=out;
};

//Mostrar cual es el promedio en notas.

function notaPromedio2(json){
var outPrueba="--------------Promedio Notas-------------- <br>";
var notasPrueba=0;

for (var i = 0; i < json.length; i++) {
var notasPrueba=json[i].nota+notasPrueba;
}
var promedio=notasPrueba/json.length;
var resultado=promedio;
outPrueba+= "Promedio de notas: " + resultado+"";
document.getElementById("PNPrueba").innerHTML=outPrueba;
};

//mostrar cual es la nota mayor.

function notaMayor(json) {
            var out = "-----------Nota Mayor-----------<br>";
            var notaMayor = json[0].nota;
            var pos = 0;
            var aux = "";
            for (i = 0; i < json.length; i++) {

                if (json[i].nota >= 5) {
                    notaMayor = json[i].nota;
                    pos = i;
                    aux=aux+json[pos].nombre+"<br>";
                }
            }
            document.getElementById("notaMayorP").innerHTML =out+= "Las personas con nota mayor son: "+ "<br>" + aux+"<br>";
};

//mostrar cuales son los estudiantes con la nota menor.
function notaMenor(json) {
            var out = "-----------Nota Menor-----------<br>";
            var notaMenor = json[0].nota;
            var pos = 0;
            var aux = "";
            for (i = 0; i < json.length; i++) {

                if (json[i].nota <= 4 ) {
                    notaMenor = json[i].nota;
                    pos = i;
                    aux=aux+json[pos].nombre+"<br>";
                }
            }
            document.getElementById("notaMenorP").innerHTML = out+="Las personas con nota menor son: "+ "<br>" + aux+"<br>";
};
