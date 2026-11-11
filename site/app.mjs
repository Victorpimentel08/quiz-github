import { questions, score } from './quiz.mjs';

const form = document.querySelector('#quiz');
const result = document.querySelector('#result');

questions.forEach(({ prompt, options }, index) => {
  const field = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = prompt;
  field.append(legend);
  options.forEach((option, choice) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'question-' + index;
    input.value = choice;
    input.required = true;
    label.append(input, ' ' + option);
    field.append(label);
  });
  form.append(field);
});

const button = document.createElement('button');
button.textContent = 'Ver resultado';
form.append(button);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const answers = questions.map((_, index) => Number(data.get('question-' + index)));
  result.textContent = 'Você acertou ' + score(answers) + ' de ' + questions.length + '.';
});
