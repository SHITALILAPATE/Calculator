let resultScreen = document.getElementById('result');

function appendChar(char) {
    resultScreen.value += char;
}

function clearScreen() {
    resultScreen.value = '';
}

function deleteChar() {
    resultScreen.value = resultScreen.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultScreen.value = eval(resultScreen.value);
    } catch (error) {
        resultScreen.value = 'Error';
    }
}
