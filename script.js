alert ("hola!!")
function sumar(){
    var num1;
    num1= document.calc.txtnumero1.value;

    var num2;
    num2= document.calc.txtnumero2.value;

    var opc;
    opc = eval (num1) + eval (num2);
    document.calc.resultado.value = opc;
}
function restar(){
    var num3;
    num3= document.calc.txtnumero3.value;

    var num4;
    num4= document.calc.txtnumero4.value;

    var opc;
    opc = eval (num3) - eval (num4);
    document.calc.resultadoresta.value = opc;
}
function multiplicar(){
    var num5;
    num5= document.calc.txtnumero5.value;

    var num6;
    num6= document.calc.txtnumero6.value;

    var opc;
    opc = eval (num5) * eval (num6);
    document.calc.resultadomulti.value = opc;
}
function dividir(){
    var num7;
    num7= document.calc.txtnumero7.value;

    var num8;
    num8= document.calc.txtnumero8.value;

    var opc;
    opc = eval (num7) / eval (num8);
    document.calc.resultadodiv.value = opc;
}