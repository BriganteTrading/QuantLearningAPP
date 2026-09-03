# Quant Math — Quant Curriculum PWA V2

GitHub Pages / iPhone-friendly quantitative finance mathematics learning app.

## Curriculum
16 open levels:
1. Mathematical Foundations
2. Calculus
3. Linear Algebra
4. Probability
5. Statistics
6. Time Series
7. Financial Mathematics
8. Options & Greeks
9. GEX & Dealer Positioning
10. Stochastic Processes
11. Stochastic Calculus
12. Numerical Methods
13. Portfolio & Risk
14. Market Microstructure
15. Quant Research
16. Quant Trading Applications

## Expanded learning library
`data/lessons.json` contains **2,400 structured learning cards** (16 levels × 10 topic families × 15 learning modes).

Every card has:
- formula
- symbol dictionary
- intuition
- derivation steps
- worked numerical example
- financial meaning
- Python verification
- practice question
- answer
- prerequisites

The existing main app remains available at `index.html`; `library.html` is a searchable 2,400-card explorer.

## PWA
- manifest
- service worker
- standalone display mode
- local progress
- GitHub Pages Actions deployment
- mobile-first UI

## Deploy
Push the repository to GitHub on `main`. Set GitHub Pages source to **GitHub Actions**. Open the Pages URL in Safari on iPhone and use Share → Add to Home Screen.

## Important
The generated 2,400-card dataset is a structured expansion foundation. For a production educational product, the mathematical derivations and examples should be reviewed and refined topic-by-topic before being treated as authoritative courseware.
