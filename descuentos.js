const cupones = [
    {
        name: "Basico",
        discount: 10,
    },
    {
        name: "Experto",
        discount: 20,
    },
    {
        name: "Premium",
        discount: 25,
    },
];

function desc(precioP,descuento){
  const resta= (100 - descuento)/100;
  const descu= resta * precioP;

  return descu;
}

function priceDiscount(){
    const inputPrice= document.getElementById("InputPrecio");
    const priceValue= inputPrice.value;
    const inputCoupon= document.getElementById("InputCupon");
    const couponValue= inputCoupon.value;

    const isCouponValueValid = function (cupon) {
        return cupon.name === couponValue;
    };
    
    const userCupon = cupones.find(isCouponValueValid);
    
    if (!userCupon) {
        alert("El cupón " + couponValue + "no es válido");
    } else {
        const descuento = userCupon.discount;
        const precioConDescuento = desc(priceValue, descuento);
    
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}