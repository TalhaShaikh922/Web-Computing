# Peer Review System

A React-based web application for submitting projects and adding peer review comments.

## Features

- Submit new projects with title and description
- View all submitted projects
- Add comments to any project
- Clean, responsive UI design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000`

3. The application will automatically reload when you make changes to the code

## Usage

1. **Submit a Project**: Fill in the project title and description in the form at the top of the page, then click "Submit Project"

2. **View Projects**: All submitted projects will appear below the form

3. **Add Comments**: For any project, you can add comments using the comment form at the bottom of each project card

## Project Structure

```
peer-review-system/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── ProjectForm.js
│   │   ├── ProjectList.js
│   │   ├── ProjectItem.js
│   │   └── CommentForm.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- CSS3 for styling
- Create React App for project setup
