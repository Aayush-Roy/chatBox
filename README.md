
# ExpressChat

ExpressChat is a simple chat application built using Express.js, MongoDB, and EJS. This project demonstrates how to create a CRUD-based chat application where users can send, view, edit, and delete chat messages.

## Features

- **Create**: Send new chat messages.
- **Read**: View a list of all chat messages.
- **Update**: Edit existing chat messages.
- **Delete**: Delete chat messages.

## Technologies Used

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing chat messages.
- **Mongoose**: MongoDB object modeling for Node.js.
- **EJS**: Embedded JavaScript templating for rendering views.
- **Method-Override**: Allows the use of HTTP verbs such as PUT or DELETE in places where the client doesn't support it.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ExpressChat.git
    cd ExpressChat
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start MongoDB**:
    Make sure you have MongoDB installed and running. You can start MongoDB using:
    ```bash
    mongod
    ```

4. **Run the application**:
    ```bash
    node app.js
    ```

5. **Visit the application**:
    Open your browser and go to `http://localhost:8080`

## Usage

- **Homepage**: Shows a welcome message.
- **Chats List**: Navigate to `/chats` to view all chat messages.
- **Create Chat**: Navigate to `/chats/new` to create a new chat message.
- **Edit Chat**: Navigate to `/chats/:id/edit` to edit a chat message.
- **Delete Chat**: Use the delete button next to a chat message to delete it.

## Project Structure

```
.
├── models
│   └── chat.js          # Mongoose model for Chat
├── public
│   └── ...              # Static assets (CSS, JS, images)
├── views
│   ├── edit.ejs         # Edit chat message form
│   ├── index.ejs        # List of chat messages
│   ├── new.ejs          # New chat message form
│   └── ...              # Other views
├── app.js               # Main application file
└── package.json         # NPM dependencies and scripts
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

