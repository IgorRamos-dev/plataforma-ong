
(function(){
  function onlyDigits(v){ return v.replace(/\D+/g,''); }

  function maskCPF(v){
    v = onlyDigits(v).slice(0,11);
    return v
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }
  function maskPhone(v){
    v = onlyDigits(v).slice(0,11);
    if(v.length <= 10){
      return v.replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3');
    } else {
      return v.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
    }
  }
  function maskCEP(v){
    v = onlyDigits(v).slice(0,8);
    return v.replace(/^(\d{5})(\d)/, '$1-$2');
  }

  document.addEventListener('input', (e)=>{
    const el = e.target;
    if(el.matches('[data-mask="cpf"]')) el.value = maskCPF(el.value);
    if(el.matches('[data-mask="phone"]')) el.value = maskPhone(el.value);
    if(el.matches('[data-mask="cep"]')) el.value = maskCEP(el.value);
  });

  const toast = document.createElement('div');
  toast.setAttribute('role','status');
  toast.setAttribute('aria-live','polite');
  toast.style.position='fixed'; toast.style.right='12px'; toast.style.bottom='12px';
  toast.style.background='#0f766e'; toast.style.color='#fff'; toast.style.padding='10px 14px';
  toast.style.borderRadius='10px'; toast.style.boxShadow='0 6px 24px rgba(2,8,23,.2)';
  toast.style.display='none';
  document.body.appendChild(toast);

  function showToast(msg){
    toast.textContent = msg; toast.style.display='block';
    setTimeout(()=> toast.style.display='none', 2500);
  }

  document.addEventListener('submit', (e)=>{
    const form = e.target;
    if(form.matches('.js-demo-submit')){
      e.preventDefault();
      if(form.checkValidity()){
        showToast('Formulário enviado (demo).');
        form.reset();
      }
    }
  });
})();
