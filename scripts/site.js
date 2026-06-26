const langSelect = document.getElementById("langSelect");
const brandLogo = document.getElementById("brandLogo");
const siteBrandText = document.getElementById("siteBrandText");
// Billing switch removed on the landing page (monthly only for now).
const engineMatrixTitle = document.getElementById("engineMatrixTitle");
const engineMatrixIntro = document.getElementById("engineMatrixIntro");

const i18n = {
  zh: {
    pageTitle: "GameLingo",
    siteBrandText: "GameLingo",
    navDownload: "下载",
    heroBadge: "没有汉化，也能玩懂全世界游戏！",
    heroTitle:
      "拖入即可游玩，不再关注陌生语言问题",
    heroLead: "当前主力支持 RPG Maker MV/MZ，其他引擎实验开放中",
    heroBtnDownload: "下载 Windows 版",
    heroBtnEngines: "查看支持引擎",
    flowStep1Title: "步骤1: 拖入游戏",
    flowStep1Desc: "将游戏可执行文件从资源管理器拖入 GameLingo 窗口，工具将自动检测并连接游戏",
    flowStep2Title: "步骤2: 开始翻译",
    flowStep2Desc: "选择翻译模式与目标语言，点击「开始翻译」即可实时汉化",
    flowTitle: "使用流程",
    flowIntro: "三分钟上手：拖入游戏 → 生成补丁/安装适配 → 启动即可。",
    s1t: "下载并安装",
    s1d: "桌面端优先。",
    s2t: "拖入游戏 EXE",
    s2d: "自动识别引擎。",
    s3t: "安装适配/生成补丁",
    s3d: "按提示一键完成。",
    s4t: "启动并体验",
    s4d: "进入文本场景生效。",
    engineMatrixTitle: "支持的游戏引擎",
    engineMatrixIntro:
      "RPG Maker MV/MZ 为当前主力推荐；Ren'Py、Unity、Tyrano、Kirikiri、SRPG Studio 等处于实验开放阶段。不同游戏封包、字体与脚本结构会影响实际效果。",
    engineHeadRpg: "[RPG] 角色扮演引擎",
    engineHeadVn: "[VN/ADV/AVG] 视觉小说引擎",
    engineHeadSlg: "[SLG] 策略/模拟引擎",
    engineHeadOther: "[OTHER] 其他引擎",
    enginePillRec: "推荐使用",
    enginePillExp: "实验中",
    enginePillUnverified: "未验证支持",
    flowEnlargeHint: "截图较小？点击可放大查看",
    pricingTitle: "价格方案",
    pricingIntro: "GameLingo 仍在早期测试阶段。Pro 是给愿意支持开发、需要更高额度和自定义模型的用户准备的早期支持档。",
    priceFreeName: "免费版",
    priceFreeNum: "¥0",
    priceFreeSub: "适合体验与日常游玩",
    priceFreeF1: "可用：综合翻译包含 Bing、腾讯混元等（不定期调整）",
    priceFreeF2: "几乎不限量的使用",
    priceFreeF3: "支持：部分引擎的金手指功能",
    priceProName: "GameLingo Pro",
    priceProNum: "¥29.90 / 月",
    priceProSub: "早期支持档，随版本持续补全",
    priceProF1: "自定义在线模型 API Key（OpenAI 兼容）",
    priceProF2: "更高综合翻译额度与队列优先",
    priceProF3: "部分实验引擎 Pro Beta 金手指",
    priceProCta: "前往爱发电",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    footerFaq: "常见问题",
    feedbackLink: "问题反馈",
    feedbackTitle: "问题反馈",
    feedbackClose: "关闭",
    feedbackHint: "请按“在哪/做了什么/出现什么/期望什么”描述。建议附 1 张截图或短视频，定位会更快。",
    feedbackPlaceholder: "在这里输入问题描述…",
    feedbackFileHint: "附件限制：最多 2 个文件；单个不超过 8MB。超出会提示失败（建议先截图/压缩/剪短视频）。",
    feedbackSend: "发送",
    feedbackSending: "发送中…",
    feedbackSuccess: "已发送，感谢反馈！",
    feedbackEmpty: "请先填写问题描述。",
    feedbackTooManyFiles: "附件最多选择 {n} 个文件。",
    feedbackFileTooBig: "附件过大：{name}（{size}），单个上限 {max}。",
    feedbackFail: "发送失败：{msg}",
    feedbackCooldown: "发送过于频繁，请 {n}s 后再试。",
    feedbackSendCooldown: "发送（{n}s）",
    metaDescription:
      "GameLingo：游戏翻译 / RPG翻译工具。Hook + AI 沉浸式实时汉化，拖拽游戏即可翻译回写，原位覆盖显示。",
    footerCopy: "GameLingo © 2026"
  },
  en: {
    pageTitle: "GameLingo - Official Site",
    siteBrandText: "GameLingo",
    navDownload: "Download",
    heroBadge: "No localization? Still enjoy games worldwide.",
    heroTitle:
      "Auto-detect game text, translate with AI, and write back or overlay in place,<br />preserving variables, line breaks, tone, and game terminology.",
    heroLead: "RPG Maker MV/MZ are the primary focus; other engines are open as experimental support.",
    heroBtnDownload: "Download for Windows",
    heroBtnEngines: "Supported engines",
    flowStep1Title: "Step 1: Drop the game",
    flowStep1Desc:
      "Drag the game executable from File Explorer into GameLingo; the tool auto-detects and connects.",
    flowStep2Title: "Step 2: Start translation",
    flowStep2Desc: "Choose translation mode and target language, then click Start Translation.",
    flowTitle: "Workflow",
    flowIntro: "Get started in minutes: drop the game → patch/adapter → launch.",
    s1t: "Install",
    s1d: "Desktop-first.",
    s2t: "Drop game EXE",
    s2d: "Auto-detect engine.",
    s3t: "Adapter / patch",
    s3d: "One-click guided.",
    s4t: "Launch & play",
    s4d: "Works in text scenes.",
    engineMatrixTitle: "Supported game engines",
    engineMatrixIntro:
      "RPG Maker MV/MZ are the primary recommendation. Ren'Py, Unity, Tyrano, Kirikiri, SRPG Studio and others are open as experimental support.",
    engineHeadRpg: "[RPG] Role-playing engines",
    engineHeadVn: "[VN/ADV/AVG] Visual novel engines",
    engineHeadSlg: "[SLG] Strategy / simulation",
    engineHeadOther: "[OTHER] Other engines",
    enginePillRec: "Recommended",
    enginePillExp: "Experimental",
    enginePillUnverified: "Unverified",
    flowEnlargeHint: "Too small? Click to enlarge",
    pricingTitle: "Pricing",
    pricingIntro: "GameLingo is still in early beta. Pro is an early support tier for higher quota and custom online models.",
    priceFreeName: "Free",
    priceFreeNum: "¥0",
    priceFreeSub: "For daily play and testing",
    priceFreeF1: "Integrated translation: Bing, Tencent Hunyuan, etc. (may change)",
    priceFreeF2: "Nearly unlimited usage",
    priceFreeF3: "Cheats on select engines",
    priceProName: "GameLingo Pro",
    priceProNum: "¥29.90 / month",
    priceProSub: "Early support tier; features keep improving",
    priceProF1: "Custom online model API keys (OpenAI-compatible)",
    priceProF2: "Higher integrated-translation quota and queue priority",
    priceProF3: "Pro Beta cheats for selected experimental engines",
    priceProCta: "Support on Afdian",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
    footerFaq: "FAQ",
    feedbackLink: "Feedback",
    feedbackTitle: "Feedback",
    feedbackClose: "Close",
    feedbackHint:
      "Describe: where / what you did / what happened / what you expected. A screenshot or short video helps.",
    feedbackPlaceholder: "Describe your issue here…",
    feedbackFileHint: "Up to 2 files, 8MB each. Compress if upload fails.",
    feedbackSend: "Send",
    feedbackSending: "Sending…",
    feedbackSuccess: "Sent. Thank you!",
    feedbackEmpty: "Please describe the issue first.",
    feedbackTooManyFiles: "At most {n} attachments.",
    feedbackFileTooBig: "File too large: {name} ({size}), max {max}.",
    feedbackFail: "Send failed: {msg}",
    feedbackCooldown: "Too frequent. Try again in {n}s.",
    feedbackSendCooldown: "Send ({n}s)",
    metaDescription:
      "GameLingo: game translation / RPG tools. Hook + AI real-time in-game localization with overlay display.",
    footerCopy: "GameLingo © 2026"
  }
};

function getLang() {
  return window.localStorage.getItem("gamelingo_site_lang") === "en" ? "en" : "zh";
}

function getPageKey() {
  const fromBody = document.body?.dataset?.page;
  if (fromBody) return fromBody;
  const path = (window.location.pathname || "").split("/").pop() || "index.html";
  if (path === "" || path === "index.html") return "index";
  return path.replace(/\.html$/i, "");
}

function tpl(str, vars) {
  return String(str || "").replace(/\{(\w+)\}/g, (_, k) => String(vars?.[k] ?? ""));
}

function getEngineTipRoot(card) {
  const item = card.closest(".engine-stack-item");
  if (item) return item.querySelector(".engine-stack-item-detail");
  return card.querySelector(".tip");
}

function setEngineStackActive(wrap, item) {
  if (!wrap) return;
  wrap.querySelectorAll(".engine-stack-item").forEach((el) => {
    el.classList.toggle("stack-active", el === item);
  });
}

function initEngineStacks() {
  document.querySelectorAll(".engine-stack-wrap").forEach((wrap) => {
    wrap.querySelectorAll(".engine-stack-item").forEach((item) => {
      const card = item.querySelector(".engine-card[data-engine]");
      if (!card) return;
      const activate = () => setEngineStackActive(wrap, item);
      item.addEventListener("pointerenter", activate);
      card.addEventListener("focusin", activate);
    });
  });
}

function applyEngineI18n(safe) {
  const engines = window.GAMELINGO_CONTENT?.engines;
  if (!engines) return;
  document.querySelectorAll("#engineMatrix .engine-card[data-engine]").forEach((card) => {
    const key = card.dataset.engine;
    const pack = engines[key]?.[safe];
    if (!pack) return;
    const nameEl = card.querySelector(".engine-name");
    const name = nameEl?.textContent?.trim() || key;
    const subEl = card.querySelector(".engine-sub");
    const subPack = engines[key]?.sub;
    if (subEl && subPack) subEl.textContent = subPack[safe] || subPack.zh;

    const tipRoot = getEngineTipRoot(card);
    const titleEl = tipRoot?.querySelector(".tip-title");
    if (titleEl) {
      titleEl.innerHTML = `${name} <span class="muted">${pack.status}</span>`;
    }
    const list = tipRoot?.querySelector(".tip-list");
    if (list && pack.lines) {
      list.innerHTML = pack.lines.map((line) => `<li>${line}</li>`).join("");
    }
  });
}

const PAGE_I18N_IDS = {
  download: [
    "siteBrandText",
    "navHome",
    "h1",
    "lead",
    "winTitle",
    "winSub",
    "winPill",
    "winBtn",
    "winTip1",
    "winTip2",
    "androidTitle",
    "androidSub",
    "androidPill",
    "androidNoteTitle",
    "androidNote1",
    "androidNote2"
  ],
  faq: ["siteBrandText", "navHome", "h1", "lead", "q1", "a1", "q2", "a2", "q3", "a3", "q4", "a4", "q5", "a5"],
  privacy: [
    "siteBrandText",
    "navHome",
    "h1",
    "intro",
    "c1h",
    "c1l1",
    "c1l2",
    "c1l3",
    "c2h",
    "c2l1",
    "c2l2",
    "c2l3",
    "c3h",
    "c3l1",
    "c3l2",
    "c3l3",
    "note"
  ],
  terms: [
    "siteBrandText",
    "navHome",
    "h1",
    "intro",
    "c1h",
    "c1l1",
    "c1l2",
    "c2h",
    "c2l1",
    "c2l2",
    "c2l3",
    "c3h",
    "c3l1",
    "c3l2",
    "c4h",
    "c4l1",
    "c4l2",
    "note"
  ]
};

function applySubpageI18n(safe) {
  const page = getPageKey();
  if (page === "index") return;
  const pack = window.GAMELINGO_CONTENT?.pages?.[page]?.[safe];
  if (!pack) return;
  document.title = pack.pageTitle || document.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta && pack.metaDescription) meta.setAttribute("content", pack.metaDescription);

  const ids = PAGE_I18N_IDS[page] || [];
  for (const id of ids) setText(id, pack[id]);

  if (page === "download") {
    const metaEl = document.getElementById("winMetaBlock");
    if (metaEl && pack.winMeta) {
      const ver = document.getElementById("winVer")?.textContent || "";
      const date = document.getElementById("winDate")?.textContent || "";
      const file = document.getElementById("winFile")?.textContent || "";
      metaEl.innerHTML = `${pack.winMeta}<span id="winVer">${ver}</span><br />${pack.winMetaDate}<span id="winDate">${date}</span><br />${pack.winMetaFile}<span id="winFile">${file}</span>`;
    }
    const note = document.getElementById("androidNoteBody");
    if (note) {
      note.innerHTML = `<strong id="androidNoteTitle">${pack.androidNoteTitle}</strong><br />- <span id="androidNote1">${pack.androidNote1}</span><br />- <span id="androidNote2">${pack.androidNote2}</span>`;
    }
  }
}

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

const I18N_IDS = [
  "navDownload",
  "heroBadge",
  "heroTitle",
  "heroLead",
  "heroBtnDownload",
  "heroBtnEngines",
  "flowStepTitle",
  "flowStepDesc",
  "flowEnlargeHint",
  "flowTitle",
  "flowIntro",
  "s1t",
  "s1d",
  "s2t",
  "s2d",
  "s3t",
  "s3d",
  "s4t",
  "s4d",
  "engineMatrixTitle",
  "engineMatrixIntro",
  "engineHeadRpg",
  "engineHeadVn",
  "engineHeadSlg",
  "engineHeadOther",
  "pricingTitle",
  "pricingIntro",
  "priceFreeName",
  "priceFreeNum",
  "priceFreeSub",
  "priceFreeF1",
  "priceFreeF2",
  "priceFreeF3",
  "priceProName",
  "priceProNum",
  "priceProSub",
  "priceProF1",
  "priceProF2",
  "priceProF3",
  "priceProCta",
  "footerPrivacy",
  "footerTerms",
  "footerFaq",
  "feedbackLink",
  "feedbackTitle",
  "feedbackClose",
  "feedbackHint",
  "feedbackFileHint",
  "feedbackSend",
  "footerCopy"
];

const HERO_FLOW_STEPS = [
  { titleKey: "flowStep1Title", descKey: "flowStep1Desc" },
  { titleKey: "flowStep2Title", descKey: "flowStep2Desc" }
];

function applyLanguage(lang) {
  const safe = lang === "en" ? "en" : "zh";
  const dict = i18n[safe];
  document.documentElement.lang = safe === "en" ? "en" : "zh-CN";
  if (langSelect) langSelect.value = safe;

  const page = getPageKey();
  if (page === "index") {
    document.title = dict.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && dict.metaDescription) meta.setAttribute("content", dict.metaDescription);
    if (siteBrandText) siteBrandText.textContent = dict.siteBrandText;

    setText("heroTitle", dict.heroTitle, true);
    for (const id of I18N_IDS) {
      if (id === "heroTitle" || id === "flowStepTitle" || id === "flowStepDesc") continue;
      setText(id, dict[id]);
    }
    updateHeroFlowText(dict);

    const fbText = document.getElementById("feedbackText");
    if (fbText) fbText.placeholder = dict.feedbackPlaceholder;

    document.querySelectorAll("#engineMatrix .pill.rec").forEach((pill) => {
      pill.textContent = dict.enginePillRec;
    });
    document.querySelectorAll("#engineMatrix .pill.exp").forEach((pill) => {
      pill.textContent = dict.enginePillExp;
    });
    document.querySelectorAll("#engineMatrix .pill.unverified").forEach((pill) => {
      pill.textContent = dict.enginePillUnverified;
    });

    applyEngineI18n(safe);
  } else {
    const brand = document.getElementById("siteBrandText");
    if (brand) brand.textContent = window.GAMELINGO_CONTENT?.pages?.[page]?.[safe]?.siteBrandText || brand.textContent;
    applySubpageI18n(safe);
  }

  window.localStorage.setItem("gamelingo_site_lang", safe);
}

window.localStorage.setItem("gamelingo_site_logo_theme", "logo.svg");
applyLogoTheme("logo.svg");

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

let heroFlowIndex = 0;
let heroFlowTimer = null;

function updateHeroFlowText(dict) {
  const step = HERO_FLOW_STEPS[heroFlowIndex];
  if (!step || !dict) return;
  setText("flowStepTitle", dict[step.titleKey]);
  setText("flowStepDesc", dict[step.descKey]);
}

function setHeroFlowStep(index, dict) {
  const flow = document.getElementById("heroFlow");
  if (!flow) return;
  const max = HERO_FLOW_STEPS.length - 1;
  heroFlowIndex = Math.max(0, Math.min(max, Number(index) || 0));

  flow.querySelectorAll(".flow-node").forEach((node) => {
    const step = Number(node.dataset.step);
    const isActive = step === heroFlowIndex;
    const isDone = step < heroFlowIndex;
    node.classList.toggle("active", isActive);
    node.classList.toggle("done", isDone);
    node.setAttribute("aria-selected", isActive ? "true" : "false");
  });
  flow.querySelectorAll(".flow-seg").forEach((seg) => {
    const segIndex = Number(seg.dataset.seg);
    seg.classList.toggle("done", segIndex < heroFlowIndex);
  });
  flow.querySelectorAll(".flow-slide").forEach((slide) => {
    slide.classList.toggle("active", Number(slide.dataset.step) === heroFlowIndex);
  });

  const langDict = dict || i18n[getLang()];
  updateHeroFlowText(langDict);
}

function initHeroFlow() {
  const flow = document.getElementById("heroFlow");
  if (!flow) return;

  const cycleMs = 5200;
  const restartTimer = () => {
    if (heroFlowTimer) window.clearInterval(heroFlowTimer);
    heroFlowTimer = window.setInterval(() => {
      setHeroFlowStep((heroFlowIndex + 1) % HERO_FLOW_STEPS.length);
    }, cycleMs);
  };

  flow.querySelectorAll(".flow-node").forEach((node) => {
    node.addEventListener("click", () => {
      setHeroFlowStep(Number(node.dataset.step));
      restartTimer();
    });
  });

  setHeroFlowStep(0);
  restartTimer();
}

initHeroFlow();

function initFlowImageLightbox() {
  const lightbox = document.getElementById("imgLightbox");
  const lightboxImg = document.getElementById("imgLightboxImg");
  const lightboxClose = document.getElementById("imgLightboxClose");
  const flow = document.getElementById("heroFlow");
  if (!lightbox || !lightboxImg || !flow) return;

  const open = (src, alt) => {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("on");
    lightbox.setAttribute("aria-hidden", "false");
  };
  const close = () => {
    lightbox.classList.remove("on");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.removeAttribute("src");
  };

  flow.querySelectorAll(".flow-shot-single, .flow-shot-combo img").forEach((img) => {
    img.addEventListener("click", () => open(img.src, img.alt));
  });
  if (lightboxClose) lightboxClose.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("on")) close();
  });
}

initFlowImageLightbox();

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
  const dict = i18n[getLang()];
  feedbackSend.textContent = label || dict.feedbackSend;
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
      setSendEnabled(true);
      return;
    }
    const dict = i18n[getLang()];
    setSendEnabled(false, tpl(dict.feedbackSendCooldown, { n: left }));
  }, 250);
  const dict0 = i18n[getLang()];
  setSendEnabled(false, tpl(dict0.feedbackSendCooldown, { n: s }));
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
    const dictCh = i18n[getLang()];
    if (files.length > FEEDBACK_MAX_FILES) {
      setStatus(tpl(dictCh.feedbackTooManyFiles, { n: FEEDBACK_MAX_FILES }), "err");
    } else {
      setStatus("");
    }
  });
}

async function sendFeedback() {
  const dict = i18n[getLang()];
  const left = Math.ceil((feedbackCooldownUntil - Date.now()) / 1000);
  if (left > 0) {
    setStatus(tpl(dict.feedbackCooldown, { n: left }), "err");
    startCooldown(left);
    return;
  }
  const text = String(feedbackText?.value || "").trim();
  if (!text) {
    setStatus(dict.feedbackEmpty, "err");
    return;
  }
  const files = Array.from(feedbackFiles?.files || []);
  if (files.length > FEEDBACK_MAX_FILES) {
    setStatus(tpl(dict.feedbackTooManyFiles, { n: FEEDBACK_MAX_FILES }), "err");
    return;
  }
  for (const f of files) {
    if ((Number(f.size) || 0) > FEEDBACK_MAX_FILE_BYTES) {
      setStatus(
        tpl(dict.feedbackFileTooBig, {
          name: f.name,
          size: bytesHuman(f.size),
          max: bytesHuman(FEEDBACK_MAX_FILE_BYTES)
        }),
        "err"
      );
      return;
    }
  }
  setSendEnabled(false, dict.feedbackSending);
  setStatus(dict.feedbackSending);
  try {
    const fd = new FormData();
    fd.append("message", text);
    fd.append("page", String(window.location.href || ""));
    for (const f of files) fd.append("files", f, f.name);

    const res = await fetch(`/api/feedback`, { method: "POST", body: fd });
    const j = await res.json().catch(() => ({}));
    if (!res.ok || !j.ok) throw new Error(j.message || `HTTP ${res.status}`);
    setStatus(dict.feedbackSuccess, "ok");
    if (feedbackText) feedbackText.value = "";
    if (feedbackFiles) feedbackFiles.value = "";
    refreshSelectedFilesUi();
    startCooldown(60);
  } catch (e) {
    setSendEnabled(true);
    setStatus(tpl(dict.feedbackFail, { msg: e?.message || String(e) }), "err");
  }
}

if (feedbackSend) feedbackSend.addEventListener("click", () => void sendFeedback());

// Engine tooltip (desktop): float panel with small delay, no layout shift.
const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const enableFloatTip = !isCoarsePointer;

initEngineStacks();

// Mobile: tap engine cards to expand inline details
if (isCoarsePointer) {
  document.querySelectorAll(".engine-stack-wrap").forEach((wrap) => {
    const main = wrap.querySelector(".engine-stack-main");
    if (!main) return;
    main.addEventListener("click", (e) => {
      e.stopPropagation();
      const wasOpen = wrap.classList.contains("open");
      document.querySelectorAll(".engine-stack-wrap.open").forEach((w) => w.classList.remove("open"));
      if (!wasOpen) wrap.classList.add("open");
    });

    wrap.querySelectorAll(".engine-stack-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        wrap.classList.add("open");
        setEngineStackActive(wrap, item);
      });
    });
  });

  document.querySelectorAll(".engine-card").forEach((card) => {
    if (card.closest(".engine-stack-wrap")) return;
    card.addEventListener("click", () => {
      const wasOpen = card.classList.contains("open");
      document.querySelectorAll(".engine-card.open").forEach((other) => other.classList.remove("open"));
      if (!wasOpen) card.classList.add("open");
    });
  });
}

let floatTipEl = null;
let showTimer = 0;
let hideTimer = 0;
let lastCard = null;
let pointerX = 0;
let pointerY = 0;

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

function positionFloatTipAtPointer(x, y) {
  const el = ensureFloatTip();
  el.style.left = "0px";
  el.style.top = "0px";
  el.classList.add("on");

  const tipRect = el.getBoundingClientRect();
  const margin = 12;
  const offset = 18;
  let left = x + offset;
  let top = y + offset;

  if (left + tipRect.width > window.innerWidth - margin) {
    left = x - tipRect.width - offset;
  }
  if (top + tipRect.height > window.innerHeight - margin) {
    top = y - tipRect.height - offset;
  }

  left = clamp(left, margin, window.innerWidth - margin - tipRect.width);
  top = clamp(top, margin, window.innerHeight - margin - tipRect.height);

  el.style.left = `${Math.round(left)}px`;
  el.style.top = `${Math.round(top)}px`;
}

function showFloatTip(card, x, y) {
  if (!enableFloatTip) return;
  if (!card) return;
  if (!setFloatTipFromCard(card)) return;
  const px = Number.isFinite(x) ? x : pointerX;
  const py = Number.isFinite(y) ? y : pointerY;
  positionFloatTipAtPointer(px, py);
  lastCard = card;
}

function hideFloatTip() {
  if (!floatTipEl) return;
  floatTipEl.classList.remove("on");
  lastCard = null;
}

function scheduleShow(card, x, y) {
  if (!enableFloatTip) return;
  window.clearTimeout(hideTimer);
  window.clearTimeout(showTimer);
  const delay = prefersReducedMotion ? 0 : 90;
  showTimer = window.setTimeout(() => showFloatTip(card, x, y), delay);
}

function scheduleHide() {
  if (!enableFloatTip) return;
  window.clearTimeout(showTimer);
  window.clearTimeout(hideTimer);
  const delay = prefersReducedMotion ? 0 : 120;
  hideTimer = window.setTimeout(() => hideFloatTip(), delay);
}

if (enableFloatTip) {
  document.addEventListener(
    "pointermove",
    (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (lastCard) positionFloatTipAtPointer(pointerX, pointerY);
    },
    { passive: true }
  );

  document.querySelectorAll(".engine-card").forEach((card) => {
    if (card.closest(".engine-stack-wrap")) return;
    card.addEventListener("pointerenter", (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      scheduleShow(card);
    });
    card.addEventListener("pointermove", (e) => {
      pointerX = e.clientX;
      pointerY = e.clientY;
      if (lastCard === card) positionFloatTipAtPointer(pointerX, pointerY);
    });
    card.addEventListener("pointerleave", scheduleHide);
    card.addEventListener("focusin", (e) => scheduleShow(card, e.clientX, e.clientY));
    card.addEventListener("focusout", scheduleHide);
  });

  window.addEventListener("scroll", () => {
    if (lastCard) positionFloatTipAtPointer(pointerX, pointerY);
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (lastCard) positionFloatTipAtPointer(pointerX, pointerY);
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

applyLanguage(window.localStorage.getItem("gamelingo_site_lang") || "zh");

if (langSelect) {
  langSelect.addEventListener("change", () => {
    applyLanguage(langSelect.value);
    if (lastCard && floatTipEl?.classList.contains("on")) {
      setFloatTipFromCard(lastCard);
      positionFloatTipAtPointer(pointerX, pointerY);
    }
  });
}

