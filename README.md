# Quiz Application

A responsive and interactive quiz application built with React, Vite, and Tailwind CSS. The application allows users to take a 15-question quiz, navigate between questions, and view results upon submission.

## Features

- **Timer**: Displays a 30-minute countdown timer, auto-submitting the quiz when time runs out.
- **Navigation**: Users can select question numbers at the top to navigate directly.
  - Red indicates unattempted questions.
  - Green indicates attempted questions.
- **Option Highlighting**: Selected options are visually highlighted for clarity.
- **Submit Button**:
  - Always available at the top.
  - Additionally displayed at the bottom on the last question.
- **Responsive Design**: Optimized for various device sizes.
- **Dynamic Questions**: Questions are fetched from the Open Trivia Database API.

## Installation Instructions

### Prerequisites

Ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

Clone the repository:
   ```bash
   git clone <repository-url>
   cd quiz-application
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm run dev
```
Open your browser and navigate to:

```arduino
http://localhost:5173
```
Build for Production
To build the application for production:

```bash
npm run build
```
The built files will be available in the dist folder.

Preview the Production Build
```bash
npm run preview
```
APIs Used
This application fetches quiz questions from the Open Trivia Database API.

Endpoint:

```arduino
https://opentdb.com/api.php?amount=15
```
Data Structure:

question: The quiz question.
correct_answer: The correct option.
incorrect_answers: The incorrect options.
Project Structure
```bash
src/
├── components/
│   ├── Question.jsx        # Component to display individual questions
│   ├── QuestionNavigator.jsx # Component for question navigation
│   └── Timer.jsx           # Timer component
├── App.jsx                 # Main application component
├── index.css               # Tailwind CSS imports
└── main.jsx                # React entry point
Technologies Used
React: Frontend framework.
Vite: Development server and build tool.
Tailwind CSS: Styling framework.
```
Assumptions and Challenges
Assumptions:

Users will attempt questions in a single session.
Timer and navigation functionality are essential for quiz completion.
Challenges:

Dynamically highlighting question navigation buttons based on the attempted status.
Ensuring seamless UI responsiveness and compatibility.
Contributions
Contributions are welcome! Feel free to fork the repository and submit pull requests.
