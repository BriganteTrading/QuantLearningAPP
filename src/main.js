(() => {
  'use strict';
  const root = document.getElementById('root');
  const LEVELS = [
    [1,'Mathematical Foundations','Die Sprache des Quants: Algebra, Funktionen, Returns und Compounding.'],
    [2,'Calculus','Ableitungen, partielle Ableitungen, Taylor, Integrale und Optimierung.'],
    [3,'Linear Algebra','Vektoren, Matrizen, Kovarianz, Eigenwerte, PCA und SVD.'],
    [4,'Probability','Zufallsvariablen, bedingte Wahrscheinlichkeit, Bayes und Verteilungen.'],
    [5,'Statistics','Schätzen, Regression, MLE, Tests, Unsicherheit und Overfitting-Grundlagen.'],
    [6,'Financial Mathematics','Barwert, Forwards, Bonds, Duration, Convexity und No-Arbitrage.'],
    [7,'Options & Greeks','Payoffs, Put-Call-Parität, Black-Scholes und die wichtigsten Greeks.'],
    [8,'GEX & Dealer Positioning','Gamma-Exposure, Dealer-Hedge, Gamma Flip, OI, Charm und Vanna.'],
    [9,'Stochastic Processes','Random Walk, Brownian Motion, GBM, Martingal, Poisson und Mean Reversion.'],
    [10,'Stochastic Calculus','Ito-Lemma, Ito-Integral, risikoneutrales Maß, PDE und Feynman-Kac.'],
    [11,'Numerical Methods','Monte Carlo, Root Finding, finite Differenzen, SDE-Simulation und Interpolation.'],
    [12,'Portfolio & Risk','Portfolio-Mathematik, Sharpe, Beta, VaR, ES und Risikobeiträge.'],
    [13,'Market Microstructure','Orderbuch, Spread, Imbalance, Impact, Execution und Price Discovery.'],
    [14,'Quant Research','Alpha, Faktoren, Walk-forward, Regularisierung, Leakage und Backtesting.'],
    [15,'Quant Trading Applications','Momentum, Mean Reversion, Pairs, Cointegration, VRP und Vol-Surface.'],
    [16,'Advanced Quant Finance','Smile/Skew, Vanna, Charm, Local Vol, Heston, MC-Greeks und Stress Testing.']
  ];
  const state = {cards:[], screen:'home', level:null, index:0, query:'', practice:null, progress:loadProgress()};

  function loadProgress(){try{return JSON.parse(localStorage.getItem('quantMathProgressV5')||'{}')}catch{return {}}}
  function saveProgress(){try{localStorage.setItem('quantMathProgressV5',JSON.stringify(state.progress))}catch{}}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function levels(){
    return LEVELS.map(([id,title,desc])=>({id,title,desc,cards:state.cards.filter(c=>Number(c.level)===id)}));
  }
  function cardId(c){return c.id}
  function completed(c){return !!state.progress[cardId(c)]?.completed}
  function markDone(c){state.progress[cardId(c)]={completed:true,at:Date.now()};saveProgress()}

  // Lightweight, offline formula renderer. It supports the notation used in the curated curriculum.
  function math(v){
    let s=esc(v||'—');
    const greek={alpha:'α',beta:'β',gamma:'γ',Gamma:'Γ',Delta:'Δ',sigma:'σ',mu:'μ',rho:'ρ',lambda:'λ',theta:'θ',kappa:'κ',xi:'ξ',pi:'π',sqrt:'√',infty:'∞'};
    Object.keys(greek).forEach(k=>{s=s.replace(new RegExp('\\\\'+k+'\\b','g'),greek[k])});
    s=s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,'<span class="frac"><span>$1</span><span>$2</span></span>');
    s=s.replace(/\^\{([^{}]+)\}/g,'<sup>$1</sup>').replace(/_\{([^{}]+)\}/g,'<sub>$1</sub>');
    s=s.replace(/\^([A-Za-z0-9]+)/g,'<sup>$1</sup>').replace(/_([A-Za-z0-9]+)/g,'<sub>$1</sub>');
    s=s.replace(/∫_([A-Za-z0-9]+)\^([A-Za-z0-9]+)/g,'∫<sub>$1</sub><sup>$2</sup>');
    s=s.replace(/≈/g,'<span class="approx">≈</span>');
    return `<div class="formula"><span class="formula-mark">ƒ</span><span>${s}</span></div>`;
  }
  function symbols(c){return (c.variables||[]).map(v=>`<div class="symbol-row"><code>${esc(v.symbol)}</code><span>${esc(v.meaning)}</span></div>`).join('')}
  function bullets(arr){return Array.isArray(arr)?`<ol class="steps">${arr.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:`<p>${esc(arr||'')}</p>`}
  function example(c){return Array.isArray(c.workedExample)?c.workedExample.map((x,i)=>`<div class="calc-step"><span>${i+1}</span><p>${esc(x)}</p></div>`).join(''):`<p>${esc(c.workedExample||'')}</p>`}

  function shell(content){return `<header class="top"><button class="brand" data-action="home"><span class="brand-dot">Q</span><span>QUANT <b>MATH</b></span></button><div class="top-actions"><button class="icon-btn" data-action="library">Formel-Library</button><button class="icon-btn" data-action="practice">Practice</button></div></header>${content}`}

  function home(){
    const ls=levels(); const done=state.cards.filter(completed).length;
    return shell(`<main class="page"><section class="hero"><span class="eyebrow">QUANTITATIVE FINANCE · CURRICULUM 3.0</span><h1>Mathematik verstehen.<br><em>Nicht Formeln auswendig lernen.</em></h1><p>Jedes Kapitel baut bewusst auf dem vorherigen auf: <b>Intuition → Definition → Formel → Herleitung → Zahlenbeispiel → Finanzanwendung → Prüfung.</b></p><div class="stats"><div><b>${state.cards.length}</b><span>kuratierte Lektionen</span></div><div><b>${done}</b><span>abgeschlossen</span></div><div><b>16</b><span>Kapitel</span></div></div></section><section><div class="section-head"><span class="eyebrow">ROADMAP</span><h2>Kapitel frei wählen</h2><p class="muted">Kein Freischalten. Du kannst überall einsteigen und über die Voraussetzungen zurückspringen.</p></div><div class="level-grid">${ls.map(l=>{const d=l.cards.filter(completed).length;return `<button class="level-card" data-action="level" data-level="${l.id}"><span class="level-num">${String(l.id).padStart(2,'0')}</span><h3>${esc(l.title)}</h3><p>${esc(l.desc)}</p><div class="level-foot"><span>${d}/${l.cards.length} erledigt</span><span>${l.cards.length} Lektionen</span></div><span class="bar"><i style="width:${l.cards.length?Math.round(d/l.cards.length*100):0}%"></i></span></button>`}).join('')}</div></section></main>`)
  }

  function levelView(l){
    if(!l||!l.cards.length)return home();
    const i=Math.min(state.index,l.cards.length-1), c=l.cards[i], done=l.cards.filter(completed).length;
    return shell(`<main class="page lesson-page"><button class="back" data-action="home">← Alle Kapitel</button><div class="chapter-head"><div><span class="eyebrow">KAPITEL ${String(l.id).padStart(2,'0')}</span><h1>${esc(l.title)}</h1><p>${esc(l.desc)}</p></div><div class="chapter-progress"><b>${done}/${l.cards.length}</b><span>verstanden / erledigt</span></div></div><div class="lesson-layout"><aside class="lesson-nav"><div class="nav-label">LERNSEQUENZ</div><div class="lesson-list">${l.cards.map((x,j)=>`<button class="lesson-link ${j===i?'active':''} ${completed(x)?'is-done':''}" data-action="card" data-index="${j}"><span>${String(j+1).padStart(2,'0')}</span><b>${esc(x.title)}</b></button>`).join('')}</div></aside><article class="lesson"><div class="lesson-meta"><span>${esc(c.topic)}</span><span>·</span><span>${i+1} von ${l.cards.length}</span>${completed(c)?'<span class="done">✓ abgeschlossen</span>':''}</div><h2>${esc(c.title)}</h2><p class="lead">${esc(c.intuition)}</p>${math(c.formula)}<section class="block"><div class="block-kicker">01 · BEGRIFF</div><h3>Was beschreibt diese Formel?</h3><p>${esc(c.intuition)}</p></section><section class="block"><div class="block-kicker">02 · SYMBOLIK</div><h3>Jedes Symbol einzeln</h3><div class="symbols">${symbols(c)}</div></section><section class="block"><div class="block-kicker">03 · HERLEITUNG</div><h3>Wie kommt man darauf?</h3>${bullets(c.derivation)}</section><section class="block example"><div class="block-kicker">04 · RECHNEN</div><h3>Konkretes Zahlenbeispiel</h3>${example(c)}</section><section class="block meaning"><div class="block-kicker">05 · QUANT-INTUITION</div><h3>Was bedeutet das im Markt?</h3><p>${esc(c.financialMeaning)}</p></section><section class="block code-block"><div class="block-kicker">06 · VERIFIKATION</div><h3>Mit Python prüfen</h3><pre>${esc(c.pythonExample)}</pre><p class="muted">Python bestätigt hier die Rechnung. Die mathematische Begründung steht bewusst davor.</p></section><section class="practice-card"><span class="eyebrow">07 · PRÜFE DEIN VERSTÄNDNIS</span><h3>${esc(c.question)}</h3><details><summary>Lösung anzeigen</summary><p>${esc(c.answer)}</p></details><div class="prereq"><b>Voraussetzungen:</b> ${c.prerequisites?.length?c.prerequisites.map(esc).join(' · '):'Keine speziellen Voraussetzungen.'}</div></section><div class="lesson-actions"><button class="secondary" data-action="prev" ${i<=0?'disabled':''}>← Zurück</button><button class="primary" data-action="complete">${completed(c)?'✓ Erledigt':'Als verstanden markieren'}</button><button class="secondary" data-action="next" ${i>=l.cards.length-1?'disabled':''}>Weiter →</button></div></article></div></main>`)
  }

  function library(){return shell(`<main class="page"><div class="library-head"><div><span class="eyebrow">REFERENCE</span><h1>Formel-Library</h1><p>Nur die kuratierten Kernlektionen – ohne künstliche Varianten und Dopplungen.</p></div><button class="secondary" data-action="home">← Home</button></div><input id="search" class="search" value="${esc(state.query)}" placeholder="Formel, Symbol, Thema oder Begriff suchen …"><div id="results" class="library-results">${libraryResults()}</div></main>`)}
  function libraryResults(){
    const q=state.query.trim().toLowerCase();
    const arr=state.cards.filter(c=>!q||(c.title+' '+c.topic+' '+c.formula+' '+c.intuition+' '+c.financialMeaning+' '+(c.variables||[]).map(v=>v.symbol+' '+v.meaning).join(' ')).toLowerCase().includes(q));
    return `<p class="muted">${arr.length} Treffer</p>`+arr.map(c=>`<button class="formula-row" data-action="open-card" data-card="${esc(cardId(c))}">${math(c.formula)}<div><b>${esc(c.title)}</b><small>Kapitel ${String(c.level).padStart(2,'0')} · ${esc(c.topic)}</small></div></button>`).join('');
  }
  function practice(){
    const c=state.cards[Math.floor(Math.random()*state.cards.length)]; state.practice=c;
    return shell(`<main class="page practice-page"><button class="back" data-action="home">← Home</button><div class="practice-wrap"><span class="eyebrow">PRACTICE · ZUFÄLLIGE KERNFRAGE</span><h1>${esc(c.title)}</h1>${math(c.formula)}<div class="practice-card"><h2>${esc(c.question)}</h2><textarea id="practiceAnswer" placeholder="Erkläre oder rechne in deinen eigenen Worten …"></textarea><button class="primary" data-action="check">Lösung vergleichen</button><div id="feedback"></div><details><summary>Musterlösung anzeigen</summary><p>${esc(c.answer)}</p></details></div></div></main>`)
  }
  function check(){const input=document.getElementById('practiceAnswer');const f=document.getElementById('feedback');if(!input||!f)return;const a=input.value.trim();f.className='feedback '+(a.length>15?'good':'bad');f.textContent=a.length>15?'Gute Basis. Vergleiche jetzt deine Argumentation mit der Musterlösung.':'Schreibe etwas mehr: Rechenschritte oder die Bedeutung der Variablen.'}
  function render(){try{if(state.screen==='home')root.innerHTML=home();else if(state.screen==='level')root.innerHTML=levelView(levels().find(x=>x.id===state.level));else if(state.screen==='library')root.innerHTML=library();else root.innerHTML=practice();}catch(e){root.innerHTML=`<main class="error"><h1>Fehler</h1><p>${esc(e.message)}</p><button class="primary" data-action="retry">Neu laden</button></main>`}}
  function enter(){
    try{
      const raw=window.QUANT_LESSONS;
      state.cards=Array.isArray(raw)?raw:(raw&&Array.isArray(raw.cards)?raw.cards:[]);
      if(!state.cards.length)throw new Error('Kein kuratierter Datensatz gefunden.');
      render();
    }catch(e){root.innerHTML=`<main class="error"><h1>Quant Math konnte nicht geladen werden.</h1><p>${esc(e.message)}</p><p class="muted">Bitte die index.html aus dem ZIP öffnen.</p></main>`}
  }
  document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(!el)return;const a=el.dataset.action;
    if(a==='home'){state.screen='home';render()}
    else if(a==='level'){state.level=Number(el.dataset.level);state.index=0;state.screen='level';render()}
    else if(a==='card'){state.index=Number(el.dataset.index);render()}
    else if(a==='prev'){if(state.index>0)state.index--;render()}
    else if(a==='next'){const l=levels().find(x=>x.id===state.level);if(l&&state.index<l.cards.length-1)state.index++;render()}
    else if(a==='complete'){const l=levels().find(x=>x.id===state.level);if(l){markDone(l.cards[state.index]);if(state.index<l.cards.length-1)state.index++;render()}}
    else if(a==='library'){state.screen='library';render()}
    else if(a==='practice'){state.screen='practice';render()}
    else if(a==='check'){check()}
    else if(a==='retry'){enter()}
    else if(a==='open-card'){const c=state.cards.find(x=>cardId(x)===el.dataset.card);if(c){state.level=Number(c.level);state.index=levels().find(x=>x.id===state.level).cards.findIndex(x=>cardId(x)===cardId(c));state.screen='level';render()}}
  });
  document.addEventListener('input',e=>{if(e.target.id==='search'){state.query=e.target.value;const out=document.getElementById('results');if(out)out.innerHTML=libraryResults()}});
  enter();
})();
