
(function(){
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('#menu');
  function update(mq){
    if(mq.matches){ btn.style.display='none'; menu.style.display='flex'; }
    else { btn.style.display='inline-block'; menu.style.display='none'; btn.setAttribute('aria-expanded','false'); }
  }
  const mq = window.matchMedia('(min-width: 900px)');
  update(mq); mq.addEventListener('change', ()=>update(mq));
  btn?.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    menu.style.display = expanded ? 'none' : 'block';
  });
})();
