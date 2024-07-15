
# Telegram Messaging App

The Telegram Messaging App is a React-based web application that provides a simple and intuitive messaging interface similar to Telegram. It includes features like chat management, user profiles, and a dark/light mode toggle for better user experience.

## Features

- **Chat Interface**: Engage in conversations with a user-friendly chat interface.
- **Message Management**: View and manage your messages efficiently.
- **Dark/Light Mode**: Toggle between dark and light modes for comfortable viewing.
- **Responsive Design**: Fully responsive design that works seamlessly on different devices.

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the repository:**

    ```bash
    git clone git@github.com:ranveer18/telegram-clone.git
    cd telegram-clone
    ```



2. **Navigate to the telegram-clone directory and install frontend dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Rename the `.env.example` file to `.env` in the root directory and set up your environment variables.

4. **Start the development server:**

    ```bash
    npm run dev
    ```

    The app will be running at `http://localhost:5173/telegram-clone/`.

## Usage

- **Homepage**: View the list of chats.
- **Chat Page**: Click on any chat to view messages.
- **Hamburger Menu**: Use the hamburger menu for navigation.
- **Dark/Light Mode**: Toggle between dark and light modes using the sun/moon icon.


## Components

- **App.jsx**: The root component that sets up routing and maintains the dark/light mode state.
- **Homepage.jsx**: The homepage component that displays the list of chats.
- **ChatPage.jsx**: The chat page component that displays messages for a selected chat.
- **Header.jsx**: Header component containing the search bar and navigation elements.
- **HamburgerMenu.jsx**: Hamburger menu component that provides navigation links and the dark/light mode toggle.
- **ChatList.jsx**: Component to render the list of chats.
- **ChatBox.jsx**: Component to render the messages of a selected chat.

## API

- **fetchChats**: Fetches the list of chats (mock function).
- **fetchMessages**: Fetches messages for a given chat ID (mock function).

## Styling

- Global styles and dark/light mode styles are managed in `App.css` and `Menu.css`.
- Dark mode and light mode are implemented using CSS classes toggled based on state.

## Contributing

We welcome contributions to enhance the Telegram Messaging App! To contribute:

1. **Fork the repository on GitHub.**
2. **Create a new branch for your feature or bug fix.**
3. **Make necessary changes and commit them.**
4. **Push your changes to your forked repository.**
5. **Submit a pull request to the main repository, detailing your changes.**

Please ensure that your code adheres to the project's coding style and conventions. Include relevant tests and update documentation as needed.

## License

This project is open source and released under the MIT License.

## Contact

If you have any questions, suggestions, or feedback regarding the Telegram Messaging App, please contact me at [https://ranveer18.github.io/Ranveer/](https://ranveer18.github.io/Ranveer/).



