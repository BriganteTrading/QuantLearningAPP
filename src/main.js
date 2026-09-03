(() => {
  'use strict';
  const root = document.getElementById('root');
  const DATA_URL = './data/lessons.json';
  const FALLBACK_LEVELS = [
    [1,'Mathematical Foundations'],[2,'Calculus'],[3,'Linear Algebra'],[4,'Probability'],[5,'Statistics'],[6,'Financial Mathematics'],[7,'Options & Greeks'],[8,'GEX & Dealer Positioning'],[9,'Stochastic Processes'],[10,'Stochastic Calculus'],[11,'Numerical Methods'],[12,'Portfolio & Risk'],[13,'Market Microstructure'],[14,'Quant Research'],[15,'Quant Trading Applications'],[16,'Advanced Quant Finance']
  ];
  const state = {cards:[], screen:'home', level:null, index:0, query:'', practice:null, progress:loadProgress()};

  function loadProgress(){ try{return JSON.parse(localStorage.getItem('quantMathProgress')||'{}')}catch{return {}} }
  function saveProgress(){localStorage.setItem('quantMathProgress',JSON.stringify(state.progress))}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function slug(v){return String(v).toLowerCase().replace(/[^a-z0-9]+/g,'-')}
  function formula(v){return `<div class="formula">${esc(v||'—')}</div>`}
  function levels(){
    const map=new Map();
    state.cards.forEach(c=>{if(!map.has(c.level)){const known=FALLBACK_LEVELS.find(x=>x[0]===Number(c.level));map.set(c.level,{id:c.level,title:c.levelTitle||(known?known[1]:`Level ${c.level}`),cards:[]})}map.get(c.level).cards.push(c)});
    return [...map.values()].sort((a,b)=>a.id-b.id);
  }
  function cardId(c){return c.id||`${c.level}-${c.title}`}
  function completed(c){return !!state.progress[cardId(c)]?.completed}
  function markDone(c){state.progress[cardId(c)]={...(state.progress[cardId(c)]||{}),completed:true,at:Date.now()};saveProgress()}

  function shell(content){return `<header class="top"><button class="brand" data-action="home"><span class="brand-dot">Q</span><span>QUANT <b>MATH</b></span></button><div class="top-actions"><button class="icon-btn" data-action="library">Formula Library</button><button class="icon-btn" data-action="practice">Practice</button></div></header>${content}`}
  function home(){
    const ls=levels(); const done=state.cards.filter(completed).length;
    return shell(`<main class="page"><section class="hero"><span class="eyebrow">QUANTITATIVE FINANCE</span><h1>Mathematik verstehen.<br><em>Quant werden.</em></h1><p>Konzept → Formel → Symbole → Herleitung → Zahlenbeispiel → Finanzanwendung → Praxis.</p><div class="stats"><div><b>${state.cards.length.toLocaleString('de-DE')}</b><span>Karten</span></div><div><b>${done}</b><span>abgeschlossen</span></div><div><b>16</b><span>Level</span></div></div></section><section><div class="section-head"><div><span class="eyebrow">CURRICULUM</span><h2>Alle Level frei wählbar</h2></div></div><div class="level-grid">${ls.map(l=>{const d=l.cards.filter(completed).length;return `<button class="level-card" data-action="level" data-level="${l.id}"><span class="level-num">${String(l.id).padStart(2,'0')}</span><h3>${esc(l.title)}</h3><p>${d}/${l.cards.length} Karten abgeschlossen</p><span class="bar"><i style="width:${l.cards.length?Math.round(d/l.cards.length*100):0}%"></i></span></button>`}).join('')}</div></section></main>`)
  }
  function levelView(l){
    if(!l)return home();
    const i=Math.min(state.index,l.cards.length-1), c=l.cards[i];
    return shell(`<main class="page lesson-page"><button class="back" data-action="home">← Alle Level</button><div class="lesson-layout"><aside class="lesson-nav"><div class="level-title"><span>LEVEL ${String(l.id).padStart(2,'0')}</span><h2>${esc(l.title)}</h2></div><div class="lesson-list">${l.cards.slice(0,80).map((x,j)=>`<button class="lesson-link ${j===i?'active':''}" data-action="card" data-index="${j}"><span>${String(j+1).padStart(2,'0')}</span>${esc(x.title)}</button>`).join('')}${l.cards.length>80?`<small class="muted">Weitere Karten über die Library.</small>`:''}</div></aside><article class="lesson"><div class="lesson-meta"><span>LEVEL ${String(l.id).padStart(2,'0')}</span><span>${i+1} / ${l.cards.length}</span>${completed(c)?'<span class="done">✓ abgeschlossen</span>':''}</div><h1>${esc(c.title)}</h1><p class="topic">${esc(c.topic||l.title)}</p>${formula(c.formula)}<section class="block"><h3>Was bedeutet die Formel?</h3><p>${esc(c.intuition||c.explain||'')}</p></section><section class="block"><h3>Jedes Symbol erklärt</h3><div class="symbols">${(c.variables||[]).map(v=>`<div><code>${esc(v.symbol)}</code><span>${esc(v.meaning)}</span></div>`).join('')}</div></section><section class="block"><h3>Herleitung / mathematische Idee</h3><p>${esc(c.derivation||'Schrittweise aus den zugrunde liegenden Definitionen herleiten und die Annahmen prüfen.')}</p></section><section class="block example"><h3>Konkretes Zahlenbeispiel</h3>${Array.isArray(c.workedExample)?c.workedExample.map((s,j)=>`<div class="step"><b>${j+1}</b><span>${esc(s)}</span></div>`).join(''):`<p>${esc(c.workedExample||'')}</p>`}</section><section class="block"><h3>Finanzielle Bedeutung</h3><p>${esc(c.financialMeaning||'')}</p></section><section class="block code-block"><h3>Python-Verifikation</h3><pre>${esc(c.pythonExample||'# Python verification')}</pre></section><section class="practice-card"><span class="eyebrow">VERSTÄNDNISFRAGE</span><h3>${esc(c.question||'Was ist die zentrale Aussage?')}</h3><details><summary>Antwort anzeigen</summary><p>${esc(c.answer||'')}</p></details></section><div class="lesson-actions"><button class="secondary" data-action="prev" ${i<=0?'disabled':''}>← Zurück</button><button class="primary" data-action="complete">${completed(c)?'✓ Erledigt':'Karte abschließen'}</button><button class="secondary" data-action="next" ${i>=l.cards.length-1?'disabled':''}>Weiter →</button></div></article></div></main>`)
  }
  function library(){return shell(`<main class="page"><div class="library-head"><div><span class="eyebrow">REFERENCE</span><h1>Formula Library</h1><p>Durchsuche alle ${state.cards.length.toLocaleString('de-DE')} Karten.</p></div><button class="secondary" data-action="home">← Home</button></div><input id="search" class="search" value="${esc(state.query)}" placeholder="Formel, Thema, Symbol oder Titel suchen…"><div id="results" class="library-results">${libraryResults()}</div></main>`)}
  function libraryResults(){
    const q=state.query.trim().toLowerCase();
    const arr=state.cards.filter(c=>!q||(c.title+' '+c.topic+' '+c.formula+' '+(c.variables||[]).map(v=>v.symbol+' '+v.meaning).join(' ')).toLowerCase().includes(q)).slice(0,150);
    const rows=arr.map(c=>{
      return '<button class="formula-row" data-action="open-card" data-card="'+esc(cardId(c))+'"><span>'+formula(c.formula)+'</span><b>'+esc(c.title)+'</b><small>Level '+String(c.level).padStart(2,'0')+' · '+esc(c.topic||'')+'</small></button>';
    }).join('');
    return '<p class="muted">'+arr.length+(state.cards.length>150?' von '+state.cards.length:'')+' Treffer</p>'+rows;
  }
  function practice(){
    const pool=state.cards;
    const c=pool[Math.floor(Math.random()*pool.length)];
    state.practice=c;
    return shell('<main class="page practice-page"><button class="back" data-action="home">← Home</button><div class="practice-wrap"><span class="eyebrow">PRACTICE</span><h1>'+esc(c.title)+'</h1>'+formula(c.formula)+'<div class="practice-card"><span class="eyebrow">RECHNEN / VERSTEHEN</span><h2>'+esc(c.question||'Erkläre die Formel in eigenen Worten.')+'</h2><input id="practiceAnswer" placeholder="Deine Antwort…" autocomplete="off"><button class="primary" data-action="check">Antwort prüfen</button><div id="feedback"></div><details><summary>Vollständige Lösung anzeigen</summary><p>'+esc(c.answer||'')+'</p></details></div></div></main>');
  }

  function render(){try{if(state.screen==='home')root.innerHTML=home();else if(state.screen==='level')root.innerHTML=levelView(levels().find(x=>x.id===state.level));else if(state.screen==='library')root.innerHTML=library();else root.innerHTML=practice();}catch(e){root.innerHTML=`<main class="error"><h1>Fehler beim Laden</h1><p>${esc(e.message)}</p><button class="primary" onclick="location.reload()">Neu laden</button></main>`}}
  function enter(){
    state.screen='home';render();
    fetch(DATA_URL,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error(`Datensatz konnte nicht geladen werden (${r.status}).`);return r.json()}).then(d=>{state.cards=Array.isArray(d)?d:(d.cards||[]);if(!state.cards.length)throw new Error('Der Datensatz enthält keine Karten.');render()}).catch(err=>{root.innerHTML=`<main class="error"><div class="error-icon">!</div><h1>Quant Math konnte die Inhalte nicht laden.</h1><p>${esc(err.message)}</p><p class="muted">Bitte das Projekt über GitHub Pages oder einen lokalen Webserver öffnen, nicht per <code>file://</code>.</p><button class="primary" data-action="retry">Erneut versuchen</button></main>`})
  }
  document.addEventListener('click',e=>{const el=e.target.closest('[data-action]');if(!el)return;const a=el.dataset.action;
    if(a==='home'){state.screen='home';render()}
    if(a==='level'){state.level=Number(el.dataset.level);state.index=0;state.screen='level';render()}
    if(a==='card'){state.index=Number(el.dataset.index);render()}
    if(a==='prev'){if(state.index>0)state.index--;render()}
    if(a==='next'){const l=levels().find(x=>x.id===state.level);if(l&&state.index<l.cards.length-1)state.index++;render()}
    if(a==='complete'){const l=levels().find(x=>x.id===state.level);if(l){markDone(l.cards[state.index]);if(state.index<l.cards.length-1)state.index++;render()}}
    if(a==='library'){state.screen='library';render()}
    if(a==='open-card'){const c=state.cards.find(x=>cardId(x)===el.dataset.card);if(c){state.level=c.level;state.index=levels().find(x=>x.id===c.level).cards.findIndex(x=>cardId(x)===cardId(c));state.screen='level';render()}}
    if(a==='practice'){state.screen='practice';render()}
    if(a==='check'){check()}
    if(a==='retry')enter();
  });
  document.addEventListener('input',e=>{if(e.target.id==='search'){state.query=e.target.value;const out=document.getElementById('results');if(out)out.innerHTML=libraryResults()}});
  function check(){const input=document.getElementById('practiceAnswer'),fb=document.getElementById('feedback');if(!input||!state.practice||!fb)return;const raw=input.value.trim().toLowerCase().replace(',','.');const ans=String(state.practice.answer||'').toLowerCase();const n=parseFloat(raw),m=parseFloat(ans);const ok=Number.isFinite(n)&&Number.isFinite(m)?Math.abs(n-m)<=Math.max(.01,Math.abs(m)*.02):raw===ans;if(ok){markDone(state.practice);fb.innerHTML='<div class="feedback good">✓ Richtig. Sehr gut.</div>'}else fb.innerHTML='<div class="feedback bad">Noch nicht. Rechne die Schritte aus und prüfe jedes Symbol.</div>'}
  enter();
})();
