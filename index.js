// index.js
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;
app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
