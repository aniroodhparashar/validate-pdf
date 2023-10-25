# PDF Validation API

This Node.js API allows you to validate PDF files by checking for the presence of empty pages. It is built using Express and provides a simple and user-friendly way to validate PDF files uploaded by clients. The API is documented using Swagger and can be easily deployed on a Linux server, such as Nginx.

## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
    - [Uploading a PDF](#uploading-a-pdf)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will help you set up and deploy the PDF validation API on your server.

### Prerequisites

Before running the API, you'll need the following installed on your system:

- Node.js and npm
- Multer (for file uploads)
- pdf-parse (for PDF parsing)
- Express

You can install Node.js and npm from the official website: [Node.js Downloads](https://nodejs.org/).

### Installation

1. Clone the repository to your server:

   ```bash
   git clone https://github.com/aniroodhparashar/validate-pdf.git
   cd pdf-validation-api
   
2. Install the dependencies
     ```bash
   npm install
  
3. Start the server
   ```bash
   npm run start
   
The API should now be running on your server.

## Usage
### Uploading a PDF

To validate a PDF file, use the /validate-pdf endpoint by making a POST request and attaching a PDF file to the pdf field in the form. If the PDF contains empty pages, it will be considered invalid; otherwise, it is valid.

Example using `curl`:

```bash
curl -X POST -F "pdf=@/path/to/your/pdf/file.pdf" http://localhost:3000/validate-pdf
```




## API Documentation

The API is documented using Swagger for easy reference. You can access the Swagger documentation by visiting the following URL on your server:

``http://your-server-url/api-docs``

Swagger provides a user-friendly interface for exploring and interacting with the API.

## Deployment
To deploy the API on a Linux server (e.g., Nginx), follow these steps:

1. Install Nginx and configure it to proxy requests to your Node.js application.
2. Secure your server with HTTPS to protect the data transmitted during file uploads.
3. Set up a process manager (e.g., PM2) to ensure your Node.js application runs continuously.

## Contributing

If you'd like to contribute to this project, please open an issue or create a pull request. We welcome your contributions and ideas.

