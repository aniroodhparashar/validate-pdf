const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('../swagger')

const router = new express.Router()


router.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))


module.exports = router