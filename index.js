const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.json({
    prophecy: "A wandering engineer will containerize the ancient monoliths."
  });
});

app.get('/callService1', async (req, res) => {
  try {
    const response = await fetch('http://terrak8s-practice-3-service1-clusterip:80/');
    const data = await response.json();
    res.json({fetchedData: data});
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

app.listen(port, () => {
  console.log(`Service B running on port ${port}`);
});
