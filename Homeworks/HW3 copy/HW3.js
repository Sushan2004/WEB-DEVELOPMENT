// get the title of header by its id
let title = document.getElementById('articleTitle');

// get the login button by its tag name (first button)
let loginBtn = document.getElementsByTagName('button')[0];

// get the paragraphs with class "callout"
let callouts = document.getElementsByClassName('callout');

// Task 1: When the "Rename title" button is clicked,
// show prompt("New title?") and set the <h1> text to what the user typed (if not empty).
// Hints: use getElementById('renameTitleBtn'), addEventListener('click', ...), prompt(), innerText.
const renameTitleBtn = document.getElementById('renameTitleBtn');
renameTitleBtn.addEventListener('click', () => {
  const newTitle = prompt("New title?");
  if (newTitle) {
    title.innerText = newTitle;
  }
});
// TODO: add click listener that prompts and updates title.innerText

// Task 2: When "Make callouts BLUE" is clicked,
// loop through all .callout elements and set style.color to 'blue'.
// Hints: use getElementById('makeBlueBtn'), addEventListener('click', ...), for..of over 'callouts'.
const makeBlueBtn = document.getElementById('makeBlueBtn');
// TODO: on click, set each callout.style.color = 'blue'
makeBlueBtn.addEventListener('click', () => {
  for (const callout of callouts) {
    callout.style.color = 'blue';
  }
});

// Task 3: Change text on hover for the login button.
// When mouse goes over login button, set innerText to 'Click to log in'.
// When mouse leaves, set it back to 'Log in'.
// Hints: mouseover, mouseout events.
/*
loginBtn.addEventListener('mouseover', () => {
  // TODO
});
loginBtn.addEventListener('mouseout', () => {
  // TODO
});
*/
loginBtn.addEventListener('mouseover', () => {
  loginBtn.innerText = 'Click to log in';
});
loginBtn.addEventListener('mouseout', () => {
  loginBtn.innerText = 'Log in';
});



// Task 4: Double-click the page title to toggle between
// 'Welcome!' and 'DOM Homework 3!'.
// Hints: addEventListener('dblclick', ...)
/*
title.addEventListener('dblclick', () => {
  // TODO
});
*/
title.addEventListener('dblclick', () => {
  if (title.innerText === 'Welcome!') {
    title.innerText = 'DOM Homework 3!';
  } else {
    title.innerText = 'Welcome!';
  }
});