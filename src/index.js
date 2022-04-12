const express = require('express');
const productRouter = require('./api/product')

const app = express();
const PROT = process.env.PROT || 5050;

app.use('/api/product', productRouter);

app.listen(PROT, () => {
  console.log('Server is running....');
})
