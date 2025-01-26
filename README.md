# Runtime Font Changer

A simple React application demonstrating how to implement a runtime font changer. The app allows users to dynamically change fonts and styles in real-time using a curated list of fonts or by uploading custom fonts.

## Features

- Select a font from a predefined list (e.g., Google Fonts).
- Upload and apply a custom font.
- Adjust font weight, size, line height, and letter spacing.

## Technologies Used

- **React**: Frontend framework.
- **Vite**: Development server and build tool for blazing-fast development.

## Installation and Setup

Follow these steps to install and run the project locally:

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or above is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. **Install dependencies:**
   Using npm:

   ```bash
   npm install
   ```

   OR using yarn:

   ```bash
   yarn install
   ```

3. **Run the development server:**
   Using npm:

   ```bash
   npm run dev
   ```

   OR using yarn:

   ```bash
   yarn dev
   ```

4. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```
   > Note: Vite uses the default port `5173`. If it's already in use, Vite will assign a different port and display it in the terminal.

## Usage

1. Select a font from the dropdown to apply it to the text.
2. Upload a custom font file (.ttf or .woff2) to use your own font.
3. Adjust font properties like weight, size, line height, and letter spacing using the available inputs.

## Project Structure

```
root/
├── src/
│   ├── components/
│   │   ├── form/               # Handles font customization inputs
│   │   ├── preview/            # Display the font preview
│   ├── font-utils.ts           # Font manipulation logic
│   ├── App.tsx                 # Main application file
│   ├── index.tsx               # Application entry point
├── public/
│   ├── fonts/                  # Example font files (if any)
├── vite.config.ts              # Vite configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to improve the project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
