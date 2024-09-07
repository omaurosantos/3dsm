import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [prova1, setProva1] = useState<number>(0);
  const [prova2, setProva2] = useState<number>(0);
  const [prova3, setProva3] = useState<number>(0);
  const [atividades, setAtividades] = useState<number>(0);
  const [api, setApi] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');

  const limitarNota = (valor: number): number => Math.min(Math.max(valor, 0), 10);

  const calcularNotaFinal = (e: React.FormEvent) => {
    e.preventDefault();

    const notaFinal =
      (prova1 * 0.1) +
      (prova2 * 0.1) +
      (prova3 * 0.3) +
      (atividades * 0.2) +
      (api * 0.3);

    setResultado(`Nota Final: ${notaFinal.toFixed(2)}`);
  };

  return (
    <div id="calculator" className="container">
      <h1>Calculadora de Notas</h1>
      <form onSubmit={calcularNotaFinal}>
        <div className="form-group">
          <label htmlFor="prova1">Nota da Prova 1 (10%): </label>
          <input
            type="number"
            id="prova1"
            min="0"
            max="10"
            step="0.1"
            value={prova1}
            onChange={(e) => setProva1(limitarNota(parseFloat(e.target.value)))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prova2">Nota da Prova 2 (10%): </label>
          <input
            type="number"
            id="prova2"
            min="0"
            max="10"
            step="0.1"
            value={prova2}
            onChange={(e) => setProva2(limitarNota(parseFloat(e.target.value)))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prova3">Nota da Prova 3 (30%): </label>
          <input
            type="number"
            id="prova3"
            min="0"
            max="10"
            step="0.1"
            value={prova3}
            onChange={(e) => setProva3(limitarNota(parseFloat(e.target.value)))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="atividades">Nota das Atividades (20%): </label>
          <input
            type="number"
            id="atividades"
            min="0"
            max="10"
            step="0.1"
            value={atividades}
            onChange={(e) => setAtividades(limitarNota(parseFloat(e.target.value)))}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="api">Nota da API (30%): </label>
          <input
            type="number"
            id="api"
            min="0"
            max="10"
            step="0.1"
            value={api}
            onChange={(e) => setApi(limitarNota(parseFloat(e.target.value)))}
            required
          />
        </div>
        <button type="submit">Calcular Nota Final</button>
      </form>
      <p id="resultado" className="resultado">{resultado}</p>
    </div>
  );
};

export default Calculator;
