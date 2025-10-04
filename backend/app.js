const express = require('express')
const app = express();
const PORT = 5001;

app.use((req, res, next) => {
  console.log("HEELO USER ");
  next()
});

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});