
//ZADATAK: Program za obavljanje osnovinih artimetickih zadataka

var operand1 = prompt(`Unesite prvi broj`);
var opercija = prompt(`Unesite operaciju: +-/*`);
var operand2 = prompt(`Unesite drugi broj`);

var rezultat = izracunaj(Number(operand1), Number(operand2), opercija);
    document.write(`Rezultat je: `+ rezultat)

    
function izracunaj(param1,param2,op){
    var rez = 0;
    switch(op){
        case `+`:
            rez = param1 + param2
            break;
        case `-`:
            rez = param1 - param2
            break;
        case `*`:
            rez = param1 * param2
            break;
        case `/`:
            rez = param1 / param2
            break;
    
        default:
            alert(`Operacija nije podrazana`)
            break;  
    }
    return rez;
}

