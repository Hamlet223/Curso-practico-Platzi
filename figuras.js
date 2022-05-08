// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

//Funcion de la algura de un triangulo isosceles
function alturaTrianguloI(lado1, lado2, base){
  if(lado1 != lado2 || lado1 == base){
    alert("Este no es un triangulo isosceles")
  }
  else{
    const cateto= (base/2) ** 2;
    const hipotenusa= lado1 **2;
    const altura= Math.sqrt((hipotenusa - cateto));
      return alert("La altura de tu triangulo Isosceles es: " + altura)
   } 
}


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const l = document.getElementById("InputCuadrado");
  const value = l.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//PerimetroTriangulo
function calcularPerimetroTriangulo(){
 const l1= document.getElementById("T1");
 const l2= document.getElementById("T2");
 const base= document.getElementById("Base");

 const value1= parseInt(l1.value);
 const value2= parseInt(l2.value);
 const value3= parseInt(base.value);

  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}

//Area Triangulo
function calcularAreaTriangulo(){
  const altura= document.getElementById("Altura");
  const base= document.getElementById("Base");
  const value3= parseInt(base.value);
  const value4= parseInt(altura.value);

  const area= areaTriangulo(value3, value4);
  alert("El area del triangulo es: " + area);
}

//Diametro Criculo
function calcularDiametroCirculo(){
  const radio= document.getElementById("Radio");
  const value5= parseInt(radio.value);

  const diametro= diametroCirculo(value5);
  alert("El diametro del circulo es: " + diametro)
}

//Perimetro Circulo
function calcularPerimetroCirculo(){
  const radio= document.getElementById("Radio");
  const value5= parseInt(radio.value);

  const perimetro= perimetroCirculo(value5);
  alert("El perimetro de tu circulo es: " + perimetro);
}

//Area Circulo
function calcularAreaCirculo(){
  const radio= document.getElementById("Radio");
  const value5= parseInt(radio.value);

  const area= areaCirculo(value5);
  alert("El perimetro de tu circulo es: " + area);
}

//Triangulo Isosceles y hallar altura 
function calcularHTriangulo(){
  const la1= document.getElementById("T1")
  const la2= document.getElementById("T2")
  const base= document.getElementById("Base")

  const val1= parseInt(la1.value);
  const val2= parseInt(la2.value);
  const val3= parseInt(base.value);

  const alturaI= alturaTrianguloI(val1,val2,val3);
}