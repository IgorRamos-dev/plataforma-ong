
/* EP1: Máscaras de CPF, telefone e CEP */
(function(){
  function onlyDigits(s){ return (s||"").replace(/\D/g,''); }
  function maskCPF(v){
    v = onlyDigits(v).slice(0,11);
    return v.replace(/^(\d{3})(\d)/, "$1.$2")
            .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/\.(\d{3})(\d)/, ".$1-$2");
  }
  function maskPhone(v){
    v = onlyDigits(v).slice(0,11);
    if(v.length <= 10){
      return v.replace(/^(\d{2})(\d)/, "($1) $2")
              .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      return v.replace(/^(\d{2})(\d)/, "($1) $2")
              .replace(/(\d{5})(\d)/, "$1-$2");
    }
  }
  function maskCEP(v){
    v = onlyDigits(v).slice(0,8);
    return v.replace(/^(\d{5})(\d)/, "$1-$2");
  }
  function applyMask(el){
    var type = el && el.getAttribute('data-mask');
    if(!type) return;
    var v = el.value || "";
    if(type === 'cpf') el.value = maskCPF(v);
    if(type === 'phone') el.value = maskPhone(v);
    if(type === 'cep') el.value = maskCEP(v);
  }
  function attach(selector){
    document.querySelectorAll(selector).forEach(function(el){
      ['input','change','blur','keyup'].forEach(function(evt){
        el.addEventListener(evt, function(){ applyMask(el); });
      });
      applyMask(el);
    });
  }
  document.addEventListener('DOMContentLoaded', function(){
    attach('input[data-mask="cpf"]');
    attach('input[data-mask="phone"]');
    attach('input[data-mask="cep"]');
  });
})();
