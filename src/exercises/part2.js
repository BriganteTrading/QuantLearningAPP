window.QUANT_EXERCISES = Object.assign(window.QUANT_EXERCISES || {}, {
  "L05-001": {
    task: "Die fünf Tagesrenditen eines Aktienindex lauten 0,8 %, -0,4 %, 1,6 %, 0,2 % und -0,2 %. Verwende den Schätzer T = Mittelwert der Renditen und berechne den Schätzwert. Erkläre danach in einem Satz, warum derselbe Schätzer morgen mit neuen Daten einen anderen Wert liefern würde.",
    hint: "Unterscheide die Rechenregel (Schätzer) von dem Zahlenwert, den sie für genau diese fünf Beobachtungen ausgibt.",
    solution: [
      "Summe: 0,8 - 0,4 + 1,6 + 0,2 - 0,2 = 2,0 (in %).",
      "Schätzwert: 2,0 % / 5 = **0,4 % pro Tag**.",
      "Interpretation: Der Schätzer ist die Regel T(X_1,…,X_n); vor der Beobachtung ist er eine Zufallsvariable. Neue Daten sind eine neue Stichprobe, also ergibt dieselbe Regel einen anderen Schätzwert."
    ]
  },
  "L05-002": {
    task: "Ein Analyst schätzt die Varianz der Renditen mit dem Schätzer s_n^2 = (1/n)·∑(X_i - X̄)^2 (Division durch n statt n-1). Bei n = 10 und wahrer Varianz σ^2 = 0,04 gilt E[s_n^2] = ((n-1)/n)·σ^2. Berechne den Bias und sage, ob der Schätzer über- oder unterschätzt.",
    hint: "Bias = E[Schätzer] - wahrer Wert; setze zuerst den Faktor (n-1)/n ein.",
    solution: [
      "E[s_n^2] = (9/10)·0,04 = 0,036.",
      "Bias = 0,036 - 0,04 = **-0,004**.",
      "Der Schätzer unterschätzt die Varianz im Mittel um 10 %. Die Korrektur mit n-1 beseitigt diese systematische Abweichung."
    ]
  },
  "L05-003": {
    task: "Die Monatsrenditen eines Fonds sind 2,1 %, -1,3 %, 0,8 %, 3,0 %, -0,6 % und 1,2 %. Berechne das Stichprobenmittel. Ein Kollege teilt die Summe versehentlich durch 7 statt durch 6: Wie groß ist sein Wert und in welche Richtung ist er verzerrt?",
    hint: "Das Mittel teilt durch die tatsächliche Anzahl n der Beobachtungen, nicht durch eine beliebige Zahl.",
    solution: [
      "Summe: 2,1 - 1,3 + 0,8 + 3,0 - 0,6 + 1,2 = 5,2 (in %).",
      "Richtig: 5,2 / 6 = **0,867 % pro Monat**.",
      "Kollege: 5,2 / 7 = 0,743 %. Das ist systematisch zu klein (Faktor 6/7), weil durch zu viele Beobachtungen geteilt wird."
    ]
  },
  "L05-004": {
    task: "Vier Tagesrenditen betragen 2 %, 4 %, -2 % und 0 %. Berechne die Stichprobenvarianz mit n-1 und die Standardabweichung. Warum teilt man hier durch 3 und nicht durch 4?",
    hint: "Berechne zuerst den Mittelwert und dann die quadrierten Abweichungen davon.",
    solution: [
      "Mittelwert: (2 + 4 - 2 + 0)/4 = 1 %.",
      "Abweichungen: 1, 3, -3, -1; Quadrate: 1, 9, 9, 1; Summe 20.",
      "s^2 = 20/3 = **6,667 (%^2)**, s = sqrt(6,667) = **2,58 %**.",
      "Der Mittelwert wurde aus denselben Daten geschätzt und verbraucht einen Freiheitsgrad; die Division durch n-1 macht s^2 unverzerrt."
    ]
  },
  "L05-005": {
    task: "Die Stichprobenstreuung der Tagesrenditen einer Strategie ist s = 1,8 % bei n = 36 Handelstagen. Berechne den Standardfehler des Mittels. Auf wie viele Tage müsste die Stichprobe wachsen, damit der Standardfehler nur noch halb so groß ist?",
    hint: "Der Standardfehler sinkt mit 1/sqrt(n), nicht mit 1/n.",
    solution: [
      "SE = s/sqrt(n) = 1,8 / 6 = **0,3 %**.",
      "Halbierung auf 0,15 %: sqrt(n) = 1,8/0,15 = 12, also n = **144**.",
      "Für die halbe Unsicherheit braucht man die vierfache Datenmenge."
    ]
  },
  "L05-006": {
    task: "Eine Strategie hat im Mittel 0,5 % Tagesrendite, s = 2 % und n = 100 Tage. Berechne das 95-%-Konfidenzintervall für den Erwartungswert (z = 1,96). Enthält es die 0, und was heißt das für den Nachweis eines positiven Edge?",
    hint: "Zuerst SE = s/sqrt(n), dann Mittelwert ± z·SE.",
    solution: [
      "SE = 2 / 10 = 0,2 %.",
      "Halbbreite: 1,96 · 0,2 = 0,392 %.",
      "Intervall: 0,5 ± 0,392 = **[0,108 %; 0,892 %]**.",
      "Die 0 liegt nicht im Intervall, die Daten sprechen also für einen positiven Erwartungswert. Das 95 % beschreibt die Trefferquote des Verfahrens, nicht die Wahrscheinlichkeit für diesen einen Wert."
    ]
  },
  "L05-007": {
    task: "Die Tagesrenditen eines Marktes haben Mittel 0,1 % und Standardabweichung 1,4 %. Berechne den z-Score eines Tages mit -4,2 %. Wie ungewöhnlich ist das, wenn die Renditen etwa normalverteilt wären?",
    hint: "z = (x - Mittel)/Streuung; achte auf das Vorzeichen.",
    solution: [
      "z = (-4,2 - 0,1)/1,4 = -4,3/1,4 = **-3,07**.",
      "Der Tag liegt gut drei Standardabweichungen unter dem Mittel. Bei einer Normalverteilung ist das extrem selten (unter 0,2 %); in der Praxis deutet es auf Fat Tails oder einen Ausreißer hin."
    ]
  },
  "L05-008": {
    task: "Marktrenditen x (in %): -1, 0, 1, 2; Renditen eines Titels y (in %): -0,5, 0,3, 0,9, 1,7. Bestimme per OLS die Steigung b und den Achsenabschnitt a der Geraden y = a + b·x.",
    hint: "b = ∑(x-x̄)(y-ȳ) / ∑(x-x̄)^2 und a = ȳ - b·x̄.",
    solution: [
      "x̄ = 0,5; ȳ = 0,6.",
      "∑(x-x̄)(y-ȳ) = 1,65 + 0,15 + 0,15 + 1,65 = 3,6; ∑(x-x̄)^2 = 2,25 + 0,25 + 0,25 + 2,25 = 5.",
      "b = 3,6/5 = **0,72**; a = 0,6 - 0,72·0,5 = **0,24**.",
      "Der Titel bewegt sich pro 1 % Marktrendite im Mittel um 0,72 %: Das ist eine Beta unter 1."
    ]
  },
  "L05-009": {
    task: "Eine Regression liefert y = 0,2 + 1,1·x (in %). Am Tag A ist x = 2 % und beobachtet y = 3,1 %; am Tag B ist x = -1 % und y = -1,5 %. Berechne beide Residuen und deute ihr Vorzeichen.",
    hint: "Residual = beobachtet - vorhergesagt.",
    solution: [
      "Tag A: Prognose 0,2 + 2,2 = 2,4; Residual 3,1 - 2,4 = **+0,7**.",
      "Tag B: Prognose 0,2 - 1,1 = -0,9; Residual -1,5 - (-0,9) = **-0,6**.",
      "Positiv: der Titel lag über der Modellprognose, negativ: darunter. Residuen sind der vom Marktfaktor nicht erklärte Teil."
    ]
  },
  "L05-010": {
    task: "An 25 Handelstagen fiel ein Index an 7 Tagen. Modelliere jeden Tag als Bernoulli mit Fallwahrscheinlichkeit p. Bestimme den ML-Schätzer p̂ und vergleiche die Log-Likelihood bei p = 0,28 mit der bei p = 0,5.",
    hint: "Log-Likelihood = 7·ln(p) + 18·ln(1-p); das Maximum liegt bei der Trefferquote.",
    solution: [
      "ML-Schätzer: p̂ = 7/25 = **0,28**.",
      "ln L(0,28) = 7·ln(0,28) + 18·ln(0,72) = -14,82.",
      "ln L(0,5) = 25·ln(0,5) = -17,33.",
      "Die Log-Likelihood ist bei 0,28 höher (weniger negativ): Die Daten sind unter p = 0,28 plausibler als unter p = 0,5."
    ]
  },
  "L05-011": {
    task: "Ein Quant testet 20 unabhängige Handelssignale jeweils zum 5-%-Niveau, obwohl keines echten Wert hat. Wie hoch ist die Wahrscheinlichkeit, dass mindestens ein Signal einen p-Wert unter 0,05 zeigt? Was folgt für die Interpretation eines einzelnen p = 0,03?",
    hint: "Rechne mit dem Gegenereignis: kein einziger Fehlalarm.",
    solution: [
      "P(kein Fehlalarm) = 0,95^20 = 0,358.",
      "P(mindestens einer) = 1 - 0,358 = **0,642** (ca. 64 %).",
      "Ein p-Wert von 0,03 ist nicht die Wahrscheinlichkeit, dass das Signal wertlos ist. Bei vielen Tests (Multiple Testing) entstehen zufällig signifikante Treffer; man braucht Korrekturen oder Out-of-Sample-Tests."
    ]
  },
  "L05-012": {
    task: "Zwei Schätzer für denselben Parameter: A ist unverzerrt mit Varianz 4, B hat Bias 1 und Varianz 1. Berechne den MSE = Bias^2 + Varianz beider Schätzer. Welchen würdest du bevorzugen und warum?",
    hint: "Ein kleiner Bias kann sich lohnen, wenn er die Varianz stark senkt.",
    solution: [
      "MSE_A = 0^2 + 4 = **4**.",
      "MSE_B = 1^2 + 1 = **2**.",
      "B hat den kleineren mittleren quadratischen Fehler, obwohl er verzerrt ist. Das ist die Idee des Bias-Variance-Trade-offs, z. B. bei Regularisierung."
    ]
  },
  "L06-001": {
    task: "Eine Zahlung von 5.000 € wird in 3 Jahren fällig. Der Diskontsatz beträgt 4 % p. a. (jährliche Verzinsung). Berechne den Barwert und erkläre, warum er kleiner als 5.000 € ist.",
    hint: "PV = FV/(1+r)^T.",
    solution: [
      "Diskontfaktor: 1/1,04^3 = 0,8890.",
      "PV = 5.000 / 1,04^3 = **4.444,98 €**.",
      "Geld heute kann zum Zinssatz angelegt werden; eine spätere Zahlung ist deshalb heute weniger wert."
    ]
  },
  "L06-002": {
    task: "Eine Zahlung von 8.000 € ist in 2,5 Jahren fällig; der stetige Zinssatz beträgt 3,2 %. Berechne den Barwert mit PV = FV·e^(-rT). Was passiert mit dem Barwert, wenn der Zins auf 4,2 % steigt (qualitativ)?",
    hint: "Bestimme zuerst den Exponenten -r·T.",
    solution: [
      "Exponent: -0,032 · 2,5 = -0,08.",
      "PV = 8.000 · e^(-0,08) = 8.000 · 0,9231 = **7.384,93 €**.",
      "Ein höherer Zins macht den Exponenten negativer und senkt den Barwert."
    ]
  },
  "L06-003": {
    task: "Du legst 2.000 € für 4 Jahre bei 5 % an. Berechne den Future Value bei jährlicher Verzinsung FV = PV·(1+r)^T und bei stetiger Verzinsung FV = PV·e^(rT). Welcher Wert ist größer und warum?",
    hint: "Stetige Verzinsung entspricht dem Grenzfall unendlich häufiger Zinszahlung.",
    solution: [
      "Jährlich: 2.000 · 1,05^4 = **2.431,01 €**.",
      "Stetig: 2.000 · e^(0,2) = **2.442,81 €**.",
      "Stetig ist größer, weil sich die Zinsen laufend verzinsen; die effektive Jahresrate ist e^0,05 - 1 = 5,127 % statt 5 %."
    ]
  },
  "L06-004": {
    task: "Eine Aktie ohne Dividende kostet 80 €, der stetige Zins beträgt 3 %. Was ist der faire 6-Monats-Forwardpreis? Am Markt wird der Forward für 82 € gehandelt: Beschreibe die Arbitrage und den Gewinn pro Aktie bei Fälligkeit.",
    hint: "Fairer Forward: F = S·e^(rT); ist der Markt-Forward zu teuer, verkaufe ihn und kaufe die Aktie auf Kredit.",
    solution: [
      "F = 80 · e^(0,03·0,5) = 80 · e^(0,015) = **81,21 €**.",
      "Der Marktpreis 82 € liegt darüber, der Forward ist zu teuer.",
      "Arbitrage: Forward verkaufen, Aktie kaufen und per Kredit finanzieren. In 6 Monaten Aktie liefern, 82 € erhalten, Kredit 81,21 € zurückzahlen: risikoloser Gewinn **0,79 €** pro Aktie."
    ]
  },
  "L06-005": {
    task: "Ein Rohstoff kostet 100 €. Der stetige Zins ist 2 %, die Lagerkosten betragen 1 % p. a. und die Convenience Yield 0,5 % p. a. Berechne den 1-Jahres-Forward mit F = S·e^((r + u - y)T). Was ist die Netto-Carry-Rate?",
    hint: "Carry = Zins + Lagerkosten - Convenience Yield.",
    solution: [
      "Netto-Carry: 2 % + 1 % - 0,5 % = **2,5 %**.",
      "F = 100 · e^(0,025) = **102,53 €**.",
      "Lagerkosten treiben den Forward nach oben, die Convenience Yield senkt ihn."
    ]
  },
  "L06-006": {
    task: "Ein Bond hat Nennwert 100, 3 Jahre Laufzeit und einen Jahreskupon von 5. Bestimme den Preis bei einer Rendite von 6 % (jährlich). Liegt der Preis über oder unter pari, und warum?",
    hint: "Diskontiere die Cashflows 5, 5 und 105 einzeln.",
    solution: [
      "5/1,06 = 4,717; 5/1,06^2 = 4,450; 105/1,06^3 = 88,160.",
      "Preis = **97,33**.",
      "Der Kupon (5 %) liegt unter der Marktrendite (6 %), daher notiert der Bond unter pari."
    ]
  },
  "L06-007": {
    task: "Ein Zero-Coupon-Bond mit Nennwert 100 und 2 Jahren Restlaufzeit kostet 95. Bestimme die Yield to Maturity (jährliche Verzinsung). Wie verändert sich die YTM, wenn der Preis auf 94 fällt?",
    hint: "Löse 95 = 100/(1+y)^2 nach y.",
    solution: [
      "(1+y)^2 = 100/95 = 1,05263.",
      "1 + y = sqrt(1,05263) = 1,02598, also y = **2,60 %**.",
      "Fällt der Preis auf 94, steigt die YTM auf sqrt(100/94) - 1 = 3,14 %: Preis und Rendite bewegen sich gegenläufig."
    ]
  },
  "L06-008": {
    task: "Ein 3-jähriger Bond mit Kupon 5 % (Nennwert 100) wird zu pari bei einer Rendite von 5 % gehandelt. Berechne die Macaulay-Duration als gewichtete mittlere Zeit der Barwerte. Warum ist sie kleiner als 3 Jahre?",
    hint: "Gewichte die Zeiten 1, 2, 3 mit den Barwertanteilen der Cashflows am Preis.",
    solution: [
      "Barwerte: 4,762; 4,535; 90,703 (Summe 100).",
      "D = (1·4,762 + 2·4,535 + 3·90,703)/100 = **2,86 Jahre**.",
      "Wegen der Kupons fließt ein Teil des Geldes früher zurück, die mittlere Wartezeit liegt deshalb unter der Laufzeit."
    ]
  },
  "L06-009": {
    task: "Ein Bond hat Macaulay-Duration 4,2 Jahre bei einer Rendite von 5 % (jährlich). Berechne die Modified Duration und die ungefähre Preisänderung bei einem Renditeanstieg um 50 Basispunkte.",
    hint: "D_mod = D/(1+y); Preisänderung ≈ -D_mod·Δy.",
    solution: [
      "D_mod = 4,2/1,05 = **4,0**.",
      "ΔP/P ≈ -4,0 · 0,005 = **-2,0 %**.",
      "Der Bond verliert bei +50 bp rund 2 % an Wert."
    ]
  },
  "L06-010": {
    task: "Ein Bond kostet 98 und hat eine Modified Duration von 6,5. Die Rendite steigt um 0,4 Prozentpunkte. Schätze mit der Duration-Näherung die Preisänderung in Prozent und den neuen Preis. Ist die Näherung für +4 Prozentpunkte noch gut?",
    hint: "Die Näherung ist linear in Δy und ignoriert die Krümmung.",
    solution: [
      "ΔP/P ≈ -6,5 · 0,004 = **-2,6 %**.",
      "Neuer Preis ≈ 98 · (1 - 0,026) = **95,45**.",
      "Für große Zinsschritte wie +4 Prozentpunkte wird die Näherung schlecht, da sie die Convexity ignoriert und den Verlust überschätzt."
    ]
  },
  "L06-011": {
    task: "Ein Bond hat Modified Duration 7 und Convexity 60. Berechne die Preisänderung bei Δy = +1 % mit ΔP/P ≈ -D·Δy + 0,5·C·Δy^2 und vergleiche sie mit der reinen Duration-Näherung. Was bewirkt die Convexity?",
    hint: "Δy = 0,01, also Δy^2 = 0,0001.",
    solution: [
      "Duration allein: -7 · 0,01 = -7,0 %.",
      "Convexity-Term: 0,5 · 60 · 0,0001 = +0,3 %.",
      "Gesamt: **-6,7 %**.",
      "Positive Convexity mildert Kursverluste bei steigenden Zinsen (und verstärkt Gewinne bei fallenden Zinsen)."
    ]
  },
  "L06-012": {
    task: "Zinsstruktur (jährliche Verzinsung): 1-jährige Nullrate 2 %, 2-jährige Nullrate 2,5 %. Berechne die Discount Factors, den Barwert eines Bonds mit Cashflows 3 (Jahr 1) und 103 (Jahr 2) sowie den impliziten 1-Jahres-Forwardzins in einem Jahr.",
    hint: "DF(T) = 1/(1+z_T)^T; der Forward folgt aus DF(1)/DF(2) - 1.",
    solution: [
      "DF(1) = 1/1,02 = 0,9804; DF(2) = 1/1,025^2 = 0,9518.",
      "PV = 3·0,9804 + 103·0,9518 = 2,941 + 98,037 = **100,98**.",
      "Forward: DF(1)/DF(2) - 1 = 1,025^2/1,02 - 1 = **3,00 %**.",
      "Die steigende Zinskurve impliziert einen höheren künftigen Einjahreszins."
    ]
  },
  "L07-001": {
    task: "Du kaufst einen Call mit Strike 50 für eine Prämie von 3,20. Berechne Payoff und Gewinn bei einem Endkurs von 57 sowie von 48. Wo liegt der Break-even?",
    hint: "Payoff = max(S_T - K, 0); Gewinn = Payoff - Prämie.",
    solution: [
      "S_T = 57: Payoff 7; Gewinn 7 - 3,20 = **+3,80**.",
      "S_T = 48: Payoff 0; Gewinn **-3,20** (maximaler Verlust = Prämie).",
      "Break-even: 50 + 3,20 = **53,20**."
    ]
  },
  "L07-002": {
    task: "Du kaufst einen Put mit Strike 120 für 5,50. Berechne Payoff und Gewinn bei Endkursen von 104 und 125 sowie den Break-even.",
    hint: "Der Put zahlt max(K - S_T, 0).",
    solution: [
      "S_T = 104: Payoff 16; Gewinn 16 - 5,50 = **+10,50**.",
      "S_T = 125: Payoff 0; Gewinn **-5,50**.",
      "Break-even: 120 - 5,50 = **114,50**."
    ]
  },
  "L07-003": {
    task: "Europäische Optionen auf dieselbe Aktie: S = 100, K = 98, r = 4 % (stetig), T = 0,5. Call = 7,50, Put = 4,10. Prüfe die Put-Call-Parität C - P = S - K·e^(-rT). Gibt es Arbitrage, und welche Positionen würdest du eingehen?",
    hint: "Vergleiche C - P mit S - K·e^(-rT) und schaue, welche Seite zu billig ist.",
    solution: [
      "K·e^(-rT) = 98 · e^(-0,02) = 96,06; S - K·e^(-rT) = **3,94**.",
      "C - P = 7,50 - 4,10 = 3,40 < 3,94: Der Call ist relativ zu billig.",
      "Arbitrage: Call kaufen, Put verkaufen, Aktie leerverkaufen und K·e^(-rT) = 96,06 anlegen. Gewinn heute: -7,50 + 4,10 + 100 - 96,06 = **0,54**; bei Fälligkeit ist das Portfolio wertlos."
    ]
  },
  "L07-004": {
    task: "Bewerte einen europäischen Call mit S = 100, K = 105, r = 3 %, σ = 25 %, T = 1 nach Black-Scholes. Gib d1, d2 und den Preis an. Ist der Preis plausibel im Vergleich zum inneren Wert?",
    hint: "C = S·N(d1) - K·e^(-rT)·N(d2); berechne zuerst d1 und d2.",
    solution: [
      "d1 = [ln(100/105) + (0,03 + 0,03125)] / 0,25 = 0,0498; d2 = 0,0498 - 0,25 = -0,2002.",
      "N(d1) = 0,5199; N(d2) = 0,4207.",
      "C = 100·0,5199 - 105·e^(-0,03)·0,4207 = **9,12**.",
      "Der innere Wert ist 0 (Option aus dem Geld); der Preis von 9,12 ist reiner Zeitwert aus Volatilität und Zinsen."
    ]
  },
  "L07-005": {
    task: "Berechne d1 für S = 50, K = 55, r = 2 %, σ = 30 %, T = 0,5. Wie groß ist N(d1), und was sagt das Vorzeichen von d1 über die Lage der Option?",
    hint: "d1 = [ln(S/K) + (r + σ^2/2)·T] / (σ·sqrt(T)).",
    solution: [
      "Zähler: ln(50/55) + (0,02 + 0,045)·0,5 = -0,0953 + 0,0325 = -0,0628.",
      "Nenner: 0,3 · sqrt(0,5) = 0,2121.",
      "d1 = **-0,296**; N(d1) = **0,384**.",
      "Negatives d1: Der Call liegt aus dem Geld, das Delta von ca. 0,38 ist unter 0,5."
    ]
  },
  "L07-006": {
    task: "Eine Option hat d1 = 0,35, σ = 20 % und T = 4 Jahre. Berechne d2 und N(d2). Warum ist N(d2) nicht dasselbe wie N(d1)?",
    hint: "d2 = d1 - σ·sqrt(T).",
    solution: [
      "σ·sqrt(T) = 0,2 · 2 = 0,4.",
      "d2 = 0,35 - 0,4 = **-0,05**.",
      "N(d2) ≈ **0,480** (risikoneutrale Wahrscheinlichkeit, im Geld zu enden), N(d1) = 0,637.",
      "N(d1) enthält die Gewichtung durch den Aktienpreis (Delta), N(d2) ist die Ausübungswahrscheinlichkeit im risikoneutralen Maß."
    ]
  },
  "L07-007": {
    task: "Ein Call hat d1 = 0,4, also Delta = N(d1) = 0,6554. Wie groß ist das Delta eines Puts mit gleichem Strike? Du bist long 20 Call-Kontrakte à 100 Aktien: Wie viele Aktien musst du zum Delta-Hedge leerverkaufen?",
    hint: "Put-Delta = Call-Delta - 1; Hedge-Aktien = Delta · Gesamtzahl der Optionen.",
    solution: [
      "Put-Delta = 0,6554 - 1 = **-0,3446**.",
      "Optionen insgesamt: 20 · 100 = 2.000.",
      "Positions-Delta: 2.000 · 0,6554 = 1.310,8, also ca. **1.311 Aktien leerverkaufen**.",
      "Das Portfolio ist dann lokal unempfindlich gegenüber kleinen Kursänderungen."
    ]
  },
  "L07-008": {
    task: "Für S = 100, σ = 20 %, T = 1 gilt d1 = 0,1. Berechne das Gamma Γ = φ(d1)/(S·σ·sqrt(T)) mit φ(0,1) = 0,3970. Um wie viel ändert sich das Delta ungefähr, wenn S um 5 steigt?",
    hint: "Delta-Änderung ≈ Γ · ΔS.",
    solution: [
      "Nenner: 100 · 0,2 · 1 = 20.",
      "Γ = 0,3970/20 = **0,0198**.",
      "Δ-Änderung ≈ 0,0198 · 5 = **+0,099** (ca. 0,10).",
      "Gamma zeigt, wie schnell sich das Delta bei Kursbewegungen verändert; das Hedge-Verhältnis muss nachgezogen werden."
    ]
  },
  "L07-009": {
    task: "Für eine at-the-money-Option mit S = 80, d1 = 0 und T = 0,25 gilt Vega = S·φ(d1)·sqrt(T), φ(0) = 0,3989. Berechne das Vega pro 1 Volatilitätspunkt und die Preisänderung bei einem Volatilitätsanstieg um 3 Punkte.",
    hint: "Das Vega aus der Formel gilt pro 1,00 (100 Punkte) Volatilität; teile durch 100.",
    solution: [
      "Vega = 80 · 0,3989 · 0,5 = 15,96 pro 1,00 Volatilität.",
      "Pro Volatilitätspunkt: **0,1596**.",
      "Bei +3 Punkten: ca. 3 · 0,1596 = **+0,48**.",
      "Long-Optionen profitieren von steigender Volatilität."
    ]
  },
  "L07-010": {
    task: "Eine Option hat ein Theta von -0,05 pro Tag. Du bist long 20 Kontrakte à 100 Aktien. Wie hoch ist der tägliche Zeitwertverlust des Portfolios, und wie viel verlierst du bei konstantem Markt in 7 Tagen (lineare Näherung)?",
    hint: "Theta ist pro Option und Tag angegeben; multipliziere mit der Anzahl der Optionen.",
    solution: [
      "Optionen insgesamt: 2.000.",
      "Pro Tag: 2.000 · (-0,05) = **-100**.",
      "7 Tage: **-700** (bei sonst gleichen Parametern).",
      "Der Zeitwert zerfällt; als Long-Optionshalter bezahlst du für die Option Zeit-Verfall."
    ]
  },
  "L07-011": {
    task: "Für einen Call gilt Rho = K·T·e^(-rT)·N(d2). Berechne Rho für K = 100, T = 1, r = 3 % und N(d2) = 0,5 sowie die Preisänderung bei einem Zinsanstieg um 1 Prozentpunkt. Welches Vorzeichen hat das Rho eines Puts?",
    hint: "Das Rho der Formel gilt pro 1,00 Zinsänderung; 1 Prozentpunkt ist 0,01.",
    solution: [
      "e^(-0,03) = 0,9704.",
      "Rho = 100 · 1 · 0,9704 · 0,5 = **48,52** pro 1,00 Zinsänderung.",
      "Bei +1 Prozentpunkt: ca. **+0,485**.",
      "Das Put-Rho ist negativ: Höhere Zinsen senken den Put-Wert."
    ]
  },
  "L07-012": {
    task: "Du bist short 100 Calls mit Delta 0,42 und Gamma 0,05 und hast 42 Aktien als Hedge gekauft. Die Aktie steigt um 2. Schätze mit Delta und Gamma den Verlust auf der Option, den Gewinn auf den Aktien und den Netto-Effekt.",
    hint: "ΔV ≈ Δ·ΔS + 0,5·Γ·ΔS^2 pro Option.",
    solution: [
      "Pro Option: 0,42·2 + 0,5·0,05·4 = 0,84 + 0,10 = 0,94.",
      "Short 100 Calls: **-94**.",
      "Aktien: 42 · 2 = **+84**.",
      "Netto **-10**: Der Delta-Hedge wirkt nur lokal; der Verlust von 10 entspricht dem Gamma-Term (0,5·5·4)."
    ]
  },
  "L07-013": {
    task: "Aktie S = 96. Ein Call mit K = 90 kostet 9,40, ein Put mit K = 90 kostet 1,10. Zerlege beide Preise in inneren Wert und Zeitwert. Warum hat der Put einen positiven Zeitwert, obwohl er innerlich wertlos ist?",
    hint: "Innerer Wert Call = max(S-K,0), Put = max(K-S,0).",
    solution: [
      "Call: innerer Wert 96 - 90 = 6; Zeitwert 9,40 - 6 = **3,40**.",
      "Put: innerer Wert max(90 - 96, 0) = 0; Zeitwert **1,10**.",
      "Der Put hat noch Laufzeit: Die Aktie könnte unter 90 fallen, daher ist die Chance auf spätere Auszahlung etwas wert."
    ]
  },
  "L07-014": {
    task: "Berechne die Moneyness m = S/K für S = 84 und K = 70 sowie für S = 63 und K = 70. Ordne jeweils Call und Put als ITM, ATM oder OTM ein.",
    hint: "m > 1 bedeutet: Der Kurs liegt über dem Strike.",
    solution: [
      "S = 84, K = 70: m = 84/70 = **1,2**. Call ITM, Put OTM.",
      "S = 63, K = 70: m = 63/70 = **0,9**. Call OTM, Put ITM.",
      "Bei m ≈ 1 sind beide Optionen ATM; m ist eine skalenfreie Kennzahl, die Strikes verschiedener Märkte vergleichbar macht."
    ]
  },
  "L07-015": {
    task: "Ein Call mit Delta 0,55 kostet 4,20, die Aktie steht bei 40. Schätze den neuen Optionspreis, wenn die Aktie auf 41,50 steigt. Warum wird die Schätzung bei einem Sprung auf 50 unzuverlässig?",
    hint: "ΔV ≈ Δ · ΔS gilt nur für kleine ΔS.",
    solution: [
      "ΔS = 1,50; ΔV ≈ 0,55 · 1,5 = **0,825**.",
      "Neuer Preis ≈ 4,20 + 0,825 = **5,03**.",
      "Bei +10 ändert sich das Delta stark (Gamma), die lineare Näherung unterschätzt den Gewinn eines Long-Calls."
    ]
  },
  "L07-016": {
    task: "Ein Call hat bei S = 100 ein Delta von 0,30 und ein Gamma von 0,04. Schätze das Delta bei S = 103 und bei S = 97. Wofür steht das Gamma als Krümmung?",
    hint: "Δ(S+ΔS) ≈ Δ + Γ·ΔS.",
    solution: [
      "S = 103: 0,30 + 0,04·3 = **0,42**.",
      "S = 97: 0,30 - 0,04·3 = **0,18**.",
      "Gamma ist die Änderungsrate des Deltas: Je höher Γ, desto stärker ist die Preiskurve gekrümmt und desto häufiger muss gehedgt werden."
    ]
  },
  "L07-017": {
    task: "Ein Call kostet 8,90 mit Delta 0,6 und Gamma 0,03. Die Aktie fällt um 5. Schätze die Preisänderung mit ΔV ≈ Δ·ΔS + 0,5·Γ·(ΔS)^2 und den neuen Preis. Wie viel des Ergebnisses kommt von der Gamma-Korrektur?",
    hint: "Das Quadrat (ΔS)^2 ist positiv, auch bei fallendem Kurs.",
    solution: [
      "Delta-Term: 0,6 · (-5) = -3,0.",
      "Gamma-Term: 0,5 · 0,03 · 25 = **+0,375**.",
      "ΔV ≈ **-2,625**; neuer Preis ≈ 8,90 - 2,625 = **6,28**.",
      "Das positive Gamma mildert den Verlust gegenüber der reinen Delta-Schätzung (-3,0)."
    ]
  },
  "L07-018": {
    task: "Du bist long 10 Call-Kontrakte à 100 Aktien mit Delta 0,35. Bestimme die Hedge-Ratio h in Aktien. Berechne die P&L, wenn die Aktie um 2 steigt, einmal nur mit Delta und einmal mit Gamma 0,02 pro Option.",
    hint: "ΔP = ΔV - h·ΔS; die Gamma-Korrektur beträgt 0,5·Γ·ΔS^2 je Option.",
    solution: [
      "1.000 Optionen · 0,35 = **350 Aktien leerverkaufen** (h = 350).",
      "Nur Delta: Optionen +0,35·2·1.000 = +700; Aktien -700; P&L **0**.",
      "Mit Gamma: zusätzlich 0,5·0,02·4·1.000 = **+40**.",
      "Das Portfolio ist delta-neutral; der Gewinn von 40 stammt aus der Krümmung."
    ]
  },
  "L07-019": {
    task: "Berechne d1 für S = 100, K = 90, r = 4 %, σ = 30 %, T = 0,25 und N(d1). Was sagt d1 als standardisierte Schwelle über die Lage der Option?",
    hint: "σ·sqrt(T) = 0,3 · 0,5 = 0,15.",
    solution: [
      "ln(100/90) = 0,1054; (r + σ^2/2)·T = (0,04 + 0,045)·0,25 = 0,02125.",
      "d1 = 0,12665/0,15 = **0,844**; N(d1) = **0,801**.",
      "Der Kurs liegt etwa 0,84 Standardabweichungen (gemessen in Volatilität über die Laufzeit) oberhalb der Schwelle: Der Call ist klar im Geld und hat ein Delta von ca. 0,80."
    ]
  },
  "L07-020": {
    task: "Für S = 60, K = 65, r = 5 %, σ = 40 %, T = 0,5 berechne d1, d2 und die risikoneutrale Wahrscheinlichkeit N(d2), dass der Call im Geld verfällt. Warum ist das nicht die reale Wahrscheinlichkeit?",
    hint: "d2 = d1 - σ·sqrt(T), mit σ·sqrt(T) = 0,2828.",
    solution: [
      "d1 = [ln(60/65) + (0,05 + 0,08)·0,5]/0,2828 = (-0,0800 + 0,0650)/0,2828 = **-0,053**.",
      "d2 = -0,053 - 0,283 = **-0,336**.",
      "N(d2) = **0,368**.",
      "Das gilt im risikoneutralen Maß mit Zins r als Drift; die reale Wahrscheinlichkeit hängt von der tatsächlichen Drift ab."
    ]
  },
  "L07-021": {
    task: "Ein Call wird am Markt mit 6,00 gehandelt. Das Modell liefert bei σ = 20 % einen Preis von 5,20, das Vega beträgt 0,30 pro Volatilitätspunkt. Schätze die implizite Volatilität mit einem Newton-Schritt. Warum ist das nur eine Näherung?",
    hint: "Preislücke geteilt durch Vega pro Punkt ergibt die nötige Volatilitätsänderung.",
    solution: [
      "Lücke: 6,00 - 5,20 = 0,80.",
      "Δσ ≈ 0,80/0,30 = 2,67 Punkte.",
      "σ_imp ≈ 20 + 2,67 = **22,67 %**.",
      "Vega ändert sich mit σ, daher ist ein einzelner Schritt nur eine lineare Näherung; man iteriert."
    ]
  },
  "L07-022": {
    task: "Ein ATM-Call hat Theta -0,15 pro Tag. Nach drei Wochenendtagen (3 Kalendertage) ohne Kursänderung und sonst gleichen Parametern: Wie viel Wert verliert eine Long-Position von 1.000 Optionen? Erkläre, warum Theta für Verkäufer von Optionen positiv wirkt.",
    hint: "Theta ist pro Option und Kalendertag definiert.",
    solution: [
      "Pro Option: 3 · (-0,15) = -0,45.",
      "Bei 1.000 Optionen: **-450**.",
      "Der Käufer zahlt den Zeitwertverlust, der Verkäufer (Short) vereinnahmt ihn, trägt aber dafür das Risiko großer Kursbewegungen (Gamma)."
    ]
  },
  "L07-023": {
    task: "Ein Call hat Rho +0,42, ein Put mit demselben Strike Rho -0,31 (pro Prozentpunkt Zinsänderung). Die Zinsen steigen um 0,25 Prozentpunkte. Berechne die Preisänderung beider Optionen und einer Long-Straddle-Position (1 Call + 1 Put).",
    hint: "Multipliziere das Rho mit 0,25.",
    solution: [
      "Call: 0,42 · 0,25 = **+0,105**.",
      "Put: -0,31 · 0,25 = **-0,0775**.",
      "Straddle: 0,105 - 0,0775 = **+0,0275**.",
      "Die Zinssensitivität ist klein, bei langen Laufzeiten und hohen Strikes aber relevanter."
    ]
  },
  "L07-024": {
    task: "Beim Gamma-Scalping hältst du ein Delta-neutrales Long-Gamma-Portfolio mit Γ = 0,05 und Theta = -0,15 pro Tag (je Option). Welchen Gewinn bringt ein Kursschritt von 3 durch den Gamma-Term 0,5·Γ·(ΔS)^2? Wie groß muss die tägliche Kursbewegung mindestens sein, um den Theta-Verlust auszugleichen?",
    hint: "Setze 0,5·Γ·(ΔS)^2 = |Θ| und löse nach ΔS.",
    solution: [
      "Gamma-Gewinn: 0,5 · 0,05 · 9 = **0,225** pro Option.",
      "Break-even: 0,025·(ΔS)^2 = 0,15, also (ΔS)^2 = 6 und ΔS = **2,45**.",
      "Bewegt sich der Kurs täglich um mehr als ca. 2,45, übersteigt der Gamma-Gewinn den Zeitwertverlust; realisierte Volatilität muss die implizite übertreffen."
    ]
  },
  "L07-025": {
    task: "Bei Strike 50 haben Call und Put mit gleicher Laufzeit dasselbe Gamma von 0,03. Berechne das Portfolio-Gamma (a) einer Long-Straddle-Position aus 10 Calls und 10 Puts, (b) einer synthetischen Aktie aus 10 Long-Calls und 10 Short-Puts.",
    hint: "Short-Positionen haben das negative Gamma der Option.",
    solution: [
      "(a) 10·0,03 + 10·0,03 = **0,6**.",
      "(b) 10·0,03 - 10·0,03 = **0**.",
      "Das gleiche Gamma ergibt sich aus der Put-Call-Parität: Die Differenz C - P ist linear in S, also krümmungsfrei. Eine synthetische Aktie hat Delta 10, aber kein Gamma."
    ]
  },
  "L07-026": {
    task: "Bewerte einen ATM-Call (S = K = 100, r = 3 %, σ = 20 %, T = 1) ohne Dividende und mit einer stetigen Dividendenrendite von q = 2 %. Wie groß ist der Preisunterschied, und in welche Richtung wirkt die Dividende auf den Call?",
    hint: "Ersetze S durch S·e^(-qT) und d1 enthält (r - q + σ^2/2)·T.",
    solution: [
      "Ohne Dividende: d1 = 0,25, d2 = 0,05; C = **9,41**.",
      "Mit q = 2 %: d1 = 0,15, d2 = -0,05; C = 100·e^(-0,02)·0,5596 - 100·e^(-0,03)·0,4801 = **8,27**.",
      "Unterschied: ca. **-1,15**. Dividenden senken den Aktienkurs im Erwartungswert und damit den Call-Wert (Puts würden steigen)."
    ]
  },
  "L07-027": {
    task: "Mit S = K = 100, r = 0 und T = 1 liefert Black-Scholes bei σ = 20 % einen Callpreis von 7,97 und bei σ = 30 % einen von 11,92. Am Markt steht der Call bei 10,00. Schätze die implizite Volatilität per linearer Interpolation und erkläre, warum die Umkehrung eindeutig ist.",
    hint: "Der Callpreis ist streng monoton steigend in σ.",
    solution: [
      "Anteil: (10,00 - 7,97)/(11,92 - 7,97) = 2,03/3,95 = 0,514.",
      "σ_imp ≈ 20 % + 0,514 · 10 % = **25,1 %** (exakt per Bisektion: 25,13 %).",
      "Weil der Preis in σ streng monoton steigt, gibt es zu jedem arbitragefreien Preis genau eine Volatilität, die per Newton- oder Bisektionsverfahren gefunden wird."
    ]
  }
});
