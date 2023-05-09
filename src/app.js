
const doc = {
    weightInput: document.querySelector('#weight'),
    heightInput: document.querySelector('#height'),
    indexInput: document.querySelector('#index'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    index: 0
};


window.addEventListener('load', () => {
    init();
});

function init() {
    doc.calcButton.addEventListener('click', () => {
        startCalc();
    });

}

function startCalc() {
    let weight = doc.weightInput.value;
    let height = doc.heightInput.value;
    state.index = calcBodyIndex(weight, height);
    doc.indexInput.value = state.index;

}

function calcBodyIndex(weight, height) {
    return weight / Math.pow(height, 2);
}