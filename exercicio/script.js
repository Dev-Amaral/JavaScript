var i;
for(i=1; i<=10; i++){
    document.write(i+"<br>")
}

var num = Number(prompt("Insira um numero"));
if(num%2 == 1){
    document.write(num +" é um número é ímpar")
}else{
    document.write(num+" é um número é par")
}

let soma = 0, num;
do{
    num = Number(prompt("Insira um número positivo: "));

    if(num>0){
        soma += num;
    }
} while(num>=0)
    document.write("Soma = ")
    document.write(soma)

var valor;
valor = Number(prompt("Insira o valor em reais: "));
alert("R$"+valor+" equivale a U$ : "+ valor*0.18)

var dia
dia = Number(prompt("Insira o numero do dia da semana: "))
switch (dia){
    case 1:
        document.write("DOMINGO");
    case 2:
        document.write("SEGUNDA - FEIRA");
        break;
    case 3:
        document.write("TERÇA-FEIRA");
        break;
    case 4:
        document.write("QUARTA - FEIRA");
        break;
    case 5:
        document.write("QUINTA- FEIRA");
        break;
    case 6:
        document.write("SEXTA - FEIRA");
        break;
    case 7:
        document.write("SÁBADO");
        break;
    default:
        document.write("NÃO HÁ DIA DA SEMANA COM ESSE NÚMERO");
        break;
}


var mes = prompt("Insira o nome do mês: ")

switch(mes){
    case "janeiro":
        document.write(1)
        break;
    
    case "fevereiro":
        document.write(2)
        break;
    
    case "março":
        document.write("MARÇO")
        break;
    
    case "abril":
        document.write(4)
        break;
    
    case  "maio":
        document.write(5)
        break;
    
    case  "junho":
        document.write(6)
        break;
    
    case  "julho":
        document.write(7)
        break;
    
    case  "agosto":
        document.write(8)
        break;
    
    case  "setembro":
        document.write(9)
        break;
    
    case  "outubro":
        document.write(10)
        break;
    
    case  "novembro":
        document.write(11)
        break;
    
    case  "dezembro":
        document.write(12)
        break;40

    
    default:
        document.write("Verifique se digitou corretamente, digite todas as letras em minúsculo")
        break;

}


var horas, salario

horas = Number(prompt("Quantas horas você trabalhou? "))

if(horas <= 40 ){
    salario = horas * 10
} else if(horas <= 60){
    salario = 400 + (horas-40) * 15
} else{
    salario = 400 + 20*20 + (horas - 60)*25
}
document.write("Seu salário: R$ "+salario)

