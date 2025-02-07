const display = document.getElementById('display');

function aggiungiVisualizza(input) {
    display.value += input; // Aggiunge il valore dell'input al display
}

function cancella() {
    display.value = ""; // Cancella il contenuto del display
}

function calcola() {
    try {
        display.value = eval(display.value); // eval() è una funzione che esegue il codice JavaScript passato come stringa

    } catch (error) {
        display.value = "Errore"; // Se si verifica un errore, visualizza "Errore"
    }
}