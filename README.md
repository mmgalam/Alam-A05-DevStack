# Project Name: DevStack

## About The Project:

DevStack is a simple web project for exploring different technologies and building a custom development stack.

## Technologies Used:

- React.js
- Tailwind CSS
- DaisyUI
- JavaScript / TypeScript
- React-Toastify
- JSON
- Vite

## Features:

- Users can explore different technologies.
- Users can view technology details.
- Fast and responsive user interface.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that write HTML inside JavaScript.  
It makes React UI easier to create and understand.

### 2. What is the difference between props and state?

**Props** are used to send data from a parent component to a child component.

**State** is used to store and manage data inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store data and update the ui when data changed. In this project, I used it in 'ExploreTech.tsx' to manage the selectedTech (Technology) and setSelectedTech data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` useEffect is used to run code after a component renders. I did not use useEffect in this project.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It helps React know which item has changed.

### 6. What is conditional rendering?

Conditional rendering means showing something when a condition is true. For example, I show a message when the stack is empty.
{stack.length === 0 ? <p>Your stack is empty.</p> : ""}
