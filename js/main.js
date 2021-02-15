'use strict';

{
  const question= document.getElementById('question');
  const choices= document.getElementById('choices');
  const btn= document.getElementById('btn');

  const quizSet = [
    {q: 'What is A?', c:['a0','a1','a2']},
    {q: 'What is B?', c:['b0','b1','b2']},
    {q: 'What is C?', c:['a0','a1','a2']},
  ];
  let currentNum = 0;

  question.textContent = quizSet[currentNum].q;

  quizSet[currentNum].c.forEach(choice =>{
    const li= document.createElement('li');
    li.textContent = choice;
    choices.appendChild(li);
  });
}