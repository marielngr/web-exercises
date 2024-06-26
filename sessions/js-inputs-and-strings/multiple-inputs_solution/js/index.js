/*
Create a fork for each exercise:
1. Input value of first input should be copied to second input on button click
2. Input value of first input should be copied in uppercase to second input on button click
3. Input values should switch on button click: First input should display the value of the second input and vice versa.

*/

const firstInput = document.querySelector('[data-js=first-input]');
const secondInput = document.querySelector('[data-js=second-input]');
const button = document.querySelector('[data-js=button]');

// Solution exercise 1:

// button.addEventListener('click', () => {
//   secondInput.value = firstInput.value
// });

// Solution exercise 2:

// button.addEventListener('click', () => {
//   secondInput.value = firstInput.value.toUpperCase()
// });

// Solution exercise 3:

button.addEventListener('click', () => {
  const firstInputValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = firstInputValue;
});
