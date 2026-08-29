let nomeAluno = "";
let notas = [];
const inputsNota = document.querySelectorAll('.nota');
const spanMedia = document.getElementById('media');

function calcularMedia() {
  let soma = 0;
  inputsNota.forEach(input => soma += Number(input.value) || 0);
  const media = soma / 4;
  spanMedia.textContent = media.toFixed(2);
  return media;
}

inputsNota.forEach(input => input.addEventListener('input', calcularMedia));

document.getElementById('formAluno').addEventListener('submit', function(e) {
  e.preventDefault();
  nomeAluno = document.getElementById('nome').value;
  notas = Array.from(inputsNota).map(input => Number(input.value));
  const mediaFinal = calcularMedia();
  window.location.href = `resultado.html?nome=${encodeURIComponent(nomeAluno)}&media=${mediaFinal}`;
});