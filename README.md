# AI Content Extractor Server

A Node.js server that extracts and summarizes content from URLs using HuggingFace's BART model.

## Features

- Extract text content from web pages
- Generate summaries using AI
- RESTful API endpoint
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your HuggingFace API key:
```env
HUGGINGFACE_API_KEY=your_api_key_here
PORT=5000
```

3. Run the server:
```bash
npm start
```

## API Usage

### POST /api/extract

Extract and summarize content from a URL.

**Request:**
```json
{
  "url": "https://example.com/article"
}
```

**Response:**
```json
{
  "title": "Article Title",
  "summary": "Generated summary of the content..."
}
```

## Deployment

### Railway (Recommended)

1. Push your code to GitHub
2. Go to [railway.app](https://railway.app)
3. Connect your GitHub repository
4. Add environment variables:
   - `HUGGINGFACE_API_KEY`
5. Deploy automatically

### Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your repository
5. Set environment variables
6. Deploy

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add environment variables in Vercel dashboard

### Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
   ```bash
   heroku config:set HUGGINGFACE_API_KEY=your_api_key
   ```
5. Deploy: `git push heroku main`

## Environment Variables

- `HUGGINGFACE_API_KEY`: Your HuggingFace API key
- `PORT`: Server port (default: 5000)

## Dependencies

- Express.js - Web framework
- CORS - Cross-origin resource sharing
- Axios - HTTP client
- Unfluff - HTML to text extraction
- Dotenv - Environment variable management 