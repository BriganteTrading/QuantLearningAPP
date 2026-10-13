window.QUANT_EXERCISES = Object.assign(window.QUANT_EXERCISES || {}, {
  "L08-001": {
    task: "Der Call-Strike 450 hat gestern einen Open Interest von 10.000 Kontrakten. Heute werden 3.000 Kontrakte neu eröffnet und 1.200 bestehende Kontrakte glattgestellt. Berechne das Handelsvolumen dieses Strikes (nur diese Trades) und den neuen Open Interest.",
    hint: "Jeder Trade berührt das Volumen, aber nur Eröffnungen und Schließungen verändern den offenen Bestand.",
    solution: [
      "Volumen = 3.000 + 1.200 = 4.200 Kontrakte.",
      "OI_neu = 10.000 + 3.000 - 1.200 = 11.800 Kontrakte.",
      "Interpretation: Das Volumen (4.200) ist größer als die OI-Änderung (+1.800). OI ist ein Bestand, Volumen ein Fluss."
    ]
  },
  "L08-002": {
    task: "Eine Option hat bei S = 80 ein Gamma von 0,03. Du bist long 5 Kontrakte (Multiplikator M = 100). Der Kurs steigt von 80 auf 82. Um wie viele Aktien ändert sich dein Positions-Delta näherungsweise?",
    hint: "Gamma ist die Änderung des Deltas pro Kurseinheit; vergiss die Kontraktzahl und den Multiplikator nicht.",
    solution: [
      "Delta-Änderung je Option: ΔΔ ≈ Γ · ΔS = 0,03 · 2 = 0,06.",
      "Optionen insgesamt: 5 · 100 = 500.",
      "Positions-Delta ändert sich um 0,06 · 500 = +30 Aktien.",
      "Interpretation: Long Gamma bedeutet, dass das Delta bei steigendem Kurs wächst; die Näherung gilt nur für kleine ΔS."
    ]
  },
  "L08-003": {
    task: "Berechne GEX ≈ Γ·OI·M·S²·κ für Γ = 0,002, OI = 8.000, M = 100, S = 450 und κ = 0,01 (Normierung auf 1 % Kursbewegung). Gib das Ergebnis in Dollar an und sage, was die Einheit aussagt.",
    hint: "Multipliziere zuerst Γ·OI·M, dann S² und zuletzt den Faktor κ.",
    solution: [
      "Γ·OI·M = 0,002 · 8.000 · 100 = 1.600 (Aktien pro 1 Dollar Kursänderung).",
      "S² = 450² = 202.500.",
      "GEX = 1.600 · 202.500 · 0,01 = 3.240.000.",
      "Ergebnis: etwa 3,24 Mio. Dollar Hedge-Volumen pro 1 % Kursbewegung. Die Zahl ist eine Modellgröße, kein beobachteter Orderfluss."
    ]
  },
  "L08-004": {
    task: "Γ = 0,004, OI = 5.000, M = 100, S = 200. Wie viele Aktien (und wie viele Dollar) müssen Dealer bei einer 1-%-Kursbewegung nachhedgen? Was passiert mit dem Dollarbetrag, wenn S bei gleichem Γ auf 400 verdoppelt wird?",
    hint: "Eine 1-%-Bewegung ist 0,01·S in Dollar; der Dollarbetrag entsteht durch Multiplikation mit S.",
    solution: [
      "Γ·OI·M = 0,004 · 5.000 · 100 = 2.000 Aktien pro Dollar.",
      "ΔS bei 1 % = 0,01 · 200 = 2 Dollar, also 2.000 · 2 = 4.000 Aktien.",
      "Dollar-Betrag: 4.000 · 200 = 800.000 Dollar.",
      "Bei S = 400: ΔS = 4, Aktien = 8.000, Betrag = 8.000 · 400 = 3.200.000 Dollar, also das Vierfache.",
      "Interpretation: Ein S entsteht durch die Größe der 1-%-Bewegung, das zweite durch die Umrechnung in Dollar, daher S²."
    ]
  },
  "L08-005": {
    task: "Bei S = 50, M = 100 und Γ = 0,01 gilt: Call-Strike hat OI = 2.000, Put-Strike hat OI = 3.000. Berechne GEX = ±Γ·OI·M·S²·0,01 je Seite und die Summe unter der Annahme Calls = +, Puts = -. Welches Vorzeichen ergibt sich bei der umgekehrten Dealer-Annahme?",
    hint: "Die Beträge sind identisch zur Rechnung, nur das Vorzeichen κ hängt von der Annahme ab.",
    solution: [
      "S² = 2.500.",
      "Call: 0,01 · 2.000 · 100 · 2.500 · 0,01 = 50.000.",
      "Put: 0,01 · 3.000 · 100 · 2.500 · 0,01 = 75.000.",
      "Summe mit Calls = +, Puts = -: 50.000 - 75.000 = -25.000.",
      "Umgekehrte Annahme (Dealer short Calls, long Puts): +25.000.",
      "Interpretation: Das Vorzeichen des Gesamt-GEX hängt von einer unbeobachtbaren Positionsannahme ab."
    ]
  },
  "L08-006": {
    task: "Die Dealer-Bücher haben ein Netto-Gamma von Γ_dealer = +2.000 Aktien pro Dollar. Der Kurs steigt um 1,5 Dollar. Welche Hedge-Änderung dΔ_hedge ≈ -Γ_dealer·dS ergibt sich, und welche Handelsrichtung ist das?",
    hint: "Setze Γ_dealer und dS mit Vorzeichen ein; ein negatives Ergebnis bedeutet Verkaufen.",
    solution: [
      "dΔ_hedge ≈ -2.000 · 1,5 = -3.000 Aktien.",
      "Die Dealer verkaufen etwa 3.000 Aktien in den Kursanstieg hinein.",
      "Interpretation: Bei positivem Dealer-Gamma wirkt der Hedge gegen die Bewegung (dämpfend)."
    ]
  },
  "L08-007": {
    task: "Bei Γ_dealer = +1.500 Aktien pro Punkt fällt der Index um 4 Punkte. Berechne den Hedge-Trade der Dealer und erkläre, warum positives Dealer-Gamma den Markt tendenziell stabilisiert.",
    hint: "Wer bei Kursverlusten kauft und bei Kursgewinnen verkauft, arbeitet gegen den Trend.",
    solution: [
      "dΔ_hedge ≈ -Γ_dealer · dS = -1.500 · (-4) = +6.000.",
      "Die Dealer kaufen 6.000 Aktien in den fallenden Markt.",
      "Interpretation: Kaufen bei Rückgang und Verkaufen bei Anstieg erzeugt Gegenfluss, was Schwankungen dämpft (Mean-Reversion-Druck)."
    ]
  },
  "L08-008": {
    task: "Bei Γ_dealer = -2.500 Aktien pro Dollar fällt der Kurs um 3 Dollar. Welche Hedge-Bewegung ergibt sich laut dΔ_hedge ≈ -Γ_dealer·dS? Warum kann das den Abwärtstrend verstärken?",
    hint: "Zwei Minuszeichen heben sich auf, achte auf das Gesamtergebnis.",
    solution: [
      "dΔ_hedge ≈ -(-2.500) · (-3) = -7.500.",
      "Die Dealer verkaufen 7.500 Aktien in den fallenden Markt.",
      "Interpretation: Verkaufen bei Kursverlusten verstärkt die Bewegung (prozyklisch). Das ist der Mechanismus hinter möglichen Volatilitätsschüben bei negativem Gamma."
    ]
  },
  "L08-009": {
    task: "GEX je Strike (in Mio. Dollar): K = 4.900: +1,2; K = 5.000: +3,5; K = 5.100: -2,0; K = 5.200: -3,1. Berechne GEX_net. Wie ändert sich das Vorzeichen, wenn der Strike 5.000 durch Verfall vollständig wegfällt?",
    hint: "Addiere alle Strikes mit Vorzeichen; der Strike 5.000 ist der größte positive Posten.",
    solution: [
      "GEX_net = 1,2 + 3,5 - 2,0 - 3,1 = -0,4 Mio. Dollar.",
      "Ohne K = 5.000: 1,2 - 2,0 - 3,1 = -3,9 Mio. Dollar.",
      "Interpretation: Das Netto ist schon knapp negativ; der Wegfall des großen positiven Strikes macht es deutlich negativer. Einzelne Strikes können das Gesamtbild kippen."
    ]
  },
  "L08-010": {
    task: "Netto-GEX in Mio. Dollar: bei S = 4.900 ist er -1,0, bei S = 5.000 ist er +0,6. Schätze den Gamma Flip S* per linearer Interpolation. Warum ist das nur eine Näherung?",
    hint: "Suche den Punkt, an dem die Gerade zwischen beiden Werten die Nulllinie schneidet.",
    solution: [
      "Anstieg: (0,6 - (-1,0)) / 100 = 0,016 pro Punkt.",
      "S* = 4.900 + 1,0 / 0,016 = 4.900 + 62,5 = 4.962,5.",
      "Interpretation: Oberhalb von etwa 4.962,5 ist das Netto-Gamma positiv, darunter negativ. Die Kurve ist nicht linear (Gamma hängt von S ab), daher nur grobe Schätzung."
    ]
  },
  "L08-011": {
    task: "Ein Call hat Delta 0,60 und Charm = -0,05 pro Tag. Du bist long 20 Kontrakte (M = 100). Wie groß ist das Positions-Delta (in Aktien) heute und nach 3 Tagen bei unverändertem Kurs und Vol (lineare Näherung)?",
    hint: "Charm ist ∂Δ/∂t, also Delta-Änderung pro Zeiteinheit.",
    solution: [
      "Optionen: 20 · 100 = 2.000.",
      "Heute: 0,60 · 2.000 = 1.200 Aktien.",
      "Nach 3 Tagen: Δ = 0,60 + 3 · (-0,05) = 0,45, also 0,45 · 2.000 = 900 Aktien.",
      "Interpretation: Allein durch Zeitablauf schrumpft das Delta um 300 Aktien. Ein Hedge muss entsprechend angepasst werden."
    ]
  },
  "L08-012": {
    task: "Ein ITM-Call hat Delta 0,80 und Vanna = ∂Δ/∂σ = -0,004 pro Volatilitätspunkt. Die implizite Vol fällt von 22 % auf 18 % bei gleichem Kurs. Wie ändert sich das Delta je Option und für 50 Kontrakte (M = 100)?",
    hint: "Multipliziere Vanna mit der Vol-Änderung in Punkten, Vorzeichen beachten.",
    solution: [
      "Δσ = -4 Punkte.",
      "ΔΔ ≈ Vanna · Δσ = -0,004 · (-4) = +0,016.",
      "Neues Delta: 0,80 + 0,016 = 0,816.",
      "Positions-Delta: 0,016 · 50 · 100 = +80 Aktien.",
      "Interpretation: Fällt die Vol, wird ein ITM-Call deltareicher. Spot- und Vol-Bewegung sind nicht unabhängig."
    ]
  },
  "L08-013": {
    task: "Zwei Strikes bei S = 100, M = 100: Strike A hat Γ = 0,02, OI = 1.000; Strike B hat Γ = 0,05, OI = 300. Berechne GEX_i ∝ Γ_i·OI_i·M·S² für beide. Welcher Strike dominiert, obwohl er das kleinere Gamma hat, und warum?",
    hint: "Nicht das größte Gamma entscheidet, sondern das Produkt mit OI.",
    solution: [
      "S² = 10.000, M = 100.",
      "A: 0,02 · 1.000 · 100 · 10.000 = 20.000.000.",
      "B: 0,05 · 300 · 100 · 10.000 = 15.000.000.",
      "Summe: 35.000.000 (Rohskala).",
      "Interpretation: A dominiert (57 % des Gesamten), obwohl sein Gamma kleiner ist, weil sein OI mehr als dreimal so groß ist. Gamma allein reicht nicht."
    ]
  },
  "L08-014": {
    task: "Zwei Anbieter melden für Γ = 0,01, OI = 4.000, M = 100, S = 250: Anbieter A rechnet Γ·OI·M·S²·0,01, Anbieter B rechnet Γ·OI·M·S. Berechne beide Werte und finde den Umrechnungsfaktor von B zu A.",
    hint: "Teile A durch B, dann bleibt nur ein Faktor mit S übrig.",
    solution: [
      "A: 0,01 · 4.000 · 100 · 62.500 · 0,01 = 2.500.000.",
      "B: 0,01 · 4.000 · 100 · 250 = 1.000.000.",
      "Faktor: A / B = 2,5 = 0,01 · S = 0,01 · 250.",
      "Interpretation: Die Zahlen sind nur vergleichbar, wenn Normierung und Vorzeichen-Konvention bekannt sind. Absolute GEX-Werte verschiedener Quellen nie direkt vergleichen."
    ]
  },
  "L08-015": {
    task: "Netto-GEX in Mio. Dollar: S = 4.800: -2,0; S = 4.850: -0,5; S = 4.900: +1,5. Zwischen welchen Punkten liegt der Gamma Flip, und wo ungefähr (lineare Interpolation)? Was sagt das Vorzeichenwechsel-Kriterium aus?",
    hint: "Suche das Intervall, in dem das Vorzeichen wechselt, und interpoliere dort.",
    solution: [
      "Vorzeichenwechsel zwischen 4.850 (-0,5) und 4.900 (+1,5).",
      "Anstieg: 2,0 / 50 = 0,04 pro Punkt.",
      "S* = 4.850 + 0,5 / 0,04 = 4.850 + 12,5 = 4.862,5.",
      "Interpretation: S* ist die Nullstelle von GEX_net(S). Die Lage ist modellabhängig und verschiebt sich mit OI und Vol."
    ]
  },
  "L08-016": {
    task: "GEX in Mio. Dollar. Strike 95: Call +0,2, Put -0,8; Strike 100: Call +2,4, Put -1,9; Strike 105: Call +1,1, Put -0,3. Berechne GEX_net je Strike und insgesamt. Ein Kollege addiert alle Beträge ohne Vorzeichen: Was ist daran falsch?",
    hint: "GEX_net ist eine vorzeichenbehaftete Summe, kein Gesamtumfang.",
    solution: [
      "Strike 95: 0,2 - 0,8 = -0,6; Strike 100: 2,4 - 1,9 = +0,5; Strike 105: 1,1 - 0,3 = +0,8.",
      "GEX_net = -0,6 + 0,5 + 0,8 = +0,7 Mio. Dollar.",
      "Der Kollege erhält 3,7 + 3,0 = 6,7, das ist das Brutto-Volumen, nicht das Netto.",
      "Interpretation: Positive und negative Beiträge kompensieren sich; nur die Nettosumme sagt etwas über die Dämpfung/Verstärkung aus."
    ]
  },
  "L08-017": {
    task: "Das Netto-Gamma der Dealer beträgt Γ_net = 0,015 je Option bei 40.000 Optionskontrakten mit M = 100 (alle in derselben Richtung, Dealer netto long Gamma). Der Kurs S = 120 fällt um 0,8 Dollar. Berechne dH ≈ -Γ_net·dS in Aktien und in Dollar.",
    hint: "Bestimme zuerst das Gesamt-Gamma in Aktien pro Dollar.",
    solution: [
      "Γ_net gesamt = 0,015 · 40.000 · 100 = 60.000 Aktien pro Dollar.",
      "dH ≈ -60.000 · (-0,8) = +48.000 Aktien (Kauf).",
      "Dollar: 48.000 · 120 = 5.760.000 Dollar.",
      "Interpretation: Bei positivem Netto-Gamma kaufen Dealer in den Rückgang. Die Größe muss mit dem Marktvolumen verglichen werden."
    ]
  },
  "L08-018": {
    task: "ATM-Gamma näherungsweise Γ ≈ φ(d₁)/(S·σ·sqrt(T)) mit φ(0) ≈ 0,399, S = 100, σ = 0,20. Berechne Γ für T = 5/252 (5 Handelstage) und T = 1/252 (0DTE). Um welchen Faktor steigt Γ?",
    hint: "Nur der Term sqrt(T) im Nenner ändert sich.",
    solution: [
      "T = 5/252: sqrt(T) = 0,1409; Γ ≈ 0,399 / (100 · 0,2 · 0,1409) ≈ 0,142.",
      "T = 1/252: sqrt(T) = 0,0630; Γ ≈ 0,399 / (100 · 0,2 · 0,0630) ≈ 0,317.",
      "Faktor: sqrt(5) ≈ 2,24.",
      "Interpretation: Das ATM-Gamma wächst mit sinkender Restlaufzeit wie 1/sqrt(T); bei 0DTE reagiert das Delta extrem empfindlich auf kleine Kursbewegungen."
    ]
  },
  "L08-019": {
    task: "Dealer sind short 10.000 Calls (M = 100, also 1.000.000 Optionen) und halten Delta-Hedge in Aktien. Das Delta beträgt 0,35, Charm = -0,05 pro Tag. Wie muss der Hedge nach einem Tag (Kurs und Vol unverändert) angepasst werden? Richtung und Größe.",
    hint: "Der Hedge folgt dem Delta; wohin bewegt sich Delta durch den Zeitablauf?",
    solution: [
      "Hedge heute: 0,35 · 1.000.000 = 350.000 Aktien long.",
      "Delta nach einem Tag: 0,35 - 0,05 = 0,30, also Hedge 300.000 Aktien.",
      "Anpassung: Verkauf von 50.000 Aktien.",
      "Interpretation: Rein durch Zeitablauf entsteht Hedge-Flow, ohne dass sich der Kurs bewegt."
    ]
  },
  "L08-020": {
    task: "Ein OTM-Call (S = 100, K = 110) hat Delta 0,25, Γ = 0,03 und Vanna = +0,006 pro Volatilitätspunkt. Der Kurs steigt um 1 Dollar, gleichzeitig steigt die Vol um 4 Punkte. Schätze das neue Delta.",
    hint: "Das Delta ändert sich durch zwei Effekte: Spot (Gamma) und Vol (Vanna).",
    solution: [
      "Spot-Effekt: Γ · ΔS = 0,03 · 1 = +0,03.",
      "Vol-Effekt: Vanna · Δσ = 0,006 · 4 = +0,024.",
      "Neues Delta ≈ 0,25 + 0,03 + 0,024 = 0,304.",
      "Interpretation: Beide Effekte addieren sich in erster Näherung; der Vol-Effekt ist hier fast so groß wie der Spot-Effekt."
    ]
  },
  "L08-021": {
    task: "Das Modell zeigt Netto-GEX von -3 Mio. Dollar je 1 %, der implizierte Hedge-Flow beträgt 40.000 Aktien. Das tägliche Marktvolumen der Aktie ist 20 Mio. Aktien. Welcher Anteil ist das, und warum folgt aus negativem GEX nicht automatisch ein Kursrutsch?",
    hint: "Setze den Flow ins Verhältnis zum Gesamtvolumen und denke an die Annahmen hinter GEX.",
    solution: [
      "Anteil: 40.000 / 20.000.000 = 0,002 = 0,2 %.",
      "Der geschätzte Flow ist klein gegenüber dem Marktvolumen.",
      "GEX beruht auf Annahmen über Dealer-Positionen und ist kein beobachteter Orderfluss; andere Marktteilnehmer und News dominieren oft.",
      "Interpretation: GEX liefert eine Hypothese über möglichen Flow, keinen Beweis."
    ]
  },
  "L08-022": {
    task: "Hypothese: Bei negativem Net GEX ist der mittlere absolute Tagesreturn höher. Daten: 10 Tage mit GEX < 0: Mittel 1,4 %, Std. 0,6 %; 12 Tage mit GEX > 0: Mittel 0,9 %, Std. 0,5 %. Berechne die Differenz, den Standardfehler sqrt(s1²/n1 + s2²/n2) und die t-Statistik. Was folgt?",
    hint: "Differenz durch Standardfehler ergibt die t-Statistik; vergleiche sie mit etwa 2.",
    solution: [
      "Differenz: 1,4 - 0,9 = 0,5 Prozentpunkte.",
      "SE = sqrt(0,36/10 + 0,25/12) = sqrt(0,0360 + 0,0208) ≈ 0,238.",
      "t ≈ 0,5 / 0,238 ≈ 2,10.",
      "Interpretation: Grenzwertig signifikant bei nur 22 Beobachtungen. Hypothese stützt sich, ist aber kein Beweis; mehr Daten und Kontrollvariablen (z. B. Vol-Regime) sind nötig."
    ]
  },
  "L09-001": {
    task: "Ein Preis folgt X_{t+1} = X_t + ε_{t+1} mit X_0 = 50. Die fünf Schocks sind +0,4; -0,2; +0,3; -0,5; +0,1. Berechne X_1 bis X_5. Warum kann ein solcher Random Walk negativ werden und was heißt das für Preise?",
    hint: "Der Pfad ist die kumulierte Summe der Schocks.",
    solution: [
      "X_1 = 50,4; X_2 = 50,2; X_3 = 50,5; X_4 = 50,0; X_5 = 50,1.",
      "Gesamtänderung: +0,1 (Summe der Schocks).",
      "Interpretation: Der additive Random Walk hat keine untere Schranke und kann negativ werden, was für Preise unrealistisch ist. Deshalb modelliert man oft Log-Preise oder prozentuale Änderungen."
    ]
  },
  "L09-002": {
    task: "Ein Random Walk hat Schritte mit Std. σ = 1,2 % pro Tag (unabhängig). Berechne Var(X_n) und die Std. nach n = 100 Tagen. Nach wie vielen Tagen beträgt die Std. nur 6 %?",
    hint: "Die Varianz wächst linear in n, die Std. wie die Wurzel.",
    solution: [
      "Var(X_100) = 100 · 1,2² = 144 (in %²), Std. = sqrt(144) = 12 %.",
      "Für Std. = 6 %: n · 1,44 = 36, also n = 25 Tage.",
      "Interpretation: Vierfache Zeit verdoppelt die Unsicherheit nur (sqrt-Regel, nicht linear)."
    ]
  },
  "L09-003": {
    task: "Für eine Standard-Brownian-Motion gilt W_{t+Δt} - W_t ~ N(0, Δt). Berechne die Std. eines Zuwachses über einen Handelstag (Δt = 1/252) und die Wahrscheinlichkeit, dass der Zuwachs über ein Quartal (Δt = 0,25) größer als 0,5 ausfällt.",
    hint: "Standardisiere den Zuwachs mit der Std. sqrt(Δt).",
    solution: [
      "Tag: Std. = sqrt(1/252) ≈ 0,0630.",
      "Quartal: Std. = sqrt(0,25) = 0,5.",
      "P(Zuwachs > 0,5) = P(Z > 0,5/0,5) = P(Z > 1) ≈ 0,1587.",
      "Interpretation: Die Std. wächst mit sqrt(Δt); rund 16 % der Quartalszuwächse liegen über einer Standardabweichung."
    ]
  },
  "L09-004": {
    task: "Du beobachtest W_3 = 1,2 an einer Standard-Brownian-Motion. Gib E[W_5 | W_3 = 1,2] und Var(W_5 | W_3 = 1,2) an. Berechne außerdem die Korrelation zwischen W_3 und W_5 unbedingt.",
    hint: "Schreibe W_5 = W_3 + (W_5 - W_3); der zweite Teil ist unabhängig von der Vergangenheit.",
    solution: [
      "W_5 - W_3 ~ N(0, 2), unabhängig von W_3.",
      "E[W_5 | W_3 = 1,2] = 1,2 + 0 = 1,2; Var(W_5 | W_3) = 2.",
      "Cov(W_3, W_5) = Var(W_3) = 3; Var(W_5) = 5.",
      "Korrelation = 3 / sqrt(3 · 5) = 3 / sqrt(15) ≈ 0,775.",
      "Interpretation: Die Vergangenheit bestimmt den Startpunkt, aber nicht die zukünftigen Zuwächse."
    ]
  },
  "L09-005": {
    task: "Ein Pfad einer Brownian Motion auf [0, 1] hat vier gleich lange Zuwächse: +0,6; -0,4; +0,3; -0,7. Berechne die Summe der quadrierten Zuwächse und vergleiche mit [W]_1 = 1. Was ist die Summe der Zuwächse selbst?",
    hint: "Die Quadratsumme approximiert die Quadratic Variation, die Summe der Zuwächse ist W_1 - W_0.",
    solution: [
      "Quadrate: 0,36 + 0,16 + 0,09 + 0,49 = 1,10.",
      "Das liegt nahe bei [W]_1 = 1; mit feinerer Zerlegung konvergiert die Summe gegen 1.",
      "Summe der Zuwächse: 0,6 - 0,4 + 0,3 - 0,7 = -0,2 = W_1.",
      "Interpretation: Die Quadratic Variation ist pfadweise deterministisch (= t), obwohl W_1 zufällig ist."
    ]
  },
  "L09-006": {
    task: "Prüfe an W_2 = 1,5, ob W_t² ein Martingal ist und ob M_t = W_t² - t eines ist. Nutze E[W_3² | W_2] = W_2² + 1. Vergleiche E[W_3² | W_2 = 1,5] mit W_2² und E[M_3 | W_2 = 1,5] mit M_2.",
    hint: "Berechne den bedingten Erwartungswert und prüfe, ob er dem aktuellen Wert entspricht.",
    solution: [
      "W_2² = 2,25; E[W_3² | W_2 = 1,5] = 2,25 + 1 = 3,25 ≠ 2,25, also kein Martingal.",
      "M_2 = 2,25 - 2 = 0,25.",
      "E[M_3 | W_2 = 1,5] = 3,25 - 3 = 0,25 = M_2, also Martingal-Eigenschaft erfüllt.",
      "Interpretation: Die Subtraktion von t kompensiert den Drift der Varianz."
    ]
  },
  "L09-007": {
    task: "Eine Aktie folgt GBM mit μ = 8 %, σ = 25 % und S_0 = 80. Berechne E[S_2] = S_0·e^(μT) für T = 2 Jahre und die Std. der täglichen Preisänderung dS ≈ σ·S·sqrt(dt) mit dt = 1/252.",
    hint: "Der Erwartungswert wächst mit e^(μT); die Tagesschwankung nutzt sqrt(dt).",
    solution: [
      "E[S_2] = 80 · e^(0,08 · 2) = 80 · e^0,16 ≈ 80 · 1,1735 ≈ 93,88.",
      "Std. von dS: 0,25 · 80 · sqrt(1/252) = 20 · 0,0630 ≈ 1,26.",
      "Interpretation: Drift wirkt langfristig (Jahre), die Tagesbewegung wird von der Diffusion σ dominiert."
    ]
  },
  "L09-008": {
    task: "Unter GBM gilt d ln S = (μ - σ²/2)dt + σ dW. Mit μ = 10 % und σ = 30 %: Berechne die Drift des Log-Preises pro Jahr, den Median von S_3 für S_0 = 50 (ohne Zufallsterm) und E[S_3] = S_0·e^(3μ). Warum unterscheiden sich beide?",
    hint: "Der Median folgt der Drift des Logarithmus, der Erwartungswert der Drift μ.",
    solution: [
      "Log-Drift: 0,10 - 0,30²/2 = 0,10 - 0,045 = 0,055 pro Jahr.",
      "Median S_3 = 50 · e^(3 · 0,055) = 50 · e^0,165 ≈ 58,97.",
      "E[S_3] = 50 · e^0,3 ≈ 67,49.",
      "Interpretation: Der Erwartungswert liegt höher als der Median, weil die Lognormalverteilung rechtsschief ist; der Term σ²/2 ist die Volatilitätskorrektur."
    ]
  },
  "L09-009": {
    task: "Modell: dX = 0,05·X dt + 0,2·X dW mit X = 40. Berechne für dt = 1/252 den Drift-Anteil a·dt und die Std. des Diffusions-Anteils b·sqrt(dt). Wievielmal größer ist die Diffusion?",
    hint: "Drift skaliert mit dt, Diffusion mit sqrt(dt).",
    solution: [
      "a = 0,05 · 40 = 2; Drift = 2/252 ≈ 0,0079.",
      "b = 0,2 · 40 = 8; Diffusion-Std. = 8 · sqrt(1/252) ≈ 0,504.",
      "Verhältnis ≈ 0,504 / 0,0079 ≈ 63,5.",
      "Interpretation: Auf kurzen Horizonten dominiert die Diffusion den Drift deutlich; Drift ist auf Tagesbasis kaum messbar."
    ]
  },
  "L09-010": {
    task: "Kursprünge treten mit λ = 6 pro Jahr auf. Berechne die Näherung P(N_{t+Δt} - N_t = 1) ≈ λΔt für Δt = 1/252, die exakte Wahrscheinlichkeit e^(-λΔt)·λΔt und die erwartete Sprungzahl in einem halben Jahr.",
    hint: "Für kleine Δt sind Näherung und exakter Wert fast gleich.",
    solution: [
      "λΔt = 6/252 ≈ 0,02381.",
      "Exakt: 0,02381 · e^(-0,02381) ≈ 0,02325.",
      "Die Näherung ist also nur etwa 2 % zu hoch.",
      "Erwartete Sprünge in 0,5 Jahren: λ · 0,5 = 3.",
      "Interpretation: An einem normalen Tag ist ein Sprung selten (ca. 2,3 %), über längere Zeit sammeln sich mehrere an."
    ]
  },
  "L09-011": {
    task: "Ein Zins folgt OU: dX = κ(θ - X)dt + σ dW mit κ = 4, θ = 2 %, X_0 = 3,5 %. Berechne die erwartete Drift pro Jahr, E[X_t] = θ + (X_0 - θ)·e^(-κt) für t = 0,25 und die Halbwertszeit ln(2)/κ.",
    hint: "Der Abstand zu θ schrumpft exponentiell.",
    solution: [
      "Drift: 4 · (0,02 - 0,035) = -0,06 pro Jahr.",
      "E[X_0,25] = 0,02 + 0,015 · e^(-1) ≈ 0,02 + 0,00552 = 0,02552, also etwa 2,55 %.",
      "Halbwertszeit = ln(2)/4 ≈ 0,173 Jahre (ca. 63 Tage).",
      "Interpretation: Der Prozess wird zum Mittelwert 2 % gezogen; die Rückkehr geschieht umso schneller, je größer κ ist."
    ]
  },
  "L09-012": {
    task: "Zwei Brownian Motions haben Korrelation ρ = -0,7. Berechne Var(W_1(1) - W_2(1)) und Var(W_1(1) + W_2(1)). Welchen Koeffizienten braucht man für W_2 = ρ·W_1 + c·Z (Z unabhängig, Standard-BM)?",
    hint: "Var(A ± B) = Var(A) + Var(B) ± 2·Cov(A, B) mit Cov = ρ·t.",
    solution: [
      "Var(W_1 - W_2) = 1 + 1 - 2 · (-0,7) = 3,4 (Std. ≈ 1,844).",
      "Var(W_1 + W_2) = 1 + 1 + 2 · (-0,7) = 0,6.",
      "Damit Var(W_2) = 1: c = sqrt(1 - ρ²) = sqrt(1 - 0,49) = sqrt(0,51) ≈ 0,714.",
      "Interpretation: Negative Korrelation macht die Summe schwankungsärmer (Diversifikation) und die Differenz schwankungsreicher."
    ]
  },
  "L09-013": {
    task: "Ein Kollege sagt: Die tägliche Std. beträgt 1,5 %, also ist die Std. über 9 Handelstage 9 · 1,5 % = 13,5 %. Finde den Fehler und gib den richtigen Wert an, wenn die Tagesschocks unabhängig sind.",
    hint: "Bei W_t - W_s ~ N(0, t-s) addieren sich Varianzen, nicht Standardabweichungen.",
    solution: [
      "Varianz über 9 Tage: 9 · 1,5² = 20,25 (in %²).",
      "Std. = sqrt(20,25) = 4,5 %, also 1,5 % · sqrt(9).",
      "Der Fehler: Skalierung mit der Zeit statt mit sqrt(Zeit).",
      "Interpretation: Der Wert 13,5 % würde das Risiko um den Faktor 3 überschätzen."
    ]
  },
  "L09-014": {
    task: "Aktie unter GBM mit S_0 = 100, μ = 6 %, σ = 20 %, T = 1. Dann ist ln S_T normalverteilt mit Mittel ln(S_0) + (μ - σ²/2)T und Std. σ·sqrt(T). Berechne die Wahrscheinlichkeit P(S_T < 100) trotz positivem Drift.",
    hint: "S_T < S_0 bedeutet ln S_T - ln S_0 < 0; standardisiere.",
    solution: [
      "Mittel der Log-Rendite: 0,06 - 0,02 = 0,04; Std. = 0,20.",
      "z = (0 - 0,04)/0,20 = -0,2.",
      "P(S_T < 100) = Φ(-0,2) ≈ 0,4207.",
      "Interpretation: Trotz μ = 6 % beträgt die Verlustwahrscheinlichkeit nach einem Jahr rund 42 %. Lognormalität bedeutet, dass S_T positiv und rechtsschief ist."
    ]
  },
  "L09-015": {
    task: "Mit der exakten GBM-Lösung S_t = S_0·exp((μ - σ²/2)t + σ·W_t): S_0 = 100, μ = 8 %, σ = 30 %, t = 1. Berechne S_1 für W_1 = +0,5 und W_1 = -0,5.",
    hint: "Berechne zuerst den Exponenten, dann e^x.",
    solution: [
      "Drift-Term: 0,08 - 0,045 = 0,035.",
      "W_1 = +0,5: Exponent = 0,035 + 0,30 · 0,5 = 0,185, S_1 = 100 · e^0,185 ≈ 120,32.",
      "W_1 = -0,5: Exponent = 0,035 - 0,15 = -0,115, S_1 = 100 · e^(-0,115) ≈ 89,14.",
      "Interpretation: Gleich große Zufallsschocks wirken multiplikativ; der Pfad bleibt positiv."
    ]
  },
  "L09-016": {
    task: "S_0 = 100, r = 3 %, reale Drift μ = 7 %, T = 2. Berechne E[S_2] unter dem realen Maß (Drift μ) und unter dem risikoneutralen Maß (Drift r). Welcher abgezinste Prozess e^(-rt)·S_t ist nur unter dem risikoneutralen Maß ein Martingal?",
    hint: "Ein Martingal hat konstanten Erwartungswert; prüfe, ob der abgezinste Preis das ist.",
    solution: [
      "Real: E[S_2] = 100 · e^(0,07 · 2) = 100 · e^0,14 ≈ 115,03.",
      "Risikoneutral: E^Q[S_2] = 100 · e^(0,03 · 2) = 100 · e^0,06 ≈ 106,18.",
      "Abgezinst unter Q: 106,18 · e^(-0,06) = 100 = S_0, also Martingal.",
      "Unter dem realen Maß wäre 115,03 · e^(-0,06) ≈ 108,3 > 100, also kein Martingal.",
      "Interpretation: Ein Preis wächst im Erwartungswert, daher ist nicht S_t selbst, sondern der diskontierte Preis unter Q ein Martingal."
    ]
  },
  "L09-017": {
    task: "Fünf aufeinanderfolgende Log-Renditen innerhalb eines Handelstages (Δt = 1/252 Jahr): +0,4 %; -0,3 %; +0,5 %; -0,2 %; +0,1 %. Berechne die Summe der Quadrate (Realized Variance), die daraus folgende Tages-Std. und die annualisierte Vola.",
    hint: "Die Quadratsumme der Renditen schätzt σ²·Δt; Multiplikation mit 252 annualisiert.",
    solution: [
      "Quadrate in %²: 0,16 + 0,09 + 0,25 + 0,04 + 0,01 = 0,55, also 0,55 · 10^-4.",
      "Tages-Std. = sqrt(0,55) ≈ 0,742 %.",
      "Annualisiert: sqrt(0,55 · 10^-4 · 252) = sqrt(0,01386) ≈ 0,1177, also etwa 11,8 %.",
      "Die einfache Summe der Renditen (+0,5 %) sagt über die Schwankung nichts aus.",
      "Interpretation: Die Quadratic Variation macht die Volatilität aus Pfaddaten messbar."
    ]
  },
  "L09-018": {
    task: "Ein Pairs-Trading-Spread folgt OU: dX = κ(θ - X)dt + σ dW mit θ = 0, κ = 12 pro Jahr, σ = 2. Aktuell ist X = 1,8. Berechne den erwarteten Spread nach 10 Handelstagen (t = 10/252) und die stationäre Std. σ/sqrt(2κ). Wie viele Standardabweichungen ist X = 1,8 vom Mittel entfernt?",
    hint: "Der erwartete Abstand zu θ schrumpft mit e^(-κt).",
    solution: [
      "E[X_t] = 0 + 1,8 · e^(-12 · 10/252) = 1,8 · e^(-0,476) ≈ 1,8 · 0,621 ≈ 1,12.",
      "Stationäre Std. = 2 / sqrt(24) ≈ 0,408.",
      "z = 1,8 / 0,408 ≈ 4,4 Standardabweichungen.",
      "Interpretation: Der Spread ist extrem weit vom Mittel; Mean Reversion zieht ihn zurück, aber nach 10 Tagen erst etwa 38 % des Abstands. Ein so großer z-Wert kann auch Modellbruch bedeuten."
    ]
  },
  "L09-019": {
    task: "Crash-Sprünge folgen einem Poisson-Prozess mit λ = 2 pro Jahr. Berechne für ein halbes Jahr (t = 0,5) P(N_t = 0), P(N_t = 1) und P(N_t ≥ 2) mit P(N_t = n) = e^(-λt)(λt)^n/n!.",
    hint: "Hier gilt λt = 1; P(N ≥ 2) ist das Komplement.",
    solution: [
      "λt = 2 · 0,5 = 1.",
      "P(N = 0) = e^(-1) ≈ 0,3679.",
      "P(N = 1) = e^(-1) · 1 ≈ 0,3679.",
      "P(N ≥ 2) = 1 - 0,3679 - 0,3679 ≈ 0,2642.",
      "Interpretation: In einem halben Jahr gibt es mit rund 26 % Wahrscheinlichkeit mindestens zwei Sprünge, obwohl der Erwartungswert nur 1 ist."
    ]
  },
  "L09-020": {
    task: "Zwei Aktien haben jährliche Vola σ_1 = 30 %, σ_2 = 20 % und die Brownian-Motions Korrelation ρ = 0,6. Berechne die jährliche Kovarianz der Renditen ρσ_1σ_2, die tägliche Kovarianz (dt = 1/252) und die Vola eines 50/50-Portfolios.",
    hint: "Portfolio-Varianz = w1²σ1² + w2²σ2² + 2w1w2·Kovarianz.",
    solution: [
      "Kovarianz jährlich: 0,6 · 0,3 · 0,2 = 0,036.",
      "Täglich: 0,036/252 ≈ 0,000143.",
      "Portfolio-Varianz: 0,25 · 0,09 + 0,25 · 0,04 + 2 · 0,25 · 0,036 = 0,0225 + 0,01 + 0,018 = 0,0505.",
      "Vola = sqrt(0,0505) ≈ 0,2247, also etwa 22,5 %.",
      "Interpretation: Der gewichtete Durchschnitt der Volas wäre 25 %; die Diversifikation senkt das Risiko, weil ρ < 1."
    ]
  }
});
