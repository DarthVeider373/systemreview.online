(function(){
  const key='site_cookie_choice_v1';
  const banner=document.querySelector('.cookie-banner');
  if(banner && !localStorage.getItem(key)){ banner.classList.add('show'); }
  document.querySelectorAll('[data-cookie-choice]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      localStorage.setItem(key,btn.getAttribute('data-cookie-choice'));
      if(banner) banner.classList.remove('show');
    });
  });
})();
