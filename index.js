const express = require('express');
const app = express();

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.json({
    prophecy: "A wandering engineer will containerize the ancient monoliths."
  });
});

app.listen(port, () => {
  console.log(`Service B running on port ${port}`);
});
