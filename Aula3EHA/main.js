document.addEventListener("DOMContentLoaded", carregarContatos);

const formulario = document.getElementById("form-group");
const botaoAdicionar = document.getElementById("addContato");

let editarIndex = -1;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Evento submit detectado"); // Verifica se o evento está sendo chamado

  if (editarIndex === -1) {
    adicionarContato();
  } else {
    editarContato();
  }
});

function adicionarContato() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

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
        <button type="button" class="editar" onclick="editarForm(${index})">Editar</button>
        <button type="button" class="delete" onclick="removerContato(${index})">X</button>
    `;

    lista.appendChild(li);
  });
}

function editarForm(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  const contato = contatos[index];

  document.getElementById("nome").value = contato.nome;
  document.getElementById("telefone").value = contato.telefone;
  document.getElementById("email").value = contato.email;

  editarIndex = index;
  botaoAdicionar.textContent = "Atualizar";
}

function editarContato() {
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (nome === "" || telefone === "" || email === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }

  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos[editarIndex] = { nome, telefone, email };
  localStorage.setItem("contatos", JSON.stringify(contatos));

  editarIndex = -1;
  carregarContatos();

  limparCampos();
  botaoAdicionar.textContent = "Adicionar";
}

function removerContato(index) {
  let contatos = JSON.parse(localStorage.getItem("contatos")) || [];
  contatos.splice(index, 1);
  localStorage.setItem("contatos", JSON.stringify(contatos));
  carregarContatos();
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}