(function(){
  const slides = Array.from(document.querySelectorAll('.deck .slide'));
  let current = 0;

  function show(n){
    slides[current].classList.remove('active');
    current = Math.max(0, Math.min(n, slides.length - 1));
    slides[current].classList.add('active');
    document.getElementById('nav-counter').textContent = (current+1) + ' / ' + slides.length;
    document.getElementById('btn-prev').disabled = current === 0;
    document.getElementById('btn-next').disabled = current === slides.length - 1;
    const id = slides[current].id;
    if(id) history.replaceState(null, '', '#' + id);
  }

  globalThis.changeSlide = function(dir){ show(current + dir); };
  globalThis.navigateTo = function(id){ show(slides.findIndex(s => s.id === id)); };

  document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight'||e.key==='ArrowDown') globalThis.changeSlide(1);
    if(e.key==='ArrowLeft'||e.key==='ArrowUp') globalThis.changeSlide(-1);
  });

  const hash = location.hash.slice(1);
  const initial = hash ? slides.findIndex(s => s.id === hash) : 0;
  show(Math.max(0, initial));
})();
