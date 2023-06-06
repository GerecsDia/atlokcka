/*
* File: app.js
* Author: Gerecs Diána
* Copyright: 2023, Gerecs Diána
* Group: Szoft I-2-E
* Date: 2023-06-06
* Github: https://github.com/Gerecs Dia/
* Licenc: GNU GPL
*/
 

const doc = {
    lengthInput: document.querySelector('#length'),
    diagonalOutput: document.querySelector('#diagonalOutput'),
    bodyDiagonalOutput: document.querySelector('#bodyDiagonalOutput'),
    calcDiagonalButton: document.querySelector('#calcDiagonalButton'),
    calcBodyDiagonalButton: document.querySelector('#calcBodyDiagonalButton')
  };
  
  const state = {
    length: 0
  };
  
  window.addEventListener('load', () => {
    init();
  });
  
  function init() {
    if (doc.calcDiagonalButton) {
      doc.calcDiagonalButton.addEventListener('click', () => {
        startCalcDiagonal();
      });
    }
  
    if (doc.calcBodyDiagonalButton) {
      doc.calcBodyDiagonalButton.addEventListener('click', () => {
        startCalcBodyDiagonal();
      });
    }
  }
  
  function startCalcDiagonal() {
    const length = parseFloat(doc.lengthInput.value);
  
    if (checkInput(length)) {
      state.length = length;
      const diagonal = calcDiagonal(state.length);
      doc.diagonalOutput.value = diagonal.toFixed(2);
    } else {
      // Handle invalid input
      alert('Csak számot, pls');
    }
  }
  
  function startCalcBodyDiagonal() {
    const length = parseFloat(doc.lengthInput.value);
  
    if (checkInput(length)) {
      state.length = length;
      const bodyDiagonal = calcBodyDiagonal(state.length);
      doc.bodyDiagonalOutput.value = bodyDiagonal.toFixed(2);
    } else {
            alert('Mondom számot!!!');
    }
  }
  
  function calcDiagonal(length) {
    return Math.sqrt(2) * length;
  }
  
  function calcBodyDiagonal(length) {
    return Math.sqrt(3) * length;
  }
  
  function checkInput(input) {
    const inputNum = Number(input);
    return !isNaN(inputNum) && inputNum > 0;
  }