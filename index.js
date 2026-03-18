const express = require('express');
const app = express();

app.get('/gen', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).send('No query provided');

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      model: 'openrouter/auto:free',
        messages: [
          { role: 'system', content: 'Return only raw code. No markdown. No backticks. No explanation. No comments.' },
          { role: 'user', content: query }
        ]
      })
    });

    const data = await response.json();
    console.log('OpenRouter response:', JSON.stringify(data));

    if (!data.choices || !data.choices[0]) {
      console.error('Bad response:', JSON.stringify(data));
      return res.status(500).send('AI error: ' + JSON.stringify(data));
    }

    res.setHeader('Content-Type', 'text/plain');
    res.send(data.choices[0].message.content.trim());

  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).send('Error: ' + err.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on port', process.env.PORT || 3000);
});