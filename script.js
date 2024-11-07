let num1 = parseInt(prompt(`Ingrese el número 1: `));
let num2 = parseInt(prompt(`Ingrese el número 2: `));
let num3 = parseInt(prompt("Ingrese el número 3: "));

let menor = Math.min(num1, num2, num3);
let mayor = Math.max(num1, num2, num3);
let medio = [num1, num2, num3].sort((a, b) => a - b)[1];

document.getElementById('resultado').innerHTML = `
    <p>Los números ordenados de menor a mayor son: ${menor}, ${medio}, ${mayor}</p>
    <p>Los números ordenados de mayor a menor son: ${mayor}, ${medio}, ${menor}</p>
`;