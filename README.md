# Quant Math 6.0 — Deep Focused

Ein didaktisch aufgebauter Quant-Mathematik-Kurs mit Schwerpunkt auf:

1. Mathematical Foundations
2. Calculus
3. Linear Algebra
4. Probability
5. Statistics
6. Financial Mathematics
7. **Options & Greeks**
8. **GEX & Dealer Positioning**
9. **Stochastic Processes**
10. **Stochastic Calculus**
11. Numerical Methods
12. Portfolio & Risk
13. Market Microstructure
14. Quant Research
15. Quant Trading Applications
16. **Advanced Quant Finance**

## Didaktik

Die Fokuskapitel sind bewusst als Lernketten aufgebaut:

**Options**
Payoff → Parität → Black-Scholes → d1/d2 → Delta → Gamma → Taylor → Hedging → Vega → Theta → Rho → IV

**GEX**
Gamma → OI → Kontraktgröße → Exposure-Konvention → Net GEX → Dealer-Hedge → Gamma Flip → 0DTE → Charm → Vanna → Testbare Hypothesen

**Stochastic**
Random Walk → Brownian Motion → Quadratic Variation → GBM → exakte GBM-Lösung → Martingale → OU → Poisson → Korrelation

**Stochastic Calculus**
Ito-Integral → Ito-Lemma → ln(S) → Self-Financing → Delta-Hedge → Black-Scholes PDE → Risk-Neutral Measure → Feynman-Kac

**Advanced**
Vol Surface → Skew → Volga → Gamma/Vanna/Charm → Monte Carlo Error → Varianzreduktion → Heston → Kalibrierung → numerische Greeks → Stress Tests

Der Lernpfad einer Lektion führt – soweit Inhalte hinterlegt sind – von einer themenspezifischen Kernidee über Formel und Symbolerklärung zu einem mathematischen Prüfpfad, einem schrittweisen Beispiel und dem Finanzbezug. Die individuellen Kernideen sind nach Lektionen-ID in [src/core-ideas.js](./src/core-ideas.js) gepflegt und werden beim Laden auf Vollständigkeit geprüft. Ein aktiver Selbsttest lädt dazu ein, die Idee erst selbst zu erklären und anschließend Bedeutung, Symbole und Plausibilität anhand von Kriterien zu prüfen. Voraussetzungen sind direkt aus der Lektion erreichbar und zeigen den Bearbeitungsstatus.

Die Selbstkontrolle bewertet Antworten nicht automatisch. Beispiele und Erklärungen unterscheiden sich je nach Thema in ihrer Tiefe; ein Python-Ergebnis ersetzt weder eine Herleitung noch die Prüfung der Modellannahmen.

## Start

`index.html` kann direkt geöffnet werden.

Für GitHub Pages:
- Repository anlegen
- Dateien ins Repository
- Settings → Pages
- Source: GitHub Actions

Die App funktioniert ohne externe CDN-Abhängigkeit und speichert Fortschritt lokal.


## Individuelle Kernideen
Jede der 244 Lektionen hat eine eigene, an ihrem Thema und ihrer Formel ausgerichtete Kernerklärung. Sie grenzt den Begriff ab, benennt relevante Bedingungen oder Konventionen und ordnet die Aussage ein. Die Kernideen sind als eigener Datensatz nach Lektionen-ID gepflegt; fehlt eine Erklärung, zeigt die App einen sichtbaren Ladefehler statt still auf allgemeine Platzhalter zurückzufallen.
