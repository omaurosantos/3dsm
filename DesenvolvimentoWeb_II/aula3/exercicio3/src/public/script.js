document.getElementById('notaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const prova1 = parseFloat(document.getElementById('prova1').value);
    const prova2 = parseFloat(document.getElementById('prova2').value);
    const prova3 = parseFloat(document.getElementById('prova3').value);
    const atividades = parseFloat(document.getElementById('atividades').value);
    const api = parseFloat(document.getElementById('api').value);
  
    const notaFinal = (
      prova1 * 0.1 +
      prova2 * 0.1 +
      prova3 * 0.3 +
      atividades * 0.2 +
      api * 0.3
    ).toFixed(2);
  
    document.getElementById('resultado').innerText = `A nota final do aluno é: ${notaFinal}`;
  });
  