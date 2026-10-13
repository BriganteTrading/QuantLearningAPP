window.QUANT_EXERCISES = Object.assign(window.QUANT_EXERCISES || {}, {
  "L13-001": {
    task: "Im Orderbuch einer Aktie steht Bid 84,20 EUR und Ask 84,50 EUR; der letzte Trade lief zu 84,50 EUR. Berechne den Mid und sage, ob du zum Mid sicher kaufen könntest.",
    hint: "Der Mid ist ein Mittelwert, kein Kurs, zu dem jemand verkaufen muss.",
    solution: [
      "mid = (bid + ask)/2 = (84,20 + 84,50)/2 = 84,35 EUR.",
      "Ein Market-Buy wird gegen den Ask ausgeführt, also zu 84,50 EUR – 0,15 EUR über dem Mid.",
      "Der Mid ist ein Referenzpreis, aber nicht zwingend handelbar; der letzte Trade (84,50) liegt auf dem Ask, nicht auf dem Mid."
    ]
  },
  "L13-002": {
    task: "Eine Aktie quotiert Bid 19,96 EUR / Ask 20,04 EUR. Du kaufst 5.000 Stück per Market Order und verkaufst sie sofort wieder per Market Order (Quotes unverändert). Wie hoch ist der absolute Spread und was kostet dich der Round-Trip?",
    hint: "Beim Kauf zahlst du den Ask, beim Verkauf bekommst du den Bid.",
    solution: [
      "spread = ask - bid = 20,04 - 19,96 = 0,08 EUR je Aktie.",
      "Kauf zu 20,04, Verkauf zu 19,96: Verlust 0,08 EUR je Aktie.",
      "Round-Trip-Kosten = 5.000 · 0,08 = 400 EUR.",
      "Der Spread ist die unmittelbare Ausführungsgebühr für sofortige Liquidität – ganz ohne Preisbewegung."
    ]
  },
  "L13-003": {
    task: "Aktie A quotiert 9,98 / 10,02 EUR, Aktie B quotiert 199,90 / 200,10 EUR. Welche hat den größeren absoluten, welche den größeren relativen Spread? Gib die relativen Spreads in Basispunkten an.",
    hint: "Teile den Spread durch den jeweiligen Mid, bevor du vergleichst.",
    solution: [
      "A: Spread = 0,04 EUR, mid = 10,00 EUR, spread_rel = 0,04/10,00 = 0,4 % = 40 bp.",
      "B: Spread = 0,20 EUR, mid = 200,00 EUR, spread_rel = 0,20/200,00 = 0,1 % = 10 bp.",
      "B hat den größeren absoluten, A aber den größeren relativen Spread.",
      "Für Handelskosten in Prozent des Handelsvolumens ist A vierfach teurer – der relative Spread macht Preisniveaus vergleichbar."
    ]
  },
  "L13-004": {
    task: "Auf der Bid-Seite stehen 1.500 Stück, auf der Ask-Seite 4.500 Stück. Berechne die Order Imbalance. Danach zeigt sich, dass 4.000 der Ask-Stücke ein einzelnes Gebot waren, das gerade storniert wird: Wie ändert sich OI?",
    hint: "Setze die Volumina in (V_bid - V_ask)/(V_bid + V_ask) ein und denke an das Vorzeichen.",
    solution: [
      "OI = (1.500 - 4.500)/(1.500 + 4.500) = -3.000/6.000 = -0,5 (mehr sichtbare Ask-Tiefe).",
      "Nach der Stornierung: V_ask = 500, OI = (1.500 - 500)/(1.500 + 500) = 1.000/2.000 = +0,5.",
      "Das Vorzeichen kippt allein durch eine Stornierung. Sichtbares Volumen kann flüchtig sein, OI ist daher kein sicherer Beleg für echten Kauf- oder Verkaufsdruck."
    ]
  },
  "L13-005": {
    task: "Du kaufst 2.000 Aktien per Market Order bei einem Mid von 75,00 EUR. Fills: 800 zu 75,02, 700 zu 75,05, 500 zu 75,10. Berechne Durchschnittspreis, Slippage je Aktie und gesamte Slippage gegenüber dem Mid.",
    hint: "Gewichte die Fill-Preise mit den Stückzahlen.",
    solution: [
      "Kosten = 800·75,02 + 700·75,05 + 500·75,10 = 60.016 + 52.535 + 37.550 = 150.101 EUR.",
      "P_fill = 150.101/2.000 = 75,0505 EUR.",
      "slippage = P_fill - P_ref = 75,0505 - 75,00 = 0,0505 EUR je Aktie, gesamt 101 EUR.",
      "Positiv bedeutet beim Kauf einen schlechteren Preis; beim Verkauf wäre das Vorzeichen umgekehrt zu lesen (P_ref - P_fill)."
    ]
  },
  "L13-006": {
    task: "Für eine Aktie wird λ = 0,000002 EUR je Stück geschätzt. Ein Käufer drückt netto 15.000 Stück in den Markt, später ein Verkäufer 40.000 Stück. Wie verändert sich der Preis jeweils (Start 50,00 EUR)?",
    hint: "Das Vorzeichen von Q ist die Handelsrichtung (Kauf positiv, Verkauf negativ).",
    solution: [
      "Kauf: ΔP = λQ = 0,000002 · 15.000 = +0,03 EUR, also 50,03 EUR.",
      "Verkauf: ΔP = 0,000002 · (-40.000) = -0,08 EUR, ausgehend von 50,00: 49,92 EUR.",
      "Ein höheres λ bedeutet geringere Liquidität: dieselbe Order bewegt den Preis stärker. Die lineare Beziehung ist nur eine empirische Näherung."
    ]
  },
  "L13-007": {
    task: "Mit C ≈ λQ² und λ = 0,00001 EUR/Stück² kostet eine Order von 20.000 Stück in einem Block wie viel Impact? Wie viel, wenn du sie in zwei, bzw. vier gleich große, zeitlich getrennte Tranchen teilst (Impact klingt zwischen den Tranchen vollständig ab)?",
    hint: "Quadratische Kosten: halbe Ordergröße ergibt nur ein Viertel der Kosten je Tranche.",
    solution: [
      "Ein Block: C = 0,00001 · 20.000² = 0,00001 · 400.000.000 = 4.000 EUR.",
      "Zwei Tranchen à 10.000: 2 · 0,00001 · 10.000² = 2 · 1.000 = 2.000 EUR.",
      "Vier Tranchen à 5.000: 4 · 0,00001 · 25.000.000 = 4 · 250 = 1.000 EUR.",
      "Aufteilen senkt Impact, kostet aber Zeit und erhöht das Timing-Risiko – die Annahme vollständig abklingenden Impacts ist ein Modell."
    ]
  },
  "L13-008": {
    task: "Marktumsatz eines Tages: 100 Stück zu 10,00, 300 zu 10,10, 600 zu 10,20 EUR. Berechne den VWAP und den einfachen Mittelwert der drei Preise. Dein Kauf lief im Schnitt zu 10,17 EUR – wie gut war die Ausführung gegen den VWAP?",
    hint: "Gewichte jeden Preis mit seinem Volumen und teile durch das Gesamtvolumen.",
    solution: [
      "VWAP = (100·10,00 + 300·10,10 + 600·10,20)/1.000 = (1.000 + 3.030 + 6.120)/1.000 = 10,15 EUR.",
      "Einfacher Mittelwert der Preise = (10,00 + 10,10 + 10,20)/3 = 10,10 EUR – er ignoriert, dass die meisten Stücke teuer gehandelt wurden.",
      "Dein Schnitt 10,17 liegt 0,02 EUR über dem VWAP (ca. 19,7 bp von 10,15): beim Kauf schlechter als der Markt-Durchschnitt."
    ]
  },
  "L13-009": {
    task: "Fünf Preisstichproben im gleichen Zeitabstand: 50,00; 50,20; 50,10; 49,90; 50,30. Die zugehörigen Volumina: 100; 100; 100; 100; 600. Berechne TWAP und VWAP. Ein Kollege behauptet, beide müssten gleich sein – stimmt das?",
    hint: "TWAP gewichtet jeden Zeitpunkt gleich, VWAP jeden Preis nach Volumen.",
    solution: [
      "TWAP = (50,00 + 50,20 + 50,10 + 49,90 + 50,30)/5 = 250,50/5 = 50,10.",
      "VWAP = (5.000 + 5.020 + 5.010 + 4.990 + 30.180)/1.000 = 50.200/1.000 = 50,20.",
      "Nein: Der hohe Umsatz lag beim höchsten Preis, daher liegt der VWAP 0,10 über dem TWAP. Nur bei gleichmäßig verteiltem Volumen stimmen beide überein."
    ]
  },
  "L13-010": {
    task: "Ein Market Maker verkauft 1.000 Aktien zu 30,01 EUR an einen aggressiven Käufer (Mid davor: 30,00). Fünf Minuten später liegt der Mid bei 30,06. Wie hoch ist sein Ergebnis je Aktie und gesamt, gemessen am späteren Mid? Wie breit müsste der Spread sein, damit er break-even ist?",
    hint: "Vergleiche den Verkaufspreis mit dem Mid nach der Preisbewegung.",
    solution: [
      "Ergebnis je Aktie = 30,01 - 30,06 = -0,05 EUR, gesamt -50 EUR.",
      "Der Halbspread von 0,01 EUR deckt den Preisanstieg von 0,06 EUR nicht.",
      "Break-even: Halbspread = 0,06, also Spread = 0,12 EUR.",
      "Nach aggressiven Käufen steigt der Preis im Mittel (E[ΔP | buy] > 0): Adverse Selection frisst den Spread auf."
    ]
  },
  "L13-011": {
    task: "Eine Aktie steht bei 80,00 EUR. Eine Gewinnmeldung hebt den fairen Wert um 0,60 EUR; kurzfristiges Rauschen drückt den beobachteten Kurs zusätzlich um 0,25 EUR. Berechne den Kurs P_(t+1) und den Kurs, nachdem das Rauschen wieder verschwunden ist.",
    hint: "Information bleibt im Preis, Rauschen nicht.",
    solution: [
      "P_(t+1) = P_t + information + noise = 80,00 + 0,60 - 0,25 = 80,35 EUR.",
      "Verschwindet das Rauschen, bleibt P = 80,00 + 0,60 = 80,60 EUR.",
      "Der Kurs unterschätzt die Nachricht zunächst um 0,25 EUR. Price Discovery heißt: dauerhafte Information vom vorübergehenden Rauschen trennen – im Realfall beides nicht direkt beobachtbar."
    ]
  },
  "L13-012": {
    task: "Eine Order über 100.000 Aktien lässt sich (A) sofort, (B) über 2 Stunden oder (C) über den ganzen Tag ausführen. Schätzung in bp – A: Spread 5, Impact 25, Timing-Risiko 0; B: 5, 14, 9; C: 5, 8, 20. Welche Strategie minimiert Cost = spread + impact + timing risk?",
    hint: "Addiere die drei Komponenten je Strategie und suche die Mitte zwischen zu eilig und zu langsam.",
    solution: [
      "A: 5 + 25 + 0 = 30 bp.",
      "B: 5 + 14 + 9 = 28 bp.",
      "C: 5 + 8 + 20 = 33 bp.",
      "B ist am günstigsten: Warten senkt den Impact, erhöht aber das Timing-Risiko. Bei höherer Volatilität oder Informationsvorsprung würde die optimale Dringlichkeit steigen."
    ]
  },
  "L14-001": {
    task: "Formuliere aus „Momentum scheint zu funktionieren“ eine testbare Hypothese H_1 (mit H_0). Ein Backtest ergibt über 100 Monate eine mittlere Monatsrendite des Signals von 0,6 % bei einer Standardabweichung von 4,0 %. Ist H_1 bei |t| > 1,96 gestützt?",
    hint: "Der t-Wert ist Mittelwert geteilt durch Standardfehler = σ/sqrt(n).",
    solution: [
      "H_1: E[r_(t+1) | Momentum-Signal_t] > 0, H_0: E[r | Signal] ≤ 0. Signal, Messgröße und Zeitraum sind festgelegt, die Aussage ist widerlegbar.",
      "Standardfehler = 4,0 %/sqrt(100) = 0,4 %.",
      "t = 0,6/0,4 = 1,5 < 1,96.",
      "Nicht ausreichend belegt: Der Effekt ist mit dem Rauschen verträglich. „Scheint zu funktionieren“ wäre dagegen keine testbare Aussage."
    ]
  },
  "L14-002": {
    task: "Preise: P_0 = 40,00; P_1 = 41,20; P_2 = 40,60. Berechne das Target y mit Horizont h = 1 und h = 2 für t = 0. Darf das Signal bei t = 0 den Preis P_1 verwenden?",
    hint: "Das Target ist die Zukunftsrendite ab t; das Signal darf nur Daten bis t kennen.",
    solution: [
      "h = 1: y_1 = P_1/P_0 - 1 = 41,20/40,00 - 1 = 3,0 %.",
      "h = 2: y_2 = P_2/P_0 - 1 = 40,60/40,00 - 1 = 1,5 %.",
      "Nein: P_1 gehört zum Target. Features müssen strikt aus Informationen bis t stammen, sonst enthält das Signal die Antwort."
    ]
  },
  "L14-003": {
    task: "Du hast 1.250 Handelstage und nutzt einen zeitlichen 80/20-Split. Das Target ist die 5-Tage-Zukunftsrendite (Tag t deckt t+1 bis t+5 ab). Wie viele Trainingstage bleiben, wenn du Überlappungen mit dem Testzeitraum entfernst? Und warum ist zufälliges Mischen hier falsch?",
    hint: "Welche Trainings-Targets reichen schon in den Testzeitraum hinein?",
    solution: [
      "Train = 1.000 Tage (1 bis 1.000), Test = 250 Tage (1.001 bis 1.250).",
      "Trainingstage t mit t + 5 > 1.000, also t = 996 bis 1.000, haben Targets im Testzeitraum und werden entfernt: 5 Tage.",
      "Es bleiben 995 Trainingstage.",
      "Zufälliges Mischen würde Zukunftsdaten ins Training legen und überlappende, zeitlich korrelierte Targets auf beide Seiten verteilen – der Test wäre zu optimistisch."
    ]
  },
  "L14-004": {
    task: "1.000 Tage, Walk-Forward mit Start-Training 500 Tage und Testfenstern von 100 Tagen. Wie viele Folds ergeben sich, wie groß ist das Training je Fold bei expandierendem Fenster, und wie viele Out-of-Sample-Tage hast du insgesamt?",
    hint: "Nach jedem Test rückt der Trainingsendpunkt um ein Testfenster vor.",
    solution: [
      "Folds = (1.000 - 500)/100 = 5.",
      "Trainingsgrößen (expandierend): 500, 600, 700, 800, 900 Tage.",
      "Out-of-Sample gesamt = 5 · 100 = 500 Tage, jeder Test liegt strikt nach seinem Training.",
      "Bei rollierendem Fenster blieben alle Trainings bei 500 Tagen; so passt sich das Modell stärker an neue Regime an."
    ]
  },
  "L14-005": {
    task: "Tagesrenditen: r_1 = +1 %, r_2 = -2 %, r_3 = +1,5 %, r_4 = -0,5 %. Ein Backtest nutzt Position_t = sign(r_t) und verbucht Position_t · r_t. Berechne die Summe so und dann korrekt mit Position_t auf r_(t+1) (t = 1 bis 3). Wo liegt das Leck?",
    hint: "Mit sign(r_t) · r_t kennst du das Ergebnis schon, bevor du handelst.",
    solution: [
      "Leckender Backtest: |1| + |-2| + |1,5| + |-0,5| = 5,0 % – immer positiv, weil die Position die Rendite selbst nutzt.",
      "Korrekt: Position_1 = +1 auf r_2 = -2 %, Position_2 = -1 auf r_3 = +1,5 % → -1,5 %, Position_3 = +1 auf r_4 = -0,5 %.",
      "Summe = -2 - 1,5 - 0,5 = -4,0 %.",
      "Aus scheinbar +5,0 % wird -4,0 %: Das Feature zur Zeit t enthielt die Information aus der Periode, die es vorhersagen sollte."
    ]
  },
  "L14-006": {
    task: "Eine Strategie dreht das Portfolio täglich zu 100 % um, bringt brutto 4 bp pro Tag und hat Kosten von 5 bp pro 100 % Umschlag. Wie hoch ist r_net pro Tag und grob pro Jahr (252 Tage, ohne Zinseszins)? Bei welchen Kosten wäre sie break-even?",
    hint: "r_net = r_gross - costs, dann mit 252 multiplizieren.",
    solution: [
      "r_net = 4 - 5 = -1 bp pro Tag.",
      "Jahr: -1 · 252 = -252 bp = -2,52 % (brutto wären +10,08 %).",
      "Break-even bei Kosten = 4 bp pro Umschlag.",
      "Hoher Umschlag verwandelt ein positives Bruttosignal schnell in ein negatives Nettoergebnis."
    ]
  },
  "L14-007": {
    task: "Ridge ohne Achsenabschnitt mit einem Feature: x = (1, 2, 3), y = (2, 3, 7). Berechne β für λ = 0 und für λ = 6. Wie stark schrumpft β?",
    hint: "Für ein Feature gilt β = Σxy/(Σx² + λ).",
    solution: [
      "Σxy = 2 + 6 + 21 = 29, Σx² = 1 + 4 + 9 = 14.",
      "λ = 0: β = 29/14 ≈ 2,071.",
      "λ = 6: β = 29/(14 + 6) = 29/20 = 1,45.",
      "Schrumpfung um den Faktor 14/20 = 0,7. Ridge zieht Koeffizienten zu 0, ohne sie exakt auf 0 zu setzen – das stabilisiert verrauschte Schätzungen."
    ]
  },
  "L14-008": {
    task: "Orthonormales Design (X'X = I): Die OLS-Koeffizienten sind b = (0,9; 0,25; -0,6; 0,1). Lasso minimiert ||y-Xβ||² + λ∑|β_j| mit λ = 0,6; es gilt β_j = sign(b_j) · max(|b_j| - λ/2; 0). Berechne die Lasso-Koeffizienten. Wie viele Features bleiben?",
    hint: "Die Schwelle ist λ/2 = 0,3: Betrag darunter ergibt 0, sonst wird um 0,3 geschrumpft.",
    solution: [
      "Schwelle λ/2 = 0,3.",
      "b_1 = 0,9 → 0,9 - 0,3 = 0,6; b_2 = 0,25 → 0; b_3 = -0,6 → -0,3; b_4 = 0,1 → 0.",
      "β = (0,6; 0; -0,3; 0), also 2 von 4 Features bleiben.",
      "Anders als Ridge setzt Lasso schwache Koeffizienten exakt auf 0 und wählt damit Features aus."
    ]
  },
  "L14-009": {
    task: "Feature A (Handelsvolumen): 2.000.000 bei μ = 1.500.000 und σ = 250.000. Feature B (Tagesrendite): 3,0 % bei μ = 0,5 % und σ = 1,0 %. Berechne die z-Werte. Warum sollte μ und σ nur auf dem Trainingsset geschätzt werden?",
    hint: "z = (x - μ)/σ macht Einheiten vergleichbar.",
    solution: [
      "A: z = (2.000.000 - 1.500.000)/250.000 = 2,0.",
      "B: z = (3,0 - 0,5)/1,0 = 2,5.",
      "Die Rendite weicht relativ stärker vom Normalwert ab als das Volumen, obwohl Rohwerte (Millionen vs. Prozent) nicht vergleichbar sind.",
      "Mittelwert und σ aus Test- oder Zukunftsdaten würden Information aus der Zukunft in die Skalierung tragen (Leckage); Ridge/Lasso benötigen zudem vergleichbare Skalen."
    ]
  },
  "L14-010": {
    task: "Modell A: Sharpe im Training 2,4, im Test 0,6. Modell B: 1,1 im Training, 0,9 im Test. Berechne den Anteil des Trainings-Sharpes, der im Test erhalten bleibt, und wähle das robustere Modell.",
    hint: "Teile die Test-Sharpe durch die Train-Sharpe.",
    solution: [
      "A: 0,6/2,4 = 25 %.",
      "B: 0,9/1,1 ≈ 81,8 %.",
      "B ist robuster: Score_test ≈ Score_train. A ist vermutlich überangepasst.",
      "Entscheidend ist der Out-of-Sample-Wert; der beeindruckende Trainingswert von A ist kein Beleg."
    ]
  },
  "L14-011": {
    task: "Du testest 20 voneinander unabhängige Strategien, die in Wahrheit alle wertlos sind, je mit 5 % Signifikanzniveau. Wie hoch ist die Wahrscheinlichkeit für mindestens einen „signifikanten“ Treffer? Wie sieht es mit Bonferroni-Niveau 0,05/20 je Test aus?",
    hint: "Rechne mit dem Gegenereignis: kein einziger falscher Treffer.",
    solution: [
      "P(kein Fehlalarm) = 0,95^20 ≈ 0,358.",
      "P(mindestens einer) = 1 - 0,358 ≈ 64,2 %.",
      "Bonferroni: α = 0,05/20 = 0,25 % je Test; P(mindestens einer) = 1 - 0,9975^20 ≈ 4,9 %.",
      "Je mehr Tests, desto wahrscheinlicher ist ein zufälliger Sieger – man muss das Niveau korrigieren oder die Zahl der Versuche offenlegen."
    ]
  },
  "L14-012": {
    task: "Ein Forscher probiert 5 Lookbacks, 4 Schwellenwerte und 3 Haltedauern und berichtet die beste Variante (einseitiger Test, 5 % Niveau, Varianten als unabhängig angenommen). Wie viele Varianten gibt es und wie wahrscheinlich ist mindestens ein Zufallstreffer?",
    hint: "Multipliziere die Optionen und nutze 1 - 0,95^n.",
    solution: [
      "Varianten: 5 · 4 · 3 = 60.",
      "P(mindestens ein Zufallstreffer) = 1 - 0,95^60 ≈ 95,4 %.",
      "Der Bestwert ist also fast garantiert „signifikant“, auch ohne echten Effekt.",
      "Performance = f(model choices, selection): Wer nur das Gewinnermodell zeigt, verschweigt die Selektion. Man sollte alle Versuche zählen und out-of-sample bestätigen."
    ]
  },
  "L15-001": {
    task: "Mit L = 6 Monaten: Aktie A stieg von 40,00 auf 44,00 EUR, Aktie B fiel von 25,00 auf 23,50 EUR. Bestimme signal = sign(r) für beide. Im Folgemonat fällt A um 3 %, B um 5 %. Wie hoch ist die Rendite eines 50/50 Long-Short-Portfolios nach dem Signal?",
    hint: "Positives Signal heißt long, negatives short.",
    solution: [
      "A: r = 44/40 - 1 = +10 % → +1 (long). B: r = 23,5/25 - 1 = -6 % → -1 (short).",
      "Portfolio: 0,5 · (-3 %) + 0,5 · (+5 %) = +1,0 %.",
      "Die Short-Position in B gewinnt mehr, als die Long-Position in A verliert: Der relative Trend setzte sich fort. Ein einzelner Monat sagt aber über die Signalqualität wenig."
    ]
  },
  "L15-002": {
    task: "Ein Preis schwankt um μ = 100 mit σ = 5. Berechne signal = -(x_t - μ)/σ für x = 108 und x = 93. Wie ändert sich das Signal bei x = 108, falls σ in Wahrheit 10 beträgt?",
    hint: "Das Vorzeichen ist entgegengesetzt zur Abweichung vom Mittelwert.",
    solution: [
      "x = 108: -(108 - 100)/5 = -1,6 (short).",
      "x = 93: -(93 - 100)/5 = +1,4 (long).",
      "Bei σ = 10: -(8)/10 = -0,8, nur halb so stark.",
      "Mean Reversion setzt voraus, dass μ stabil ist und die Abweichung zurückkehrt; bei einem Trend-Regime wäre das Signal falsch."
    ]
  },
  "L15-003": {
    task: "Ein Spread hat aktuell S = 2,40; rollierend μ_t = 1,80 und σ_t = 0,30. Einstieg bei |z| > 1,5, Ausstieg bei |z| < 0,5. Berechne z_t, die Aktion und den Gewinn je Einheit, wenn der Spread später auf 1,92 fällt (μ, σ unverändert).",
    hint: "Ein positiver z-Wert bedeutet einen überdehnten, zu hohen Spread.",
    solution: [
      "z = (2,40 - 1,80)/0,30 = 2,0 > 1,5 → Spread short.",
      "Später: z = (1,92 - 1,80)/0,30 = 0,4 < 0,5 → Ausstieg.",
      "Gewinn je Einheit = 2,40 - 1,92 = 0,48 (Short-Position).",
      "Bleibt der Spread dauerhaft auf höherem Niveau, verschiebt sich μ_t und der Trade verliert."
    ]
  },
  "L15-004": {
    task: "Aus Renditen schätzt du Cov(X,Y) = 0,00036 und Var(Y) = 0,0004. Berechne β. Du bist mit 200.000 EUR in X long: Wie viel Y musst du leerverkaufen, und welche Korrelation ergibt sich bei σ_X = 2,5 % und σ_Y = 2,0 %?",
    hint: "β = Cov/Var(Y); der Hedge-Betrag in Y ist β mal der X-Position.",
    solution: [
      "β = 0,00036/0,0004 = 0,9.",
      "Hedge: 0,9 · 200.000 = 180.000 EUR Y short.",
      "ρ = Cov/(σ_X σ_Y) = 0,00036/(0,025 · 0,02) = 0,72.",
      "Der Hedge entfernt den mit Y gemeinsamen Teil der Schwankung, bei ρ = 0,72 bleibt aber Restrisiko."
    ]
  },
  "L15-005": {
    task: "β = 0,8. Heute: X = 52,00; Y = 60,00. Morgen: X = 51,50; Y = 61,00. Berechne ε_t = X_t - βY_t für beide Tage und den Gewinn einer Position short X / long 0,8 Y.",
    hint: "Rechne X - 0,8·Y zuerst für heute, dann für morgen.",
    solution: [
      "Heute: ε = 52,00 - 0,8 · 60,00 = 52,00 - 48,00 = 4,00.",
      "Morgen: ε = 51,50 - 0,8 · 61,00 = 51,50 - 48,80 = 2,70.",
      "Position: X short gewinnt 0,50, 0,8 Y long gewinnt 0,8 · 1,00 = 0,80, gesamt +1,30 = ε_heute - ε_morgen.",
      "Gewinn entsteht nur durch die Änderung des Residuums, nicht durch die Marktrichtung."
    ]
  },
  "L15-006": {
    task: "Y = (100, 102, 101, 104) und X = (150, 153, 151, 156). Berechne X - 1,5·Y für alle vier Tage. Was sagt das über Kointegration, obwohl beide Preise steigen? Warum reicht hohe Rendite-Korrelation nicht?",
    hint: "Beide Reihen steigen, aber die Linearkombination kann beschränkt bleiben.",
    solution: [
      "Tag 1: 150 - 150 = 0; Tag 2: 153 - 153 = 0; Tag 3: 151 - 151,5 = -0,5; Tag 4: 156 - 156 = 0.",
      "Das Residuum schwankt eng um etwa -0,125 (Mittel) – bei Preisen von 100 bis 156. Das ist typisch für Kointegration: X - βY stationär.",
      "Hohe Korrelation der Renditen sagt nur, dass sich Änderungen gleichgerichtet bewegen; das Preisniveau-Residuum kann trotzdem auseinanderlaufen (kein Gleichgewicht).",
      "Praktisch prüft man das Residuum mit Stationaritätstests, z. B. ADF."
    ]
  },
  "L15-007": {
    task: "Der Spread folgt einem OU-Prozess mit κ = 0,05 pro Tag. Berechne die Halbwertszeit. Wie groß ist eine Abweichung von 6,00 nach ca. zwei Halbwertszeiten? Und welche Halbwertszeit ergibt sich, wenn der tägliche AR(1)-Koeffizient 0,95 beträgt?",
    hint: "t_(1/2) = ln(2)/κ; bei AR(1) gilt κ = -ln(b) pro Tag.",
    solution: [
      "t_(1/2) = ln(2)/0,05 ≈ 13,86 Tage.",
      "Zwei Halbwertszeiten ≈ 27,7 Tage: 6,00 · 0,5² = 1,50.",
      "AR(1): κ = -ln(0,95) ≈ 0,0513 → t_(1/2) ≈ 13,5 Tage.",
      "Eine Halbwertszeit von rund zwei Wochen sagt, wie lange man Mean-Reversion-Positionen typischerweise halten muss."
    ]
  },
  "L15-008": {
    task: "Drei Monate (IV, RV in %): (18, 14), (19, 23), (17, 12). Berechne VRP = IV - RV je Monat und im Mittel. Was bedeutet das für den Verkauf von Volatilität?",
    hint: "Ein negativer Monat kann trotz positivem Mittel vorkommen.",
    solution: [
      "VRP: 18 - 14 = +4; 19 - 23 = -4; 17 - 12 = +5.",
      "Mittel = (4 - 4 + 5)/3 ≈ +1,67 Vol-Punkte.",
      "Im Schnitt war implizite Vola zu teuer – wer Vola verkauft, verdient die Prämie in zwei von drei Monaten.",
      "Der Verlustmonat (RV > IV) zeigt das Schwanzrisiko: kleine regelmäßige Gewinne, gelegentlich große Verluste."
    ]
  },
  "L15-009": {
    task: "Fünf Tagesrenditen: +1 %, -2 %, +0,5 %, -1 %, +1,5 %. Berechne RV = sqrt(∑r²) für den Fünf-Tage-Zeitraum und die annualisierte Volatilität (252 Tage).",
    hint: "Quadriere die Renditen und summiere; zum Annualisieren Tagesvarianz mal 252.",
    solution: [
      "∑r² = 1 + 4 + 0,25 + 1 + 2,25 = 8,5 (in %²).",
      "RV (5 Tage) = sqrt(8,5) ≈ 2,92 %.",
      "Annualisiert: sqrt(8,5/5 · 252) = sqrt(428,4) ≈ 20,7 %.",
      "Vorzeichen spielen keine Rolle, nur Größe – RV misst realisierte Schwankung, nicht die Richtung."
    ]
  },
  "L15-010": {
    task: "IV(30 Tage) = 24 %, IV(90 Tage) = 20 %, IV(180 Tage) = 19 %. Ist die Struktur steigend oder invers? Berechne die implizite Forward-Volatilität zwischen Tag 30 und 90 aus 0,20²·90 - 0,24²·30 geteilt durch 60 Tage.",
    hint: "Gesamtvarianz = σ² · Tage; die Differenz ist die Varianz in der Periode dazwischen.",
    solution: [
      "Invers (kurze Laufzeit teurer): 24 % > 20 % > 19 %.",
      "Varianz bis 90 Tage: 0,04 · 90 = 3,6; bis 30 Tage: 0,0576 · 30 = 1,728.",
      "Forward-Varianz = (3,6 - 1,728)/60 = 0,0312, Forward-Vola = sqrt(0,0312) ≈ 17,7 %.",
      "Der Markt erwartet kurzfristig hohe Unsicherheit (z. B. ein Ereignis), danach ruhigere Zeiten."
    ]
  },
  "L15-011": {
    task: "Montag: Put (25-Delta) IV 26 %, Call (25-Delta) IV 22 %. Freitag: Put 29 %, Call 23 %. Berechne skew ≈ IV_put - IV_call an beiden Tagen und deute die Veränderung.",
    hint: "Ein steigender Skew bedeutet, dass Puts relativ zu Calls teurer werden.",
    solution: [
      "Montag: 26 - 22 = 4 Vol-Punkte; Freitag: 29 - 23 = 6 Vol-Punkte.",
      "Der Skew stieg um 2 Punkte.",
      "Absicherung gegen fallende Kurse wurde relativ teurer – ein Zeichen wachsender Abwärtsangst.",
      "Das ist nur eine relative Preisinformation; das allgemeine Volatilitätsniveau stieg zusätzlich."
    ]
  },
  "L15-012": {
    task: "Drei standardisierte Signale: Momentum z = 1,2, Value z = -0,5, Carry z = 2,0 mit Gewichten 0,5; 0,3; 0,2. Berechne s = ∑w_i z_i, vergleiche mit gleichen Gewichten 1/3 und prüfe die Gewichtssumme.",
    hint: "Setze nacheinander w_i · z_i ein und summiere.",
    solution: [
      "s = 0,5 · 1,2 + 0,3 · (-0,5) + 0,2 · 2,0 = 0,60 - 0,15 + 0,40 = 0,85.",
      "Gleiche Gewichte: (1,2 - 0,5 + 2,0)/3 = 0,90.",
      "Gewichtssumme 0,5 + 0,3 + 0,2 = 1,0, die Skala bleibt wie die der einzelnen z-Scores.",
      "Korrelierte Signale zählen im Ergebnis doppelt – Gewichte sollten deshalb nicht blind gewählt werden."
    ]
  },
  "L16-001": {
    task: "Aktie bei 100: IV(K=90) = 26 %, IV(K=100) = 20 %, IV(K=110) = 23 %. Ein Modell mit konstantem σ = 20 % bewertet den Put K=90. Sein Vega beträgt 0,12 EUR je Vol-Punkt. Wie weit liegt der Modellpreis ungefähr unter dem Marktpreis, und was ist die Form der Kurve?",
    hint: "Multipliziere die IV-Differenz in Punkten mit Vega.",
    solution: [
      "Differenz = 26 - 20 = 6 Vol-Punkte.",
      "Preisabweichung ≈ 6 · 0,12 = 0,72 EUR zu niedrig.",
      "Die IV ist bei ATM am niedrigsten und steigt zu beiden Seiten: ein Smile statt einer flachen Linie.",
      "Konstantes σ ist ein zu einfaches Modell, der Markt bepreist Strikes unterschiedlich."
    ]
  },
  "L16-002": {
    task: "IV bei K = 90: 26 %, K = 100: 22 %, K = 110: 19 %. Berechne ∂σ/∂K näherungsweise für beide Intervalle (Vol-Punkte pro Strike-Punkt) und schätze IV(95) linear.",
    hint: "Differenzenquotient: Änderung der IV geteilt durch die Strike-Änderung.",
    solution: [
      "90 → 100: (22 - 26)/10 = -0,4 Punkte pro Strike.",
      "100 → 110: (19 - 22)/10 = -0,3 Punkte pro Strike.",
      "Linear: IV(95) ≈ 24 %.",
      "Negatives ∂σ/∂K ist ein typischer Aktien-Skew: niedrige Strikes (Puts) sind relativ teurer."
    ]
  },
  "L16-003": {
    task: "Eine Local-Vol-Funktion liefert σ(80) = 32 %, σ(100) = 22 %, σ(120) = 18 %. Berechne für S = 80 und S = 100 die Standardabweichung der Tagesrendite σ·sqrt(dt) mit dt = 1/252 und die absolute Standardabweichung von dS.",
    hint: "Die Streuung von dS ist σ(S,t) · S · sqrt(dt).",
    solution: [
      "S = 80: 0,32/sqrt(252) ≈ 2,02 %; dS ≈ 80 · 0,0202 ≈ 1,61.",
      "S = 100: 0,22/sqrt(252) ≈ 1,39 %; dS ≈ 100 · 0,0139 ≈ 1,39.",
      "Die Volatilität hängt vom Kursniveau ab – bei fallenden Kursen steigt sie.",
      "Local Vol ist deterministisch in (S,t); dieselbe Zufallsquelle W treibt alles."
    ]
  },
  "L16-004": {
    task: "Mit r = 0 gilt σ_loc² = (∂C/∂T)/(½K² ∂²C/∂K²). Bei K = 100 sind ∂C/∂T = 4,0 pro Jahr und ∂²C/∂K² = 0,02. Berechne σ_loc. Was bedeutet ∂C/∂T = -0,5?",
    hint: "Nenner: ½ · 100² · 0,02.",
    solution: [
      "Nenner = 0,5 · 10.000 · 0,02 = 100.",
      "σ_loc² = 4,0/100 = 0,04, σ_loc = 20 %.",
      "∂C/∂T = -0,5 liefert eine negative Varianz – eine Kalender-Arbitrage (längere Laufzeit billiger); die Preise wären nicht konsistent.",
      "Dupire verbindet beobachtbare Optionspreise mit der lokalen Volatilität."
    ]
  },
  "L16-005": {
    task: "Heston: κ = 2, θ = 0,04, aktuell v = 0,09, ξ = 0,5. Berechne die Drift von dv pro Jahr, die Halbwertszeit der Abweichung v - θ in Handelstagen und prüfe die Feller-Bedingung 2κθ ≥ ξ².",
    hint: "Drift = κ(θ - v); Halbwertszeit = ln(2)/κ.",
    solution: [
      "Drift = 2 · (0,04 - 0,09) = -0,10 pro Jahr (v wird zum Mittel gezogen).",
      "t_(1/2) = ln(2)/2 ≈ 0,3466 Jahre ≈ 87 Handelstage.",
      "Feller: 2κθ = 0,16 < ξ² = 0,25 → verletzt, v kann die Null erreichen.",
      "Die Vola sqrt(v) = 30 % liegt über dem Langfristniveau sqrt(θ) = 20 %."
    ]
  },
  "L16-006": {
    task: "Heston mit ρ = -0,7. Beobachtet wird ein Aktienschock von -1,5 Standardabweichungen. Wie hoch ist der erwartete Schock von dW_v in Standardabweichungen, wie groß ist der unabhängige Anteil sqrt(1 - ρ²), und wie wirkt ρ < 0 auf den Skew?",
    hint: "dW_v = ρ dW_S + sqrt(1 - ρ²) dW_perp.",
    solution: [
      "E[z_v | z_S = -1,5] = ρ · z_S = -0,7 · (-1,5) = +1,05.",
      "sqrt(1 - 0,49) = sqrt(0,51) ≈ 0,714.",
      "Fällt der Kurs, steigt tendenziell die Varianz: Verluste werden von höherer Vola begleitet.",
      "Das erzeugt einen negativen Skew (teure Puts); bei ρ = 0 wäre der Smile symmetrischer."
    ]
  },
  "L16-007": {
    task: "Du bist long 10.000 OTM-Calls (1 Aktie je Option) mit Δ = 0,30 und Vanna = 0,012 je Vol-Punkt. Du hast mit 3.000 Aktien Short delta-gehedgt. Die implizite Vola steigt um 5 Punkte. Wie groß ist das neue Netto-Delta?",
    hint: "Neues Delta = Δ + Vanna · Δσ.",
    solution: [
      "Δ_neu = 0,30 + 0,012 · 5 = 0,36.",
      "Options-Delta = 10.000 · 0,36 = 3.600; Hedge short 3.000 → Netto-Delta +600 Aktien.",
      "Du bist ohne Kursänderung wieder net long und musst 600 Aktien nachverkaufen.",
      "Vanna misst genau diesen Einfluss der Volatilität auf das Delta."
    ]
  },
  "L16-008": {
    task: "Eine Call-Position über 200 Kontrakte à 100 Aktien hat Δ = 0,40 und Charm = -0,015 pro Kalendertag. Am Freitag bist du mit Aktien delta-neutral. Wie ändert sich das Delta über das Wochenende (3 Tage), und was musst du am Montag handeln?",
    hint: "Delta-Änderung = Charm · Zeit; rechne dann auf 20.000 Aktien um.",
    solution: [
      "Zeitänderung: -0,015 · 3 = -0,045, Δ_neu = 0,355.",
      "Optionsdelta: 20.000 · 0,40 = 8.000 → 20.000 · 0,355 = 7.100.",
      "Hedge: Short 8.000 Aktien; nötig sind nur noch 7.100, also 900 Aktien zurückkaufen.",
      "Charm ist die Drift des Deltas durch Zeitablauf, die man ohne Preisbewegung rebalancieren muss."
    ]
  },
  "L16-009": {
    task: "Eine Option hat Vega = 0,25 EUR je Vol-Punkt und Volga = 0,02 EUR je Vol-Punkt². Schätze die Preisänderung bei Δσ = +5 und bei Δσ = -5 mit ΔV ≈ Vega·Δσ + ½·Volga·Δσ².",
    hint: "Der Volga-Term ist unabhängig vom Vorzeichen von Δσ.",
    solution: [
      "Δσ = +5: 0,25 · 5 + 0,5 · 0,02 · 25 = 1,25 + 0,25 = 1,50 EUR.",
      "Δσ = -5: -1,25 + 0,25 = -1,00 EUR.",
      "Die Option gewinnt mehr, als sie verliert: positive Konvexität in der Vola.",
      "Mit Vega allein wären es ±1,25 – der Volga-Term gleicht das asymmetrische Muster aus."
    ]
  },
  "L16-010": {
    task: "Monte-Carlo-Preise: V(101) = 6,52, V(99) = 5,48, h = 1. Berechne Δ mit zentralen Differenzen. Jeder Preis hat Rauschen von 0,05 (unabhängige Zufallszahlen). Wie groß ist die Streuung von Δ̂ für h = 1 und h = 0,1? Welcher Trick hilft?",
    hint: "Std von Δ̂ = sqrt(2)·0,05/(2h).",
    solution: [
      "Δ ≈ (6,52 - 5,48)/(2·1) = 0,52.",
      "h = 1: sqrt(2) · 0,05/2 ≈ 0,035.",
      "h = 0,1: sqrt(2) · 0,05/0,2 ≈ 0,354 – zehnmal größeres Rauschen.",
      "Kleines h senkt den Bias, verstärkt aber das Rauschen. Gemeinsame Zufallszahlen für beide Preise (Common Random Numbers) lösen das Problem weitgehend."
    ]
  },
  "L16-011": {
    task: "Ein Portfolio hat Delta = +500, Gamma = -40, Vega = +1.200 pro Vol-Punkt. Szenario: Kurs -10, Vola +4 Punkte. Berechne ΔV ≈ Δ·ΔS + ½Γ(ΔS)² + Vega·Δσ.",
    hint: "Bearbeite die drei Terme einzeln.",
    solution: [
      "Delta-Term: 500 · (-10) = -5.000.",
      "Gamma-Term: 0,5 · (-40) · 100 = -2.000.",
      "Vega-Term: 1.200 · 4 = +4.800.",
      "ΔV ≈ -5.000 - 2.000 + 4.800 = -2.200.",
      "Die Vega-Gewinne mildern den Kursverlust nur teilweise; die Näherung gilt nur für kleine Szenarien."
    ]
  },
  "L16-012": {
    task: "Marktpreise für Calls K = 90/100/110: 12,0; 5,0; 1,5. Parametersatz θ1 liefert 11,6; 5,3; 1,6, Parametersatz θ2 liefert 12,1; 4,9; 1,2. Berechne die Summe der quadrierten Fehler und wähle den besseren. Was ist die Gefahr bei vielen freien Parametern?",
    hint: "Fehler = C_model - C_market, quadriert und aufsummiert.",
    solution: [
      "θ1: 0,4² + 0,3² + 0,1² = 0,16 + 0,09 + 0,01 = 0,26.",
      "θ2: 0,1² + 0,1² + 0,3² = 0,01 + 0,01 + 0,09 = 0,11.",
      "θ2 passt besser zu den Marktpreisen.",
      "Zu viele Parameter bei wenigen Quotes führen zu Überanpassung; kalibrierte Parameter sollten stabil und auf anderen Strikes nachprüfbar sein."
    ]
  },
  "L16-013": {
    task: "IV bei K = 100: 1 Monat 21 %, 3 Monate 21,5 %. Schätze die IV bei 2 Monaten durch lineare Interpolation der Gesamtvarianz w = σ²·T (T in Jahren) und nicht der Vola. Warum ist das sinnvoller?",
    hint: "Interpoliere w in T und rechne danach σ = sqrt(w/T).",
    solution: [
      "w(1M) = 0,21² · (1/12) = 0,003675; w(3M) = 0,215² · 0,25 = 0,011556.",
      "w(2M) = Mittelwert (T liegt in der Mitte) = 0,007616.",
      "σ(2M) = sqrt(0,007616 · 6) ≈ 21,4 %.",
      "Gesamtvarianz muss mit T monoton steigen (keine Kalender-Arbitrage); die Interpolation von w erhält das, die einfache IV-Interpolation nicht immer."
    ]
  },
  "L16-014": {
    task: "Skew = σ(K_low) - σ(K_ATM). Heute: IV(K_low = 90) = 25 %, ATM = 20 %. Eine Woche später: 27 % und 22 %. Berechne den Skew in Punkten und relativ zum ATM-Niveau.",
    hint: "Trenne die Niveauverschiebung vom Skew.",
    solution: [
      "Heute: 25 - 20 = 5 Punkte, relativ 5/20 = 25 %.",
      "Eine Woche später: 27 - 22 = 5 Punkte, relativ 5/22 ≈ 22,7 %.",
      "In Punkten ist der Skew gleich geblieben, relativ gesunken: das gesamte Niveau stieg, nicht die Put-Prämie allein.",
      "So trennt man Niveau von Neigung der Smile-Struktur."
    ]
  },
  "L16-015": {
    task: "Long 100 ATM-Optionen (Vega 0,40, Volga 0 je Option) und Short 400 Wing-Optionen (Vega 0,10, Volga 0,03 je Option). Zeige, dass die Position vega-neutral ist, und schätze die Wertänderung bei Δσ = +4 und -4.",
    hint: "Volga-Netto mal ½ mal Δσ².",
    solution: [
      "Vega netto: 100 · 0,40 - 400 · 0,10 = 40 - 40 = 0.",
      "Volga netto: 0 - 400 · 0,03 = -12.",
      "ΔV ≈ ½ · (-12) · 16 = -96 für Δσ = +4 und ebenfalls -96 für Δσ = -4.",
      "Vega-neutral heißt nicht Vola-sicher: Die Short-Volga-Position verliert bei großen Vola-Bewegungen in beide Richtungen."
    ]
  },
  "L16-016": {
    task: "dΔ ≈ Γ dS + Vanna dσ + Charm dt mit Γ = 0,04 pro EUR, Vanna = 0,01 pro Vol-Punkt, Charm = -0,02 pro Tag. Heute: Δ = 0,50. Morgen: dS = +1,5, dσ = -2, dt = 1. Berechne das neue Delta.",
    hint: "Rechne die drei Einflüsse getrennt.",
    solution: [
      "Gamma: 0,04 · 1,5 = +0,06.",
      "Vanna: 0,01 · (-2) = -0,02.",
      "Charm: -0,02 · 1 = -0,02.",
      "dΔ = 0,06 - 0,02 - 0,02 = +0,02, also Δ_neu = 0,52.",
      "Das Delta ändert sich nicht nur durch den Kurs, sondern auch durch Vola und Zeit."
    ]
  },
  "L16-017": {
    task: "Ein Monte-Carlo-Preis hat Stichproben-σ_X = 12. Berechne SE bei N = 10.000, ein 95-%-Intervall bei Mittelwert 7,40 (±1,96·SE) und das N für SE = 0,03.",
    hint: "SE = σ_X/sqrt(N), umgekehrt N = (σ_X/SE)².",
    solution: [
      "SE = 12/sqrt(10.000) = 0,12.",
      "Intervall: 7,40 ± 1,96 · 0,12 = 7,40 ± 0,235, also [7,165; 7,635].",
      "N = (12/0,03)² = 400² = 160.000.",
      "Vierfache Rechenzeit halbiert den Fehler (1/sqrt(N)), ist also teuer."
    ]
  },
  "L16-018": {
    task: "Antithetische Paare (ε, -ε) liefern Call-Payoffs: ε = +1: 8, ε = -1: 0; ε = +0,5: 3, ε = -0,5: 0. Berechne die Paarmittel und deren Mittelwert. Die Korrelation innerhalb eines Paares sei ρ = -0,6: Wie groß ist die Varianz des Paarmittels relativ zu zwei unabhängigen Ziehungen?",
    hint: "Var(Paarmittel) = σ²/2 · (1 + ρ).",
    solution: [
      "Paarmittel: (8 + 0)/2 = 4 und (3 + 0)/2 = 1,5, Schätzer = 2,75.",
      "Antithetisch: σ²/2 · (1 - 0,6) = 0,2σ²; unabhängig: σ²/2 = 0,5σ².",
      "Die Varianz sinkt um 60 %, bei gleicher Anzahl Payoff-Auswertungen.",
      "Der Trick wirkt nur, wenn der Payoff monoton in ε ist (negative Korrelation)."
    ]
  },
  "L16-019": {
    task: "Heston-Euler-Schritt: v_0 = 0,04, κ = 3, θ = 0,04, ξ = 0,6, dt = 0,01. Berechne v_1 für ε_v = -1 und ε_v = -4 (jeweils v_1 = v_0 + κ(θ - v_0)dt + ξ·sqrt(v_0)·sqrt(dt)·ε_v) und die Vola für ε_v = -1. Warum wird nach unten abgeschnitten?",
    hint: "Die Drift ist null, weil v_0 = θ gilt.",
    solution: [
      "Zufallsterm: 0,6 · 0,2 · 0,1 = 0,012 · ε_v.",
      "ε_v = -1: v_1 = 0,04 - 0,012 = 0,028, Vola = sqrt(0,028) ≈ 16,7 %.",
      "ε_v = -4: v_1 = 0,04 - 0,048 = -0,008 < 0.",
      "Negative Varianz ist unzulässig; man nutzt max(v, 0) (Full Truncation). Die Feller-Bedingung 2κθ = 0,24 < ξ² = 0,36 ist verletzt, solche Pfade sind plausibel."
    ]
  },
  "L16-020": {
    task: "Drei Optionen: Modell - Markt = +0,3; -0,2; +0,5. Gewichte w = (4; 1; 0,25) (Liquidität ATM hoch, Wings niedrig). Berechne die gewichtete und die ungewichtete Fehlersumme und begründe die Gewichte.",
    hint: "Summe der w_i · Fehler_i².",
    solution: [
      "Quadrate: 0,09; 0,04; 0,25.",
      "Gewichtet: 4 · 0,09 + 1 · 0,04 + 0,25 · 0,25 = 0,36 + 0,04 + 0,0625 = 0,4625.",
      "Ungewichtet: 0,09 + 0,04 + 0,25 = 0,38.",
      "Der große Fehler der illiquiden dritten Option zählt kaum, die liquiden ATM-Quotes dominieren. Gewichte sollten Qualität und Unsicherheit der Quotes widerspiegeln."
    ]
  },
  "L16-021": {
    task: "Aus einer Preisreihe: V(99) = 4,10, V(100) = 4,60, V(101) = 5,15 (h = 1). Berechne Delta mit zentraler, Vorwärts- und Rückwärtsdifferenz sowie Gamma. Warum weicht die Vorwärtsdifferenz ab?",
    hint: "Die Vorwärtsdifferenz weicht um ca. ½Γh ab.",
    solution: [
      "Zentral: (5,15 - 4,10)/2 = 0,525.",
      "Vorwärts: 5,15 - 4,60 = 0,55; rückwärts: 4,60 - 4,10 = 0,50.",
      "Gamma = (5,15 - 2 · 4,60 + 4,10)/1² = 0,05.",
      "Vorwärts - zentral = 0,025 = ½Γh: der Fehler erster Ordnung entsteht durch die Krümmung. Die zentrale Differenz hebt ihn auf (Fehler O(h²))."
    ]
  },
  "L16-022": {
    task: "Ein Optionsbuch hat Δ = -2.000, Γ = +150, Vega = +3.000 pro Vol-Punkt, Θ = -800 pro Tag. Szenario: Kurs +5, Vola -3 Punkte, 1 Tag. Berechne ΔP ≈ Δ·dS + ½Γ·dS² + Vega·dσ + Θ·dt und nenne den größten Treiber.",
    hint: "Vier Terme einzeln berechnen und summieren.",
    solution: [
      "Delta: -2.000 · 5 = -10.000.",
      "Gamma: 0,5 · 150 · 25 = +1.875.",
      "Vega: 3.000 · (-3) = -9.000.",
      "Theta: -800 · 1 = -800.",
      "ΔP ≈ -10.000 + 1.875 - 9.000 - 800 = -17.925.",
      "Delta ist der größte Treiber, dicht gefolgt von Vega; die Position ist short Kurs und long Vola, ein Anstieg bei gleichzeitig fallender Vola trifft sie doppelt."
    ]
  }
});
