// DOBRANDO NUMEROS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79];
const doubled = numbers.map(num => num * 2);

//FILTRANDO PARES
const evenNumbers = numbers.filter(num => num % 2 === 0);

//SOMAR TODOS
const sum = numbers.reduce((acc, num) => acc + num, 0);

// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------
// ------------------------------------------


// PEGANDO PRIMEIRO ELEMENTO DO ARRAY
const fruits = ['primeiro', 'segundo' , 'terceiro'];
console.log(fruits);

console.log(fruits[0]);

// ADICIONAR ELEMENTO
fruits.push('quarto');
console.log(fruits);

// ADICIONAR ELEMENTO AO INICIO
fruits.unshift('zero');
console.log(fruits);

// REMOVER ULTIMO ELEMENTO
const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// REMOVER PRIMEIRO ELEMENTO
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// FILTRAR ELEMENTOS PELA PRIMEIRA LETRA
const filterFruits = fruits.filter(fruit => fruit.startsWith('p'));
console.log(filterFruits);

// TRANSFORMAR EM MAIUSCULA E MINUSCULA
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits);

const lowerCaseFruits = upperCaseFruits.map(fruit => fruit.toLowerCase());
console.log(lowerCaseFruits);

// ORDENAR ARRAY
fruits.unshift('a letra primeira'); // ADICIONANDO ELEMENTO COM LETRA A
console.log(fruits.sort());

//JUNTAR ARRAYS
const fruitString = fruits.join(', ');
console.log(fruitString);

//REMOVER ELEMENTO COM SPLICE
const removedFruits = fruits.splice(0, 1);
console.log(removedFruits);
console.log(fruits);