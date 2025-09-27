(function () {
  const STORAGE_KEY = "theme-mode";
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  // dropdown DOM
  const menu = document.querySelector(".menu");
  const trigger = document.querySelector(".menu-trigger");
  const list = document.getElementById("theme-menu");
  const buttons = Array.from(list.querySelectorAll("button[data-mode]"));

  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === "light") root.setAttribute("data-theme", "light");
    else if (mode === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme"); // system
    buttons.forEach((btn) =>
      btn.setAttribute("aria-checked", String(btn.dataset.mode === mode)),
    );
  }
  function setMode(mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  }

  // init theme
  applyTheme(localStorage.getItem(STORAGE_KEY) || "system");

  // system sync
  media.addEventListener("change", () => {
    const cur = localStorage.getItem(STORAGE_KEY) || "system";
    if (cur === "system") applyTheme("system");
  });

  // open/close menu
  function openMenu() {
    menu.dataset.state = "open";
    trigger.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.dataset.state = "closed";
    trigger.setAttribute("aria-expanded", "false");
  }
  trigger.addEventListener("click", () =>
    menu.dataset.state === "open" ? closeMenu() : openMenu(),
  );
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // choose mode
  list.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-mode]");
    if (!btn) return;
    setMode(btn.dataset.mode);
    closeMenu();
  });

  // ===== 品牌字：用「可用半寬」判斷，將要碰到右側就隱藏 =====
  const inner = document.querySelector(".topbar-inner");
  const brand = document.getElementById("brand-text");
  const right = document.querySelector(".right-controls");
  const topbar = document.querySelector(".topbar");
  const SAFE_R = 12;

  function checkBrand() {
    if (!inner || !brand || !right) return;

    // 取得右半邊可用寬度：右 padding + 右側控制 + 安全距 之外的空間
    const cs = getComputedStyle(inner);
    const pr = parseFloat(cs.paddingRight) || 0;
    const half = inner.clientWidth / 2;
    const availableHalfRight =
      inner.clientWidth - pr - right.offsetWidth - half - SAFE_R;

    // 以文字「實際內容寬」判斷，而非被 ellipsis 壓過的可見寬
    let wasHidden = brand.classList.contains("hidden");
    if (wasHidden) {
      brand.classList.remove("hidden");
      brand.style.display = "inline-block";
    }
    const textW = brand.scrollWidth; // 內容真實寬
    if (wasHidden) {
      brand.classList.add("hidden");
      brand.style.display = "";
    }

    const overlap = availableHalfRight <= 0 || textW / 2 > availableHalfRight;
    brand.classList.toggle("hidden", overlap);
    if (overlap) brand.setAttribute("aria-hidden", "true");
    else brand.removeAttribute("aria-hidden");
  }

  const ro = new ResizeObserver(checkBrand);
  if (inner) ro.observe(inner);
  if (right) ro.observe(right);
  if (brand) ro.observe(brand);
  window.addEventListener("resize", checkBrand);
  document.addEventListener("DOMContentLoaded", checkBrand);
  setTimeout(checkBrand, 0);

  // ===== 一捲動就隱藏 topbar，回到頂部再顯示 =====
  function onScroll() {
    if (!topbar) return;
    if (window.scrollY > 0) topbar.classList.add("is-hidden");
    else topbar.classList.remove("is-hidden");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("DOMContentLoaded", onScroll);

  // ===== 右下角：回頂 / 到底 =====
  const btnTop = document.getElementById("btn-top");
  const btnBottom = document.getElementById("btn-bottom");
  const rootEl = document.scrollingElement || document.documentElement;

  if (btnTop)
    btnTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );

  if (btnBottom)
    btnBottom.addEventListener("click", () => {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        rootEl.scrollHeight,
      );
      window.scrollTo({ top: h, behavior: "smooth" });
    });
})();
