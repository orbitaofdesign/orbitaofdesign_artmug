/* 오르비타 커미션 — 아트머그 페이지 쪽 MENU (iframe 바깥 여백에 표시) */
(function(){
  if(window.__orbitaMenu) return;
  var f=document.getElementById('orbita-frame'); if(!f) return;
  window.__orbitaMenu=1;
  var FONT='https://cdn.jsdelivr.net/gh/yellopencil/yellopencil-webfonts@v1.17.0/fonts/paperlogy/Paperlogy-';
  var st=document.createElement('style');
  st.textContent="@font-face{font-family:'Paperlogy';src:url('"+FONT+"5Medium.woff2') format('woff2');font-weight:500;font-display:swap;}@font-face{font-family:'Paperlogy';src:url('"+FONT+"7Bold.woff2') format('woff2');font-weight:700;font-display:swap;}"+
    ".orb-rm,.orb-rm *{box-sizing:border-box;margin:0;}.orb-rm ul,.orb-rm li{list-style:none;padding:0;}.orb-rm button{font-family:inherit;text-transform:none;letter-spacing:normal;min-width:0;min-height:0;}"+".orb-rm{position:fixed;z-index:900;left:0;top:0;display:flex;flex-direction:column;align-items:flex-end;gap:10px;font-family:'Paperlogy','Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .25s,visibility .25s,transform .25s;}.orb-rm.is-show{opacity:1;visibility:visible;transform:none;}.orb-rm-card{box-sizing:border-box;width:156px;padding:14px 10px 10px;background:#fff;border:1px solid #ffe79a;border-radius:16px;box-shadow:0 8px 24px rgba(0,0,0,.06);}.orb-rm-head{display:flex;align-items:center;gap:6px;padding:0 8px 10px;margin-bottom:6px;border-bottom:1px solid #f2f2f2;font-size:13px;font-weight:700;color:#1a1a1a;line-height:20px;letter-spacing:.5px;}.orb-rm-star{color:#ffd040;font-size:12px;line-height:20px;}.orb-rm-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px;}.orb-rm-item{display:flex;align-items:center;gap:10px;width:100%;height:36px;padding:0 10px;box-sizing:border-box;font:inherit;font-size:14px;font-weight:500;color:#666;line-height:20px;text-align:left;background:transparent;border:0;border-radius:10px;cursor:pointer;transition:background-color .18s,color .18s;}.orb-rm-item:hover{background:#fff8dc;color:#1a1a1a;}.orb-rm-item:focus-visible,.orb-rm-top:focus-visible,.orb-rm-fab:focus-visible{outline:none;box-shadow:0 0 0 3px rgba(255,208,64,.45);}.orb-rm-dot{flex:none;width:6px;height:6px;border-radius:50%;background:#d9d9d9;transition:background-color .18s,transform .18s;}.orb-rm-item.is-on{background:#fffbea;color:#1a1a1a;font-weight:700;}.orb-rm-item.is-on .orb-rm-dot{background:#ffd040;transform:scale(1.5);}.orb-rm-top{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;height:36px;margin-top:8px;box-sizing:border-box;font:inherit;font-size:13px;font-weight:700;letter-spacing:1px;color:#ffd040;line-height:20px;background:#000;border:0;border-radius:10px;cursor:pointer;transition:background-color .18s;}.orb-rm-top:hover{background:#1f1f1f;}.orb-rm-fab{display:none;align-items:center;justify-content:center;width:52px;height:52px;padding:0;background:#000;border:1.5px solid #ffd040;border-radius:50%;box-shadow:0 6px 18px rgba(0,0,0,.135),0 0 10px rgba(255,208,64,.11);cursor:pointer;transition:transform .18s;}.orb-rm-fab:hover{transform:translateY(-1px);}.orb-rm-fab-i{display:flex;flex-direction:column;gap:4px;width:18px;}.orb-rm-fab-i i{display:block;height:2px;border-radius:1px;background:#ffd040;transition:transform .2s,opacity .2s;}.orb-rm:not(.is-wide) .orb-rm-fab{display:flex;}.orb-rm:not(.is-wide) .orb-rm-card{display:none;}.orb-rm:not(.is-wide).is-open .orb-rm-card{display:block;animation:orbRmIn .2s ease-out;}.orb-rm.is-open .orb-rm-fab-i i:nth-child(1){transform:translateY(6px) rotate(45deg);}.orb-rm.is-open .orb-rm-fab-i i:nth-child(2){opacity:0;}.orb-rm.is-open .orb-rm-fab-i i:nth-child(3){transform:translateY(-6px) rotate(-45deg);}@keyframes orbRmIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}@media (prefers-reduced-motion:reduce){.orb-rm,.orb-rm.is-ready{transition:opacity .2s,visibility .2s;}.orb-rm:not(.is-wide).is-open .orb-rm-card{animation:none;}}"+".orb-rm{z-index:9990 !important;}";
  document.head.appendChild(st);
  var up='<svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2 7.5 6 3.5l4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var R=document.createElement('nav');R.className='orb-rm is-ready';R.setAttribute('aria-label','MENU');R.style.position='fixed';
  document.body.appendChild(R);
  var secs=[],cr=0,end=0,sig='',items=[],fab=null;
  function build(){
    R.innerHTML='<div class="orb-rm-card"><div class="orb-rm-head"><span class="orb-rm-star" aria-hidden="true">✦</span>MENU</div><ul class="orb-rm-list">'+
      secs.map(function(s,i){return '<li><button type="button" class="orb-rm-item" data-i="'+i+'"><span class="orb-rm-dot" aria-hidden="true"></span><span class="orb-rm-l">'+s.n.replace(/[<&]/g,'')+'</span></button></li>';}).join('')+
      '</ul><button type="button" class="orb-rm-top" data-top="1">'+up+'<span>TOP</span></button></div>'+
      '<button type="button" class="orb-rm-fab" aria-expanded="false" aria-label="MENU 열기"><span class="orb-rm-fab-i" aria-hidden="true"><i></i><i></i><i></i></span></button>';
    items=[].slice.call(R.querySelectorAll('.orb-rm-item'));fab=R.querySelector('.orb-rm-fab');
  }
  function setOpen(o){R.classList.toggle('is-open',o);if(fab){fab.setAttribute('aria-expanded',o?'true':'false');fab.setAttribute('aria-label',o?'MENU 닫기':'MENU 열기');}layout();}
  function layout(){
    if(!secs.length){R.classList.remove('is-show');return;}
    var r=f.getBoundingClientRect(),W=document.documentElement.clientWidth,H=window.innerHeight;
    var right=r.left+cr,gut=W-right,wide=gut>=188;
    R.classList.toggle('is-wide',wide); if(wide&&R.classList.contains('is-open'))R.classList.remove('is-open');
    var show=r.top+secs[0].t<H*0.5&&r.top+end>H*0.5; R.classList.toggle('is-show',show); if(!show&&R.classList.contains('is-open'))R.classList.remove('is-open');
    var probe=H*0.35,act=-1; secs.forEach(function(s,i){if(r.top+s.t-24<=probe)act=i;}); if(act>=0&&r.top+end<=H+8)act=secs.length-1;
    items.forEach(function(b,i){var on=i===act;b.classList.toggle('is-on',on);if(on)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});
    var w=R.offsetWidth,h=R.offsetHeight;
    if(wide){R.style.left=Math.round(right+(gut-w)/2)+'px';R.style.top=Math.round((H-h)/2)+'px';R.style.bottom='auto';}
    else{R.style.left=Math.round(W-w-16)+'px';R.style.top='auto';R.style.bottom='16px';}
  }
  function go(y){window.scrollTo({top:Math.max(0,Math.round(window.scrollY+f.getBoundingClientRect().top+y)),behavior:'smooth'});}
  R.addEventListener('click',function(e){
    if(e.target.closest('.orb-rm-fab')){setOpen(!R.classList.contains('is-open'));return;}
    var b=e.target.closest('.orb-rm-item'),tp=e.target.closest('[data-top]'); if(!b&&!tp) return;
    go(b?secs[+b.getAttribute('data-i')].t-24:0);
    if(!R.classList.contains('is-wide')) setOpen(false);
  });
  document.addEventListener('click',function(e){if(R.classList.contains('is-open')&&!R.contains(e.target))setOpen(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&R.classList.contains('is-open'))setOpen(false);});
  window.addEventListener('message',function(e){
    if(e.source!==f.contentWindow) return; var d=e.data||{};
    if(d.type==='orbitaSecs'&&d.secs){var s=JSON.stringify(d.secs.map(function(x){return x.n;}));secs=d.secs;cr=d.cr||0;end=d.end||0;if(s!==sig){sig=s;build();}layout();
      f.contentWindow.postMessage({type:'orbitaParentMenu'},'*');}
  });
  window.addEventListener('scroll',layout,{passive:true}); window.addEventListener('resize',layout);
  try{f.contentWindow.postMessage({type:'orbitaParentMenu'},'*');}catch(e){}
})();
