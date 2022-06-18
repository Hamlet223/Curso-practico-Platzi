
// Monto a prestar

function prestamoDinero(prestamo,cuotas){
var neto= prestamo / cuotas;
var seguimiento= prestamo
var acumulador= 0;
let arr= [];

for(i = 0; i < cuotas; i++){
    if(cuotas < 12){
        let interes= seguimiento * (0.05)
        let valorPagar= Math.round(neto + interes);
        seguimiento = prestamo - valorPagar;
        acumulador +=  valorPagar;
        arr.push([i+1] + valorPagar)
        let moneda= valorPagar.toLocaleString("es-CO",{style:"currency",currency:"COP"});
        let mAcumulador= acumulador.toLocaleString("es-CO",{style:"currency",currency:"COP"});

       alert("En el mes " + [i+1] + " pagaras: " + moneda + " .Y en total has pagado : " + mAcumulador )              

        }
    else{
        let interes= seguimiento * (0.02)
        let valorPagar= Math.round(neto + interes);
        seguimiento= prestamo - valorPagar; 
        acumulador +=  valorPagar;
        let moneda= valorPagar.toLocaleString("es-CO",{style:"currency",currency:"COP"});
        let mAcumulador= acumulador.toLocaleString("es-CO",{style:"currency",currency:"COP"});
      
       alert("En el mes " + [i+1] + " pagaras: " + moneda + " .Y en total has pagado : " + mAcumulador )
        }
    }
}


function calcularPrestamo(){
    const cash= document.getElementById("dinero");
    const prestamo= parseInt(cash.value);
    const fee= document.getElementById("cuota");
    const cuotas= parseInt(fee.value);

    const prestamos= prestamoDinero(prestamo,cuotas)      
}