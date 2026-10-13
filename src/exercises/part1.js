window.QUANT_EXERCISES = Object.assign(window.QUANT_EXERCISES || {}, {
  "L01-001": {
    task: "Vier Tagesrenditen in Prozent lauten −7,5; 0,02; −0,4 und 3. Ordne sie auf der Zahlengeraden von links nach rechts und bestimme, welche Zahl den größten Betrag |x| hat. Warum ist der Betrag für Risikoüberlegungen oft interessanter als das Vorzeichen?",
    hint: "Links steht das Kleinste; der Betrag misst nur den Abstand zur 0.",
    solution: [
      "Sortierung von links nach rechts: −7,5 < −0,4 < 0,02 < 3.",
      "Beträge: 7,5; 0,4; 0,02; 3. Der größte Betrag ist |−7,5| = 7,5.",
      "Interpretation: Der Betrag zeigt die Größe der Bewegung unabhängig von der Richtung. Für Risiko zählt, wie weit eine Rendite von 0 abweicht, und der −7,5%-Tag ist hier der Extremwert."
    ]
  },
  "L01-002": {
    task: "Ein Kollege rechnet 3^4 · 3^2 = 3^8 = 6561. Finde den Fehler und berechne außerdem den Wachstumsfaktor 1,1^2 · 1,1^3 mit der Potenzregel. Gib das Ergebnis auf fünf Nachkommastellen an.",
    hint: "Beim Multiplizieren gleicher Basen wird mit den Exponenten etwas anderes gemacht als multiplizieren.",
    solution: [
      "Fehler: Die Exponenten wurden multipliziert (4·2 = 8). Richtig ist die Addition: 3^4 · 3^2 = 3^(4+2) = 3^6 = 729.",
      "Wachstumsfaktor: 1,1^2 · 1,1^3 = 1,1^(2+3) = 1,1^5 = 1,61051.",
      "Interpretation: Zwei Perioden mit 10% Wachstum und drei weitere ergeben zusammen fünf Perioden, also +61,05%."
    ]
  },
  "L01-003": {
    task: "Die Tagesvarianz einer Rendite beträgt 0,0016. Bestimme die Tagesvolatilität als Wurzel. Wie groß ist die Varianz über 9 Tage (Varianzen addieren sich bei unabhängigen Tagen) und welche Volatilität gehört dazu?",
    hint: "Volatilität ist die Wurzel der Varianz, also die Potenz mit Exponent 1/2.",
    solution: [
      "Tagesvolatilität: sqrt(0,0016) = 0,0016^(1/2) = 0,04 = 4%.",
      "Varianz über 9 Tage: 9 · 0,0016 = 0,0144.",
      "Volatilität über 9 Tage: sqrt(0,0144) = 0,12 = 12%. Das ist 3 · 4%, also sqrt(9) mal die Tagesvolatilität.",
      "Interpretation: Die Volatilität wächst nur mit der Wurzel der Zeit, die Varianz dagegen linear."
    ]
  },
  "L01-004": {
    task: "Ein Kurs von 50 € entwickelt sich mit einem Log-Exponenten von −0,2, also S = 50 · e^(−0,2). Berechne den neuen Kurs. Zeige außerdem, dass e^0,2 · e^0,1 = e^0,3 gilt, und gib e^0,3 an.",
    hint: "e^x ist immer positiv; für x < 0 liegt der Faktor zwischen 0 und 1.",
    solution: [
      "e^(−0,2) ≈ 0,81873, also S ≈ 50 · 0,81873 ≈ 40,94 €.",
      "Der Kurs fällt um etwa 18,13%, nicht um 20%, weil e^(−0,2) und 1−0,2 verschieden sind.",
      "Additive Exponenten ergeben einen multiplikativen Faktor: e^0,2 · e^0,1 = e^(0,2+0,1) = e^0,3 ≈ 1,34986.",
      "Interpretation: Der Funktionswert bleibt positiv, ein Kurs kann so nie negativ werden."
    ]
  },
  "L01-005": {
    task: "Ein Wert wächst stetig auf das 3,5-Fache, also e^y = 3,5. Bestimme y mit dem natürlichen Logarithmus. Erkläre, warum ln(−2) im reellen Rechnen nicht definiert ist.",
    hint: "ln ist die Umkehrfunktion von e^y; welche Werte kann e^y überhaupt annehmen?",
    solution: [
      "y = ln(3,5) ≈ 1,2528. Probe: e^1,2528 ≈ 3,5.",
      "Da e^y für jedes reelle y strikt positiv ist, gibt es keinen Exponenten mit e^y = −2. Deshalb ist ln(−2) nicht definiert, ln gilt nur für positive Argumente.",
      "Interpretation: Ein Preisverhältnis P_1/P_0 ist stets positiv, daher lassen sich Log-Returns bilden."
    ]
  },
  "L01-006": {
    task: "Eine Aktie fällt von 40 € auf 34 €. Berechne die Prozentänderung. Welche Prozentänderung braucht die Aktie danach, um wieder 40 € zu erreichen? Warum sind die beiden Beträge verschieden?",
    hint: "Der Nenner ist jeweils der Startpreis der betrachteten Periode.",
    solution: [
      "Verlust: r = (34 − 40)/40 = −6/40 = −0,15 = −15%.",
      "Rückweg: r = (40 − 34)/34 = 6/34 ≈ 0,1765 = +17,65%.",
      "Interpretation: Dieselbe absolute Änderung von 6 € wird einmal auf 40 €, einmal auf 34 € bezogen. Verluste brauchen daher einen größeren prozentualen Gewinn zur Erholung."
    ]
  },
  "L01-007": {
    task: "Ein Preis steigt von 50 auf 56. Berechne einfache Rendite und Log-Return. Wie groß ist der Log-Return, wenn der Preis stattdessen von 50 auf 44 fällt, und wie vergleicht er sich mit der einfachen Rendite?",
    hint: "Beim Log-Return zählt ln(P_1/P_0); prüfe, wie sich die Asymmetrie bei Gewinn und Verlust zeigt.",
    solution: [
      "Anstieg: einfach r = 6/50 = 12%; log r_log = ln(1,12) ≈ 0,1133 = 11,33%.",
      "Fall: einfach r = −6/50 = −12%; log r_log = ln(0,88) ≈ −0,1278 = −12,78%.",
      "Interpretation: Der Log-Return ist bei Gewinnen kleiner und bei Verlusten betragsmäßig größer als die einfache Rendite. Bei kleinen Änderungen liegen beide nah beieinander."
    ]
  },
  "L01-008": {
    task: "Ein Preis läuft über drei Tage 200 → 210 → 199,5. Berechne die beiden täglichen Log-Returns und deren Summe, und vergleiche mit dem Log-Return von 200 direkt auf 199,5. Was passiert, wenn man stattdessen die einfachen Renditen +5% und −5% addiert?",
    hint: "Im Produkt der Preisverhältnisse kürzt sich der Zwischenpreis 210 heraus.",
    solution: [
      "Tag 1: ln(210/200) = ln(1,05) ≈ 0,04879. Tag 2: ln(199,5/210) = ln(0,95) ≈ −0,05129.",
      "Summe: 0,04879 − 0,05129 = −0,00250.",
      "Direkt: ln(199,5/200) = ln(0,9975) ≈ −0,00250. Die Werte stimmen überein.",
      "Einfache Renditen: +5% + (−5%) = 0%, obwohl der Preis tatsächlich um 0,25% gefallen ist. Einfache Renditen addieren sich nicht exakt."
    ]
  },
  "L01-009": {
    task: "Ein Fonds macht in Jahr 1 +50% und in Jahr 2 −50%. Berechne das arithmetische Mittel, das geometrische Mittel und das Endkapital bei 100 € Start. Welches Mittel beschreibt das tatsächliche Wachstum?",
    hint: "Das geometrische Mittel multipliziert die Wachstumsfaktoren 1+r_i.",
    solution: [
      "Arithmetisch: (50% − 50%)/2 = 0%.",
      "Geometrisch: G = sqrt(1,5 · 0,5) − 1 = sqrt(0,75) − 1 ≈ 0,8660 − 1 ≈ −13,40% pro Jahr.",
      "Endkapital: 100 · 1,5 · 0,5 = 75 €, also −25% insgesamt.",
      "Interpretation: Das geometrische Mittel liefert die konstante Jahresrendite mit demselben Endvermögen; das arithmetische Mittel überschätzt das Wachstum bei schwankenden Renditen."
    ]
  },
  "L01-010": {
    task: "Du legst 2000 € für 10 Jahre mit 3% Jahreszins an (jährliches Compounding). Berechne das Endvermögen. Ein Kollege rechnet 2000 · (1 + 0,03 · 10) = 2600 €; wo liegt der Unterschied?",
    hint: "Der Wachstumsfaktor 1,03 wird zehnmal multipliziert, nicht addiert.",
    solution: [
      "V_10 = 2000 · 1,03^10 ≈ 2000 · 1,34392 ≈ 2687,83 €.",
      "Der Kollege rechnet mit einfacher Verzinsung ohne Zinseszins (Zinsen immer nur auf 2000 €) und erhält 2600 €.",
      "Differenz: 2687,83 − 2600 = 87,83 €, das ist der Zinseszinseffekt: Zinsen werden selbst wieder verzinst."
    ]
  },
  "L01-011": {
    task: "1000 € werden 5 Jahre lang mit einer stetigen Rate von 4% verzinst. Berechne V_5. Vergleiche mit jährlichem Compounding bei 4% und gib die Differenz an.",
    hint: "Stetig: Faktor e^(rT). Diskret: Faktor (1+r)^T.",
    solution: [
      "Stetig: V_5 = 1000 · e^(0,04·5) = 1000 · e^0,2 ≈ 1221,40 €.",
      "Jährlich: V_5 = 1000 · 1,04^5 ≈ 1216,65 €.",
      "Differenz ≈ 4,75 €.",
      "Interpretation: Bei gleichem Nominalsatz wächst das stetige Compounding etwas schneller, weil die Verzinsung in jedem Augenblick erfolgt."
    ]
  },
  "L01-012": {
    task: "Eine Tagesrendite von −3,1% soll standardisiert werden. Berechne z für Asset A mit μ = 0,1% und σ = 1,6% und für Asset B mit μ = 0,1% und σ = 0,4%. Was sagt der Vergleich aus?",
    hint: "Zuerst den Mittelwert abziehen, dann durch die Standardabweichung teilen.",
    solution: [
      "Asset A: z = (−3,1 − 0,1)/1,6 = −3,2/1,6 = −2.",
      "Asset B: z = (−3,1 − 0,1)/0,4 = −3,2/0,4 = −8.",
      "Interpretation: Dieselbe Rendite ist für A ein Ausschlag von zwei Standardabweichungen, für B von acht und damit extrem ungewöhnlich. Der z-Wert macht Größenordnungen vergleichbar."
    ]
  },
  "L02-001": {
    task: "Ein Modellwert hängt über f(x) = x^3 vom Input x ab. Berechne die Sekantensteigung zwischen x = 2 und x = 2,1 und vergleiche sie mit der exakten Ableitung bei x = 2. Warum weichen beide ab?",
    hint: "Die Sekante nutzt h = 0,1, die Ableitung den Grenzwert h → 0.",
    solution: [
      "Sekante: (2,1^3 − 2^3)/0,1 = (9,261 − 8)/0,1 = 12,61.",
      "Ableitung: f'(2) = 3 · 2^2 = 12.",
      "Die Sekante zeigt die mittlere Steigung über das Intervall, die Kurve steigt aber nach rechts an. Bei kleinerem h nähert sich der Wert 12 an.",
      "Interpretation: Die Ableitung ist die lokale Steigung am Punkt, nicht über ein ganzes Intervall."
    ]
  },
  "L02-002": {
    task: "Ein Nullkupon-Preis wird grob als P(y) = 1/y mit y = 0,05 modelliert (also P = 20). Leite P(y) = y^(−1) mit der Potenzregel ab und schätze die Preisänderung bei y von 0,05 auf 0,051. Vergleiche mit dem exakten Wert.",
    hint: "Schreibe 1/y als y^(−1) und beachte das Vorzeichen.",
    solution: [
      "P'(y) = −1 · y^(−2) = −1/y^2. Bei y = 0,05: −1/0,0025 = −400.",
      "Näherung: ΔP ≈ −400 · 0,001 = −0,4.",
      "Exakt: 1/0,051 − 20 ≈ 19,6078 − 20 = −0,3922.",
      "Interpretation: Steigende Renditen senken den Preis. Die Näherung ist leicht zu groß, weil die Kurve gekrümmt ist."
    ]
  },
  "L02-003": {
    task: "Ein Händler verkauft q(p) = 100 − 2p Stück zum Preis p. Der Umsatz ist R(p) = p · (100 − 2p). Bestimme R'(p) mit der Produktregel, werte sie bei p = 10 aus und finde den Preis mit R'(p) = 0.",
    hint: "Leite beide Faktoren ab: (Preis)' · Menge + Preis · (Menge)'.",
    solution: [
      "R'(p) = 1 · (100 − 2p) + p · (−2) = 100 − 4p.",
      "Bei p = 10: R'(10) = 100 − 40 = 60. Eine kleine Preiserhöhung steigert den Umsatz.",
      "R'(p) = 0 ergibt p = 25 mit R(25) = 25 · 50 = 1250.",
      "Interpretation: Ab p = 25 sinkt die Nachfrage stärker, als der höhere Preis ausgleicht."
    ]
  },
  "L02-004": {
    task: "Der Diskontfaktor einer 2-jährigen Zahlung ist D(r) = e^(−2r). Bestimme D'(r) mit der Kettenregel und werte sie bei r = 0,05 aus. Schätze damit die Änderung von D, wenn r um 0,01 steigt.",
    hint: "Äußere Funktion e^u, innere Funktion u = −2r.",
    solution: [
      "D'(r) = e^(−2r) · (−2) = −2 · e^(−2r).",
      "Bei r = 0,05: D = e^(−0,1) ≈ 0,90484, also D'(0,05) ≈ −2 · 0,90484 ≈ −1,8097.",
      "ΔD ≈ −1,8097 · 0,01 ≈ −0,0181.",
      "Interpretation: Ein Zinsanstieg um einen Prozentpunkt senkt den Barwertfaktor um etwa 1,8 Prozentpunkte."
    ]
  },
  "L02-005": {
    task: "Ein Konto wächst als V(t) = 500 · e^(0,04t). Bestimme V'(t) und zeige, dass V'(t) = 0,04 · V(t) gilt. Berechne V(10) und V'(10).",
    hint: "Die Ableitung von e^(ct) ist c · e^(ct).",
    solution: [
      "V'(t) = 500 · 0,04 · e^(0,04t) = 0,04 · V(t).",
      "V(10) = 500 · e^0,4 ≈ 500 · 1,49182 ≈ 745,91.",
      "V'(10) = 0,04 · 745,91 ≈ 29,84 pro Jahr.",
      "Interpretation: Das momentane Wachstum ist stets proportional zum aktuellen Wert, hier 4% davon."
    ]
  },
  "L02-006": {
    task: "Eine Aktie steht bei S = 250 €. Schätze mit d ln(x)/dx = 1/x, wie sich ln(S) bei einem Kursanstieg um 5 € ändert, und vergleiche mit dem exakten Wert ln(255/250).",
    hint: "Änderung des Logarithmus ≈ Ableitung mal absolute Änderung.",
    solution: [
      "Näherung: Δln(S) ≈ (1/250) · 5 = 0,02.",
      "Exakt: ln(255/250) = ln(1,02) ≈ 0,0198.",
      "Interpretation: Für kleine Änderungen ist die Änderung des Logarithmus ungefähr die relative Änderung ΔS/S. Deshalb sind Log-Returns bei kleinen Bewegungen fast gleich den einfachen Renditen."
    ]
  },
  "L02-007": {
    task: "Ein Modellwert ist V(S, σ) = S^2 · σ + 5σ^2. Bestimme die partiellen Ableitungen nach S und nach σ und werte sie bei S = 10, σ = 0,2 aus. Welche Variable hat hier den stärkeren lokalen Einfluss?",
    hint: "Bei der partiellen Ableitung wird die jeweils andere Variable wie eine Konstante behandelt.",
    solution: [
      "∂V/∂S = 2Sσ = 2 · 10 · 0,2 = 4.",
      "∂V/∂σ = S^2 + 10σ = 100 + 2 = 102.",
      "Interpretation: Pro Einheit reagiert V auf σ viel stärker als auf S. Die Einheiten sind aber verschieden: σ bewegt sich typischerweise um 0,01, S um mehrere Einheiten, deshalb muss man Sensitivität und typische Schwankung zusammen betrachten."
    ]
  },
  "L02-008": {
    task: "Die Portfoliovarianz zweier Positionen sei f(w1, w2) = w1^2 + 2 · w2^2. Berechne den Gradienten bei (0,6; 0,4) und seine Länge. In welche Richtung steigt die Varianz am stärksten?",
    hint: "Der Gradient besteht aus den beiden partiellen Ableitungen.",
    solution: [
      "∇f = (2w1; 4w2) = (1,2; 1,6) bei (0,6; 0,4).",
      "Länge: sqrt(1,2^2 + 1,6^2) = sqrt(1,44 + 2,56) = sqrt(4) = 2.",
      "Der Gradient zeigt in Richtung des steilsten Anstiegs, hier mit größerem Anteil auf w2.",
      "Interpretation: Mehr Gewicht auf w2 erhöht die Varianz schneller; ein Optimierer würde in die entgegengesetzte Richtung gehen, um Risiko zu senken."
    ]
  },
  "L02-009": {
    task: "Für f(x, y) = 2x^2 − x·y + 3y^2 soll die Krümmung untersucht werden. Berechne die Hessian-Matrix und prüfe mit Spur und Determinante, ob f konvex ist (ein Minimum wahrscheinlich macht).",
    hint: "Zweite Ableitungen: f_xx, f_xy, f_yy. Bei 2x2-Matrizen helfen Determinante und Spur.",
    solution: [
      "f_x = 4x − y, f_y = −x + 6y.",
      "H = [[4, −1], [−1, 6]].",
      "Determinante: 4 · 6 − (−1)^2 = 24 − 1 = 23 > 0, Spur = 10 > 0. Beide Eigenwerte sind positiv, H ist positiv definit.",
      "Interpretation: f ist konvex und krümmt sich in jede Richtung nach oben. Ein kritischer Punkt ist hier ein Minimum."
    ]
  },
  "L02-010": {
    task: "Nähere sqrt(66) mit einer Taylor-Approximation erster Ordnung um x = 64 (Δx = 2) und vergleiche mit dem exakten Wert 8,12404. Wie groß ist der Fehler?",
    hint: "Die Ableitung von sqrt(x) ist 1/(2·sqrt(x)).",
    solution: [
      "f(64) = 8, f'(x) = 1/(2·sqrt(x)), also f'(64) = 1/16 = 0,0625.",
      "Näherung: 8 + 0,0625 · 2 = 8,125.",
      "Exakt: sqrt(66) ≈ 8,12404. Fehler ≈ 0,00096.",
      "Interpretation: Die lineare Näherung ist für kleine Änderungen sehr gut; die Kurve ist konkav, deshalb liegt die Tangente leicht darüber."
    ]
  },
  "L02-011": {
    task: "Nähere ln(55) um x = 50 (Δx = 5) einmal erster und einmal zweiter Ordnung. Nutze ln(50) ≈ 3,91202 und vergleiche mit dem exakten Wert ln(55) ≈ 4,00733.",
    hint: "f' = 1/x und f'' = −1/x^2.",
    solution: [
      "Erste Ordnung: 3,91202 + 5/50 = 3,91202 + 0,1 = 4,01202.",
      "Zweite Ordnung: f''(50) = −1/2500, Korrektur = 0,5 · (−1/2500) · 25 = −0,005. Ergebnis: 4,00702.",
      "Fehler: erste Ordnung ≈ 0,0047, zweite Ordnung ≈ 0,0003.",
      "Interpretation: Der Term mit der zweiten Ableitung erfasst die Krümmung (hier konkav) und verbessert die Näherung deutlich."
    ]
  },
  "L02-012": {
    task: "Zwei unkorrelierte Assets haben Varianzen 0,04 und 0,09. Die Portfoliovarianz mit Gewicht w auf Asset 1 ist V(w) = 0,04·w^2 + 0,09·(1 − w)^2. Bestimme w* mit V'(w*) = 0, prüfe die zweite Ableitung und berechne V(w*).",
    hint: "Ableiten mit der Kettenregel für (1 − w)^2 und gleich null setzen.",
    solution: [
      "V'(w) = 0,08·w − 0,18·(1 − w) = 0,26·w − 0,18.",
      "V'(w) = 0 ergibt w* = 0,18/0,26 = 9/13 ≈ 0,6923.",
      "V''(w) = 0,26 > 0, also ein Minimum.",
      "V(w*) = (81·0,04 + 16·0,09)/169 = 4,68/169 ≈ 0,02769 (Volatilität ca. 16,64%).",
      "Interpretation: Das Minimum-Varianz-Portfolio setzt mehr Gewicht auf das ruhigere Asset und liegt unter beiden Einzelvarianzen."
    ]
  },
  "L03-001": {
    task: "Der Renditevektor x = (0,02; −0,01; 0; 0,035)^T beschreibt vier Assets. Gib die Dimension an, nenne x_4 und x_2, und berechne Summe und Mittelwert der Komponenten. Warum ist ein Vektor hier sinnvoller als eine einzelne Zahl?",
    hint: "Jede Komponente gehört zu genau einem Asset.",
    solution: [
      "Dimension: 4 (vier Assets). x_4 = 0,035 = 3,5%, x_2 = −0,01 = −1%.",
      "Summe: 0,02 − 0,01 + 0 + 0,035 = 0,045.",
      "Mittelwert: 0,045/4 = 0,01125 = 1,125%.",
      "Interpretation: Der Vektor erhält die Zuordnung der einzelnen Werte zu den Assets. Ein Mittelwert allein würde die Unterschiede verbergen."
    ]
  },
  "L03-002": {
    task: "Ein Portfolio hat die Gewichte w = (0,5; 0,3; 0,2) und die Renditen r = (4%; −2%; 10%). Berechne die Portfoliorendite mit dem Skalarprodukt. Welche Assets tragen am meisten bei?",
    hint: "Multipliziere gleiche Komponenten und addiere.",
    solution: [
      "w^T r = 0,5·0,04 + 0,3·(−0,02) + 0,2·0,10.",
      "= 0,02 − 0,006 + 0,02 = 0,034 = 3,4%.",
      "Beiträge: Asset 1 und Asset 3 liefern je 2,0 Prozentpunkte (gleich viel), Asset 2 zieht 0,6 Prozentpunkte ab.",
      "Interpretation: Die Portfoliorendite ist die gewichtete Summe der Einzelrenditen."
    ]
  },
  "L03-003": {
    task: "Die Gewichte eines Portfolios weichen vom Benchmark um d = (0,01; −0,02; 0,02) ab. Berechne die euklidische Norm von d. Was passiert mit der Norm, wenn alle Abweichungen verdoppelt werden?",
    hint: "Quadrieren, addieren, Wurzel ziehen.",
    solution: [
      "||d||_2 = sqrt(0,01^2 + 0,02^2 + 0,02^2) = sqrt(0,0001 + 0,0004 + 0,0004).",
      "= sqrt(0,0009) = 0,03 = 3 Prozentpunkte.",
      "Verdoppeln: Die Norm wird 2 · 0,03 = 0,06, denn ||c·d|| = |c|·||d||.",
      "Interpretation: Die Norm fasst die Gesamtabweichung vom Benchmark (Tracking-Abstand) in einer Zahl zusammen."
    ]
  },
  "L03-004": {
    task: "Faktorrenditen sind f = (4%; 2%)^T. Drei Assets haben die Exposures A = [[2, 1], [0, 3], [1, −1]] (Zeilen = Assets). Berechne z = A f und erkläre die Bedeutung der dritten Komponente.",
    hint: "Jede Zeile von A wird mit f multipliziert.",
    solution: [
      "Asset 1: 2·4 + 1·2 = 10. Asset 2: 0·4 + 3·2 = 6. Asset 3: 1·4 + (−1)·2 = 2.",
      "z = (10%; 6%; 2%)^T.",
      "Die dritte Komponente ist 4% − 2% = 2%: Asset 3 ist long Faktor 1 und short Faktor 2.",
      "Interpretation: Jede Asset-Rendite ist eine gewichtete Summe der Faktorrenditen, A enthält die Gewichte."
    ]
  },
  "L03-005": {
    task: "Gegeben sind A = [[1, 2], [0, 1]] und B = [[3, 0], [1, 2]]. Berechne AB und BA. Was folgt für die Reihenfolge von Transformationen?",
    hint: "Eintrag (i,j) = Zeile i der ersten Matrix mal Spalte j der zweiten.",
    solution: [
      "AB = [[1·3+2·1, 1·0+2·2], [0·3+1·1, 0·0+1·2]] = [[5, 4], [1, 2]].",
      "BA = [[3·1+0·0, 3·2+0·1], [1·1+2·0, 1·2+2·1]] = [[3, 6], [1, 4]].",
      "Es gilt AB ≠ BA.",
      "Interpretation: Die Matrixmultiplikation ist nicht kommutativ. Die Reihenfolge, in der Transformationen (etwa Skalierung und Mischung) angewendet werden, verändert das Ergebnis."
    ]
  },
  "L03-006": {
    task: "Bestimme die Inverse von A = [[2, 1], [1, 1]] und prüfe sie durch Multiplikation. Erkläre, warum B = [[1, 2], [2, 4]] keine Inverse hat.",
    hint: "Für 2x2-Matrizen: Determinante bilden, Diagonale tauschen, Nebendiagonale mit Minus.",
    solution: [
      "det(A) = 2·1 − 1·1 = 1. A^(−1) = (1/1)·[[1, −1], [−1, 2]].",
      "Probe: A·A^(−1) = [[2−1, −2+2], [1−1, −1+2]] = [[1, 0], [0, 1]] = I.",
      "B: det = 1·4 − 2·2 = 0, die zweite Zeile ist das Doppelte der ersten. Die Zeilen sind linear abhängig, B hat keinen vollen Rang.",
      "Interpretation: Eine singuläre Matrix verliert Information und kann nicht rückgängig gemacht werden. Das entspräche zwei perfekt redundanten Assets."
    ]
  },
  "L03-007": {
    task: "Ein Portfolio von 100 € besteht aus x1 in Anleihen (5% Rendite) und x2 in Aktien (10% Rendite) und soll 7,5 € Ertrag bringen: x1 + x2 = 100 und 0,05·x1 + 0,10·x2 = 7,5. Stelle Ax = b auf und löse es.",
    hint: "Setze x1 = 100 − x2 in die zweite Gleichung ein.",
    solution: [
      "A = [[1, 1], [0,05, 0,10]], x = (x1, x2)^T, b = (100, 7,5)^T.",
      "x1 = 100 − x2: 0,05·(100 − x2) + 0,10·x2 = 5 + 0,05·x2 = 7,5, also x2 = 50 und x1 = 50.",
      "Probe: 50 + 50 = 100 und 0,05·50 + 0,10·50 = 2,5 + 5 = 7,5.",
      "Interpretation: Je 50 € erzeugen genau das Ertragsziel. det(A) = 0,05 ≠ 0, die Lösung ist eindeutig."
    ]
  },
  "L03-008": {
    task: "Zwei Assets haben Volatilitäten 20% und 30% und die Korrelation −0,5. Stelle die Kovarianzmatrix auf und prüfe über die Determinante, ob sie gültig ist. Wäre eine Kovarianz von 0,07 bei denselben Varianzen zulässig?",
    hint: "Cov = ρ·σ1·σ2; für eine gültige Matrix darf die Determinante nicht negativ sein.",
    solution: [
      "Varianzen: 0,2^2 = 0,04 und 0,3^2 = 0,09. Cov = −0,5·0,2·0,3 = −0,03.",
      "Σ = [[0,04, −0,03], [−0,03, 0,09]]. det = 0,04·0,09 − 0,03^2 = 0,0036 − 0,0009 = 0,0027 > 0: gültig.",
      "Mit Cov = 0,07: det = 0,0036 − 0,0049 = −0,0013 < 0, nicht positiv semidefinit, also unzulässig. Das entspräche ρ = 0,07/0,06 ≈ 1,17 > 1.",
      "Interpretation: Nicht jede symmetrische Matrix ist eine Kovarianzmatrix."
    ]
  },
  "L03-009": {
    task: "Ein Portfolio hat die Gewichte x = (0,7; 0,3) und die Kovarianzmatrix Σ = [[0,09, 0,02], [0,02, 0,16]]. Berechne die Portfoliovarianz x^T Σ x und die Volatilität.",
    hint: "x^T Σ x = x1^2·σ11 + 2·x1·x2·σ12 + x2^2·σ22.",
    solution: [
      "x1^2·0,09 = 0,49·0,09 = 0,0441.",
      "2·x1·x2·0,02 = 2·0,21·0,02 = 0,0084.",
      "x2^2·0,16 = 0,09·0,16 = 0,0144.",
      "Summe: 0,0441 + 0,0084 + 0,0144 = 0,0669. Volatilität: sqrt(0,0669) ≈ 0,2587 = 25,87%.",
      "Interpretation: Die positive Kovarianz erhöht die Varianz. Bei negativer Kovarianz würde der mittlere Term das Risiko senken."
    ]
  },
  "L03-010": {
    task: "Für A = [[3, 1], [0, 2]] gilt A·(1, 0)^T = 3·(1, 0)^T. Prüfe, ob v = (1, −1)^T ebenfalls ein Eigenvektor ist, und gib gegebenenfalls den Eigenwert an.",
    hint: "Berechne A·v und vergleiche es mit einem Vielfachen von v.",
    solution: [
      "A·v = (3·1 + 1·(−1), 0·1 + 2·(−1))^T = (2, −2)^T.",
      "Es gilt (2, −2)^T = 2·(1, −1)^T, also ist v ein Eigenvektor mit λ = 2.",
      "Interpretation: Entlang v streckt A nur um den Faktor 2, ohne die Richtung zu ändern. Bei (1, 0) ist der Faktor 3. Eigenwerte und Eigenvektoren zeigen die Grundrichtungen der Transformation."
    ]
  },
  "L03-011": {
    task: "Die Kovarianzmatrix von drei Zinskurven-Bewegungen hat die Eigenwerte 0,06; 0,03 und 0,01. Wie viel Varianz erklärt die erste Hauptkomponente, wie viel die ersten beiden zusammen? Reichen zwei Komponenten für 90%?",
    hint: "Anteil = Eigenwert geteilt durch die Summe aller Eigenwerte (= Spur).",
    solution: [
      "Gesamtvarianz: 0,06 + 0,03 + 0,01 = 0,10.",
      "Erste Komponente: 0,06/0,10 = 60%.",
      "Erste zwei: (0,06 + 0,03)/0,10 = 90%, also gerade ausreichend.",
      "Interpretation: Man kann von drei auf zwei Dimensionen reduzieren und behält 90% der Varianz. Ob die Komponenten ökonomisch (z. B. Level, Slope) interpretierbar sind, folgt daraus nicht automatisch."
    ]
  },
  "L03-012": {
    task: "Eine Matrix hat die Singulärwerte 10; 4; 0,5 und 0,1. Wie viel der Gesamtenergie (Summe der quadrierten Singulärwerte) behält die Rang-2-Approximation? Wie groß ist der Approximationsfehler in der Frobenius-Norm?",
    hint: "Energie = Summe der Quadrate; beim Abschneiden entfallen die kleinsten Singulärwerte.",
    solution: [
      "Gesamtenergie: 100 + 16 + 0,25 + 0,01 = 116,26.",
      "Rang 2: (100 + 16)/116,26 = 116/116,26 ≈ 99,78%.",
      "Fehler: sqrt(0,25 + 0,01) = sqrt(0,26) ≈ 0,51.",
      "Interpretation: Die kleinen Singulärwerte tragen kaum Struktur; die Matrix lässt sich mit zwei Komponenten fast verlustfrei komprimieren."
    ]
  },
  "L04-001": {
    task: "Ein Kurs steigt (U) oder fällt (D) an jedem von 5 Tagen, jede der Folgen ist gleich wahrscheinlich. Wie viele Ergebnisse hat der Ergebnisraum? Bestimme P(A) für das Ereignis A = „genau zwei Anstiege“.",
    hint: "Zähle günstige Folgen und teile durch alle Folgen.",
    solution: [
      "Ergebnisraum: 2^5 = 32 Folgen.",
      "Günstige Folgen: Positionen der zwei U unter 5 Tagen, C(5,2) = 10.",
      "P(A) = 10/32 = 0,3125 = 31,25%.",
      "Interpretation: Das Ereignis A ist eine Teilmenge des Ergebnisraums; der Wert liegt zulässig zwischen 0 und 1."
    ]
  },
  "L04-002": {
    task: "Ein Tag hat mit Wahrscheinlichkeit 0,04 einen Verlust von mehr als 2%. Wie wahrscheinlich ist mindestens ein solcher Tag in 5 Handelstagen, wenn die Tage unabhängig sind? Nutze das Gegenereignis.",
    hint: "Zähle nicht, sondern berechne zuerst die Wahrscheinlichkeit für keinen Verlusttag.",
    solution: [
      "Gegenereignis: kein Verlusttag. P = 0,96^5 ≈ 0,81537.",
      "P(mindestens ein Verlusttag) = 1 − 0,81537 ≈ 0,1846 = 18,46%.",
      "Interpretation: Auch bei kleiner Tageswahrscheinlichkeit wird ein Ausreißer über eine Woche mit knapp 18% erstaunlich häufig. Das Komplement ist hier deutlich einfacher als die direkte Summe aller Fälle."
    ]
  },
  "L04-003": {
    task: "A: „Aktie fällt um mehr als 5%“ mit P(A) = 0,30. B: „Zinsen steigen“ mit P(B) = 0,25. Die Ereignisse treten gemeinsam mit P(A∩B) = 0,10 auf. Ein Analyst sagt, P(A oder B) = 0,55. Prüfe das und gib die Wahrscheinlichkeit an, dass keines eintritt.",
    hint: "Beim Addieren wird die Überschneidung doppelt gezählt.",
    solution: [
      "Richtig: P(A∪B) = 0,30 + 0,25 − 0,10 = 0,45.",
      "Der Analyst hat 0,30 + 0,25 = 0,55 gerechnet und die Überschneidung doppelt gezählt.",
      "Keines von beiden: 1 − 0,45 = 0,55.",
      "Interpretation: Die Summe 0,55 ist hier genau die Wahrscheinlichkeit für „weder noch“; der Zufall dieser Zahl zeigt, wie leicht man Größen verwechseln kann."
    ]
  },
  "L04-004": {
    task: "In 1000 Handelstagen fiel der Markt an 200 Tagen (B). An 100 Tagen fiel der Fonds (A), davon an 50 Tagen gleichzeitig mit dem Markt. Berechne P(A), P(A|B) und P(B|A) und interpretiere.",
    hint: "Bei der bedingten Wahrscheinlichkeit wird nur durch die Tage geteilt, an denen die Bedingung gilt.",
    solution: [
      "P(A) = 100/1000 = 0,10. P(B) = 200/1000 = 0,20. P(A∩B) = 50/1000 = 0,05.",
      "P(A|B) = 0,05/0,20 = 0,25. P(B|A) = 0,05/0,10 = 0,50.",
      "Interpretation: Fällt der Markt, steigt die Fondsverlust-Wahrscheinlichkeit von 10% auf 25%. P(A|B) und P(B|A) sind verschieden, die Richtung der Bedingung ist wichtig."
    ]
  },
  "L04-005": {
    task: "Es gilt P(A) = 0,4, P(B) = 0,5 und P(A∩B) = 0,3. Sind A und B unabhängig? Berechne P(A|B) und vergleiche mit P(A).",
    hint: "Vergleiche P(A∩B) mit dem Produkt P(A)·P(B).",
    solution: [
      "Produkt: 0,4·0,5 = 0,2, aber P(A∩B) = 0,3 ≠ 0,2.",
      "Die Ereignisse sind abhängig.",
      "P(A|B) = 0,3/0,5 = 0,6 > P(A) = 0,4.",
      "Interpretation: Tritt B ein, wird A wahrscheinlicher, die Ereignisse treten positiv verbunden auf. Bei Unabhängigkeit wäre P(A|B) = P(A)."
    ]
  },
  "L04-006": {
    task: "Die Ausfallwahrscheinlichkeit einer Anleihe ist 2%. Ein Warnsignal erscheint bei Ausfall mit 90% und ohne Ausfall mit 5%. Wie groß ist P(Ausfall | Signal)? Warum liegt der Wert weit unter 90%?",
    hint: "Zuerst P(Signal) mit dem Gesetz der totalen Wahrscheinlichkeit bestimmen.",
    solution: [
      "P(Signal) = 0,9·0,02 + 0,05·0,98 = 0,018 + 0,049 = 0,067.",
      "P(Ausfall|Signal) = 0,018/0,067 ≈ 0,2687 = 26,87%.",
      "Interpretation: Die meisten Signale stammen von der großen Gruppe der nicht ausfallenden Anleihen (Basisrate). Trotz guter Trefferquote ist ein Signal nur ein Hinweis, kein Beweis."
    ]
  },
  "L04-007": {
    task: "Der Kurs X einer Aktie in einem Jahr ist 80 (p = 0,3), 100 (p = 0,5) oder 130 (p = 0,2). Berechne E[X] und den Erwartungswert der Auszahlung einer Call-Option mit Strike 100, max(X − 100; 0).",
    hint: "Die Auszahlung wird pro Szenario berechnet und dann mit p gewichtet.",
    solution: [
      "E[X] = 80·0,3 + 100·0,5 + 130·0,2 = 24 + 50 + 26 = 100.",
      "Call-Auszahlungen: 0, 0 und 30.",
      "E[Auszahlung] = 0,3·0 + 0,5·0 + 0,2·30 = 6.",
      "Interpretation: Obwohl die erwartete Aktie genau am Strike liegt, ist der Erwartungswert der Option positiv, weil Verluste nach unten abgeschnitten sind."
    ]
  },
  "L04-008": {
    task: "Eine Rendite beträgt −10% mit Wahrscheinlichkeit 0,4 und +15% mit Wahrscheinlichkeit 0,6. Berechne Erwartungswert, Varianz (in %^2) und Standardabweichung.",
    hint: "Zuerst μ bestimmen, dann die quadrierten Abweichungen gewichten.",
    solution: [
      "μ = 0,4·(−10) + 0,6·15 = −4 + 9 = 5%.",
      "Var = 0,4·(−10 − 5)^2 + 0,6·(15 − 5)^2 = 0,4·225 + 0,6·100 = 90 + 60 = 150 (%^2).",
      "Standardabweichung: sqrt(150) ≈ 12,25%.",
      "Kontrolle: E[X^2] − μ^2 = 0,4·100 + 0,6·225 − 25 = 175 − 25 = 150.",
      "Interpretation: Die Standardabweichung ist ein Streumaß in der Einheit der Rendite."
    ]
  },
  "L04-009": {
    task: "Drei gleich wahrscheinliche Szenarien: Aktie X liefert (6%; 2%; −2%), Hedge Y liefert (−1%; 1%; 3%). Berechne Cov(X,Y) in %^2 und deute das Vorzeichen.",
    hint: "Mittelwerte abziehen, Abweichungen multiplizieren, dann den Mittelwert bilden.",
    solution: [
      "μ_X = (6 + 2 − 2)/3 = 2, μ_Y = (−1 + 1 + 3)/3 = 1.",
      "Abweichungen X: (4; 0; −4), Y: (−2; 0; 2).",
      "Produkte: −8, 0, −8, Mittelwert: −16/3 ≈ −5,33 (%^2).",
      "Interpretation: Die Kovarianz ist negativ, Y steigt tendenziell, wenn X fällt. Y eignet sich als Absicherung."
    ]
  },
  "L04-010": {
    task: "Es gelten Cov(X,Y) = −0,012, σ_X = 0,15 und σ_Y = 0,10. Berechne ρ. Ein Kollege meldet ρ = 0,03/(0,1·0,2) für ein anderes Paar; ist das plausibel?",
    hint: "ρ muss immer zwischen −1 und 1 liegen.",
    solution: [
      "ρ = −0,012/(0,15·0,10) = −0,012/0,015 = −0,8: starke negative Korrelation.",
      "Kollege: 0,03/(0,1·0,2) = 0,03/0,02 = 1,5 > 1, das ist unmöglich. Es muss ein Rechen- oder Datenfehler vorliegen, etwa falsche Einheiten oder eine nicht gültige Kovarianz.",
      "Interpretation: Die Korrelation normiert die Kovarianz auf einen einheitenlosen Wert zwischen −1 und 1."
    ]
  },
  "L04-011": {
    task: "Eine Jahresrendite sei normalverteilt mit μ = 8% und σ = 20%. Berechne z für eine Rendite von −12% und gib die Wahrscheinlichkeit P(R < −12%) an (Φ(−1) ≈ 0,1587). Wie wahrscheinlich liegt R zwischen −12% und 28%?",
    hint: "Standardisieren: z = (x − μ)/σ.",
    solution: [
      "z(−12%) = (−12 − 8)/20 = −1. P(R < −12%) = Φ(−1) ≈ 0,1587 = 15,87%.",
      "z(28%) = (28 − 8)/20 = 1.",
      "P(−12% < R < 28%) = Φ(1) − Φ(−1) = 1 − 2·0,1587 ≈ 0,6827 = 68,27%.",
      "Interpretation: Etwa zwei Drittel der Ergebnisse liegen innerhalb einer Standardabweichung um den Mittelwert."
    ]
  },
  "L04-012": {
    task: "Tagesrenditen sind unabhängig mit μ = 0,05% und σ = 1%. Der Durchschnitt über n = 100 Tage ist näherungsweise normalverteilt. Bestimme seine Standardabweichung und die Wahrscheinlichkeit, dass er negativ ist (Φ(−0,5) ≈ 0,3085). Was ändert sich bei n = 400?",
    hint: "Die Standardabweichung des Mittels ist σ/sqrt(n).",
    solution: [
      "n = 100: σ/sqrt(100) = 1%/10 = 0,1%.",
      "z = (0 − 0,05)/0,1 = −0,5, P(Mittel < 0) ≈ 0,3085 = 30,85%.",
      "n = 400: σ/sqrt(400) = 0,05%, z = −1 und P ≈ 0,1587 = 15,87%.",
      "Interpretation: Mehr Beobachtungen verkleinern die Streuung des Mittels mit 1/sqrt(n). Der zentrale Grenzwertsatz rechtfertigt die Normalnäherung."
    ]
  }
});
