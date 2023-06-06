/*
* File: app.js
* Author: Gerecs Diána
* Copyright: 2023, Gerecs Diána
* Group: Szoft I-2-E
* Date: 2023-06-06
* Github: https://github.com/Gerecs Dia/
* Licenc: GNU GPL
*/
 

// //const doc = {
//     lenghtInput: document.querySelector('#lenght'),
//     indexInput: document.querySelector('#index'),
//     calcButton: document.querySelector('#calcButton')
// };

// const state = {
//     index: 0
// };


// window.addEventListener('load', () => {
//     init();
// });

// function init() {
//     if(doc.calcButton) {
//     doc.calcButton.addEventListener('click', () => {
//         console.log('működik')
//         startCalc();
//     });
//     }
//     //checkInput(a);

// }

// function startCalc() {
//     let lenght = doc.lenghtInput.value;
//         state.index = calcBodyIndex(weight, height);
//     doc.indexInput.value = state.index;

// }

// function calcdiagonal() {
//     return weight / Math.pow(height, 2);
// }

// function checkInput(input) {
//     let inputStr = String(input);
//     let inputNum = Number(input);
//     if(inputStr.match(/^[0-9.]+$/)) {
//         if(inputNum>0) {
//             return true;
//         }else{
//             return false;
//         }
//     }else {
//     return false;
//     }
// }

const doc = {
    lengthInput: document.querySelector('#length'),
    diagonalOutput: document.querySelector('#diagonalOutput'),
    bodyDiagonalOutput: document.querySelector('#bodyDiagonalOutput'),
    calcButton: document.querySelector('#calcButton')
  };
  
  const state = {
    length: 0
  };
  
  window.addEventListener('load', () => {
    init();
  });
  
  function init() {
    if (doc.calcButton) {
      doc.calcButton.addEventListener('click', () => {
        startCalc();
      });
    }
  }
  
  function startCalc() {
    const length = parseFloat(doc.lengthInput.value);
    
    if (checkInput(length)) {
      state.length = length;
      const diagonal = calcDiagonal(state.length);
      const bodyDiagonal = calcBodyDiagonal(state.length);
      
      doc.diagonalOutput.textContent = diagonal.toFixed(2);
      doc.bodyDiagonalOutput.textContent = bodyDiagonal.toFixed(2);
    } else {
      // Handle invalid input
      alert('Invalid input. Please enter a positive number.');
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
