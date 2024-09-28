const form = document.getElementById('form-cliente');
const listaClientes = document.getElementById('clientes-lista');

// Carregar clientes
async function carregarClientes() {
    const resposta = await fetch('/clientes');
    const clientes = await resposta.json();
    listaClientes.innerHTML = '';
    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.textContent = `${cliente.nome} - ${cliente.email}`;
        listaClientes.appendChield(li);
    }); 
}

// Adicionar clientes
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const resposta = await fetch('/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({nome, email})
    });

    if (resposta.ok){
        carregarClientes();
    }
});

carregarClientes ();