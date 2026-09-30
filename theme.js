(function () {
  var key = 'theme', root = document.documentElement, t;
  try { t = localStorage.getItem(key); } catch (e) {}
  if (t !== 'light' && t !== 'dark') t = 'dark';
  root.setAttribute('data-theme', t);
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('[data-theme-toggle]');
    var meta = document.querySelector('meta[name="theme-color"]');
    function sync() {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (btn) {
        btn.textContent = dark ? '☀️' : '🌙';
        btn.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' mode');
      }
      if (meta) meta.setAttribute('content', dark ? '#0b1020' : '#e9eef7');
    }
    sync();
    if (btn) btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(key, next); } catch (e) {}
      sync();
    });
  });
})();