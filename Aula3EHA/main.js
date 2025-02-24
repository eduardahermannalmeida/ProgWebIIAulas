document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("form-group");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //impedindo o refresh da página
  adicionarContato();
});

function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  const contato = { nome, telefone, email };

  salvarContato(contato);
  limparCampos();
  carregarContatos();
}

function salvarContato(contato) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.push(contato);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function carregarContatos() {
  const lista = document.getElementById("listaContatos");
  lista.innerHTML = "";

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <p><strong>Nome:</strong> ${contato.nome}</p>
        <p><strong>Telefone:</strong> ${contato.telefone}</p>
        <p><strong>E-mail:</strong> ${contato.email}</p>
        <button type="button" class="delete" onclick="removerContato(${index})"> ㄨ </button>
        <button type="button" class="edit" onclick="editarContato(${index})">✎</button>
    `;

    lista.appendChild(li);
  });
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function editarContato(index){

    //li.innerHTML = `
    //<h4>Edição de Contato</h4>
    //<p><strong>Nome:</strong> ${contato.nome}</p>
    //<p><strong>Telefone:</strong> ${contato.telefone}</p>
    //<p><strong>E-mail:</strong> ${contato.email}</p>
    //<button type="button" class="editar" onclick="editarContato(${index})">Salvar Alterações</button>
//`;
}
