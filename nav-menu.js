(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var mq = window.matchMedia('(max-width: 900px)');
  function close() { nav.classList.remove('open'); }
  nav.addEventListener('click', function (e) {
    if (!mq.matches) return;
    if (!nav.classList.contains('open')) {
      e.preventDefault();
      nav.classList.add('open');
    } else if (!e.target.closest('a')) {
      close();
    }
  });
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
  function measure() { document.documentElement.style.setProperty('--rail-w', nav.getBoundingClientRect().width + 'px'); }
  if (window.ResizeObserver) new ResizeObserver(measure).observe(nav);
  window.addEventListener('resize', measure);
  window.addEventListener('load', measure);
  measure();
  function reset() { if (!mq.matches) close(); }
  if (mq.addEventListener) mq.addEventListener('change', reset); else mq.addListener(reset);
})();
