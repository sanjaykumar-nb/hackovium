# Sample Data & Example Responses

This document contains realistic example data that the system generates.

---

## Example 1: Job vs Startup

### User Input
```json
{
  "name": "Priya",
  "age": 27,
  "currentSituation": "Senior Product Manager at a fintech startup, 4 years experience. Leading a team of 3. Strong technical background (5 years as engineer before PM). Looking for new challenges.",
  "optionA": "Join Amazon as Senior PM - 50L salary + benefits, managing ML products",
  "optionB": "Co-found B2B SaaS startup with two technical co-founders - high risk, high reward", "goals": "Build something meaningful, financial security for family, learn new domains",
  "riskTolerance": 7,
  "timeHorizon": 5,
  "stressSensitivity": 6,
  "financialPriority": "high",
  "careerPriority": "high"
}
```

### Sample Career Agent Response
```json
{
  "optionA": {
    "yearly": [
      {
        "year": 1,
        "role": "Senior PM, ML Systems",
        "skills": ["LLMs", "System Design", "Stakeholder Management", "Data Analysis"],
        "growthScore": 78,
        "milestone": "Led launch of new ML feature, quarterly promotion discussion started"
      },
      {
        "year": 2,
        "role": "Principal PM",
        "skills": ["Product Strategy", "Cross-functional leadership", "Board presentations", "AI/ML expertise"],
        "growthScore": 85,
        "milestone": "Promoted to Principal PM, managing 2 smaller product teams"
      },
      {
        "year": 3,
        "role": "Senior Principal PM",
        "skills": ["Executive presence", "Venture building", "AI strategy"],
        "growthScore": 87,
        "milestone": "Invited to corporate strategy council, considering new division lead role"
      },
      {
        "year": 4,
        "role": "Director, Product Strategy",
        "skills": ["Leadership", "Organizational design", "Technology roadmap"],
        "growthScore": 85,
        "milestone": "Director track confirmed, leading product for entire business unit"
      },
      {
        "year": 5,
        "role": "Director, Product Strategy",
        "skills": ["Business acumen", "C-suite collaboration", "Market vision"],
        "growthScore": 82,
        "milestone": "Invited to senior leadership offsite, potential VP conversations"
      }
    ],
    "summary": "Steady climb up the corporate ladder with clear mentorship from exceptional PMs. Deep technical credibility built. Could reach VP level by 30-31. Risk of hitting glass ceiling for women in tech, but Amazon is relatively progressive.",
    "score": 84
  },
  "optionB": {
    "yearly": [
      {
        "year": 1,
        "role": "Co-founder, Chief Product Officer",
        "skills": ["Product vision", "Fundraising", "Team building", "Sales pitches"],
        "growthScore": 92,
        "milestone": "Closed 500K seed round from Y Combinator and angels, shipped v1 MVP, 20 customers"
      },
      {
        "year": 2,
        "role": "CEO/CPO (dual role)",
        "skills": ["GTM strategy", "Board management", "Hiring for growth", "Enterprise sales"],
        "growthScore": 95,
        "milestone": "Moved to CEO role, Series A raised (5M), 50 customers, PMF signals clear"
      },
      {
        "year": 3,
        "role": "CEO",
        "skills": ["Company scaling", "Fundraising", "Investor relations", "Team culture"],
        "growthScore": 90,
        "milestone": "Series B fundraising (15M) in progress, 500K ARR, 20 person team"
      },
      {
        "year": 4,
        "role": "CEO",
        "skills": ["Market leadership", "M&A decisions", "Board dynamics", "Executive delegation"],
        "growthScore": 85,
        "milestone": "Hit $2M ARR, profitable unit economics, 50 person team, considering acquisition offers"
      },
      {
        "year": 5,
        "role": "CEO or Board member (if sold)",
        "skills": ["Exit strategy", "Founder relationships", "Angel investing"],
        "growthScore": 80,
        "milestone": "Either scaled to Series C unicorn path or sold to larger company (exit)"
      }
    ],
    "summary": "Explosive growth in learning and responsibility. Every 6 months brings crisis and growth. You'll wear every hat. Higher upside (CEO of meaningful company), but more volatility. 40% chance of building $100M+ company, 60% chance of learning hard lessons before pivot/exit.",
    "score": 77
  }
}
```

### Sample Finance Agent Response
```json
{
  "optionA": {
    "yearly": [
      {"year": 1, "salary": 5000000, "savings": 1200000, "netWorth": 1200000, "stability": 98},
      {"year": 2, "salary": 5500000, "savings": 1400000, "netWorth": 2600000, "stability": 98},
      {"year": 3, "salary": 6200000, "savings": 1600000, "netWorth": 4200000, "stability": 98},
      {"year": 4, "salary": 7100000, "savings": 1900000, "netWorth": 6100000, "stability": 98},
      {"year": 5, "salary": 8200000, "savings": 2200000, "netWorth": 8300000, "stability": 98}
    ],
    "summary": "Steady, predictable wealth accumulation. By year 2 you can buy a property. By year 4 you have 60L liquid net worth. Stock options likely double this if issued and Amazon stock appreciates. No financial stress, can support aging parents comfortably.",
    "score": 87
  },
  "optionB": {
    "yearly": [
      {"year": 1, "salary": 600000, "savings": -500000, "netWorth": -500000, "stability": 20},
      {"year": 2, "salary": 1500000, "savings": 300000, "netWorth": -200000, "stability": 40},
      {"year": 3, "salary": 3500000, "savings": 800000, "netWorth": 600000, "stability": 50},
      {"year": 4, "salary": 6000000, "savings": 1500000, "netWorth": 2100000, "stability": 60},
      {"year": 5, "salary": 10000000, "savings": 3000000, "netWorth": 5100000, "stability": 65}
    ],
    "summary": "You'll burn through savings in year 1-2 before company makes money. Year 3-4 inflection point where profitability kicks in. By year 5, potential for 5Cr+ net worth if successful. But 70% chance of much worse outcome if startup fails. Requires 30L+ runway to survive initial phase.",
    "score": 58
  }
}
```

### Sample Lifestyle Agent Response
```json
{
  "optionA": "Stress 40, Happiness 75, WorkLifeBalance 75, Flexibility 60, SocialTime 70, BurnoutRisk 15",
  "optionB": "Stress 75, Happiness 85, WorkLifeBalance 35, Flexibility 85, SocialTime 40, BurnoutRisk 60"
}
```

### Sample Risk Agent Response
```json
{
  "optionA": {
    "riskScore": 28,
    "mainRisks": [
      "Amazon undergoing reorganization, some divisions may be cut",
      "Slower growth path than startup, might feel bored in 2-3 years",
      "Glass ceiling for women leaders in tech (statistically 2-3x harder to reach VP)",
      "Product you own might be deprioritized in company reorg"
    ],
    "volatility": 20,
    "worstCase": "Your division is shut down, 9-month severance at age 30, but easily find new role at FAANG within 2-3 months at same salary",
    "mitigation": [
      "Build strong network with other PMs (don't depend on Amazon alone)",
      "Document all wins and impacts for resume",
      "Keep exploring new technologies (stay relevant)",
      "Network actively with founder community for optionality"
    ],
    "summary": "Low risk path. Worst case you're unemployed briefly. Recovery is fast, financial impact minimal. Risk is more about opportunity cost."
  },
  "optionB": {
    "riskScore": 68,
    "mainRisks": [
      "68% of B2B SaaS startups fail within 5 years",
      "Cofounder conflicts end 30% of startups (selection risk)",
      "Personal runway depletion if product-market fit takes 18-24 months",
      "Family support ending if startup goes badly (divorce risk 2-3x higher for founders)",
      "Market shifts could make product irrelevant overnight"
    ],
    "volatility": 75,
    "worstCase": "Startup fails in year 2 after burning through 80L of raised capital, personal 30L investment lost, 2-year resume gap, reputation damage in startup community, burned out, returns to job market aged 29 with gap",
    "mitigation": [
      "Vet cofounder chemistry for 3+ months before quitting day job",
      "Maintain strong advisory board (not just cofounder conversations)",
      "Set clear 18-month PMF milestones before next raise",
      "Keep relationship with Amazon warm for re-hire option",
      "Prepare family (partner, parents) for potential financial loss",
      "Negotiate investor shares to protect personal economics if exit happens"
    ],
    "summary": "High risk, high reward. Success could make you wealthier faster. Failure could set you back 2 years financially and emotionally. Only recommended if you have strong risk buffer (130L+ savings) and cofounder redundancy."
  }
}
```

### Sample Recommendation Response
```json
{
  "winner": "Option A",
  "confidence": 0.71,
  "reasoning": "While Option B offers more upside and excitement, Option A aligns better with your stated financial priority and existing family obligations. You mentioned wanting 'financial security for family' - that's hard with startup risk profile. Amazon path achieves your goals faster with lower stress.",
  "keyFactors": [
    "Financial security: Amazon provides guaranteed 50L+ salary; startup has 70% failure probability",
    "Family support: Your parents depend on you - Amazon allows faster support than startup year 1",
    "Career growth: Both reach similar heights, but Amazon path is 2 years faster",
    "Learning: Startup learning is faster, but Amazon learning is deeper in PM field"
  ],
  "tradeoffs": "You're trading potential 10x upside for guaranteed 30% wealth growth. You're trading startup excitement for corporate stability. These are intentional choices given your priorities, not mistakes.",
  "conditions": "This recommendation flips if: (1) you secure 30L+ personal runway and (2) validate strong product-market fit before quitting Amazon, (3) your parents become financially independent, (4) you find exceptionally strong technical cofounder, or (5) you realize corporate life is making you genuinely unhappy.",
  "finalScore": {
    "optionA": 76,
    "optionB": 66
  }
}
```

---

## Example 2: Higher Studies vs Job

### User Input (Different person)
```json
{
  "name": "Arjun",
  "age": 22,
  "currentSituation": "Recent engineering graduate, CS degree from BITS Pilani. Received job offers and MBA admits",
  "optionA": "Join Microsoft as Senior SDE - 28L salary, Bangalore, clear 5-year growth path",
  "optionB": "Do MBA from IIM-A - 20L fees, 2 years, then join as associate (back to square 1)",
  "goals": "Quick independence, help family, eventually start own company",
  "riskTolerance": 6,
  "timeHorizon": 5,
  "stressSensitivity": 4,
  "financialPriority": "high",
  "careerPriority": "high"
}
```

### Sample Output (Finance Agent)
```json
{
  "optionA": {
    "yearly": [
      {"year": 1, "salary": 2800000, "savings": 600000, "netWorth": 600000, "stability": 95},
      {"year": 2, "salary": 3300000, "savings": 800000, "netWorth": 1400000, "stability": 95},
      {"year": 3, "salary": 4000000, "savings": 1000000, "netWorth": 2400000, "stability": 95},
      {"year": 4, "salary": 4800000, "savings": 1200000, "netWorth": 3600000, "stability": 95},
      {"year": 5, "salary": 5800000, "savings": 1400000, "netWorth": 5000000, "stability": 95}
    ],
    "summary": "By year 2, you earn 1.4Cr net worth. Can buy small house, help parents. Clear wealth trajectory. No student debt burden.",
    "score": 88
  },
  "optionB": {
    "yearly": [
      {"year": 1, "salary": -2000000, "savings": -2000000, "netWorth": -2000000, "stability": 10},
      {"year": 2, "salary": -2000000, "savings": -2000000, "netWorth": -4000000, "stability": 10},
      {"year": 3, "salary": 4500000, "savings": 1000000, "netWorth": -3000000, "stability": 80},
      {"year": 4, "salary": 5500000, "savings": 1300000, "netWorth": -1700000, "stability": 85},
      {"year": 5, "salary": 6500000, "savings": 1500000, "netWorth": -200000, "stability": 85}
    ],
    "summary": "2-year debt accumulation phase (4W liability). Takes until year 5 to break even. But salary growth is faster post-mba, reaching 65L by year 4-5. IIM alumni network worth 20-50L in career value long-term.",
    "score": 65
  }
}
```

### Recommendation excerpt
```
Winner: Option A
Confidence: 0.83
Reasoning: You have stated "help family" as goal - MBA path makes this impossible for 4 years. 
Microsoft path lets you help family immediately while building wealth. MBA is better if corporate 
ceiling was the only option, but Microsoft's Senior SDE track has partner/VP potential without MBA.
```

---

## Example 3: Skill Specialization

### User Input
```json
{
  "name": "Zara",
  "age": 25,
  "currentSituation": "Working as full-stack developer contractor, strong in web but diluted across tech",
  "optionA": "Deep-dive into Systems Design/Infrastructure - become world-class, 3-5 year intensity",
  "optionB": "Stay generalist, learn mobile + cloud + AI alongside web - broader skills",
  "goals": "Become expert-level consultant, technical authority",
  "riskTolerance": 8,
  "timeHorizon": 5,
  "stressSensitivity": 3,
  "financialPriority": "medium",
  "careerPriority": "high"
}
```

### Career Agent Output
```json
{
  "optionA": {
    "yearly": [
      {
        "year": 1,
        "role": "Specialist: Infrastructure Engineer",
        "skills": ["Kubernetes", "Distributed Systems", "System Design", "Scale"],
        "growthScore": 88,
        "milestone": "Complete Distributed Systems course, contribute to major OSS project"
      },
      {
        "year": 2,
        "role": "Senior Infra Engineer",
        "skills": ["Advanced Kubernetes", "Database internals", "High-scale systems"],
        "growthScore": 92,
        "milestone": "Expert recognition in specific domain, speaking opportunities"
      },
      {
        "year": 3,
        "role": "Principal Infrastructure Architect",
        "skills": ["System design mastery", "Team leadership", "World-class expertise"],
        "growthScore": 95,
        "milestone": "Recognized expert, consulting calls at 20K+/hour, pulled for internal Google/Meta talks"
      },
      {
        "year": 4,
        "role": "Thought Leader / Consultant",
        "skills": ["Teaching", "Architecture consulting", "Technology strategy"],
        "growthScore": 93,
        "milestone": "Writing books/papers, conference keynotes, $200K annual consulting"
      },
      {
        "year": 5,
        "role": "Domain Expert / Startup CTO",
        "skills": ["Deep expertise", "Teaching", "Company building"],
        "growthScore": 90,
        "milestone": "Could found company leveraging expertise, or become CTO of major startup"
      }
    ],
    "summary": "Narrower path but much deeper. By year 3 you're top 1% expert globally. Commands premium pricing. High risk if infrastructure becomes less relevant (unlikely next 10 years). Low risk if you execute.",
    "score": 91
  },
  "optionB": {
    "yearly": [
      {
        "year": 1,
        "role": "Full-stack + mobile learner",
        "skills": ["Web", "Mobile", "DevOps basics", "Cloud"],
        "growthScore": 72,
        "milestone": "Ship mobile app, deploy on cloud, generalist reputation grows"
      },
      {
        "year": 2,
        "role": "Full-stack / Cloud engineer",
        "skills": ["Web", "Mobile", "Cloud architecture", "AI basics"],
        "growthScore": 75,
        "milestone": "Can work on any team, comfortable with most tech stacks"
      },
      {
        "year": 3,
        "role": "Senior full-stack engineer",
        "skills": ["All major stacks", "Product thinking", "Broad architecture"],
        "growthScore": 76,
        "milestone": "CTO-track role becoming visible, broad expertise valued"
      },
      {
        "year": 4,
        "role": "Tech Lead / Senior architect (generalist)",
        "skills": ["Tech selection", "Cross-domain thinking", "Team leadership"],
        "growthScore": 75,
        "milestone": "CTO role or senior staff engineer, comfortable anywhere"
      },
      {
        "year": 5,
        "role": "Technical leader",
        "skills": ["Technology strategy", "Cross-functional", "Company building"],
        "growthScore": 73,
        "milestone": "CTO of startup, or VP engineering track, flexible position"
      }
    ],
    "summary": "Broader path, more flexible. Never world-expert in anything, but can do anything. Better for joining startups, building products, leadership tracks. Salary ceiling higher in large company, but expertise ceiling lower.",
    "score": 74
  }
}
```

---

## Data Files for Testing

### Mock Server Response (for testing frontend without API)
```javascript
// In client, if backend unreachable, use this:
const mockSimulationResult = {
  userProfile: {...},
  career: {
    optionA: {
      yearly: [{year: 1, role: "...", growthScore: 75}, ...],
      score: 82,
      summary: "..."
    },
    optionB: {...}
  },
  finance: {...},
  lifestyle: {...},
  risk: {...},
  story: {...},
  recommendation: {
    winner: "Option A",
    confidence: 0.78,
    finalScore: {optionA: 78, optionB: 68}
  }
};
```

---

## Using Sample Data

### For Testing Frontend
```javascript
// In ResultsDashboard.jsx, if want to use mock:
const mockResults = require('./sampleData.json');
// Then pass to components instead of API results
```

### For Demos
1. Create simulation with sample data
2. Export result as JSON
3. Pre-load on fresh instance for smooth demo
4. Show multiple scenarios without re-running AI

### For Documentation
Use these examples in README to show what output looks like
before users run actual simulation.

---

This sample data is realistic but not perfect - real AI outputs will vary based on:
- User profile nuances
- Current market conditions
- Emergent reasoning from Claude
- Natural variation in LLM outputs

But the structure and scenarios here are typical of what users will see.
