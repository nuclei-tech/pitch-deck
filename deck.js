
(function(){
  var slides = document.querySelectorAll('.deck .slide');
  var current = 0;
  function show(n){
    slides[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.getElementById('nav-counter').textContent = (current+1) + ' / ' + slides.length;
    document.getElementById('btn-prev').disabled = current === 0;
    document.getElementById('btn-next').disabled = current === slides.length - 1;
  }
  window.changeSlide = function(dir){ show(current + dir); };
  document.addEventListener('keydown', function(e){
    if(e.key==='ArrowRight'||e.key==='ArrowDown') changeSlide(1);
    if(e.key==='ArrowLeft'||e.key==='ArrowUp') changeSlide(-1);
  });
  slides[0].classList.add('active');
})();
