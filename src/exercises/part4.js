window.QUANT_EXERCISES = Object.assign(window.QUANT_EXERCISES || {}, {
  "L10-001": {
    task: "Ein Händler hält über zwei Schritte der Länge 0,25 Jahre die Positionen H_0 = 2 und H_1 = -1 (am Schrittanfang festgelegt). Die Brownian-Inkremente sind ΔW_0 = 0,3 und ΔW_1 = -0,4. Berechne die Ito-Summe ∑ H_i ΔW_i und erkläre, warum H_1 nicht von ΔW_1 abhängen darf.",
    hint: "Jede Position wird mit dem Inkrement multipliziert, das erst nach ihrer Festlegung eintritt.",
    solution: [
      "Schritt 0: 2 · 0,3 = 0,6.",
      "Schritt 1: (-1) · (-0,4) = 0,4.",
      "Summe: 0,6 + 0,4 = **1,0**.",
      "Ito-Konvention: H_i wird am linken Intervallende gewählt (vorhersehbar). Würde H_1 das Inkrement ΔW_1 schon kennen, könnte man Gewinne ohne Risiko konstruieren, das Integral wäre kein faires Handelsergebnis mehr."
    ]
  },
  "L10-002": {
    task: "Ein Prozess H_t = 2t wird auf [0, 3] gegen eine Brownsche Bewegung integriert, X = ∫_0^3 2t dW_t. Berechne E[X] und Var(X) mit der Ito-Isometrie und gib die Standardabweichung an.",
    hint: "Der Erwartungswert eines Ito-Integrals ist 0; für die Varianz brauchst du das Integral von H_t^2.",
    solution: [
      "E[X] = 0, da das Ito-Integral ein Martingal mit Start 0 ist.",
      "Var(X) = E[∫_0^3 (2t)^2 dt] = ∫_0^3 4t^2 dt = 4 · 3^3/3 = 4 · 9 = **36**.",
      "Standardabweichung = sqrt(36) = **6**.",
      "Interpretation: Je später der Integrand groß wird, desto mehr Varianz sammelt sich an; die Isometrie ersetzt die Pfadrechnung durch ein gewöhnliches Integral."
    ]
  },
  "L10-003": {
    task: "Sei dX = 0,1 dt + 0,2 dW und f(X) = X^3. Bestimme mit Ito's Lemma Drift und Diffusionskoeffizient von df an der Stelle X = 2. Was würde die naive Kettenregel (ohne Zusatzterm) als Drift liefern?",
    hint: "Du brauchst f' = 3X^2 und f'' = 6X sowie (dX)^2 = σ^2 dt.",
    solution: [
      "f' = 3·2^2 = 12, f'' = 6·2 = 12.",
      "Drift (Ito) = f'·μ + 1/2·f''·σ^2 = 12·0,1 + 0,5·12·0,04 = 1,2 + 0,24 = **1,44**.",
      "Diffusion = f'·σ = 12·0,2 = **2,4**.",
      "Naive Kettenregel: nur 1,2. Der Unterschied 0,24 ist der Krümmungsterm; er ist positiv, weil f konvex ist."
    ]
  },
  "L10-004": {
    task: "Ein Zeitraum von 0,25 Jahren wird in 63 gleiche Schritte geteilt. Wie groß ist Δt, wie groß ist die typische Größe eines Inkrements |ΔW| (Standardabweichung) und was ergibt die Summe der erwarteten quadrierten Inkremente?",
    hint: "Var(ΔW) = Δt, und die Summe läuft über alle 63 Schritte.",
    solution: [
      "Δt = 0,25/63 ≈ 0,003968.",
      "Standardabweichung von ΔW = sqrt(Δt) ≈ 0,0630.",
      "E[(ΔW)^2] = Δt für jeden Schritt, Summe über 63 Schritte = 63 · 0,003968 = **0,25**.",
      "Die quadratische Variation ist also gleich der Zeitspanne (hier 0,25) und hängt nicht von der Feinheit der Zerlegung ab; deshalb darf (dW)^2 = dt gesetzt werden."
    ]
  },
  "L10-005": {
    task: "Eine Aktie folgt einer GBM mit μ = 12 % und σ = 30 %, S_0 = 100, Horizont T = 2 Jahre. Berechne die Drift von ln S, den Median von S_T (= exp des Erwartungswerts von ln S_T) und E[S_T].",
    hint: "Der Median nutzt μ - σ^2/2, der Erwartungswert von S_T nutzt μ.",
    solution: [
      "Drift von ln S: μ - σ^2/2 = 0,12 - 0,045 = **0,075** pro Jahr.",
      "Median: 100 · exp(0,075 · 2) = 100 · exp(0,15) ≈ **116,18**.",
      "Erwartungswert: 100 · exp(0,12 · 2) = 100 · exp(0,24) ≈ **127,12**.",
      "Mittelwert > Median: die rechtsschiefe Lognormalverteilung zieht den Erwartungswert nach oben, genau das erfasst der Ito-Korrekturterm."
    ]
  },
  "L10-006": {
    task: "Ein Portfolio hält 10 Aktien (Kurs steigt von 80 auf 82) und 400 EUR auf einem Bondkonto, das in der Periode 3 % Zins bringt. Zu Periodenende zahlt der Anleger zusätzlich 100 EUR ein. Wie groß ist der Gewinn, den eine selbstfinanzierende Rechnung dem Portfolio zuschreibt, und wie groß ist der Endwert?",
    hint: "Einzahlungen von außen sind kein Handelsgewinn.",
    solution: [
      "Startwert: 10·80 + 400 = 1200.",
      "Aktiengewinn: 10 · (82 - 80) = 20; Zins: 400 · 0,03 = 12.",
      "Selbstfinanzierender Wertzuwachs = 20 + 12 = **32**, Wert vor Einzahlung 1232.",
      "Mit der Einzahlung ist der Kontostand 1332, aber das Portfolio ist dann nicht mehr selbstfinanzierend; die 100 EUR gehören nicht zum Gewinn."
    ]
  },
  "L10-007": {
    task: "Eine nicht dividendenzahlende Aktie hat S_0 = 50, reale Drift μ = 9 %, risikofreier Zins r = 3 %, Horizont T = 1. Berechne E^P[S_T], E^Q[S_T] und den abgezinsten Wert e^{-rT}·E^Q[S_T]. Welche Zahl ist der faire heutige Preis?",
    hint: "Unter Q wächst der Preis mit r, nicht mit μ.",
    solution: [
      "E^P[S_T] = 50·exp(0,09) ≈ 54,70.",
      "E^Q[S_T] = 50·exp(0,03) ≈ **51,52**.",
      "Abgezinst: exp(-0,03) · 51,52 = **50,00**.",
      "Der faire heutige Preis ist 50 (der Marktpreis). Die höhere reale Drift μ entschädigt für Risiko und taucht in der Bewertung nicht auf."
    ]
  },
  "L10-008": {
    task: "Prüfe, ob V(S,t) = S^2 die Black-Scholes-PDE mit r = 0,04 und σ = 0,25 erfüllt. Berechne dazu das Residuum V_t + 1/2 σ^2 S^2 V_SS + r S V_S - r V an der Stelle S = 10.",
    hint: "V_t = 0, V_S = 2S, V_SS = 2.",
    solution: [
      "V_t = 0; V_S = 20; V_SS = 2.",
      "1/2 · 0,0625 · 100 · 2 = 6,25; r·S·V_S = 0,04 · 10 · 20 = 8; r·V = 0,04 · 100 = 4.",
      "Residuum = 0 + 6,25 + 8 - 4 = **10,25** (= (σ^2 + r)·S^2).",
      "Residuum ≠ 0, also löst S^2 die PDE nicht und kann kein arbitragefreier Preis sein. Erst die Zeitabhängigkeit S^2·exp((2r+σ^2)(T-t)) macht daraus eine Lösung."
    ]
  },
  "L10-009": {
    task: "Eine Digitaloption zahlt 1 EUR, wenn S_T > K gilt. Unter dem risikoneutralen Maß ist P^Q(S_T > K) = 0,45, r = 2 %, T = 2 Jahre. Bestimme den Preis mit Feynman-Kac und erkläre, warum die reale Eintrittswahrscheinlichkeit nicht verwendet wird.",
    hint: "Payoff-Erwartung unter Q, dann mit exp(-rT) abzinsen.",
    solution: [
      "E^Q[Payoff] = 1 · 0,45 = 0,45.",
      "Preis = exp(-0,02 · 2) · 0,45 = exp(-0,04) · 0,45 ≈ 0,9608 · 0,45 ≈ **0,4324 EUR**.",
      "Die reale Wahrscheinlichkeit ist für die Replikationskosten irrelevant; maßgeblich sind die Wahrscheinlichkeiten unter Q, die durch No-Arbitrage festgelegt sind."
    ]
  },
  "L10-010": {
    task: "Einperiodenbaum: S_0 = 100, S_1 = 110 (hoch) oder 95 (runter), einfacher Zins pro Periode 2 %. Bestimme die risikoneutrale Wahrscheinlichkeit q und den Preis eines Calls mit K = 100. Zeige, dass S_0 ein Martingal-Check besteht.",
    hint: "q folgt aus 100·1,02 = q·110 + (1-q)·95.",
    solution: [
      "q = (1,02·100 - 95)/(110 - 95) = 7/15 ≈ **0,4667**.",
      "Call-Payoffs: 10 (hoch), 0 (runter). Preis = (q·10)/1,02 ≈ 4,667/1,02 ≈ **4,575**.",
      "Check: (q·110 + (1-q)·95)/1,02 = 102/1,02 = 100 = S_0, der abgezinste Preis ist unter Q ein Martingal.",
      "Dasselbe q bewertet jedes Derivat in diesem Modell konsistent."
    ]
  },
  "L10-011": {
    task: "Für eine GBM gilt S_0 = 40, μ = 8 %, σ = 25 %. Nach t = 1 Jahr wurde W_1 = 0,8 realisiert. Berechne S_1 aus der Exponentiallösung und nenne, was passiert, wenn man den Term -σ^2/2 vergisst.",
    hint: "Exponent = (μ - σ^2/2)·t + σ·W_t.",
    solution: [
      "Exponent = (0,08 - 0,03125) · 1 + 0,25 · 0,8 = 0,04875 + 0,2 = 0,24875.",
      "S_1 = 40 · exp(0,24875) ≈ **51,30**.",
      "Ohne Korrektur: 40 · exp(0,28) ≈ 52,92, also rund 1,6 zu hoch.",
      "Der Preis bleibt wegen der Exponentialform stets positiv."
    ]
  },
  "L10-012": {
    task: "Eine delta-gehedgte Optionsposition hat Theta V_t = -4,2 pro Jahr, Gamma V_SS = 0,03, S = 100 und σ = 20 %. Berechne den lokalen deterministischen Drift V_t + 1/2 σ^2 S^2 V_SS pro Jahr und für einen Handelstag (1/252 Jahr).",
    hint: "Der Diffusionsterm ist weggehedgt; nur Theta und der Gamma-Term bleiben.",
    solution: [
      "1/2 · 0,04 · 10000 · 0,03 = 6,0.",
      "Drift = -4,2 + 6,0 = **1,8 pro Jahr**.",
      "Pro Tag: 1,8/252 ≈ **0,00714**.",
      "Dieser Wert ist deterministisch und muss bei No-Arbitrage dem risikofreien Ertrag des gebundenen Kapitals entsprechen."
    ]
  },
  "L10-013": {
    task: "Sei f(W) = W^2, W = 1 und das Inkrement Δt = 0,01 mit realisiertem ΔW = 0,15. Berechne die exakte Änderung Δf, den Term erster Ordnung f'ΔW und den Term zweiter Ordnung 1/2 f''(ΔW)^2. Welchen Wert hat der zweite Term im Erwartungswert?",
    hint: "E[(ΔW)^2] = Δt.",
    solution: [
      "Exakt: 1,15^2 - 1 = 0,3225.",
      "Erster Ordnung: 2·1·0,15 = 0,3.",
      "Zweiter Ordnung: 1/2 · 2 · 0,0225 = 0,0225; Summe 0,3225 stimmt exakt.",
      "Erwartungswert des zweiten Terms: 1/2 · 2 · 0,01 = **0,01**. Er bleibt in der Grenze dt → 0 bestehen, weil (dW)^2 = dt nicht verschwindet."
    ]
  },
  "L10-014": {
    task: "Eine Aktie hat μ = 6 % und σ = 40 %, S_0 = 100, Horizont 5 Jahre. Wie lautet die Drift von ln S? Berechne den Median und E[S_T]. Wie ist es möglich, dass der Median unter S_0 liegt, obwohl μ > 0?",
    hint: "Vergleiche μ mit σ^2/2.",
    solution: [
      "Drift von ln S: 0,06 - 0,5 · 0,16 = 0,06 - 0,08 = **-0,02**.",
      "Median: 100 · exp(-0,02 · 5) = 100 · exp(-0,1) ≈ **90,48**.",
      "E[S_T] = 100 · exp(0,06 · 5) = 100 · exp(0,3) ≈ **134,99**.",
      "Hohe Volatilität drückt das typische (Median-)Wachstum, während wenige sehr hohe Pfade den Erwartungswert tragen."
    ]
  },
  "L10-015": {
    task: "Ein Portfolio hält 3 Aktien zu je 52 (zuvor 50) und 100 EUR Bargeld (Zins in diesem Schritt vernachlässigt). Der Händler stockt auf 4 Aktien auf und kauft die Aktie zu 52. Wie hoch ist der Kontostand danach, wenn das Portfolio selbstfinanzierend sein soll, und welcher Wert wird ausgewiesen? Welcher Fehler läge bei unverändertem Konto von 100 vor?",
    hint: "Der Kauf wird aus dem Bondkonto bezahlt.",
    solution: [
      "Wert nach der Kursbewegung: 3·52 + 100 = 256.",
      "Kauf einer Aktie zu 52 aus dem Konto: Konto = 100 - 52 = **48**, Wert = 4·52 + 48 = **256** (unverändert).",
      "Bliebe das Konto bei 100, wäre der Wert 308, also 52 EUR ohne Quelle, das wäre eine Scheineinzahlung und widerspricht der Selbstfinanzierung.",
      "Umschichtung ändert die Zusammensetzung, nicht den Wert."
    ]
  },
  "L10-016": {
    task: "Du bist long 10 Calls mit Delta 0,55 und Gamma 0,04 und hedgest mit einer Short-Position in der Aktie. Wie viele Aktien musst du leerverkaufen? Berechne den P&L-Beitrag aus Gamma, wenn die Aktie um 1 steigt (Theta ignoriert) und begründe, warum Nachhedgen nötig ist.",
    hint: "Hedge-Menge = Delta · Anzahl; Gamma-Gewinn = 1/2 · Gamma · Anzahl · (ΔS)^2.",
    solution: [
      "Short-Menge = 0,55 · 10 = **5,5 Aktien**.",
      "Delta-Effekt der Calls: 10 · 0,55 · 1 = 5,5, die Short-Aktien verlieren 5,5, netto 0.",
      "Gamma-Beitrag: 1/2 · 0,04 · 10 · 1^2 = **0,2** (Gewinn).",
      "Delta ändert sich mit S, daher muss die Aktienposition angepasst werden, sonst bleibt das Portfolio nicht dauerhaft diffusionsfrei."
    ]
  },
  "L10-017": {
    task: "Für einen Call gelten bei S = 100, r = 5 %, σ = 30 % die Größen Theta V_t = -9,25, Delta = 0,6 und Gamma = 0,015. Bestimme V mit der Black-Scholes-PDE V_t + 1/2 σ^2 S^2 V_SS + r S V_S - r V = 0.",
    hint: "Löse die PDE nach V auf; alle anderen Terme sind bekannt.",
    solution: [
      "1/2 σ^2 S^2 Γ = 0,5 · 0,09 · 10000 · 0,015 = 6,75.",
      "r·S·Δ = 0,05 · 100 · 0,6 = 3,0.",
      "-9,25 + 6,75 + 3,0 = 0,5, also r·V = 0,5.",
      "V = 0,5/0,05 = **10**. Der Optionswert ergibt sich aus Theta, Gamma und Delta, wenn das delta-neutrale Portfolio nur den risikofreien Zins verdienen darf."
    ]
  },
  "L10-018": {
    task: "Eine Aktie mit S_0 = 100, μ = 10 %, σ = 20 % und r = 3 % wird bewertet. Berechne den Marktpreis des Risikos λ = (μ - r)/σ, sowie E^P[S_1] und E^Q[S_1]. Welche Größe ändert sich beim Maßwechsel nicht?",
    hint: "Beim Maßwechsel wird nur die Drift ersetzt.",
    solution: [
      "λ = (0,10 - 0,03)/0,20 = **0,35**.",
      "E^P[S_1] = 100 · exp(0,10) ≈ 110,52.",
      "E^Q[S_1] = 100 · exp(0,03) ≈ **103,05**.",
      "Die Volatilität σ = 20 % bleibt unverändert, nur die Drift wird zu r."
    ]
  },
  "L10-019": {
    task: "Bewerte mit Feynman-Kac einen Payoff S_T^2, wenn S_0 = 10, r = 3 %, σ = 20 %, T = 1 gilt. Nutze E^Q[S_T^2] = S_0^2 · exp((2r + σ^2)T).",
    hint: "Erst E^Q[S_T^2] berechnen, dann mit exp(-rT) abzinsen.",
    solution: [
      "2r + σ^2 = 0,06 + 0,04 = 0,10.",
      "E^Q[S_T^2] = 100 · exp(0,10) ≈ 110,52.",
      "V = exp(-0,03) · 110,52 = 100 · exp(0,07) ≈ **107,25**.",
      "Das passt zur PDE-Lösung S^2·exp((2r+σ^2)(T-t)) abgezinst mit exp(-r(T-t)), also zu 100·exp(0,07)."
    ]
  },
  "L10-020": {
    task: "Für W_T = 1,2 und T = 1 ist ∫_0^T W dW (Ito) = (W_T^2 - T)/2. Berechne diesen Wert und vergleiche ihn mit dem Ergebnis der gewöhnlichen Rechenregel W_T^2/2. Was ist die Differenz und woher kommt sie?",
    hint: "Die gewöhnliche Regel kennt den Term T/2 nicht.",
    solution: [
      "Ito: (1,44 - 1)/2 = **0,22**.",
      "Gewöhnlich: 1,44/2 = 0,72.",
      "Differenz = T/2 = **0,5**.",
      "Der Term stammt aus der quadratischen Variation von W: Ito-Integrale folgen nicht der klassischen Kettenregel."
    ]
  },
  "L10-021": {
    task: "Ein Call kostet 12,4 bei S = 90 und hat Delta 0,7. Wie viele Aktien und wie viel Bondposition (Kredit oder Anlage) repliziert ihn? Was ist die Replikation für 100 Calls?",
    hint: "C = Δ·S + B, also B = C - Δ·S.",
    solution: [
      "Aktienwert: 0,7 · 90 = 63.",
      "B = 12,4 - 63 = **-50,6**, also 50,60 Kredit.",
      "Für 100 Calls: 70 Aktien kaufen und 5060 EUR leihen.",
      "Ein Call ist damit wie eine gehebelte Aktienposition; der Preis entspricht den Kosten dieser Replikation."
    ]
  },
  "L11-001": {
    task: "Fünf unabhängige Simulationen eines abgezinsten Payoffs liefern 4,2; 5,1; 3,9; 4,8; 5,0. Berechne den Monte-Carlo-Schätzer des Erwartungswerts und beurteile, ob fünf Pfade ausreichen.",
    hint: "Arithmetischer Mittelwert der Y_i.",
    solution: [
      "Summe: 4,2 + 5,1 + 3,9 + 4,8 + 5,0 = 23,0.",
      "μ_hat = 23,0/5 = **4,6**.",
      "Fünf Pfade sind zu wenig, um die Genauigkeit zu bewerten; man braucht zusätzlich den Standardfehler.",
      "Der Schätzer ist erwartungstreu, aber seine Streuung sinkt nur mit 1/sqrt(N)."
    ]
  },
  "L11-002": {
    task: "Die Stichprobenstandardabweichung eines simulierten Payoffs ist s = 12. Wie viele Pfade braucht man für einen Standardfehler von 0,03? Um welchen Faktor steigt N, wenn der Fehler auf 0,015 halbiert werden soll?",
    hint: "Löse SE = s/sqrt(N) nach N auf.",
    solution: [
      "N = (s/SE)^2 = (12/0,03)^2 = 400^2 = **160000**.",
      "Für SE = 0,015: N = (12/0,015)^2 = 640000.",
      "Faktor 640000/160000 = **4**.",
      "Halber Fehler kostet vierfachen Rechenaufwand."
    ]
  },
  "L11-003": {
    task: "Aus N = 2500 Pfaden ergeben sich Mittelwert 7,40 und s = 5. Bestimme SE und das 95-%-Band. Liegt ein Vergleichspreis von 7,55 im Band?",
    hint: "SE = s/sqrt(N), Band = Mittelwert ± 1,96·SE.",
    solution: [
      "SE = 5/sqrt(2500) = 5/50 = **0,1**.",
      "Band: 7,40 ± 0,196 = **[7,204; 7,596]**.",
      "7,55 liegt im Band, es gibt also keinen statistischen Widerspruch.",
      "Das Band beschreibt nur den Stichprobenfehler, nicht Modellfehler oder Diskretisierungsbias."
    ]
  },
  "L11-004": {
    task: "Ein Ausfallzeitpunkt ist exponentialverteilt mit Rate λ = 0,5 pro Jahr, F^{-1}(u) = -ln(1-u)/λ. Berechne X für u = 0,8 und für u = 0,5. Was bedeutet der zweite Wert?",
    hint: "Setze u in die Inverse ein.",
    solution: [
      "u = 0,8: X = -ln(0,2)/0,5 = 1,6094/0,5 ≈ **3,219 Jahre**.",
      "u = 0,5: X = -ln(0,5)/0,5 = 0,6931/0,5 ≈ **1,386 Jahre** (Median).",
      "Gleichverteilte Zufallszahlen werden über die inverse Verteilungsfunktion in beliebig verteilte Werte transformiert; u = 0,5 liefert immer den Median."
    ]
  },
  "L11-005": {
    task: "Box-Muller mit U_1 = 0,2 und U_2 = 0,125: Berechne Z = sqrt(-2 ln U_1)·cos(2π U_2). Warum darf U_1 nicht 0 sein?",
    hint: "2π·0,125 = π/4.",
    solution: [
      "sqrt(-2 ln 0,2) = sqrt(3,2189) ≈ 1,7941.",
      "cos(π/4) ≈ 0,7071.",
      "Z ≈ 1,7941 · 0,7071 ≈ **1,269**.",
      "Bei U_1 = 0 wäre ln(U_1) nicht definiert (unendlich); die Gleichverteilung muss im offenen Intervall (0,1) liegen."
    ]
  },
  "L11-006": {
    task: "Euler-Maruyama für eine GBM: X_0 = 100, μ = 6 %, σ = 20 %, Δt = 0,25 und ein Zufallswert Z = -0,5. Berechne X_1 und nenne die Drift- und Schocktermbeiträge.",
    hint: "a = μ·X, b = σ·X; Schock = b·sqrt(Δt)·Z.",
    solution: [
      "Drift: 100 · 0,06 · 0,25 = 1,5.",
      "Schock: 100 · 0,2 · sqrt(0,25) · (-0,5) = 20 · 0,5 · (-0,5) = -5.",
      "X_1 = 100 + 1,5 - 5 = **96,5**.",
      "Das Verfahren ist eine Näherung; mit kleinerem Δt sinkt der Diskretisierungsfehler."
    ]
  },
  "L11-007": {
    task: "Bei der Bisektion für implizite Vola ist f(σ) = Modellpreis - Marktpreis. Es gilt f(0,1) = -1,2 und f(0,5) = +2,0, f(0,3) = +0,4. Welches Intervall bleibt nach dem ersten Schritt? Wie viele Halbierungen reichen für Intervallbreite unter 0,001?",
    hint: "Das neue Intervall hat entgegengesetzte Vorzeichen an den Rändern; Breite = 0,4/2^n.",
    solution: [
      "Mittelpunkt 0,3 mit f > 0, also liegt die Nullstelle in **[0,1; 0,3]** (f(0,1) < 0, f(0,3) > 0).",
      "Breite nach n Schritten: 0,4/2^n < 0,001 ⇒ 2^n > 400.",
      "2^8 = 256 reicht nicht, 2^9 = 512 reicht: **n = 9**.",
      "Bisektion ist langsam, aber robust."
    ]
  },
  "L11-008": {
    task: "Bestimme die Rendite y einer Nullkuponanleihe (Nennwert 100, 2 Jahre, Preis 90) mit Newton-Raphson für f(y) = 100/(1+y)^2 - 90, Startwert y_0 = 0,05. Berechne y_1 (f'(y) = -200/(1+y)^3).",
    hint: "y_1 = y_0 - f(y_0)/f'(y_0).",
    solution: [
      "f(0,05) = 100/1,1025 - 90 ≈ 0,7029.",
      "f'(0,05) = -200/1,157625 ≈ -172,77.",
      "y_1 = 0,05 + 0,7029/172,77 ≈ **0,05407**.",
      "Eine weitere Iteration ergibt ≈ 0,05409 (exakt: sqrt(100/90) - 1 ≈ 5,409 %), schnelle Konvergenz."
    ]
  },
  "L11-009": {
    task: "Optionspreise: V(98) = 3,18, V(100) = 4,45, V(102) = 5,90 (h = 2). Schätze Gamma mit der zentralen Differenz. Wie würde sich der Wert ändern, wenn die Preise nur auf 2 Nachkommastellen gerundet wären und h = 0,01?",
    hint: "Gamma ≈ (V+ - 2V + V-)/h^2.",
    solution: [
      "Zähler: 5,90 - 8,90 + 3,18 = 0,18.",
      "Gamma ≈ 0,18/4 = **0,045**.",
      "Bei h = 0,01 wird durch 0,0001 geteilt, ein Rundungsfehler von 0,005 im Preis erzeugt Fehler der Größenordnung 0,005/0,0001 = 50, also völlig unbrauchbar.",
      "Es gibt einen Kompromiss zwischen Trunkations- und Rundungsfehler."
    ]
  },
  "L11-010": {
    task: "Eine Forward-Rate steigt von f(0) = 2 % auf f(2) = 4 % (f(1) = 2,5 %). Berechne ∫_0^2 f dt mit einer Trapezregel über ein Intervall und über zwei Intervalle, daraus jeweils den Diskontfaktor e^{-∫f}.",
    hint: "Trapez: Breite · (links + rechts)/2.",
    solution: [
      "Ein Trapez: 2 · (0,02 + 0,04)/2 = 0,06, Diskontfaktor e^{-0,06} ≈ **0,9418**.",
      "Zwei Trapeze: 1·(0,02+0,025)/2 + 1·(0,025+0,04)/2 = 0,0225 + 0,0325 = 0,055, Diskontfaktor e^{-0,055} ≈ **0,9465**.",
      "Weil die Kurve konvex ist, überschätzt das grobe Trapez das Integral; mehr Stützstellen verringern den Fehler."
    ]
  },
  "L11-011": {
    task: "Nullkuponsätze: 2 Jahre 3,0 %, 5 Jahre 3,9 %. Schätze den 3-Jahres-Satz per linearer Interpolation. Warum wäre ein 7-Jahres-Satz mit derselben Formel problematisch?",
    hint: "Steigung = (3,9 - 3,0)/(5 - 2) pro Jahr.",
    solution: [
      "Steigung = 0,9/3 = 0,3 Prozentpunkte pro Jahr.",
      "y(3) = 3,0 + (3 - 2) · 0,3 = **3,3 %**.",
      "7 Jahre liegt außerhalb [2; 5], es wäre Extrapolation (3,0 + 5·0,3 = 4,5 %) ohne Datenstützung und deutlich unsicherer.",
      "Lineare Interpolation ignoriert die Krümmung der Kurve."
    ]
  },
  "L11-012": {
    task: "Ein Modell prognostiziert ŷ = (10,2; 9,8; 10,5; 10,0), beobachtet wurden y = (10; 10; 10; 10,5). Berechne RMSE und MAE. Warum ist RMSE größer als MAE?",
    hint: "Fehler ŷ-y: 0,2; -0,2; 0,5; -0,5.",
    solution: [
      "Quadrate: 0,04 + 0,04 + 0,25 + 0,25 = 0,58; Mittel 0,145.",
      "RMSE = sqrt(0,145) ≈ **0,381**.",
      "MAE = (0,2 + 0,2 + 0,5 + 0,5)/4 = **0,35**.",
      "RMSE bestraft die großen Fehler (0,5) stärker, deshalb RMSE ≥ MAE."
    ]
  },
  "L12-001": {
    task: "Ein Portfolio hält Gewichte 50 %, 30 % und 20 % in drei Assets mit Renditen 4 %, -2 % und 10 %. Berechne die Portfoliorendite. Warum gilt die Formel nach einem Jahr ohne Rebalancing nicht mehr mit denselben Gewichten?",
    hint: "r_p = Summe w_i · r_i.",
    solution: [
      "0,5 · 4 % = 2,0 %; 0,3 · (-2 %) = -0,6 %; 0,2 · 10 % = 2,0 %.",
      "r_p = **3,4 %**.",
      "Nach der Periode verändern die unterschiedlichen Renditen die Gewichte (Drift); für die nächste Periode müssen die neuen Gewichte benutzt oder rebalanciert werden."
    ]
  },
  "L12-002": {
    task: "Gewichte w = (0,6; 0,4), Kovarianzmatrix Σ = [[0,04; 0,006]; [0,006; 0,01]]. Berechne σ_p^2 = w^T Σ w und σ_p.",
    hint: "Σ_11 w_1^2 + Σ_22 w_2^2 + 2 Σ_12 w_1 w_2.",
    solution: [
      "0,36 · 0,04 = 0,0144; 0,16 · 0,01 = 0,0016; 2 · 0,24 · 0,006 = 0,00288.",
      "σ_p^2 = **0,01888**.",
      "σ_p = sqrt(0,01888) ≈ **13,74 %**.",
      "Das liegt unter dem gewichteten Mittel der Einzelvolas (0,6·20 % + 0,4·10 % = 16 %): Diversifikationseffekt."
    ]
  },
  "L12-003": {
    task: "Asset 1: σ_1 = 25 %, Asset 2: σ_2 = 15 %, Gewichte 70 % / 30 %. Berechne σ_p für ρ = -0,2 und vergleiche mit ρ = 1.",
    hint: "Bei ρ = 1 ist die Vola das gewichtete Mittel.",
    solution: [
      "Terme: 0,49 · 0,0625 = 0,030625; 0,09 · 0,0225 = 0,002025; 2·0,7·0,3·(-0,2)·0,25·0,15 = -0,00315.",
      "σ_p^2 = 0,0295, σ_p ≈ **17,18 %**.",
      "ρ = 1: σ_p = 0,7·25 % + 0,3·15 % = **22 %**.",
      "Niedrige Korrelation senkt das Risiko um ca. 4,8 Prozentpunkte."
    ]
  },
  "L12-004": {
    task: "Ein Fonds hat monatlich eine mittlere Überschussrendite von 0,5 % bei 3 % monatlicher Volatilität. Berechne die monatliche und die annualisierte Sharpe Ratio.",
    hint: "Annualisierung mit sqrt(12).",
    solution: [
      "Monatlich: 0,5/3 ≈ **0,167**.",
      "Annualisiert: 0,167 · sqrt(12) ≈ **0,577**.",
      "Sharpe-Ratios sind nur bei gleicher Frequenz vergleichbar; Sharpe misst Rendite pro Risikoeinheit, nicht Schwanzrisiken."
    ]
  },
  "L12-005": {
    task: "Eine Aktie hat σ_i = 36 %, der Markt σ_m = 20 %, Korrelation ρ = 0,5. Berechne Beta und die erwartete Aktienrendite im Marktszenario +10 % (ohne Alpha, Zins 0).",
    hint: "β = ρ · σ_i/σ_m.",
    solution: [
      "β = 0,5 · 36/20 = **0,9**.",
      "Erwartete Rendite: 0,9 · 10 % = **9 %**.",
      "Das Beta erfasst nur systematisches Risiko; die restliche Vola (idiosynkratisch) bleibt bestehen."
    ]
  },
  "L12-006": {
    task: "Aktive Monatsrenditen (Portfolio minus Benchmark) in Prozent: 0,5; -0,3; 0,2; 0,0; 0,4; -0,2. Berechne den Tracking Error (Stichproben-Std.) monatlich und annualisiert.",
    hint: "Mittelwert 0,1 %, danach Abweichungen quadrieren, durch n-1 teilen.",
    solution: [
      "Abweichungen: 0,4; -0,4; 0,1; -0,1; 0,3; -0,3, Quadrate: 0,16+0,16+0,01+0,01+0,09+0,09 = 0,52.",
      "Varianz = 0,52/5 = 0,104; TE monatlich = **0,322 %**.",
      "Annualisiert: 0,322 · sqrt(12) ≈ **1,117 %**.",
      "Der TE misst die Streuung der Abweichung, nicht deren Höhe."
    ]
  },
  "L12-007": {
    task: "Manager A hat 1,2 % aktive Rendite p. a. bei 3 % TE, Manager B 2,0 % bei 8 % TE. Berechne beide Information Ratios und beurteile.",
    hint: "IR = aktive Rendite / TE.",
    solution: [
      "IR_A = 1,2/3 = **0,40**.",
      "IR_B = 2,0/8 = **0,25**.",
      "A liefert mehr Outperformance pro Einheit aktives Risiko, auch wenn B absolut mehr bringt.",
      "Die IR ist von Messzeitraum und Schätzfehler abhängig."
    ]
  },
  "L12-008": {
    task: "Ein Portfolio von 2 Mio. EUR hat tägliche Volatilität 1,5 % (Mittelwert 0, Normalverteilung). Berechne den 1-Tages-VaR (99 %, z = 2,326) und den 10-Tages-VaR mit der Wurzel-Zeit-Regel.",
    hint: "VaR = z · σ · Portfoliowert.",
    solution: [
      "1-Tages-VaR = 2,326 · 0,015 · 2.000.000 = **69.780 EUR**.",
      "10-Tages-VaR = 69.780 · sqrt(10) ≈ **220.664 EUR**.",
      "Mit 99 % Wahrscheinlichkeit wird der Verlust nicht größer; wie groß er bei Überschreitung ist, sagt VaR nicht."
    ]
  },
  "L12-009": {
    task: "Bei 100 historischen Tagesverlusten sind die fünf größten (in %): 3,1; 3,4; 4,0; 5,2; 7,9. Bestimme den 95-%-VaR (fünftgrößter Verlust) und ES als Mittel dieser 5 Verluste. Was zeigt der Unterschied?",
    hint: "VaR ist ein Quantil, ES der Mittelwert im Schwanz.",
    solution: [
      "VaR_95 = **3,1 %**.",
      "ES = (3,1 + 3,4 + 4,0 + 5,2 + 7,9)/5 = 23,6/5 = **4,72 %**.",
      "ES > VaR, denn der Schwanz enthält auch Verluste bis 7,9 %; VaR ignoriert diese Schwere."
    ]
  },
  "L12-010": {
    task: "Zwei Assets, w = (0,5; 0,5), Σ = [[0,09; 0,01]; [0,01; 0,04]]. Berechne σ_p und die marginalen Risikobeiträge MRC_i = (Σw)_i/σ_p. Welches Asset sollte man bei Risikoreduktion zuerst kürzen?",
    hint: "Berechne zuerst Σw.",
    solution: [
      "Σw = (0,05; 0,025).",
      "σ_p^2 = 0,5·0,05 + 0,5·0,025 = 0,0375; σ_p ≈ **19,36 %**.",
      "MRC_1 = 0,05/0,19365 ≈ **0,258**; MRC_2 = 0,025/0,19365 ≈ **0,129**.",
      "Asset 1 hat doppelt so hohen marginalen Beitrag, es wird zuerst gekürzt."
    ]
  },
  "L12-011": {
    task: "Gewichte w = (0,4; 0,6), Σ = [[0,04; 0,012]; [0,012; 0,09]]. Berechne die Risikobeiträge RC_i = w_i · MRC_i und ihre Anteile am Gesamtrisiko.",
    hint: "RC summiert sich zu σ_p.",
    solution: [
      "Σw = (0,0232; 0,0588); σ_p^2 = 0,4·0,0232 + 0,6·0,0588 = 0,04456; σ_p ≈ 0,2111.",
      "RC_1 = 0,4·0,0232/0,2111 ≈ **0,0440**; RC_2 = 0,6·0,0588/0,2111 ≈ **0,1671**.",
      "Summe = 0,2111 = σ_p. Anteile: **20,8 %** und **79,2 %**.",
      "Gewichte 40/60 verdecken, dass Asset 2 fast 80 % des Risikos trägt."
    ]
  },
  "L12-012": {
    task: "Zwei Assets: σ_1 = 20 %, σ_2 = 10 %, ρ = 0,2. Bestimme das Minimum-Varianz-Gewicht w_1 = (σ_2^2 - ρσ_1σ_2)/(σ_1^2 + σ_2^2 - 2ρσ_1σ_2) und die resultierende Vola. Vergleiche mit 50/50.",
    hint: "Cov = 0,2·0,2·0,1 = 0,004.",
    solution: [
      "w_1 = (0,01 - 0,004)/(0,04 + 0,01 - 0,008) = 0,006/0,042 ≈ **0,143**, w_2 ≈ 0,857.",
      "σ_p^2 = 0,142857^2·0,04 + 0,857143^2·0,01 + 2·0,142857·0,857143·0,004 ≈ 0,000816 + 0,007347 + 0,000979 ≈ 0,009143, σ_p ≈ **9,56 %**.",
      "50/50: σ_p^2 = 0,01 + 0,0025 + 0,002 = 0,0145, σ_p ≈ 12,04 %.",
      "Die Minimum-Varianz-Lösung hat sogar weniger Risiko als das risikoärmere Einzelasset (10 %)."
    ]
  }
});
