function calcularMediaAritmetica(lista){
        
    const acumulador= (acumulado, numero) => acumulado+numero;
    const sumaLista= lista.reduce(acumulador)
    
    
    const promedioLista= sumaLista / lista.length
    
        return promedioLista;
    }
    
    

const list= [];

 
function calcularMediana(list){
    const sortedList= list.sort(function(a,b){
        return a - b;
    })
    
      
    const mitadListado= parseInt(sortedList.length/ 2);

    console.log(sortedList)

    function esPar(numerito){
        if(numerito % 2 === 0) {
            return true;
        }else{
            return false;
        }
    }
    

    if(esPar(sortedList.length)){
        const elemento1= sortedList[mitadListado - 1];
        const elemento2= sortedList[mitadListado];

        const promedio1y2= calcularMediaAritmetica([elemento1,elemento2]);

        mediana= promedio1y2;
        
    }else{
        mediana= sortedList[mitadListado]; 
    }
    return mediana;
}


