const swaggerJSDoc = require('swagger-jsdoc')


const swaggerDefinition = {
    info: {
        title: 'Validate PDF File',
        version: '1.0.0',
        description: 'This API checks whether a PDF file uploaded contains a blank page or not'
    },
};


const options = {

    swaggerDefinition,
    apis: ['./routes/validate-pdf.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec