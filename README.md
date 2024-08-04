# react-understanding

# Technique
* Ask chatgpt to explain each topic in very basic way with examples.

## Why react
* React is a JavaScript library for building user interfaces.
* React is used to build single-page applications.
* React allows us to create reusable UI components.

## How does React Work?
* React creates a VIRTUAL DOM in memory - Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.
* React only changes what needs to be changed! - React finds out what changes have been made, and changes only what needs to be changed.

## current react version - 18.2.0

## Setting up a React Environment
1. Install Node JS
2. Node JS includes npm

* If you have npx and Node.js installed, you can create a React application by using create-react-app.
npx create-react-app my-react-app - This will set up everything you need to run a React application.

## Run the React Application
cd my-react-app
npm start

## What is ES6?
ES6 stands for ECMAScript 6.
ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

## React JSX
JSX stands for JavaScript XML.
It allows you to write HTML-like code in React, making it easier to create and structure UI components. JSX makes your code more readable and expressive by combining the logic of JavaScript with the structure of HTML.
* HTML-Like Syntax: JSX lets you write elements that look like HTML, but they're actually JavaScript objects.
ex. const element = <h1>Hello, world!</h1>;
* Embedding JavaScript: You can embed JavaScript expressions within JSX by using curly braces {}
ex. const name = "John";
const element = <h1>Hello, {name}!</h1>;
* Components: JSX is often used to define React components. A component is a reusable piece of UI. For example: 
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
const element = <Welcome name="Sara" />;
* another ex.
  const myElement = <h1>I Love JSX!</h1>;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(myElement);

## Typescript
### Class
### Arrow function
### Variables
### Array Methods
### Spread operator
### Modules
  - JavaScript modules allow you to break up your code into separate files.
  - This makes it easier to maintain the code-base.
  - ES Modules rely on the import and export statements.
### Export
#### Named Exports
### Ternary operator






## Study resources
* Youtube
* Github repositories
* Websites
  - https://www.w3schools.com/react/default.asp
* Chatgpt
 
  
