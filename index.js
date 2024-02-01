let nome = "luminex"
let QuantidadeDeExperiencia = 1001

let nivelHeroi;


if (QuantidadeDeExperiencia < 1000){
    nivelHeroi = "Ferro";
} else if (QuantidadeDeExperiencia >= 1001 && QuantidadeDeExperiencia <= 2000){
     nivelHeroi = "Bronze";
}else if (QuantidadeDeExperiencia >= 2001 && QuantidadeDeExperiencia <= 5000){
     nivelHeroi = "Prata";
}else if (QuantidadeDeExperiencia >= 5001 && QuantidadeDeExperiencia <= 7000){
     nivelHeroi = "Ouro";
}else if (QuantidadeDeExperiencia >= 7001 && QuantidadeDeExperiencia <= 8000){
     nivelHeroi = "Platina";
}else if (QuantidadeDeExperiencia >=8001 && QuantidadeDeExperiencia <= 9000){
     nivelHeroi = "Ascendente";
}else if (QuantidadeDeExperiencia >= 9001 && QuantidadeDeExperiencia <= 10000){
    nivelHeroi = "Imortal";
}else {
     nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível de ${nivelHeroi}!`)