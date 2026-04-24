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
      model: 'meta-llama/llama-3.1-8b-instruct',
        messages: [
          { role: 'system', content: 'Return only raw, complete, runnable code. No markdown. No backticks. Always include all necessary imports at the top. Use Scanner or equivalent for user input where appropriate. Print a clean title at the start of the program output. Code must be complete and runnable. At the very end, add a detailed comment block with these sections: 1) WHAT THIS PROGRAM DOES - one paragraph. 2) COMPONENTS USED - list every concept used like inheritance, friend class, private members, constructors, interfaces, etc and explain each one in 1-2 lines in simple language. 3) HOW THE CODE WORKS - step by step walkthrough of the code in plain english. 4) VIVA QUESTIONS - 5 likely viva questions with short clear answers. Keep language simple like explaining to a student.' },
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

app.listen(process.env.PORT || 8080, () => {
  console.log('Running on port', process.env.PORT || 3000);
});