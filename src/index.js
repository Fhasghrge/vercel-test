const express = require('express');
const productRouter = require('./api/product')

const app = express();
const PROT = process.env.PROT || 8080;

app.use(express.json({ extended: false }))
app.use('/api/product', productRouter);

app.listen(PROT, () => {
  console.log('Server is running....');
})
