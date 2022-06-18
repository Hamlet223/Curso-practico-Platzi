//Hallar la media aritmetica



//let notas= prompt("Escribe las notas de tus alumnos para hallar la media ponderada")

//let arr= notas.split(',');

//arr = arr.map(e=>JSON.parse(e));


function mediaAritmetica(arr){

    const suma= arr.reduce((a,b) =>  a + b)/arr.length;
    
    return console.log("Tu media aritmerica es: " + suma);
}

//Media Geometrica

function mediaGeometrica(lista){

let mGeometrica = lista.reduce((a, b) => a * b);

const resultado = mGeometrica ** (1/lista.length);
return resultado;
}
