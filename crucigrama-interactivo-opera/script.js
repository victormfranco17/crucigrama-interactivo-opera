// Definir las palabras del crucigrama
const words = [
    { word: 'HOLA', clue: 'Saludo en español', direction: 'horizontal', startRow: 1, startCol: 1 },
    { word: 'MUNDO', clue: 'Planeta habitado', direction: 'vertical', startRow: 1, startCol: 2 }
  ];
  
  // Crear el crucigrama
  const crossword = document.getElementById('crossword');
  
  words.forEach(word => {
    for (let i = 0; i < word.word.length; i++) {
      const cell = document.createElement('input');
      cell.type = 'text';
      cell.maxLength = 1;
      cell.className = 'crossword-cell';
      cell.dataset.row = word.direction === 'horizontal' ? word.startRow : word.startRow + i;
      cell.dataset.col = word.direction === 'horizontal' ? word.startCol + i : word.startCol;
      crossword.appendChild(cell);
    }
  });
  
  // Restablecer el crucigrama con palabras nuevas
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', () => {
    crossword.innerHTML = '';
    words.forEach(word => {
      for (let i = 0; i < word.word.length; i++) {
        const cell = document.createElement('input');
        cell.type = 'text';
        cell.maxLength = 1;
        cell.className = 'crossword-cell';
        cell.dataset.row = word.direction === 'horizontal' ? word.startRow : word.startRow + i;
        cell.dataset.col = word.direction === 'horizontal' ? word.startCol + i : word.startCol;
        crossword.appendChild(cell);
      }
    });
  });
  