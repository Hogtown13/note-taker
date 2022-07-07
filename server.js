const express = require('express');
const path = require('path');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes')
const dbRoutes = require('./routes/dbRoutes')

const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/api', dbRoutes)
app.use('/', htmlRoutes)





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  

