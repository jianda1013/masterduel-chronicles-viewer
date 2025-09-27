(function () {
  const STORAGE_KEY = 'theme-mode';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  // dropdown DOM
  const menu = document.querySelector('.menu');
  const trigger = document.querySelector('.menu-trigger');
  const list = document.getElementById('theme-menu');
  const buttons = Array.from(list.querySelectorAll('button[data-mode]'));

  function applyTheme(mode) {
    if (mode === 'light') root.setAttribute('data-theme', 'light');
    else if (mode === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme'); // system
    // 標記目前選項在「按鈕」上
    buttons.forEach(btn =>
      btn.setAttribute('aria-checked', String(btn.dataset.mode === mode))
    );
  }

  function setMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  }

  // init
  const initial = localStorage.getItem(STORAGE_KEY) || 'system';
  applyTheme(initial);

  // 系統偏好變更時，同步 system 模式
  media.addEventListener('change', () => {
    const cur = localStorage.getItem(STORAGE_KEY) || 'system';
    if (cur === 'system') applyTheme('system');
  });

  // 開合選單
  function openMenu() { menu.dataset.state = 'open'; trigger.setAttribute('aria-expanded', 'true'); }
  function closeMenu() { menu.dataset.state = 'closed'; trigger.setAttribute('aria-expanded', 'false'); }
  trigger.addEventListener('click', () => menu.dataset.state === 'open' ? closeMenu() : openMenu());
  document.addEventListener('click', e => { if (!menu.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  // 切換主題
  list.addEventListener('click', e => {
    const btn = e.target.closest('button[data-mode]');
    if (!btn) return;
    setMode(btn.dataset.mode);
    closeMenu();
  });
})();
