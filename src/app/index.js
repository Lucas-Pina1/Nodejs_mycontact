const express = require('express');

const routes = require('./routes');

const app = express();
app.use(routes);

app.listen(3000, () => console.log('🔥 Serve started at http://localhost:3000'));
