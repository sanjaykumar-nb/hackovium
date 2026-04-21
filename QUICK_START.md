# 🚀 Quick Start Guide

Get FUTURE YOU AI running in 5 minutes.

## Prerequisites

- **Node.js 16+** - [Download](https://nodejs.org)
- **npm 8+** - Comes with Node.js
- **Anthropic API Key** - Get free from [console.anthropic.com](https://console.anthropic.com)
- **Terminal/Command Prompt**
- **Code Editor** (VS Code recommended)

## Installation

### Step 1: Clone/Navigate to Project
```bash
cd hackovium
```

### Step 2: Setup Backend (Terminal 1)
```bash
cd server
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Edit `.env` and add your API key:
```env
PORT=5000
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxx
NODE_ENV=development
```

Start backend:
```bash
npm run dev
```

You should see:
```
🚀 FUTURE YOU AI Server running on http://localhost:5000
```

### Step 3: Setup Frontend (Terminal 2)
```bash
cd client
npm install
```

Create `.env` file:
```bash
cp .env.example .env
```

Start frontend:
```bash
npm start
```

Browser will open to http://localhost:3000

## First Simulation

1. **Click "Start Simulation"** on the landing page
2. **Fill the form:**
   - Name: "Alex"
   - Age: "27"
   - Current: "Software engineer with 5 years experience"
   - Option A: "Join Google as Staff Engineer"
   - Option B: "Start my own AI startup"
   - Financial Priority: "High"
   - Stress Sensitivity: "7"
3. **Click "Simulate Future"**
4. **Wait 30-60 seconds** for agents to analyze
5. **View results** in the dashboard

## Troubleshooting

### Backend fails to start
```
Error: Cannot find module '@anthropic-ai/sdk'
→ Run: cd server && npm install
```

### Missing API key
```
Error: ANTHROPIC_API_KEY not set
→ Copy .env.example to .env and add your key
```

### Port already in use
```
Error: listen EADDRINUSE :::5000
→ Change PORT in server/.env to 5001
→ Update client .env REACT_APP_API_URL=http://localhost:5001
```

### CORS errors
```
Error: Access to XMLHttpRequest blocked by CORS
→ Backend is not running on port 5000
→ Check "npm run dev" is running in server directory
```

### API rate limit
```
Error: 429 - Rate limit exceeded
→ Wait 60 seconds and try again
→ Consider caching responses
```

## Running Tests

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## Making Changes

### Add new agent endpoint

1. Add endpoint in `server/index.js`
2. Follow the pattern of existing agents
3. Test with http://localhost:5000/api/health

### Update form fields

1. Edit `SimulationForm.jsx` form definition
2. Add to formData state
3. Pass to simulation API call

### Customize styling

1. Edit CSS variables in `client/src/App.css`
2. Or modify individual component `.css` files
3. Changes reflect immediately

## Deployment

### Deploy Backend  

**Option A: Railway.app**
```bash
npm install -g railway
railway link
railway up
```

**Option B: Render.com**
1. Push code to GitHub
2. Create project on render.com
3. Connect GitHub repo
4. Set environment variables
5. Deploy

### Deploy Frontend

**Option A: Vercel**
```bash
npm install -g vercel
vercel
```

**Option B: Netlify**
```bash
cd client
npm run build
# Drag build/ folder to netlify.com
```

## Environment Variables

### Backend (.env)
```
PORT=5000                          # Server port
ANTHROPIC_API_KEY=sk-ant-xxxx     # Your API key
NODE_ENV=development              # production or development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000  # Backend URL
```

## Performance Tips

1. **Cache agent responses** - Same inputs return same outputs
2. **Lazy load charts** - Charts render when scrolled into view  
3. **Compress images** - If adding visuals, compress first
4. **Minimize bundle** - `npm run build` optimizes automatically
5. **Use CDN** - For deployed version, add CloudFlare

## File Structure

```
hackovium/
├── server/                # Backend
│   ├── index.js          # Main server
│   ├── package.json
│   └── .env.example
├── client/                # Frontend
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── styles/       # CSS files
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
├── README.md             # Full documentation
├── AGENT_PROMPTS.md     # Agent instructions
└── QUICK_START.md       # This file
```

## Common Commands

```bash
# Backend
npm run dev              # Start development server
npm start                # Start production server
npm test                 # Run tests

# Frontend
npm start                # Start dev server
npm run build            # Build for production
npm test                 # Run tests
npm run eject            # Eject from Create React App (careful!)
```

## Getting Help

1. **Check error messages** - They're usually descriptive
2. **Read AGENT_PROMPTS.md** - Understand how agents work
3. **Check console logs** - Both browser and terminal
4. **Search GitHub Issues** - Others may have solved it
5. **Ask in discussion forums** - React, Node.js communities

## Next Steps

- ✅ Run the first simulation
- 📝 Try different decision scenarios
- 🎨 Customize the UI theme
- 📊 Adjust agent weights for your use case
- 🚀 Deploy to production
- 📈 Collect user feedback
- 🔄 Improve agent prompts based on results

## API Key Management

**Get your free Anthropic API key:**
1. Go to https://console.anthropic.com
2. Sign up or login
3. Go to "API Keys" section
4. Create new key
5. Copy and paste into .env
6. NEVER commit .env to Git

**Safety tips:**
- Use different keys for dev/production
- Rotate keys monthly
- Delete unused keys
- Monitor usage on console

---

**You're all set! Happy simulating! 🎉**

**Questions?** → Read README.md for detailed docs
