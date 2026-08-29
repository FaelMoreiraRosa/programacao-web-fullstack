const params = new URLSearchParams(window.location.search);
const nome = params.get('nome');
const media = parseFloat(params.get('media'));
let situacao = "";

if (media >= 6) {
  situacao = "APROVADO";
} else if (media >= 2) {
  situacao = "EXAME";
} else {
  situacao = "REPROVADO";
}

document.getElementById('status').textContent = situacao;
document.getElementById('info').textContent = `Aluno: ${nome} | Média: ${media.toFixed(2)}`;