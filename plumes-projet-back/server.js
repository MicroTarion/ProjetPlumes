require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// parse requests of content-type - application/json
const router = require(path.join(__dirname, 'app', 'routes.js'));

router(app);

app.listen(process.env.PORT_HTTP, () => {
  if (process.env.APP_ENV == 'dev') {
    console.log(`Server is running on ${process.env.HTTP_SERVER}`);
  }
});