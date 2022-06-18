    const lista1=[

    ];


    function calcularModa(lista1){

    const lista1Count={};

    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){            //Me trae el elemento al objeto y cada vez que se repita le suma uno a la cuenta
                lista1Count[elemento] += 1;
            }else{
            lista1Count[elemento] = 1;  //Si el elemento no se repite le asigna un valor de 1.
            }
        }
    );

    const lista1Array= Object.entries(lista1Count).sort(
        function(elementoA, elementoB){ 
            return elementoA[1] - elementoB[1];
        }
    )  //COnvierte el objeto en array

    const moda= lista1Array[lista1Array.length - 1]

    return moda;
}