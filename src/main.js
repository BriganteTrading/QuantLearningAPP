(() => {
  'use strict';

function escapeHtml(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}

function lessonRichText(value){
  if(value==null) return "";
  if(Array.isArray(value)){
    const items=value.map(item=>String(item??"").trim()).filter(Boolean);
    return items.length?`<ol class="learning-steps">${items.map(item=>`<li>${lessonRichText(item)}</li>`).join("")}</ol>`:"";
  }
  let s=String(value).replace(/\r\n?/g,"\n");
  // Decode the exact escaped Markdown representation seen in the app.
  s=s.replace(/\\([\\`*_[\]{}()#+.!|>~-])/g,"$1");
  s=s.replace(/\\n/g,"\n");

  // Convert common Markdown blocks to HTML. Escape plain text first, while
  // preserving only our generated tags.
  const lines=s.split("\n"), out=[];
  let list=null;
  const close=()=>{if(list){out.push(`</${list}>`);list=null;}};
  const inline=(v)=>{
    let x=escapeHtml(v);
    x=x.replace(/\$([^$\n]+)\$/g,'<span class="math-inline">$1</span>');
    x=x.replace(/`([^`\n]+)`/g,'<code>$1</code>');
    x=x.replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>');
    x=x.replace(/__([^_\n]+)__/g,'<strong>$1</strong>');
    x=x.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
    return x;
  };
  for(const raw of lines){
    const line=raw.trim();
    if(!line){close();continue;}
    let m=line.match(/^(#{1,6})\s+(.+)$/);
    if(m){
      close();
      const n=Math.min(m[1].length,4);
      out.push(`<h${n}>${inline(m[2])}</h${n}>`);
      continue;
    }
    m=line.match(/^(\d+)\.\s+(.+)$/);
    if(m){
      if(list!=="ol"){close();out.push("<ol>");list="ol";}
      out.push(`<li>${inline(m[2])}</li>`);
      continue;
    }
    m=line.match(/^[-*+]\s+(.+)$/);
    if(m){
      if(list!=="ul"){close();out.push("<ul>");list="ul";}
      out.push(`<li>${inline(m[1])}</li>`);
      continue;
    }
    close();
    out.push(`<p>${inline(line)}</p>`);
  }
  close();
  return out.join("");
}

function renderFormula(value){
  let s=escapeHtml(value);
  s=s.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
  s=s.replace(/\\sqrt\s*\{([^{}]*)\}/g,'<span class="sqrt">√<span>$1</span></span>');
  const greek={Delta:"Δ",Gamma:"Γ",Theta:"Θ",sigma:"σ",mu:"μ",rho:"ρ",tau:"τ",phi:"φ",pi:"π",lambda:"λ",alpha:"α",beta:"β",infty:"∞",approx:"≈",leq:"≤",geq:"≥",cdot:"·",times:"×"};
  for(const [k,v] of Object.entries(greek)) s=s.replace(new RegExp("\\\\\\\\"+k,"g"),v);
  s=s.replace(/\^([A-Za-z0-9()+\-]+)/g,"<sup>$1</sup>").replace(/_([A-Za-z0-9]+)/g,"<sub>$1</sub>");
  return s;
}
function escapeHtml(value){
  return String(value ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function renderFormula(value){
  let s=escapeHtml(value);
  s=s.replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,'<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
  const g={Delta:"Δ",Gamma:"Γ",Theta:"Θ",sigma:"σ",mu:"μ",rho:"ρ",tau:"τ",phi:"φ",pi:"π",lambda:"λ",alpha:"α",beta:"β",infty:"∞",approx:"≈",leq:"≤",geq:"≥",cdot:"·",times:"×"};
  for(const [k,v] of Object.entries(g)) s=s.replace(new RegExp("\\\\\\\\"+k,"g"),v);
  return s.replace(/\^([A-Za-z0-9()+\-]+)/g,"<sup>$1</sup>").replace(/_([A-Za-z0-9]+)/g,"<sub>$1</sub>");
}
function renderInline(value){
  let s=escapeHtml(value);
  // Markdown backslash escapes: \###, \*, \., \_, etc. are literal
  // source escapes and must become normal Markdown before parsing.
  s=s.replace(/\\([\\`*_[\]{}()#+.!|>~-])/g,"$1");
  s=s.replace(/\$([^$\n]+)\$/g,'<span class="math-inline">$1</span>');
  s=s.replace(/`([^`\n]+)`/g,'<code>$1</code>');
  s=s.replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>');
  s=s.replace(/__([^_\n]+)__/g,'<strong>$1</strong>');
  s=s.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
  return s;
}

function escapeHtml(value){
  return String(value ?? "")
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function renderInline(value){
  let s=escapeHtml(value);
  s=s.replace(/\$([^$\n]+)\$/g,'<span class="math-inline">$1</span>');
  s=s.replace(/`([^`\n]+)`/g,'<code>$1</code>');
  s=s.replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>');
  s=s.replace(/__([^_\n]+)__/g,'<strong>$1</strong>');
  s=s.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
  return s;
}
function renderMarkdown(md){
  if(md==null) return "";
  let src=String(md).replace(/\r\n?/g,"\n");
  // Undo JSON/text-layer escaping BEFORE interpreting Markdown.
  src=src.replace(/\\([\\`*_[\]{}()#+.!|>~-])/g,"$1");
  src=src.replace(/\\n/g,"\n");
  // Recover Markdown blocks that were flattened into one line.
  src=src.replace(/\s+(#{1,6}\s+)/g,"\n$1");
  src=src.replace(/\s+(\d+\.\s+)/g,"\n$1");
  src=src.replace(/\s+([-*+]\s+)/g,"\n$1");

  const lines=src.split("\n"),out=[]; let inList=null;
  const closeList=()=>{if(inList){out.push(`</${inList}>`);inList=null;}};

  for(const raw of lines){
    const line=raw.trim();
    if(!line){closeList();continue;}

    let m=line.match(/^(#{1,6})\s+(.+)$/);
    if(m){
      closeList();
      const n=Math.min(m[1].length,4);
      out.push(`<h${n}>${renderInline(m[2])}</h${n}>`);
      continue;
    }

    m=line.match(/^\d+\.\s+(.+)$/);
    if(m){
      if(inList!=="ol"){closeList();out.push("<ol>");inList="ol";}
      out.push(`<li>${renderInline(m[1])}</li>`);
      continue;
    }

    m=line.match(/^[-*+]\s+(.+)$/);
    if(m){
      if(inList!=="ul"){closeList();out.push("<ul>");inList="ul";}
      out.push(`<li>${renderInline(m[1])}</li>`);
      continue;
    }

    closeList();
    out.push(`<p>${renderInline(line)}</p>`);
  }
  closeList();
  return out.join("");
}



function renderInline(value){
  let s=escapeHtml(value);
  s=s.replace(/\$([^$\n]+)\$/g,(_,x)=>'<span class="math-inline">'+renderFormula(x)+"</span>");
  s=s.replace(/\\\(([^)\n]+)\\\)/g,(_,x)=>'<span class="math-inline">'+renderFormula(x)+"</span>");
  s=s.replace(/`([^`\n]+)`/g,"<code>$1</code>");
  s=s.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>");
  s=s.replace(/__([^_\n]+)__/g,"<strong>$1</strong>");
  s=s.replace(/(^|[^\*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>");
  return s;
}

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
  function bullets(value){
  return `<div class="markdown">${lessonRichText(value || "")}</div>`;
}
  function example(c){
  const value = c.workedExample ?? c.example ?? "";
  return `<div class="markdown">${lessonRichText(value)}</div>`;
}
  function lessonIntro(c){
    const text=String(c.intuition||"");
    const motivation=text.match(/(?:^|\n)###\s*Warum brauchen wir das\?\s*\n([\s\S]*)/i);
    const idea=motivation?text.slice(0,motivation.index).trim():text;
    return {
      idea:idea.replace(/^###\s*Was ist das\?\s*\n/i,"").trim(),
      motivation:lessonBody(motivation?motivation[1]:"")
    };
  }
  function lessonBody(value){
    return String(value??"").replace(/^\s*#{1,6}\s+[^\n]+\n*/,"").trim();
  }
  function hasContent(value){
    return Array.isArray(value)
      ? value.some(item=>String(item??"").trim())
      : value!=null&&String(value).trim().length>0;
  }
  function lessonSections(c,motivation){
    const sections=[
      {label:"Motivation",title:"Warum ist das wichtig?",value:motivation,render:value=>`<div class="markdown">${lessonRichText(value)}</div>`},
      {label:"Notation",title:"Symbole verstehen",value:c.variables,render:()=>`<div class="symbols">${symbols(c)}</div>`},
      {label:"Arbeitsweise",title:"Mathematischer Prüfpfad",value:lessonBody(c.derivation),render:bullets},
      {label:"Beispiel",title:"Beispiel zum Nachrechnen",value:c.workedExample??c.example,render:()=>example(c),className:"example"},
      {label:"Praxisbezug",title:"Bedeutung in der Finanzpraxis",value:lessonBody(c.financialMeaning),render:value=>`<div class="markdown">${lessonRichText(value)}</div>`,className:"meaning"},
      {label:"Überprüfen",title:"Numerisch gegenprüfen",value:c.pythonExample,render:value=>`<pre>${esc(value)}<\/pre><p class="muted">Prüfe die Rechnung zusätzlich von Hand. Ein passendes Ergebnis bestätigt nicht automatisch die Modellannahmen.</p>`,className:"code-block"}
    ].filter(section=>hasContent(section.value));
    return sections.map((section,index)=>`<section class="block ${section.className||""}"><div class="block-kicker">${String(index+1).padStart(2,"0")} · ${section.label.toUpperCase()}</div><h3>${section.title}</h3>${section.render(section.value)}</section>`).join("");
  }
  function prerequisiteSection(c){
    const prerequisites=(c.prerequisites||[]).map(id=>({id,card:state.cards.find(item=>cardId(item)===id)}));
    if(!prerequisites.length)return `<div class="prereq"><b>Voraussetzungen:</b> Keine speziellen Voraussetzungen.</div>`;
    return `<div class="prereq"><b>Empfohlene Voraussetzungen:</b><div class="prereq-list">${prerequisites.map(({id,card})=>card
      ?`<button class="prereq-link" data-action="open-card" data-card="${esc(id)}"><span>${esc(card.title)}</span><span class="${completed(card)?"done":"prereq-pending"}">${completed(card)?"✓ erledigt":"noch offen"}</span></button>`
      :`<span class="prereq-missing">Voraussetzung ${esc(id)} konnte nicht geladen werden.</span>`).join("")}</div></div>`;
  }
  function retrievalPractice(c){
    return `<section class="practice-card retrieval-card"><span class="eyebrow">AKTIVER ABRUF · ERST SELBST ERKLÄREN</span><h3>Kannst du „${esc(c.title)}“ ohne Vorlage erklären?</h3><p>Schreibe kurz auf, was die Formel beschreibt, wie du ihre Symbole liest und welche Plausibilitätsprüfung du beim Anwenden machen würdest.</p><textarea id="lessonRecall" aria-label="Eigene Erklärung zur Lektion" placeholder="Erkläre den Zusammenhang in deinen eigenen Worten …"></textarea><details><summary>Kriterien zur Selbstkontrolle</summary><ul><li>Habe ich die Bedeutung der Beziehung in eigenen Worten erklärt?</li><li>Kann ich die Symbole und – falls relevant – Einheiten oder Zeitbasis benennen?</li><li>Kann ich einen Rechenschritt nachvollziehen und Vorzeichen, Größenordnung oder Grenzfall prüfen?</li><li>Habe ich Modellannahmen von der reinen Rechnung unterschieden?</li></ul><p class="muted">Das ist eine Selbstkontrolle und keine automatische Bewertung deiner Eingabe.</p></details>${prerequisiteSection(c)}</section>`;
  }

  function shell(content){return `<header class="top"><button class="brand" data-action="home"><span class="brand-dot">Q</span><span>QUANT <b>MATH</b></span></button><div class="top-actions"><button class="icon-btn" data-action="library">Formel-Library</button><button class="icon-btn" data-action="practice">Practice</button></div></header>${content}`}

  function home(){
    const ls=levels(); const done=state.cards.filter(completed).length;
    return shell(`<main class="page"><section class="hero"><span class="eyebrow">QUANTITATIVE FINANCE · CURRICULUM 3.0</span><h1>Mathematik verstehen.<br><em>Nicht Formeln auswendig lernen.</em></h1><p>Jedes Kapitel baut bewusst auf dem vorherigen auf: <b>Intuition → Definition → Formel → Herleitung → Zahlenbeispiel → Finanzanwendung → Prüfung.</b></p><div class="stats"><div><b>${state.cards.length}</b><span>kuratierte Lektionen</span></div><div><b>${done}</b><span>abgeschlossen</span></div><div><b>16</b><span>Kapitel</span></div></div></section><section><div class="section-head"><span class="eyebrow">ROADMAP</span><h2>Kapitel frei wählen</h2><p class="muted">Kein Freischalten. Du kannst überall einsteigen und über die Voraussetzungen zurückspringen.</p></div><div class="level-grid">${ls.map(l=>{const d=l.cards.filter(completed).length;return `<button class="level-card" data-action="level" data-level="${l.id}"><span class="level-num">${String(l.id).padStart(2,'0')}</span><h3>${esc(l.title)}</h3><p>${esc(l.desc)}</p><div class="level-foot"><span>${d}/${l.cards.length} erledigt</span><span>${l.cards.length} Lektionen</span></div><span class="bar"><i style="width:${l.cards.length?Math.round(d/l.cards.length*100):0}%"></i></span></button>`}).join('')}</div></section></main>`)
  }

  function levelView(l){
    if(!l||!l.cards.length)return home();
    const i=Math.min(state.index,l.cards.length-1), c=l.cards[i], done=l.cards.filter(completed).length;
    const intro=lessonIntro(c);
    return shell(`<main class="page lesson-page"><button class="back" data-action="home">← Alle Kapitel</button><div class="chapter-head"><div><span class="eyebrow">KAPITEL ${String(l.id).padStart(2,'0')}</span><h1>${esc(l.title)}</h1><p>${esc(l.desc)}</p></div><div class="chapter-progress"><b>${done}/${l.cards.length}</b><span>verstanden / erledigt</span></div></div><div class="lesson-layout"><aside class="lesson-nav"><div class="nav-label">LERNSEQUENZ</div><div class="lesson-list">${l.cards.map((x,j)=>`<button class="lesson-link ${j===i?'active':''} ${completed(x)?'is-done':''}" data-action="card" data-index="${j}"><span>${String(j+1).padStart(2,'0')}</span><b>${esc(x.title)}</b></button>`).join('')}</div></aside><article class="lesson"><div class="lesson-meta"><span>${esc(c.topic)}</span><span>·</span><span>${i+1} von ${l.cards.length}</span>${completed(c)?'<span class="done">✓ abgeschlossen</span>':''}</div><h2>${esc(c.title)}</h2><div class="lead lesson-intro"><span class="eyebrow">DIE KERNIDEE</span><div class="markdown">${lessonRichText(intro.idea)}</div></div>${math(c.formula)}${lessonSections(c,intro.motivation)}${retrievalPractice(c)}<div class="lesson-actions"><button class="secondary" data-action="prev" ${i<=0?'disabled':''}>← Zurück</button><button class="primary" data-action="complete">${completed(c)?'✓ Erledigt':'Als verstanden markieren'}</button><button class="secondary" data-action="next" ${i>=l.cards.length-1?'disabled':''}>Weiter →</button></div></article></div></main>`)
  }

  function library(){return shell(`<main class="page"><div class="library-head"><div><span class="eyebrow">REFERENCE</span><h1>Formel-Library</h1><p>Nur die kuratierten Kernlektionen – ohne künstliche Varianten und Dopplungen.</p></div><button class="secondary" data-action="home">← Home</button></div><input id="search" class="search" value="${esc(state.query)}" placeholder="Formel, Symbol, Thema oder Begriff suchen …"><div id="results" class="library-results">${libraryResults()}</div></main>`)}
  function libraryResults(){
    const q=state.query.trim().toLowerCase();
    const arr=state.cards.filter(c=>!q||(c.title+' '+c.topic+' '+c.formula+' '+c.intuition+' '+c.financialMeaning+' '+(c.variables||[]).map(v=>v.symbol+' '+v.meaning).join(' ')).toLowerCase().includes(q));
    return `<p class="muted">${arr.length} Treffer</p>`+arr.map(c=>`<button class="formula-row" data-action="open-card" data-card="${esc(cardId(c))}">${math(c.formula)}<div><b>${esc(c.title)}</b><small>Kapitel ${String(c.level).padStart(2,'0')} · ${esc(c.topic)}</small></div></button>`).join('');
  }
  function practice(){
    const c=state.cards[Math.floor(Math.random()*state.cards.length)]; state.practice=c;
    return shell(`<main class="page practice-page"><button class="back" data-action="home">← Home</button><div class="practice-wrap"><span class="eyebrow">PRACTICE · ZUFÄLLIGE KERNFRAGE</span><h1>${esc(c.title)}</h1>${math(c.formula)}<div class="practice-card"><h2>${lessonRichText(c.question || "")}</h2><textarea id="practiceAnswer" placeholder="Erkläre oder rechne in deinen eigenen Worten …"></textarea><button class="primary" data-action="check">Lösung vergleichen</button><div id="feedback"></div><details><summary>Musterlösung anzeigen</summary><div class="markdown">${lessonRichText(c.answer || "")}</div></details></div></div></main>`)
  }
  function check(){const input=document.getElementById('practiceAnswer');const f=document.getElementById('feedback');if(!input||!f)return;const a=input.value.trim();f.className='feedback '+(a.length>15?'good':'bad');f.textContent=a.length>15?'Gute Basis. Vergleiche jetzt deine Argumentation mit der Musterlösung.':'Schreibe etwas mehr: Rechenschritte oder die Bedeutung der Variablen.'}
  function render(){try{if(state.screen==='home')root.innerHTML=home();else if(state.screen==='level')root.innerHTML=levelView(levels().find(x=>x.id===state.level));else if(state.screen==='library')root.innerHTML=library();else root.innerHTML=practice();}catch(e){root.innerHTML=`<main class="error"><h1>Fehler</h1><p>${esc(e.message)}</p><button class="primary" data-action="retry">Neu laden</button></main>`}}
  function enter(){
    try{
      const raw=window.QUANT_LESSONS;
      const cards=Array.isArray(raw)?raw:(raw&&Array.isArray(raw.cards)?raw.cards:[]);
      if(!cards.length)throw new Error('Kein kuratierter Datensatz gefunden.');
      const coreIdeas=window.QUANT_CORE_IDEAS;
      if(!coreIdeas||typeof coreIdeas!=="object")throw new Error('Die individuellen Kernideen konnten nicht geladen werden.');
      const missingCoreIdeas=cards.filter(card=>typeof coreIdeas[card.id]!=="string"||!coreIdeas[card.id].trim());
      if(missingCoreIdeas.length)throw new Error(`Für ${missingCoreIdeas.length} Lektionen fehlen individuelle Kernideen: ${missingCoreIdeas.map(card=>card.id).join(", ")}`);
      state.cards=cards.map(card=>({...card,intuition:coreIdeas[card.id]}));
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
