
/*desafio 2*/
/*crie um vetor com 5 objetos
veiculos com as propriedades
marca, modelo, ano, valor.

Mostre no console somente os
veiculoscom ano maior ou 
igual a 2018.

Dica: use o forEach estudade 
na aula passada*/


let carros = [];
let c1 = {
    marca:"Toyota",
    modelo:"Hilux",
    ano: 2018,
    valor:"R$135.000,00",
}
carros.push(c1);
let c2 = {
    marca:"Fiat",
    modelo:"Uno",
    ano: 2013,
    valor:"R$23.560,00",
}
carros.push(c2);
let c3 = {
    marca:"Nissan",
    modelo:"GT-R R34",
    ano: 1999,
    valor:"R$3.000.000,00",
}
carros.push(c3);
let c4 = {
    marca:"Renault",
    modelo:"Kwid",
    ano: 2018,
    valor:"R$30.000,00",
}
carros.push(c4);
let c5 = {
    marca:"Porsche",
    modelo:"Macan",
    ano: 2018,
    valor:"R$339.000,00",
}
carros.push(c5);
let c6 = {
    marca:"Hyundai",
    modelo:"HB20",
    ano: 2020,
    valor:"R$65.900,00",
}
carros.push(c6);
let c7 = {
    marca:"Mitsubishi",
    modelo:"Outlander",
    ano: 2019,
    valor:"R$188.000,00",
}
carros.push(c7);
let c8 = {
    marca:"Ford",
    modelo:"Mustang",
    ano: 2020,
    valor:"R$429.900,00",
}
carros.push(c8);

carros.forEach(
    elemento => {
        if(elemento.ano >= 2018)
        console.log(elemento);
    }
);


