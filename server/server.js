const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use(cors(
  {
    origin: ['https://opini-analyzer.vercel.app/'],
    methods: ['POST', 'GET'],
    credentials: true
  }
));

app.get('/', (req, res) => {
  res.json("Hello");
})

app.post('/api/analyze', async (req, res) => {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  // console.log("DEBUG 1: ",req.body);
  const response = await fetch(`https://api-inference.huggingface.co/models/${process.env.APP_HUGGINGFACE_MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.APP_HUGGINGFACE_API}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: req.body.text }),
  });
  const data = await response.json();
  // console.log("DEBUG 2: ",data[0]);
  // console.log("DEBUG 3: ",data[0][0]);
  // console.log("DEBUG 4: ",data[0][0].score);
  if (data && data.length > 0) {
    // Assuming the structure of the data is as expected
    // You might need to adjust based on the actual response
    const result = {
      label: data[0][0].label,
      score: data[0][0].score,
    };
    res.json(result);
  } else {
    res.status(500).json({ error: 'Failed to analyze sentiment' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
