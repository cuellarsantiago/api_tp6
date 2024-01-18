const express = require("express");

const app = express();

const routerLibros = require("./routes/rutas")

const errorHandler = require("./middleware/errorhandler")

const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: 'http://localhost:3000/libros',
    issuerBaseURL: 'https://dev-1nrecr4ua11lesvw.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

app.use(express.json());

app.use("/libros",jwtCheck,routerLibros)

app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log("servidor initializado en el puerto 3000")

})