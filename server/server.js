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

app.post('/api/analyze1', async (req, res) => {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  console.log("DEBUG 1: ",req.body);
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
    const result = {
      label: data[0][0].label,
      score: data[0][0].score,
    };
    res.status(200).json({ok:1, result:result});
  } else {
    res.status(500).json({ ok:-1, message: 'Failed to analyze sentiment' });
  }
});

app.post('/api/analyze2', async (req, res) => {
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  console.log("DEBUG 1: ",req.body);
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
    const result = {
      label: data[0][0].label,
      score: data[0][0].score,
    };
    res.status(200).json({ok:1, result:result});
  } else {
    res.status(500).json({ ok:-1, message: 'Failed to analyze sentiment' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});