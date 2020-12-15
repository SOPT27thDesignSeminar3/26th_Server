const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        components: {},
        info: {
            title: '29cm API',
            version: '1.0.0',
            description: '29cm API with express',
        },
        host: 'localhost:3300',
        basePath: '/'
    },
    // apis: ['./swagger/*']
    apis: ['./routes/*', './swagger/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};