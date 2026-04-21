const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk').default;

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build (for HF Spaces deployment)
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Helper to call Claude
async function callClaude(systemPrompt, userMessage) {
  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: userMessage,
        },
      ],
    });
    return message.content[0].text;
  } catch (error) {
    console.error('Claude API error:', error);
    throw error;
  }
}

// ============ AGENT ENDPOINTS ============

// Career Agent
app.post('/api/simulate/agent/career', async (req, res) => {
  try {
    const { userProfile, optionA, optionB } = req.body;

    const systemPrompt = `You are a Career Progression Expert analyzing two life paths.
Analyze career growth, role progression, skill development, and employability for each option over 5 years.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "optionA": {
    "yearly": [
      {"year": 1, "role": "...", "skills": ["..."], "growthScore": 75, "milestone": "..."},
      {"year": 2, "role": "...", "skills": ["..."], "growthScore": 78, "milestone": "..."},
      {"year": 3, "role": "...", "skills": ["..."], "growthScore": 82, "milestone": "..."},
      {"year": 4, "role": "...", "skills": ["..."], "growthScore": 85, "milestone": "..."},
      {"year": 5, "role": "...", "skills": ["..."], "growthScore": 88, "milestone": "..."}
    ],
    "summary": "...",
    "score": 82
  },
  "optionB": {
    "yearly": [...],
    "summary": "...",
    "score": 75
  }
}`;

    const userMessage = `Analyze career progression for:
User: ${JSON.stringify(userProfile)}
Option A: ${optionA}
Option B: ${optionB}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const careerData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(careerData);
  } catch (error) {
    console.error('Career agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Finance Agent
app.post('/api/simulate/agent/finance', async (req, res) => {
  try {
    const { userProfile, optionA, optionB } = req.body;

    const systemPrompt = `You are a Financial Analyst expert in salary growth, savings, and wealth building.
Analyze salary progression, savings potential, expenses, financial stability for each option over 5 years.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "optionA": {
    "yearly": [
      {"year": 1, "salary": 500000, "savings": 80000, "netWorth": 80000, "stability": 85},
      {"year": 2, "salary": 550000, "savings": 100000, "netWorth": 180000, "stability": 85},
      {"year": 3, "salary": 620000, "savings": 130000, "netWorth": 310000, "stability": 85},
      {"year": 4, "salary": 700000, "savings": 160000, "netWorth": 470000, "stability": 85},
      {"year": 5, "salary": 800000, "savings": 200000, "netWorth": 670000, "stability": 85}
    ],
    "summary": "...",
    "score": 80
  },
  "optionB": {
    "yearly": [...],
    "summary": "...",
    "score": 70
  }
}`;

    const userMessage = `Analyze financial trajectory for:
User: ${JSON.stringify(userProfile)}
Option A: ${optionA}
Option B: ${optionB}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const financeData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(financeData);
  } catch (error) {
    console.error('Finance agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Lifestyle Agent
app.post('/api/simulate/agent/lifestyle', async (req, res) => {
  try {
    const { userProfile, optionA, optionB } = req.body;

    const systemPrompt = `You are a Work-Life Balance and Wellness Expert.
Evaluate stress levels, burnout risk, happiness, flexibility, and social time for each option.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "optionA": {
    "stress": 35,
    "happiness": 72,
    "workLifeBalance": 70,
    "flexibility": 65,
    "socialTime": 70,
    "burnoutRisk": 25,
    "summary": "..."
  },
  "optionB": {
    "stress": 55,
    "happiness": 65,
    "workLifeBalance": 50,
    "flexibility": 40,
    "socialTime": 60,
    "burnoutRisk": 45,
    "summary": "..."
  }
}`;

    const userMessage = `Evaluate lifestyle impact for:
User: ${JSON.stringify(userProfile)}
Option A: ${optionA}
Option B: ${optionB}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const lifestyleData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(lifestyleData);
  } catch (error) {
    console.error('Lifestyle agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Risk Agent
app.post('/api/simulate/agent/risk', async (req, res) => {
  try {
    const { userProfile, optionA, optionB } = req.body;

    const systemPrompt = `You are a Risk Analyst expert in identifying uncertainties, market volatility, and failure scenarios.
Analyze downside risks, market changes, job stability, and mitigation strategies for each option.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "optionA": {
    "riskScore": 30,
    "mainRisks": ["...", "...", "..."],
    "volatility": 25,
    "worstCase": "...",
    "mitigation": ["...", "..."],
    "summary": "..."
  },
  "optionB": {
    "riskScore": 55,
    "mainRisks": ["...", "...", "..."],
    "volatility": 45,
    "worstCase": "...",
    "mitigation": ["...", "..."],
    "summary": "..."
  }
}`;

    const userMessage = `Analyze risks for:
User: ${JSON.stringify(userProfile)}
Option A: ${optionA}
Option B: ${optionB}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const riskData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(riskData);
  } catch (error) {
    console.error('Risk agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Storytelling Agent
app.post('/api/simulate/agent/story', async (req, res) => {
  try {
    const { userProfile, optionA, optionB, careerData, financeData } = req.body;

    const systemPrompt = `You are a Master Storyteller and Narrative Designer.
Create compelling, realistic, emotional future narratives for each option as if the user lived through them.
Make it vivid, specific, and believable. Include year-by-year developments.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "optionAStory": "Year 1: [narrative]... Year 2: [narrative]... Year 3: [narrative]... Year 4: [narrative]... Year 5: [narrative]...",
  "optionBStory": "Year 1: [narrative]... Year 2: [narrative]... Year 3: [narrative]... Year 4: [narrative]... Year 5: [narrative]...",
  "optionAHighlight": "...",
  "optionBHighlight": "..."
}`;

    const userMessage = `Create narratives for:
User: ${JSON.stringify(userProfile)}
Option A: ${optionA}
Option B: ${optionB}
Career insights: ${JSON.stringify(careerData)}
Finance insights: ${JSON.stringify(financeData)}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const storyData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(storyData);
  } catch (error) {
    console.error('Story agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Recommendation Agent
app.post('/api/simulate/agent/recommendation', async (req, res) => {
  try {
    const { userProfile, careerData, financeData, lifestyleData, riskData, weights } = req.body;

    const systemPrompt = `You are a Decision Science Expert providing final recommendations.
Synthesize all analysis into a clear, weighted recommendation that explains the best path.
Consider user priorities and provide confidence score.
Return ONLY valid JSON with this exact structure (no markdown, no backticks):
{
  "winner": "Option A or Option B",
  "confidence": 0.82,
  "reasoning": "...",
  "keyFactors": ["...", "...", "..."],
  "tradeoffs": "...",
  "conditions": "What could change this recommendation",
  "finalScore": {
    "optionA": 78,
    "optionB": 72
  }
}`;

    const userMessage = `Make recommendation based on:
User priorities: ${JSON.stringify(userProfile)}
Weights: ${JSON.stringify(weights)}
Career: ${JSON.stringify(careerData)}
Finance: ${JSON.stringify(financeData)}
Lifestyle: ${JSON.stringify(lifestyleData)}
Risk: ${JSON.stringify(riskData)}`;

    const response = await callClaude(systemPrompt, userMessage);
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    const recData = JSON.parse(jsonMatch ? jsonMatch[0] : response);
    res.json(recData);
  } catch (error) {
    console.error('Recommendation agent error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============ ORCHESTRATOR ENDPOINT ============

app.post('/api/simulate', async (req, res) => {
  try {
    const userProfile = req.body;
    const apiBaseUrl = `http://localhost:${PORT}`;

    // Run all agents in parallel
    const [careerResponse, financeResponse, lifestyleResponse, riskResponse] = await Promise.all([
      fetch(`${apiBaseUrl}/api/simulate/agent/career`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userProfile,
          optionA: userProfile.optionA,
          optionB: userProfile.optionB,
        }),
      }).then(r => r.json()),
      fetch(`${apiBaseUrl}/api/simulate/agent/finance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userProfile,
          optionA: userProfile.optionA,
          optionB: userProfile.optionB,
        }),
      }).then(r => r.json()),
      fetch(`${apiBaseUrl}/api/simulate/agent/lifestyle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userProfile,
          optionA: userProfile.optionA,
          optionB: userProfile.optionB,
        }),
      }).then(r => r.json()),
      fetch(`${apiBaseUrl}/api/simulate/agent/risk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userProfile,
          optionA: userProfile.optionA,
          optionB: userProfile.optionB,
        }),
      }).then(r => r.json()),
    ]);

    // Get story based on initial results
    const storyResponse = await fetch(`${apiBaseUrl}/api/simulate/agent/story`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userProfile,
        optionA: userProfile.optionA,
        optionB: userProfile.optionB,
        careerData: careerResponse,
        financeData: financeResponse,
      }),
    }).then(r => r.json());

    // Calculate weights based on user priorities
    const weights = calculateWeights(userProfile);

    // Get final recommendation
    const recommendationResponse = await fetch(`${apiBaseUrl}/api/simulate/agent/recommendation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userProfile,
        careerData: careerResponse,
        financeData: financeResponse,
        lifestyleData: lifestyleResponse,
        riskData: riskResponse,
        weights,
      }),
    }).then(r => r.json());

    // Merge all results
    const simulationResult = {
      userProfile,
      career: careerResponse,
      finance: financeResponse,
      lifestyle: lifestyleResponse,
      risk: riskResponse,
      story: storyResponse,
      recommendation: recommendationResponse,
      timestamp: new Date().toISOString(),
    };

    res.json(simulationResult);
  } catch (error) {
    console.error('Simulation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Helper function to calculate weights
function calculateWeights(userProfile) {
  let weights = {
    career: 0.30,
    finance: 0.25,
    lifestyle: 0.20,
    risk: 0.15,
    alignment: 0.10,
  };

  // Adjust based on user priorities
  if (userProfile.financialPriority === 'high') {
    weights.finance = 0.35;
    weights.career = 0.25;
  }
  if (userProfile.stressSensitivity === 'high') {
    weights.lifestyle = 0.30;
    weights.risk = 0.20;
  }
  if (userProfile.riskTolerance === 'low') {
    weights.risk = 0.25;
    weights.career = 0.20;
  }

  return weights;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 FUTURE YOU AI Server running on http://localhost:${PORT}`);
});
