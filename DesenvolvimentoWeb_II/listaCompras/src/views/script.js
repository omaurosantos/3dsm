const itemsList = document.getElementById('itemsList');
const addItemForm = document.getElementById('addItemForm');
const itemNameInput = document.getElementById('itemName');
const itemValueInput = document.getElementById('itemValue');

const API_URL = 'http://localhost:3000/api/items';

// Função para carregar os itens e exibi-los na lista
async function loadItems() {
    const response = await fetch(API_URL);
    const items = await response.json();
    itemsList.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.value.toFixed(2)}
            <div>
                <button class="edit" onclick="editItem(${item.id})">Edit</button>
                <button class="delete" onclick="deleteItem(${item.id})">Delete</button>
            </div>
        `;
        itemsList.appendChild(li);
    });
}

// Função para adicionar um novo item
addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = itemNameInput.value;
    const value = parseFloat(itemValueInput.value);

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, value })
    });

    if (response.ok) {
        itemNameInput.value = '';
        itemValueInput.value = '';
        loadItems();
    }
});

// Função para editar um item
async function editItem(id) {
    const newName = prompt('Enter new name:');
    const newValue = parseFloat(prompt('Enter new value:'));

    if (newName && !isNaN(newValue)) {
        await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newName, value: newValue })
        });
        loadItems();
    }
}

// Função para deletar um item
async function deleteItem(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadItems();
}

// Carrega os itens ao iniciar
loadItems();
