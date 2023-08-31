# File Manager with Authentication and Background Processing

This is a simple file manager application built using Node.js, MongoDB, Redis, and background processing techniques. The application was collaboratively developed by [Saheed Olayinka] and [Sesay Sasey], and it allows users to manage files by providing features like user authentication, file listing, file upload, permission management, file viewing, and thumbnail generation for images.

## Features

- User Authentication: The application implements user authentication using tokens, ensuring that only authorized users can access and manage files.

- List All Files: Users can view a list of all the files they have uploaded. The files are displayed with relevant details like file name, upload date, and permissions.

- Upload a New File: Users can upload new files to the system. Uploaded files are securely stored on the server and associated with the user's account.

- Change Permission of a File: Users can modify the permissions (read, write, execute) of the files they own. This allows for fine-grained control over who can access the files.

- View a File: Users can view the contents of a file directly in the application. The application supports various file formats.

- Generate Thumbnails for Images: The application automatically generates thumbnails for image files upon upload. Thumbnails make it easier to preview images without downloading the entire file.

- Background Processing: The application uses background processing techniques to handle tasks like thumbnail generation. This ensures that the application remains responsive and efficient even when performing resource-intensive operations.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your system.
- MongoDB: Set up a MongoDB database to store user information and file metadata.
- Redis: Install and configure Redis for background processing and caching.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/file-manager.git`
2. Navigate to the project directory: `cd file-manager`
3. Install dependencies: `npm install`
4. Create a `.env` file based on the `.env.example` template and fill in the required configuration (MongoDB URL, Redis URL, etc.).
5. Run the application: `npm start`

## Usage

1. Register or log in to your account.
2. Once logged in, you'll be able to access the various file management features from the user interface.
3. Use the provided options to upload, view, manage permissions, and generate thumbnails for files.

## Technologies Used

- Node.js: Server-side JavaScript runtime.
- Express.js: Web application framework for Node.js.
- MongoDB: NoSQL database for storing user information and file metadata.
- Redis: In-memory data store for caching and background processing.
- Multer: Middleware for handling file uploads.
- Authentication Middleware: Implement JWT-based authentication for user security.
- Background Job Queue: Use a library like Bull or Agenda for managing background processing tasks.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, feel free to submit pull requests.


