# Contributing to FUTURE YOU AI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/hackovium.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Test thoroughly
6. Commit: `git commit -m "Add amazing feature"`
7. Push: `git push origin feature/amazing-feature`
8. Create a Pull Request

## Development Setup

### Backend
```bash
cd server
npm install
cp .env.example .env
# Add ANTHROPIC_API_KEY to .env
npm run dev
```

### Frontend
```bash
cd client
npm install
npm start
```

## Code Style

- Use consistent indentation (2 spaces)
- Write meaningful variable names
- Add comments for complex logic
- Follow existing code patterns

## Testing

Before submitting a PR:
1. Test the entire flow locally
2. Check responsive design (mobile + desktop)
3. Test error scenarios
4. Verify no console errors

## Commit Message Format

```
type: subject

body (optional)

footer (optional)
```

**Types:** feat, fix, docs, style, refactor, test, chore

**Example:**
```
feat: add health check endpoint

Add GET /api/health endpoint to monitor server status
This is useful for load balancers and uptime monitoring
```

## Pull Request Process

1. Update README if needed
2. Add/update tests if applicable
3. Ensure all CI checks pass
4. Request review from maintainers
5. Address feedback promptly

## Reporting Issues

Use GitHub Issues with clear titles and descriptions.

**Bug Report:**
- Expected behavior
- Actual behavior
- Steps to reproduce
- Environment (Node version, browser, etc.)

**Feature Request:**
- Use case
- Benefits
- Potential implementation

## Questions?

Open a GitHub Discussion or issue. We're happy to help!

---

Thank you for making FUTURE YOU AI better! 🎉
