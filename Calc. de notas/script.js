// Criando variáveis para receber os dados
var nomeAluno = prompt("Digite o nome do aluno:");
var notaCiclo1 = parseFloat(prompt("Digite a nota do ciclo 1:"));
var notaCiclo2 = parseFloat(prompt("Digite a nota do ciclo 2:"));
var notaCiclo3 = parseFloat(prompt("Digite a nota do ciclo 3:"));

// Calculando a média das notas
var media = (notaCiclo1 + notaCiclo2 + notaCiclo3) / 3;

// Verificando se o aluno foi aprovado ou não
if (media >= 6) {
    alert(nomeAluno + " foi aprovado com média " + media.toFixed(2) + "!");
} else {
    alert(nomeAluno + " foi reprovado com média " + media.toFixed(2) + ".");
}