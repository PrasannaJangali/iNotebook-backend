const express = require('express')
const connecttomongo=require('./db');
connecttomongo();

var cors = require('cors')
const app = express()

app.use(cors())
const port = process.env.PORT|| 5000;

app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook listening on port ${port}`)
})