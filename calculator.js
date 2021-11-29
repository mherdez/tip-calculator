

const tipAmountHTML = document.querySelector('#tip-amount')
const totalHTML     = document.querySelector('#total')

const signoMX = '$'
let bill   = 500
let tip    = 15
let people = 5 


let tipAmount = 0
let total     = 0


tipAmount = bill * (tip / 100) / people
total     = bill / people + tipAmount




tipAmountHTML.textContent = signoMX + tipAmount.toFixed(2)
totalHTML.textContent     = signoMX + total.toFixed(2)