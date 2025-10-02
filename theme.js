(function () {
  const STORAGE_KEY = "theme-mode";
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const menu = document.querySelector(".menu");
  const trigger = document.querySelector(".menu-trigger");
  const list = document.getElementById("theme-menu");
  const buttons = list ? Array.from(list.querySelectorAll("button[data-mode]")) : [];

  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === "light") root.setAttribute("data-theme", "light");
    else if (mode === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    buttons.forEach((btn) => btn.setAttribute("aria-checked", String(btn.dataset.mode === mode)));
  }
  function setMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  }

  applyTheme(localStorage.getItem(STORAGE_KEY) || "system");

  media.addEventListener("change", () => {
    const cur = localStorage.getItem(STORAGE_KEY) || "system";
    if (cur === "system") applyTheme("system");
  });

  function openMenu() {
    if (!menu || !trigger) return;
    menu.dataset.state = "open";
    trigger.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    if (!menu || !trigger) return;
    menu.dataset.state = "closed";
    trigger.setAttribute("aria-expanded", "false");
  }

  if (trigger) {
    trigger.addEventListener("click", () =>
      menu.dataset.state === "open" ? closeMenu() : openMenu(),
    );
  }
  document.addEventListener("click", (e) => {
    if (menu && !menu.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  if (list) {
    list.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-mode]");
      if (!btn) return;
      setMode(btn.dataset.mode);
      closeMenu();
    });
  }

  // Topbar 捲動隱藏
  const topbar = document.querySelector(".topbar");
  function onScroll() {
    if (!topbar) return;
    if (window.scrollY > 0) topbar.classList.add("is-hidden");
    else topbar.classList.remove("is-hidden");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("DOMContentLoaded", onScroll);

  // 右下角：回頂 / 到底
  const btnTop = document.getElementById("btn-top");
  const btnBottom = document.getElementById("btn-bottom");
  const rootEl = document.scrollingElement || document.documentElement;

  if (btnTop) btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  if (btnBottom) {
    btnBottom.addEventListener("click", () => {
      const h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, rootEl.scrollHeight);
      window.scrollTo({ top: h, behavior: "smooth" });
    });
  }
})();
