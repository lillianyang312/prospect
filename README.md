# Prospect

Art market prospect intelligence tool. Surfaces acquired-company founders as potential buyers for Christie's and Sotheby's sales.

## Local development

```bash
# Set env vars then run the build
CLAUDE_KEY=sk-ant-... CRUSTDATA_KEY=Token\ abc123... node build.js
# Open dist/index.html in your browser
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import into Vercel
3. Set environment variables in Vercel dashboard:
   - `CLAUDE_KEY` — your Anthropic API key (`sk-ant-...`)
   - `CRUSTDATA_KEY` — your Crustdata API key (`Token ...`)
4. Deploy

## Environment variables

| Variable | Description |
|---|---|
| `CLAUDE_KEY` | Anthropic API key — used for semantic filter generation |
| `CRUSTDATA_KEY` | Crustdata API key — used to pull founder/company data |

Never commit real keys to the repository.
