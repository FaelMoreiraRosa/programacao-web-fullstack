function pesquisarCep(valor) {
  const cep = valor.replace(/\D/g, "");

  if (cep !== "") {
    const validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!("erro" in data)) {
            document.getElementById("rua").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
            // Nova linha para preencher o código IBGE
            document.getElementById("ibge").value = data.ibge;
          } else {
            alert("CEP não encontrado.");
          }
        }).ca;
      tch((error) => console.error("Erro ao buscar o CEP:", error));
    } else {
      alert("Formato de CEP inválido.");
    }
  }
}
