const express = require('express')

const validatePdf=require('./routes/validate-pdf')
const swaggerApi= require('./routes/swagger-ui')

const app = express()

const port = process.env.PORT || 3000


app.use(validatePdf)
app.use(swaggerApi)


app.listen(port, () =>{
    console.log('Server is up on port '+ port)
})

