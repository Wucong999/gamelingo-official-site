const langSelect = document.getElementById("langSelect");
const brandLogo = document.getElementById("brandLogo");
const siteBrandText = document.getElementById("siteBrandText");
// Billing switch removed on the landing page (monthly only for now).
const engineMatrixTitle = document.getElementById("engineMatrixTitle");
const engineMatrixIntro = document.getElementById("engineMatrixIntro");

const i18n = {
  zh: {
    pageTitle: "游译者 GameLingo - 实时汉化助手官网",
    siteBrandText: "游译者 GameLingo",
    navDownload: "下载",
    heroBadge: "没有汉化，也能玩懂全世界游戏！",
    heroTitle: "大模型翻译沉浸汉化体验",
    heroLead:
      "二次元的世界就是这么简单易懂，内置术语库随意添加指定翻译，更加专注于剧情与战斗！",
    heroBtnDownload: "下载 Windows 版",
    featuresTitle: "核心功能",
    featuresIntro: "为跨语言游戏玩家设计：专注“快上手、少干扰、看得懂”。",
    featuresNote: "目标是让你把时间留给游戏本身，而不是花在折腾翻译工具上。",
    k1: "实时翻译",
    k2: "术语一致",
    k3: "流程自检",
    k4: "支持扩展",
    f1t: "抓文本（Hook 优先）",
    f1d: "优先走 Hook，尽量不靠 OCR；漏翻更少、更沉浸。",
    f2t: "官译风格（更像本地化）",
    f2d: "术语表 + 上下文记忆，减少“机翻味”。",
    f3t: "流程自检 + 日志提示",
    f3d: "告诉你卡在哪：没抓到文本 / 缺适配包 / 模型不可用。",
    flowTitle: "使用流程",
    flowIntro: "快速上手：拖入游戏 → 生成译文 → 自动写入。",
    s1t: "下载并安装",
    s1d: "桌面端优先。",
    s2t: "拖入游戏 EXE",
    s2d: "自动识别引擎。",
    s3t: "安装适配/生成补丁",
    s3d: "按提示一键完成。",
    s4t: "启动并体验",
    s4d: "进入文本场景生效。",
    supportTitle: "支持范围",
    supportIntro: "我们优先把玩家最常见的场景做稳：Windows + Unity。其他引擎会逐步补齐，并在软件里提示缺少的适配包。",
    sup1t: "Windows 10/11",
    sup1d: "桌面端优先，操作习惯贴近玩家。",
    sup2t: "Unity（优先支持）",
    sup2d: "提供一键安装适配包（BepInEx 5 路线）。",
    sup3t: "RPGMaker / Ren’Py / 其他",
    sup3d: "逐步补齐。未支持会明确提示“缺少什么适配包”。",
    pricingTitle: "价格方案",
    pricingIntro: "按月计费。到期后已翻译内容仍可离线使用，但无法继续进行付费翻译。",
    engineMatrixTitle: "\u652f\u6301\u7684\u6e38\u620f\u5f15\u64ce",
    engineMatrixIntro: "\u60ac\u505c\u67e5\u770b\u5f15\u64ce\u7279\u70b9\u4e0e\u5f53\u524d\u652f\u6301\u7a0b\u5ea6\uff08\u79fb\u52a8\u7aef\u70b9\u51fb\u5c55\u5f00\uff09\u3002\u6211\u4eec\u4f1a\u628a\u201c\u5df2\u652f\u6301\u201d\u9010\u6b65\u505a\u6ee1\u3002",
    promoYearly: ""
  },
  en: {
    pageTitle: "GameLingo - Official Site",
    siteBrandText: "GameLingo",
    navDownload: "Download",
    heroBadge: "No localization? Still enjoy games worldwide.",
    heroTitle: "Real-time Hook + AI Translation<br />Immersive In-Game Localization",
    heroLead:
      "Built for Unity and games unsupported by RPG/MTool workflows. It captures game text directly, translates in real time, and writes back or overlays in place. Launch by drag-and-drop and keep terminology and character tone consistent.",
    heroBtnDownload: "Download for Windows",
    featuresTitle: "Core Features",
    featuresIntro: "Built for cross-language players: fast setup, low distraction, clear understanding.",
    featuresNote: "Spend your time in the game, not on translation tool setup.",
    k1: "Real-time",
    k2: "Glossary",
    k3: "Self-check",
    k4: "Expandable",
    f1t: "Text capture (Hook-first)",
    f1d: "Hook-first to reduce OCR errors and missed lines.",
    f2t: "Localization-style AI",
    f2d: "Glossary + context to reduce raw machine-translation feel.",
    f3t: "Clear diagnostics",
    f3d: "Tells you what’s missing: no text, missing adapter, model issue.",
    flowTitle: "Workflow",
    flowIntro: "Get started in minutes: drop the EXE, install adapter or generate patch, then launch.",
    s1t: "Install",
    s1d: "Desktop-first.",
    s2t: "Drop the EXE",
    s2d: "Auto-detect engine.",
    s3t: "Adapter / Patch",
    s3d: "One-click guided.",
    s4t: "Launch & Play",
    s4d: "Works in text scenes.",
    supportTitle: "Support",
    supportIntro: "We focus on the most common setup first: Windows + Unity. Other engines will be added with clear missing-adapter hints.",
    sup1t: "Windows 10/11",
    sup1d: "Desktop-first experience.",
    sup2t: "Unity (priority)",
    sup2d: "One-click adapter install (BepInEx 5 path).",
    sup3t: "RPGMaker / Ren’Py / Others",
    sup3d: "Coming next. We’ll tell you what adapter is missing.",
    pricingTitle: "Pricing",
    pricingIntro: "Monthly billing. After expiry, offline patched content still works, but paid translation is disabled.",
    engineMatrixTitle: "Supported Game Engines",
    engineMatrixIntro: "Hover to see engine traits and current support level (tap to expand on mobile). We’ll keep expanding coverage.",
    promoYearly: ""
  }
};

function applyLogoTheme(fileName) {
  const safe = "logo.svg";
  if (brandLogo) {
    brandLogo.src = `./assets/${safe}`;
  }
}

function setText(id, value, useHtml) {
  const el = document.getElementById(id);
  if (!el) return;
  if (useHtml) el.innerHTML = value;
  else el.textContent = value;
}

function applyLanguage(lang) {
  const safe = lang === "en" ? "en" : "zh";
  const dict = i18n[safe];
  document.documentElement.lang = safe === "en" ? "en" : "zh-CN";
  document.title = dict.pageTitle;
  if (langSelect) langSelect.value = safe;
  if (siteBrandText) siteBrandText.textContent = dict.siteBrandText;
  setText("navDownload", dict.navDownload);
  setText("heroBadge", dict.heroBadge);
  setText("heroTitle", dict.heroTitle, true);
  setText("heroLead", dict.heroLead);
  setText("heroBtnDownload", dict.heroBtnDownload);
  setText("featuresTitle", dict.featuresTitle);
  setText("featuresIntro", dict.featuresIntro);
  setText("featuresNote", dict.featuresNote);
  setText("k1", dict.k1);
  setText("k2", dict.k2);
  setText("k3", dict.k3);
  setText("k4", dict.k4);
  setText("f1t", dict.f1t);
  setText("f1d", dict.f1d);
  setText("f2t", dict.f2t);
  setText("f2d", dict.f2d);
  setText("f3t", dict.f3t);
  setText("f3d", dict.f3d);
  setText("flowTitle", dict.flowTitle);
  setText("flowIntro", dict.flowIntro);
  setText("s1t", dict.s1t);
  setText("s1d", dict.s1d);
  setText("s2t", dict.s2t);
  setText("s2d", dict.s2d);
  setText("s3t", dict.s3t);
  setText("s3d", dict.s3d);
  setText("s4t", dict.s4t);
  setText("s4d", dict.s4d);
  setText("supportTitle", dict.supportTitle);
  setText("supportIntro", dict.supportIntro);
  setText("sup1t", dict.sup1t);
  setText("sup1d", dict.sup1d);
  setText("sup2t", dict.sup2t);
  setText("sup2d", dict.sup2d);
  setText("sup3t", dict.sup3t);
  setText("sup3d", dict.sup3d);
  setText("pricingTitle", dict.pricingTitle);
  setText("pricingIntro", dict.pricingIntro);
  if (engineMatrixTitle) engineMatrixTitle.textContent = dict.engineMatrixTitle;
  if (engineMatrixIntro) engineMatrixIntro.textContent = dict.engineMatrixIntro;
  window.localStorage.setItem("gamelingo_site_lang", safe);
}

if (langSelect) {
  langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
  });
}

window.localStorage.setItem("gamelingo_site_logo_theme", "logo.svg");
applyLogoTheme("logo.svg");
applyLanguage(window.localStorage.getItem("gamelingo_site_lang") || "zh");

// Purchase: use Afdian external link (no local payment modal).
// Keeping this script lightweight avoids mobile layout/script issues.

// Progressive reveal animation for a modern landing-page feel.
const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add("on");
    }
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Subtle hero parallax for a polished "big brand" feel.
const heroCard = document.querySelector(".hero-card");
if (heroCard) {
  // Keep hero motion subtle and non-janky: avoid mousemove-driven transforms.
  // (We rely on low-frequency CSS animations in index.html instead.)
}

// Mobile-friendly: tap engine cards to expand details
document.querySelectorAll(".engine-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("open");
  });
});

// Feedback modal (server-side email)
const feedbackLink = document.getElementById("feedbackLink");
const feedbackModal = document.getElementById("feedbackModal");
const feedbackClose = document.getElementById("feedbackClose");
const feedbackText = document.getElementById("feedbackText");
const feedbackFiles = document.getElementById("feedbackFiles");
const feedbackFileList = document.getElementById("feedbackFileList");
const feedbackSend = document.getElementById("feedbackSend");
const feedbackStatus = document.getElementById("feedbackStatus");
let feedbackCooldownUntil = 0;
let feedbackCooldownTimer = 0;
const FEEDBACK_MAX_FILES = 2;
const FEEDBACK_MAX_FILE_BYTES = 8 * 1024 * 1024;

function bytesHuman(n) {
  const v = Number(n) || 0;
  if (v >= 1024 * 1024) return `${(v / (1024 * 1024)).toFixed(2)}MB`;
  if (v >= 1024) return `${(v / 1024).toFixed(1)}KB`;
  return `${v}B`;
}

function refreshSelectedFilesUi() {
  if (!feedbackFileList) return;
  const files = Array.from(feedbackFiles?.files || []);
  if (!files.length) {
    feedbackFileList.style.display = "none";
    feedbackFileList.innerHTML = "";
    return;
  }
  feedbackFileList.style.display = "block";
  feedbackFileList.innerHTML = files
    .slice(0, 12)
    .map((f) => `<li>${String(f.name || "file")}（${bytesHuman(f.size)}）</li>`)
    .join("");
}

function setStatus(text, type) {
  if (!feedbackStatus) return;
  feedbackStatus.classList.remove("ok", "err");
  if (type === "ok") feedbackStatus.classList.add("ok");
  if (type === "err") feedbackStatus.classList.add("err");
  feedbackStatus.textContent = text || "";
}

function setSendEnabled(enabled, label) {
  if (!feedbackSend) return;
  feedbackSend.disabled = !enabled;
  feedbackSend.textContent = label || "发送";
}

function startCooldown(seconds) {
  const s = Math.max(1, Number(seconds) || 60);
  feedbackCooldownUntil = Date.now() + s * 1000;
  window.clearInterval(feedbackCooldownTimer);
  feedbackCooldownTimer = window.setInterval(() => {
    const left = Math.ceil((feedbackCooldownUntil - Date.now()) / 1000);
    if (left <= 0) {
      window.clearInterval(feedbackCooldownTimer);
      feedbackCooldownTimer = 0;
      setSendEnabled(true, "发送");
      return;
    }
    setSendEnabled(false, `发送（${left}s）`);
  }, 250);
  setSendEnabled(false, `发送（${s}s）`);
}

function openModal(el) {
  if (!el) return;
  el.classList.add("on");
  el.setAttribute("aria-hidden", "false");
}
function closeModal(el) {
  if (!el) return;
  el.classList.remove("on");
  el.setAttribute("aria-hidden", "true");
}

if (feedbackLink) {
  feedbackLink.addEventListener("click", () => {
    setStatus("");
    openModal(feedbackModal);
    setTimeout(() => feedbackText && feedbackText.focus(), 60);
  });
}
if (feedbackClose) feedbackClose.addEventListener("click", () => closeModal(feedbackModal));
if (feedbackModal) {
  feedbackModal.addEventListener("click", (e) => {
    if (e.target === feedbackModal) closeModal(feedbackModal);
  });
}

if (feedbackFiles) {
  feedbackFiles.addEventListener("change", () => {
    refreshSelectedFilesUi();
    const files = Array.from(feedbackFiles.files || []);
    if (files.length > FEEDBACK_MAX_FILES) {
      setStatus(`附件最多选择 ${FEEDBACK_MAX_FILES} 个文件。`, "err");
    } else {
      setStatus("");
    }
  });
}

async function sendFeedback() {
  const left = Math.ceil((feedbackCooldownUntil - Date.now()) / 1000);
  if (left > 0) {
    setStatus(`发送过于频繁，请 ${left}s 后再试。`, "err");
    startCooldown(left);
    return;
  }
  const text = String(feedbackText?.value || "").trim();
  if (!text) {
    setStatus("请先填写问题描述。", "err");
    return;
  }
  const files = Array.from(feedbackFiles?.files || []);
  if (files.length > FEEDBACK_MAX_FILES) {
    setStatus(`附件最多选择 ${FEEDBACK_MAX_FILES} 个文件。`, "err");
    return;
  }
  for (const f of files) {
    if ((Number(f.size) || 0) > FEEDBACK_MAX_FILE_BYTES) {
      setStatus(`附件过大：${f.name}（${bytesHuman(f.size)}），单个上限 ${bytesHuman(FEEDBACK_MAX_FILE_BYTES)}。`, "err");
      return;
    }
  }
  setSendEnabled(false, "发送中…");
  setStatus("发送中…");
  try {
    const fd = new FormData();
    fd.append("message", text);
    fd.append("page", String(window.location.href || ""));
    for (const f of files) fd.append("files", f, f.name);

    const res = await fetch(`/api/feedback`, { method: "POST", body: fd });
    const j = await res.json().catch(() => ({}));
    if (!res.ok || !j.ok) throw new Error(j.message || `HTTP ${res.status}`);
    setStatus("已发送，感谢反馈！", "ok");
    if (feedbackText) feedbackText.value = "";
    if (feedbackFiles) feedbackFiles.value = "";
    refreshSelectedFilesUi();
    startCooldown(60);
  } catch (e) {
    setSendEnabled(true, "发送");
    setStatus(`发送失败：${e?.message || String(e)}`, "err");
  }
}

if (feedbackSend) feedbackSend.addEventListener("click", () => void sendFeedback());

// Engine tooltip (desktop): float panel with small delay, no layout shift.
const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const enableFloatTip = !isCoarsePointer;

let floatTipEl = null;
let showTimer = 0;
let hideTimer = 0;
let lastCard = null;

function ensureFloatTip() {
  if (floatTipEl) return floatTipEl;
  floatTipEl = document.createElement("div");
  floatTipEl.className = "engine-float-tip";
  floatTipEl.innerHTML = '<div class="tip-box"><div class="tip-title"></div><ul class="tip-list"></ul></div>';
  document.body.appendChild(floatTipEl);
  return floatTipEl;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function setFloatTipFromCard(card) {
  const src = card.querySelector(".tip-box");
  if (!src) return false;
  const el = ensureFloatTip();
  el.innerHTML = src.outerHTML;
  return true;
}

function positionFloatTipNearCard(card) {
  const el = ensureFloatTip();
  const r = card.getBoundingClientRect();

  // Measure after content set
  el.style.left = "0px";
  el.style.top = "0px";
  el.classList.add("on");

  const tipRect = el.getBoundingClientRect();
  const margin = 10;

  // Prefer right side; fallback to left; then below.
  let left = r.right + 12;
  let top = r.top + (r.height - tipRect.height) / 2;

  if (left + tipRect.width > window.innerWidth - margin) {
    left = r.left - 12 - tipRect.width;
  }
  if (left < margin) {
    left = r.left;
    top = r.bottom + 10;
  }

  left = clamp(left, margin, window.innerWidth - margin - tipRect.width);
  top = clamp(top, margin, window.innerHeight - margin - tipRect.height);

  el.style.left = `${Math.round(left)}px`;
  el.style.top = `${Math.round(top)}px`;
}

function showFloatTip(card) {
  if (!enableFloatTip) return;
  if (!card) return;
  if (!setFloatTipFromCard(card)) return;
  positionFloatTipNearCard(card);
  lastCard = card;
}

function hideFloatTip() {
  if (!floatTipEl) return;
  floatTipEl.classList.remove("on");
  lastCard = null;
}

function scheduleShow(card) {
  if (!enableFloatTip) return;
  window.clearTimeout(hideTimer);
  window.clearTimeout(showTimer);
  const delay = prefersReducedMotion ? 0 : 140;
  showTimer = window.setTimeout(() => showFloatTip(card), delay);
}

function scheduleHide() {
  if (!enableFloatTip) return;
  window.clearTimeout(showTimer);
  window.clearTimeout(hideTimer);
  const delay = prefersReducedMotion ? 0 : 120;
  hideTimer = window.setTimeout(() => hideFloatTip(), delay);
}

if (enableFloatTip) {
  document.querySelectorAll(".engine-card").forEach((card) => {
    card.addEventListener("pointerenter", () => scheduleShow(card));
    card.addEventListener("pointerleave", scheduleHide);
    card.addEventListener("focusin", () => scheduleShow(card));
    card.addEventListener("focusout", scheduleHide);
  });

  window.addEventListener("scroll", () => {
    // Keep it from lagging behind when scrolling quickly.
    if (lastCard) positionFloatTipNearCard(lastCard);
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (lastCard) positionFloatTipNearCard(lastCard);
  });
}

// Workflow: scroll-activated highlight + progress line (no endless animations).
const steps = Array.from(document.querySelectorAll(".timeline .step"));
const timeline = document.querySelector(".timeline");
if (steps.length && timeline) {
  let activeIndex = 0;
  function applyActive(nextIndex) {
    activeIndex = Math.max(0, Math.min(steps.length - 1, Number(nextIndex) || 0));
    steps.forEach((el, i) => el.classList.toggle("active", i === activeIndex));
    const denom = Math.max(1, steps.length - 1);
    timeline.style.setProperty("--progress", String(activeIndex / denom));
  }
  applyActive(0);

  const stepObserver = new IntersectionObserver(
    (entries) => {
      // Pick the most visible step as active.
      let best = { idx: activeIndex, ratio: 0 };
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const idx = steps.indexOf(e.target);
        if (idx < 0) continue;
        const ratio = Number(e.intersectionRatio || 0);
        if (ratio >= best.ratio) best = { idx, ratio };
      }
      applyActive(best.idx);
    },
    { threshold: [0.25, 0.45, 0.65] }
  );
  steps.forEach((s) => stepObserver.observe(s));
}

