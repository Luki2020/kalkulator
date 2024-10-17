function appendToDisplay(value) {  
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Błąd';
    }
}

function calculateSin() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sin(value * Math.PI / 180); // Konwersja stopni na radiany
    } else {
        display.value = 'Błąd';
    }
}

function calculateTan() {
    const display = document.getElementById("display");
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.tan(value * Math.PI / 180); // Konwersja stopni na radiany
    } else {
        display.value = 'Błąd';
    }
}
