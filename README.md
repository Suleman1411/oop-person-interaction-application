# Person Interaction Application

This is a simple command-line application written in TypeScript that simulates a conversation with a person, in this case, a student named Urveshi. The application allows users to interact with Urveshi by asking and answering questions.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)

## Features

- Users can ask Urveshi how she is feeling, where she lives, and what topics she wants to discuss.
- Urveshi responds with appropriate answers based on user input.
- Users can discuss Urveshi's personality, whether she is an extrovert, introvert, or ambivert.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Usage

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Suleman1411/oop-person-interaction-application
```

2. Navigate to the project directory:

```bash
cd oop-person-interaction-application
```

3. Install the project dependencies:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

The application will prompt you with questions, and you can interact with Urveshi accordingly.

## Code Overview

- The `Person` class represents a generic person with a name and personality.
- The `Student` class extends the `Person` class and adds methods for interacting with the user using the Inquirer library.
- Inquirer is used to prompt the user with questions and collect responses.
- The `programStart` function initiates the interaction with Urveshi and sets her personality based on the user's input.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
