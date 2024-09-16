# QR Code Generator

A simple and efficient **QR Code Generator** web application built using **HTML**, **CSS**, and **JavaScript**. This tool allows users to generate QR codes for any text or URL and store the generated code for future use via local storage.

## Features

- **Instant QR Code Generation**: Enter any text or URL to quickly generate a QR code.
- **Local Storage Support**: Saves the last generated QR code and retrieves it when the page is reloaded.
- **Responsive Design**: Works seamlessly across devices of different screen sizes.
- **Error Handling**: Provides feedback when the input field is left empty.

## Demo

 https://ayushdevhub.github.io/qr---generator/<!-- Add your demo link here -->

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/qr-code-generator.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd qr-code-generator
    ```
3. **Open `index.html` in your preferred browser**:
    ```bash
    open index.html
    ```

## How It Works

1. **Enter Text/URL**: The user enters text or a URL into the input field.
2. **Generate QR Code**: Upon clicking the "Generate your QR code" button, a QR code is dynamically generated and displayed.
3. **Local Storage**: The generated QR code is saved in the browser’s local storage. When the page is reloaded, the previously generated QR code is retrieved and displayed.
4. **Error Handling**: If the input field is left empty, the user receives visual feedback to correct the input.

## Technologies Used

- **HTML5**: For the structure and content of the page.
- **CSS3**: To style the webpage with a clean and responsive layout.
- **JavaScript (ES6)**: For generating QR codes, handling user input, and managing local storage.
- **QR Code API**: The application uses the `https://api.qrserver.com/v1/create-qr-code/` API to generate QR codes.


## Contributing

If you wish to contribute to this project, feel free to fork the repository and submit a pull request. Contributions that enhance functionality or fix bugs are always welcome.

## Contact

Feel free to reach out with any questions or suggestions:

- **GitHub**: https://github.com/AyushDevHub
- **Email**: coder.ayushshaw@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Developed by [Ayush Kumar]**
