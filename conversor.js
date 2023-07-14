function inputConverter(num) {
    let number = resultConv.value;
    resultConv.value = number + num;
}
let resultConv = document.getElementById("resultConversor");


//Fah to Ct
function FahtoCt(value) {
    r = (((value - 32) / 9) * 5).toFixed(2);
    return r;
}
//Ct to Fah
function CttoFah(value) {
    r = ((value * 9 / 5) + 32).toFixed(1)
    return r;
}
//Bar to Pas
function BartoPas(value) {
    r = (100000 * value).toFixed(1);
    return r;
}
//Pas to bar
function Pastobar(value) {
    r = (value / 100000).toFixed(7);
    return r;
}
//Kg to Gr
function KgtoGr(value) {
    r = (1000 * value).toFixed(2);
    return r;
}
//Gr to Kg
function GrtoKg(value) {
    r = (value / 1000).toFixed(4);
    return r;
}
