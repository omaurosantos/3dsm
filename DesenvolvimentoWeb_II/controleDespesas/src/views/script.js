const API_URL = "http://localhost:3000/api/expenses";

// Seletores
const form = document.getElementById("form");
const expensesList = document.getElementById("expenses");
const totalDisplay = document.getElementById("total");

// Função para buscar e exibir todas as despesas
async function fetchExpenses() {
  const response = await fetch(API_URL);
  const expenses = await response.json();

  // Renderizar despesas na interface
  expensesList.innerHTML = "";
  expenses.forEach(expense => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${expense.description} - R$ ${expense.amount.toFixed(2)} (${new Date(expense.date).toLocaleDateString()})</span>
      <button class="edit" onclick="editExpense('${expense._id}')">Alterar</button>
      <button class="delete" onclick="deleteExpense('${expense._id}')">Excluir</button>
    `;
    expensesList.appendChild(li);
  })
