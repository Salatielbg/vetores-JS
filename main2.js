
/* Variaveis independentes que nao tem relaçao entre si*/
let nome = "ivan";
let idade= 25;
let peso = 84.5;

let pessoa = {
    nome: "ivan",
    idade: 25,
    peso: 84.5
};
console.log(pessoa.nome)
//objeto calculadora
let calculadora={
    numero1: null,
    numero2: null,
    soma: function() {return this.numero1 + this.numero2 }
};
calculadora.numero1 = 10;
calculadora.numero2 = 20;

console.log(calculadora.soma())

//Faça um vetor com 5 objetos pessoa e mostre no console
/*
let pessoa2 = {
    nome: "Salatiel\n",
    nascimento: "23/04/2004\n",
    idade: "19\n",
    escolaridade: "Ensino superior-Cursando\n",
    curso: "Sistema de Informaçao\n",
};
console.log(pessoa2.nome,pessoa2.nascimento,pessoa2.idade,pessoa2.escolaridade,pessoa2.curso)*/
let pessoas=[]
let p1 = {
    nome: "Salatiel",
    idade: 20,
    peso: 75
};
pessoas.push(p1);
let p2 = {
    nome: "Henry",
    idade: 34,
    peso: 94
};
pessoas.push(p2);
let p3 = {
    nome: "Gabriel",
    idade: 14,
    peso: 69};
pessoas.push(p3);
let p4 = {
    nome: "José",
    idade: 67,
    peso: 102
};
pessoas.push(p4);
let p5 = {
    nome: "Bruno",
    idade: 23,
    peso: 80
};
pessoas.push(p5);

console.log(pessoas)