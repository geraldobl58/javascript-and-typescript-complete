const count  = function(operator, accumulator, ...numbers) {
  for (let number of numbers) {
    if (operator === '+') accumulator += number
    if (operator === '-') accumulator -= number
    if (operator === '/') accumulator / number
    if (operator === '*') accumulator * number
  }

  console.log(accumulator)
};

count('+', 1, 20, 30, 40, 50)