function bmiCalculate() {
    let kilos = parseFloat(document.querySelector('[kilos]').value)

    let centi = parseFloat(document.querySelector('[centi]').value)
    
    if (!isNaN(kilos) && !isNaN(centi) && kilos > 0 && centi > 0) {
        let bmi = kilos / Math.pow((centi / 100),  2)
        document.querySelector('[output]').value = bmi.toFixed(2)
    }
}

document.querySelector('[result]').addEventListener(
    'click',
    bmiCalculate
)

//.toFixed(2) fixes it to 2 decimal places