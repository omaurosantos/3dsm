const form = document.getElementById('form-livro');
const listaLivros = document.getElementById('livros-lista');
let livroSelecionado = null;

async function carregarLivros() {
    const resposta = await fetch('/livros');
    const livros = await resposta.json();
    listaLivros.innerHTML = '';
    livros.forEach(livro => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${livro.titulo} - ${livro.autor} (${livro.anoPublicacao})
            <button onclick="editarLivro('${livro._id}', '${livro.titulo}', '${livro.autor}',
                ${livro.anoPublicacao})">Editar</button>
            <button onclicl="excluirLivro('${livro._id}')"> Excluir</button> 
        `;

        listaLivros.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const anoPublicacao = document.getElementById('anoPublicacao').value;

    if (livroSelecionado) {
        await fetch(`/livros/${livroSelecionado}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, autor, anoPublicacao})
        });

        livroSelecionado = null;
        document.getElementById('atualizar').style.display = 'none';
    } else {
        await fetch('/livros', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ titulo, autor, anoPublicacao})
        }); 
    }

    form.reset();
    carregarLivros();
});

function editarLivro(id, titulo, autor, anoPublicacao) {
    document.getElementById('titulo').value = titulo;
    document.getElementById('autor').value = autor;
    document.getElementById('anoPublicacao').value = anoPublicacao;
    livroSelecionado = id;
    document.getElementById('atualizar').style.display = 'inline';
}

async function excluirLivro(id) {
    await fetch(`/livros/${id}`, {method: 'DELETE'});
    carregarLivros();
}

carregarLivros();

