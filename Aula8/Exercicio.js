const nome = "Renaro";
const sobrenome = "Matos";
const idade = 26;
const peso = 115;
const altura = 1.78;
let imc = peso / (altura * altura); //peso / (altura * altura)
const anoNascimento = 2022 - idade;

//impressão utilizando template string
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura
e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);