function inputConverter(num) {
    let number = resultConv.value;
    resultConv.value = number + num;
}

let resultConv = document.getElementById("resultConversor");

function convert(opc) {
    //let value  = parseInt(resultF.value);
    let value = Number(resultConv.value + "");
    let text = "";
    let r = 0;
    if (value) {
        if (opc == 1) { r = FahtoCt(value); text += value + "°F= " + r + "°C"; }  // Fah to Ct
        else if (opc == 2) { r = CttoFah(value); text += value + "°C = " + r + "°F"; } //Ct to Fah
        else if (opc == 3) { r = BartoPas(value); text += value + "Bar = " + r + "Pa"; }//Bar to Pas
        else if (opc == 4) { r = Pastobar(value); text += value + "Pa = " + r + "Bar"; } //Pas to bar
        else if (opc == 5) { r = KgtoGr(value); text += value + "Kg = " + r + "Gr"; }//Kg to Gr
        else if (opc == 6) { r = GrtoKg(value); text += value + "Gr = " + r + "Kg"; }//Gr to Kg
        else if (opc == 7) { r = MttoCm(value); text += value + "Mt = " + r + "Cm"; }//Mt to Cm
        else if (opc == 8) { r = CmtoMt(value); text += value + "Cm = " + r + "Mt"; } //Cm to Mt
        resultConv.value = text;
    } else {
        alert("Erro! Adicione valores válidos.")
    }
}


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
//Mt to Cm
function MttoCm(value) {
    r = (100 * value).toFixed(1);
    return r;
}
//Cm to Mt
function CmtoMt(value) {
    r = (value / 100).toFixed(4);
    return r;
}

// Reset button
function resetConverter() {
    resultConv.value = "";
}

// Del button
function delConverter() {
    let result2 = resultConv.value;
    resultConv.value = result2.substring(0, result2.length - 1);
}