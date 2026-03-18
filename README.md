# AI Clipboard CLI 🤖

> One terminal command → AI-generated code → straight to your clipboard.

No browser. No login. No installation required.

## Usage

### Mac / Linux
```bash
curl "https://ai-clipboard.onrender.com/gen?q=your+query+here" | pbcopy
```

### Windows
```cmd
curl "https://ai-clipboard.onrender.com/gen?q=your+query+here" | clip
```

## Examples
```bash
# Java bubble sort
curl "https://ai-clipboard.onrender.com/gen?q=java+bubble+sort" | pbcopy

# Python fibonacci
curl "https://ai-clipboard.onrender.com/gen?q=python+fibonacci" | pbcopy

# SQL create users table
curl "https://ai-clipboard.onrender.com/gen?q=sql+create+users+table" | pbcopy

# React login component
curl "https://ai-clipboard.onrender.com/gen?q=react+login+component" | pbcopy
```

## What you get

- ✅ Complete, runnable code
- ✅ All imports included
- ✅ User input where applicable
- ✅ Viva/interview prep comment at the end explaining every concept used

## Self Host

1. Clone this repo
2. Install dependencies
```bash
   npm install
```
3. Get a free API key from [OpenRouter](https://openrouter.ai)
4. Create a `.env` file
```
   OPENROUTER_KEY=your_key_here
```
5. Run
```bash
   node index.js
```

## Deploy Free on Render

1. Fork this repo
2. Go to [render.com](https://render.com) → New Web Service → connect your fork
3. Add `OPENROUTER_KEY` in Environment Variables
4. Deploy

## Tech Stack

- Node.js + Express
- OpenRouter AI (free models)
- Zero dependencies on client side

## Contributing

Pull requests welcome. Open an issue first for major changes.

## License

MIT
