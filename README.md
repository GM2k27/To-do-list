# To Do List App

A simple and intuitive React-based task management application built with Vite. Keep track of your daily tasks, add new ones, and remove completed items with ease.

## Features

- **Add Tasks**: Enter new tasks in the input field and click "Add" to include them in your list.
- **Display Tasks**: View all your tasks in a clean, organized list.
- **Delete Tasks**: Remove tasks from the list using the delete button next to each item.
- **Task Checkbox**: Check off tasks (visual indicator, though functionality can be extended).
- **Responsive Design**: Clean and simple UI that works on various screen sizes.
- **Real-time Updates**: Tasks are added and removed instantly without page refresh.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Vite**: Fast build tool and development server.
- **JavaScript (ES6+)**: Programming language for app logic.
- **CSS**: Styling for the user interface.
- **ESLint**: Code linting for better code quality.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```
   cd To_do_proj
   ```
3. Install dependencies:
   ```
   npm install
   ```

## How to Run

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` (or the URL shown in the terminal).
3. Start adding and managing your tasks!

## Usage

1. **Adding a Task**:
   - Type your task in the input field.
   - Click the "Add" button or press Enter.

2. **Viewing Tasks**:
   - All tasks are displayed below the input area.

3. **Deleting a Task**:
   - Click the "Delete" button next to the task you want to remove.

4. **Checking Tasks**:
   - Use the checkbox next to each task (currently for visual indication).

## Project Structure

```
To_do_proj/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx          # Main app component
│   ├── index.css
│   └── main.jsx
├── components/
│   ├── Todo_input.jsx   # Input component for adding tasks
│   ├── Todo_task.jsx    # Container for task list
│   └── Todo.jsx         # Individual task component
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md            # This file
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code linting
- `npm run preview`: Preview the production build locally

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

- Task editing functionality
- Task completion status persistence
- Local storage for saving tasks
- Categories or tags for tasks
- Due dates and reminders

## Contributing

Feel free to fork this project and submit pull requests with improvements!

Stay organized and productive with this To Do List app! 📝
