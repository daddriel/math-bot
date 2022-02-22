function getValue(ID) {
    return document.getElementById(ID).value
}

function getPerimeterSquare() {
    document.getElementById('results-square').innerHTML='Perimeter: ' + (parseFloat(getValue('side-square')) * 4).toFixed(2) + getValue('square-unit')
}

function getAreaSquare() {
    document.getElementById('results-square').innerHTML='Area: ' + (parseFloat(getValue('side-square'))**2).toFixed(2) + getValue('square-unit') + '<sup>2</sup>'
}
function getPerimeterTriangle() {
    const result = parseFloat(getValue('side-A')) + parseFloat(getValue('side-B')) + parseFloat(getValue('base'))
    document.getElementById('results-triangle').innerHTML='Perimeter: ' + result.toFixed(2) + getValue('triangle-unit')
}

function getAreaTriangle() {
    const A = parseFloat(getValue('side-A'))
    const B = parseFloat(getValue('side-B'))
    const base = parseFloat(getValue('base'))
    const sp = (A + B + base)/2
    console.log(sp)
    document.getElementById('results-triangle').innerHTML= 'Area: ' + Math.sqrt(sp*(sp-A)*(sp-B)*(sp-base),2).toFixed(2) + getValue('triangle-unit') + '<sup>2</sup>'
}

const pi = Math.PI

function getPerimeterCircle() {
    document.getElementById('results-circle').innerHTML='Perimeter: ' + (parseFloat(getValue('radio')) * 2 * Math.PI).toFixed(2) + getValue('circle-unit')
}

function getAreaCircle() {
    document.getElementById('results-circle').innerHTML='Perimeter: ' + (parseFloat(getValue('radio')) ** 2 * Math.PI).toFixed(2) + getValue('circle-unit') + '<sup>2</sup>'
}