(() => {
  "use strict";

  const english = {
    skipToCatalog: "Skip to the glyph catalogue",
    brandName: "Oracle Bone Atlas",
    brandKicker: "甲骨万象",
    searchableEntries: "searchable entries",
    scholarlyForms: "scholarly form baseline",
    dataNotes: "About the data",
    introEyebrow: "",
    pageTitle: "Ancient signs, awakened",
    introNote:
      "Each card presents an oracle-bone headword that can be paired directly with a modern character. One modern character may have many ancient variants; this atlas begins with a representative form from an open font.",
    searchLabel: "Search by modern Chinese character or Unicode code point",
    randomEncounter: "Surprise me",
    filterAll: "All",
    filterBasic: "Unified",
    filterExtended: "Extensions",
    filterSpotlight: "Highlights",
    glyphUnit: "glyphs",
    emptyTitle: "No matching glyphs",
    emptyBody: "Try one modern Chinese character, a Unicode code point, or clear the filters.",
    viewAll: "View all",
    loadMore: "Load more",
    boundaryTitle: "“All” is not a fixed number",
    boundaryBody:
      "New finds, variant groupings, and readings continue to evolve. This atlas does not force modern equivalents onto undeciphered forms, and it counts headwords separately from glyph forms.",
    viewSources: "Method & sources",
    footerEdition: "Oracle Bone Atlas · Open research preview",
    footerLicense: "Glyph font used under the SIL Open Font License 1.1",
    modernComparison: "MODERN CHARACTER PAIRING",
    detailLead:
      "This card shows a representative font glyph directly mapped to the modern Unicode character. Oracle-bone writing was not standardized: direction, structure, and stroke treatment may vary within one headword.",
    modernCharacter: "Modern character",
    characterBlock: "Character block",
    mappingStatus: "Mapping status",
    directMapping: "Direct font mapping",
    copyCharacter: "Copy character",
    viewFontSource: "View font source ↗",
    sourcesEyebrow: "DATA SCOPE & PROVENANCE",
    sourcesTitle: "What does “all” mean in this atlas?",
    sourcesLead:
      "Oracle-bone records can be counted as headwords, variant glyphs, ligatures, or undeciphered forms, so no single total is permanent. This edition places only glyphs with a direct modern Unicode mapping in the main catalogue.",
    headwords: "Headwords",
    headwordsNote:
      "Current catalogue scope of Academia Sinica’s Xiaoxuetang Oracle Bone Script database.",
    forms: "Glyph forms",
    formsNote: "One headword may include multiple attested forms.",
    hustClasses: "HUST-OBC classes",
    hustNote:
      "Deciphered and undeciphered classes respectively; undeciphered classes may still include duplicates.",
    siteMappings: "Searchable mappings",
    siteMappingsNote:
      "Extracted from the open font’s CJK Unicode mappings; private-use glyphs without modern code points are excluded.",
    xiaoxueTitle: "Xiaoxuetang Oracle Bone Script",
    xiaoxueNote: "Academia Sinica · headword and glyph-form baseline",
    hustTitle: "HUST-OBC",
    hustSourceNote: "Scientific Data · open deciphered and undeciphered dataset",
    fontTitle: "Oracular Typeface",
    fontNote: "Peichao Qin · open font under SIL OFL 1.1",
    sourceFootnote:
      "Scholarly note: a modern-character pairing in a font or dataset is a retrieval aid; it does not imply complete academic consensus on meaning, usage, or decipherment.",
  };

  const englishAria = {
    brandHomeLabel: "Oracle Bone Atlas home",
    collectionOverview: "Collection overview",
    switchLanguage: "Switch to Chinese",
    dataNotesButton: "About the data",
    searchAndFilter: "Search and filters",
    glyphRange: "Glyph range",
    dataBoundaryLabel: "Data scope",
    closeDetails: "Close glyph details",
    closeDataNotes: "Close data notes",
  };

  const englishPlaceholders = {
    searchPlaceholder: "Search a character, e.g. 日, 馬, 雨",
  };

  const dynamic = {
    zh: {
      documentTitle: "甲骨万象｜甲骨文字形数字图鉴",
      documentDescription: "甲骨万象：可检索、可溯源的甲骨文字形数字图鉴，逐字对照现代汉字。",
      dataLoadError: "字形数据加载失败，请刷新页面。",
      boneMode: "骨白模式",
      rubbingMode: "拓片模式",
      sortDefault: "按熟悉程度与 Unicode 编码排列",
      sortSpotlight: "从熟悉的字开始认识甲骨文",
      searchResults: "“{query}” 的检索结果",
      remaining: "余 {count}",
      viewGlyph: "查看现代字 {char} 的甲骨文字形",
      modernCard: "现代字 · {char}",
      copied: "已复制「{char}」",
      clipboardFallback: "现代字：{char}",
    },
    en: {
      documentTitle: "Oracle Bone Atlas | A Digital Catalogue",
      documentDescription:
        "A searchable, source-aware digital atlas of oracle-bone glyphs paired with their modern Chinese characters.",
      dataLoadError: "Glyph data could not be loaded. Please refresh the page.",
      boneMode: "Bone mode",
      rubbingMode: "Rubbing mode",
      sortDefault: "Ordered by familiarity, then Unicode code point",
      sortSpotlight: "Begin with familiar characters",
      searchResults: "Results for “{query}”",
      remaining: "{count} left",
      viewGlyph: "View the oracle-bone form paired with {char}",
      modernCard: "Modern · {char}",
      copied: "Copied “{char}”",
      clipboardFallback: "Modern character: {char}",
    },
  };

  const blockNames = {
    zh: {
      "基本区": "基本区",
      "扩展 A": "扩展 A",
      "扩展 B": "扩展 B",
      "扩展 C": "扩展 C",
      "扩展 E": "扩展 E",
      "扩展 F": "扩展 F",
      "扩展 G": "扩展 G",
      "扩展 I": "扩展 I",
    },
    en: {
      "基本区": "Unified",
      "扩展 A": "Extension A",
      "扩展 B": "Extension B",
      "扩展 C": "Extension C",
      "扩展 E": "Extension E",
      "扩展 F": "Extension F",
      "扩展 G": "Extension G",
      "扩展 I": "Extension I",
    },
  };

  function readPreference(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  function savePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // The atlas remains fully usable when storage is unavailable.
    }
  }

  function interpolate(template, values) {
    return Object.entries(values || {}).reduce((text, pair) => {
      return text.split("{" + pair[0] + "}").join(String(pair[1]));
    }, template);
  }

  const savedLanguage = readPreference("oracle-atlas-language");
  const browserLanguage = (navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  const initialLanguage = savedLanguage === "zh" || savedLanguage === "en" ? savedLanguage : browserLanguage;
  const data = window.ORACLE_DATA;

  if (!data || !Array.isArray(data.entries)) {
    document.documentElement.lang = initialLanguage === "zh" ? "zh-CN" : "en";
    document.body.innerHTML =
      "<p style='padding:2rem'>" + dynamic[initialLanguage].dataLoadError + "</p>";
    return;
  }

  const chinese = {};
  const chineseAria = {};
  const chinesePlaceholders = {};

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    chinese[node.dataset.i18n] = node.textContent.trim();
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    chineseAria[node.dataset.i18nAriaLabel] = node.getAttribute("aria-label") || "";
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    chinesePlaceholders[node.dataset.i18nPlaceholder] = node.getAttribute("placeholder") || "";
  });

  const meta = data.meta;
  const entries = data.entries;
  const pageSize = 72;
  const state = {
    filter: "all",
    query: "",
    visible: pageSize,
    current: null,
    rubbing: readPreference("oracle-atlas-mode") === "rubbing",
    language: initialLanguage,
  };

  const elements = {
    grid: document.getElementById("glyphGrid"),
    search: document.getElementById("searchInput"),
    resultCount: document.getElementById("resultCount"),
    resultContext: document.getElementById("resultContext"),
    loadMore: document.getElementById("loadMore"),
    remaining: document.getElementById("remainingCount"),
    empty: document.getElementById("emptyState"),
    detailDialog: document.getElementById("detailDialog"),
    sourceDialog: document.getElementById("sourceDialog"),
    modeToggle: document.getElementById("modeToggle"),
    modeLabel: document.getElementById("modeLabel"),
    languageToggle: document.getElementById("languageToggle"),
    toast: document.getElementById("toast"),
  };

  function t(key, values) {
    return interpolate(dynamic[state.language][key] || key, values);
  }

  function formatNumber(value) {
    return Number(value).toLocaleString(state.language === "zh" ? "zh-CN" : "en-US");
  }

  function getBlockName(block, language) {
    const selectedLanguage = language || state.language;
    return blockNames[selectedLanguage][block] || block;
  }

  function hydrateMeta() {
    document.querySelectorAll('[data-meta="mappedEntries"]').forEach((node) => {
      node.textContent = formatNumber(meta.mappedEntries);
    });
    document.querySelector('[data-count="all"]').textContent = formatNumber(meta.mappedEntries);
    document.querySelector('[data-count="basic"]').textContent = formatNumber(meta.basicEntries);
    document.querySelector('[data-count="extended"]').textContent = formatNumber(meta.extendedEntries);
    document.querySelector('[data-count="spotlight"]').textContent = formatNumber(meta.spotlightEntries);
  }

  function normalizeQuery(value) {
    return value.trim().replace(/^u\+/i, "U+").toUpperCase();
  }

  function getFilteredEntries() {
    const rawQuery = state.query.trim();
    const normalized = normalizeQuery(state.query);
    const lowerQuery = rawQuery.toLocaleLowerCase();
    const queryCharacters = Array.from(rawQuery).filter((character) => {
      return /[\u3400-\u9fff\u{20000}-\u{323af}]/u.test(character);
    });

    return entries.filter((entry) => {
      const inFilter =
        state.filter === "all" ||
        (state.filter === "spotlight" ? entry.spotlight : entry.group === state.filter);
      if (!inFilter) return false;
      if (!normalized) return true;

      return (
        entry.char === rawQuery ||
        entry.code.includes(normalized) ||
        entry.block.includes(rawQuery) ||
        getBlockName(entry.block, "en").toLocaleLowerCase().includes(lowerQuery) ||
        (queryCharacters.length > 1 && queryCharacters.includes(entry.char))
      );
    });
  }

  function cardTemplate(entry, index) {
    const delay = Math.min(index, 16) * 24;
    return [
      '<button class="glyph-card" type="button" data-entry-code="',
      entry.code,
      '" aria-label="',
      t("viewGlyph", { char: entry.char }),
      '" style="--delay:',
      delay,
      'ms">',
      '<span class="card-index">',
      String(index + 1).padStart(4, "0"),
      "</span>",
      '<span class="card-block">',
      getBlockName(entry.block),
      "</span>",
      '<span class="card-glyph oracle-glyph" aria-hidden="true">',
      entry.char,
      "</span>",
      '<span class="card-footer"><span class="modern-char">',
      entry.char,
      '</span><span class="modern-copy"><b>',
      t("modernCard", { char: entry.char }),
      "</b><small>",
      entry.code,
      '</small></span><span class="card-arrow" aria-hidden="true">→</span></span></button>',
    ].join("");
  }

  function render() {
    const filtered = getFilteredEntries();
    const visible = filtered.slice(0, state.visible);

    elements.resultCount.textContent = formatNumber(filtered.length);
    elements.grid.innerHTML = visible.map(cardTemplate).join("");
    elements.grid.hidden = filtered.length === 0;
    elements.empty.hidden = filtered.length !== 0;

    const remaining = Math.max(filtered.length - visible.length, 0);
    elements.loadMore.hidden = remaining === 0;
    elements.remaining.textContent = remaining
      ? t("remaining", { count: formatNumber(remaining) })
      : "";

    if (state.query.trim()) {
      elements.resultContext.textContent = t("searchResults", { query: state.query.trim() });
    } else if (state.filter === "spotlight") {
      elements.resultContext.textContent = t("sortSpotlight");
    } else {
      elements.resultContext.textContent = t("sortDefault");
    }
  }

  function setFilter(filter) {
    state.filter = filter;
    state.visible = pageSize;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    render();
  }

  function populateDetail(entry) {
    document.getElementById("detailGlyph").textContent = entry.char;
    document.getElementById("detailCoordinate").textContent = entry.code;
    document.getElementById("detailTitle").textContent = entry.char;
    document.getElementById("detailModern").textContent = entry.char;
    document.getElementById("detailCode").textContent = entry.code;
    document.getElementById("detailBlock").textContent = "CJK " + getBlockName(entry.block);
  }

  function openDetail(entry) {
    if (!entry) return;
    state.current = entry;
    populateDetail(entry);
    elements.detailDialog.showModal();
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => {
      elements.toast.classList.remove("is-visible");
    }, 1800);
  }

  function applyMode() {
    document.body.classList.toggle("rubbing", state.rubbing);
    elements.modeToggle.setAttribute("aria-pressed", String(state.rubbing));
    elements.modeLabel.textContent = state.rubbing ? t("rubbingMode") : t("boneMode");
  }

  function applyLanguage() {
    const isChinese = state.language === "zh";
    document.documentElement.lang = isChinese ? "zh-CN" : "en";
    document.body.dataset.language = state.language;
    document.title = t("documentTitle");
    document.querySelector('meta[name="description"]').setAttribute("content", t("documentDescription"));

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      node.textContent = isChinese ? chinese[key] : english[key] || chinese[key];
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      const key = node.dataset.i18nAriaLabel;
      node.setAttribute("aria-label", isChinese ? chineseAria[key] : englishAria[key] || chineseAria[key]);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.dataset.i18nPlaceholder;
      node.setAttribute(
        "placeholder",
        isChinese ? chinesePlaceholders[key] : englishPlaceholders[key] || chinesePlaceholders[key],
      );
    });
    document.querySelectorAll("[data-language-option]").forEach((node) => {
      const active = node.dataset.languageOption === state.language;
      node.classList.toggle("is-active", active);
      if (active) {
        node.setAttribute("aria-current", "true");
      } else {
        node.removeAttribute("aria-current");
      }
    });

    hydrateMeta();
    applyMode();
    if (state.current) populateDetail(state.current);
    render();
  }

  elements.search.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.visible = pageSize;
    render();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  elements.grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-entry-code]");
    if (!card) return;
    openDetail(entries.find((entry) => entry.code === card.dataset.entryCode));
  });

  elements.loadMore.addEventListener("click", () => {
    state.visible += pageSize;
    render();
  });

  document.getElementById("resetSearch").addEventListener("click", () => {
    state.query = "";
    elements.search.value = "";
    setFilter("all");
    elements.search.focus();
  });

  document.getElementById("randomButton").addEventListener("click", () => {
    const pool = getFilteredEntries();
    if (pool.length) openDetail(pool[Math.floor(Math.random() * pool.length)]);
  });

  elements.modeToggle.addEventListener("click", () => {
    state.rubbing = !state.rubbing;
    savePreference("oracle-atlas-mode", state.rubbing ? "rubbing" : "bone");
    applyMode();
  });

  elements.languageToggle.addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    savePreference("oracle-atlas-language", state.language);
    applyLanguage();
  });

  document.getElementById("copyCharacter").addEventListener("click", async () => {
    if (!state.current) return;
    try {
      await navigator.clipboard.writeText(state.current.char);
      showToast(t("copied", { char: state.current.char }));
    } catch {
      showToast(t("clipboardFallback", { char: state.current.char }));
    }
  });

  document.getElementById("openAbout").addEventListener("click", () => {
    elements.sourceDialog.showModal();
  });
  document.getElementById("openSources").addEventListener("click", () => {
    elements.sourceDialog.showModal();
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog").close());
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "/" &&
      !event.altKey &&
      !event.ctrlKey &&
      !event.metaKey &&
      document.activeElement !== elements.search
    ) {
      event.preventDefault();
      elements.search.focus();
    }
  });

  applyLanguage();
})();
