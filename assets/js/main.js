
// Chiedi i dati all'utente


const form = document.getElementById("form-submit")
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome")
    const cognome = document.getElementById("cognome")
    const colore = document.getElementById("colore")
    

   alert("La tua Password è: " + nome.value + cognome.value + colore.value + "23")
  });















