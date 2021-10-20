
const name = prompt('Inserisci qui il tuo nome')

const lastName = prompt('Inserisci qui il tuo cognome')

const color = prompt('Qual è il tuo colore preferito?')

document.getElementById('passgen').innerHTML = `La tua password è ${name}${lastName}${color}21`