<template>
  <q-layout view="lHh Lpr lFf" class="drafting-layout">
    <q-page-container>
      <q-page class="drafting-page">
        <header class="home-header">
          <div class="home-header-inner content-width">
            <div class="brand-lockup home-brand-lockup">
              <span class="brand-mark">UNESCAP</span>
              <span class="brand-divider"></span>
              <span class="brand-product"
                ><strong>Digital Policy Drafting Platform</strong
                ><small>Based on the AP-MDEA framework</small></span
              >
            </div>
            <nav class="home-nav" aria-label="Main navigation">
              <button
                class="home-nav-item home-nav-item--active"
                type="button"
                @click="router.push('/home')"
              >
                <q-icon name="home" size="21px" /><span>Home</span>
              </button>
              <button
                class="home-nav-item"
                type="button"
                @click="
                  notify('My Agreements is ready for the next mockup phase.')
                "
              >
                <q-icon name="description" size="21px" /><span
                  >My Agreements</span
                >
              </button>
              <button
                class="home-nav-item"
                type="button"
                @click="router.push('/home')"
              >
                <q-icon name="library_books" size="21px" /><span
                  >Templates</span
                >
              </button>
              <button
                class="home-nav-item"
                type="button"
                @click="notify('Resources is ready for the next mockup phase.')"
              >
                <q-icon name="local_shipping" size="21px" /><span
                  >Resources</span
                >
              </button>
            </nav>
            <div class="home-actions">
              <button
                class="home-action-button"
                type="button"
                @click="
                  notify('Help center is available in the production flow.')
                "
              >
                <q-icon name="help_outline" size="21px" /><span>Help</span>
              </button>
              <span class="home-action-divider"></span>
              <button
                class="user-menu"
                type="button"
                @click="notify('User menu is ready for the next mockup phase.')"
              >
                <span class="user-avatar user-avatar--large">JD</span
                ><span class="user-details"
                  ><strong>Jane Doe</strong
                  ><small>Policy Unit, Example Country</small></span
                ><q-icon name="keyboard_arrow_down" size="18px" />
              </button>
            </div>
          </div>
        </header>

        <main class="drafting-main content-width">
          <div class="drafting-breadcrumb">
            <button type="button" @click="router.push('/home')">Home</button
            ><span>/</span
            ><button type="button" @click="router.push('/home')">
              My Agreements</button
            ><span>/</span
            ><button
              type="button"
              @click="router.push('/templates/digital-economy-agreement')"
            >
              {{ agreementTitle }}</button
            ><span>/</span><span>Drafting Workspace</span>
          </div>

          <div class="drafting-grid">
            <aside class="outline-sidebar" aria-label="Agreement outline">
              <h2>Agreement outline</h2>
              <button
                class="outline-module"
                type="button"
                @click="notify('Module 2 is currently selected.')"
              >
                <span
                  ><strong>Module 2</strong><small>Data Governance</small></span
                ><q-icon name="chevron_right" size="22px" />
              </button>
            </aside>

            <section class="drafting-center">
              <div class="drafting-title-row">
                <div>
                  <h1>Draft agreement</h1>
                  <div class="drafting-subtitle">
                    Module 2 — Data Governance
                  </div>
                </div>
                <button
                  class="reset-drafting-button"
                  type="button"
                  @click="resetConfirmOpen = true"
                >
                  <q-icon name="restart_alt" size="18px" />Reset draft
                </button>
              </div>

              <section class="module-status-panel" :class="{ 'module-status-panel--complete': moduleCompleted }" aria-labelledby="module-status-title">
                <div class="module-status-copy">
                  <div class="module-status-title-row"><strong id="module-status-title">Module 2 - Data Governance</strong><span v-if="moduleCompleted" class="module-completed-badge"><q-icon name="check_circle" size="18px" />Module completed</span></div>
                  <span>{{ completedArticlesCount }} of 5 articles completed</span>
                  <div class="module-progress-row"><div class="module-progress-track"><span :style="{ width: `${moduleProgressPercent}%` }"></span></div><strong>{{ moduleProgressPercent }}%</strong></div>
                </div>
                <div class="module-export-actions"><button class="module-export-button module-export-button--primary" type="button" :disabled="!canExport" @click="downloadWord"><q-icon name="description" size="19px" />Download Word</button><button class="module-export-button" type="button" :disabled="!canExport" @click="downloadPdf"><q-icon name="picture_as_pdf" size="19px" />Download PDF</button></div>
              </section>

              <section class="draft-validation-panel" :class="{ 'draft-validation-panel--ready': validationIssues.length === 0 }" aria-labelledby="validation-title">
                <div class="draft-validation-heading"><div><h2 id="validation-title">Draft validation</h2><p v-if="validationIssues.length === 0"><q-icon name="check_circle" size="18px" />Ready to export</p><p v-else><q-icon name="warning" size="18px" />Review required</p></div><span v-if="validationIssues.length === 0">No unresolved drafting items found.</span><span v-else>{{ validationIssues.length }} unresolved drafting item{{ validationIssues.length === 1 ? '' : 's' }}</span></div>
                <div v-if="validationIssues.length" class="draft-validation-issues"><button v-for="issue in validationIssues" :key="issue.key" type="button" class="draft-validation-issue" @click="startArticle(issue.article)"><strong>Article {{ issue.article.number }}</strong><span>{{ issue.message }}</span><q-icon name="arrow_forward" size="17px" /></button></div>
              </section>

              <section class="articles-card" aria-labelledby="articles-title">
                <div class="articles-heading">
                  <h2 id="articles-title">Articles in this module</h2>
                </div>
                <div class="article-list">
                  <article
                    v-for="article in articles"
                    :key="article.number"
                    class="draft-article"
                    :class="{
                      'draft-article--locked': !isArticleUnlocked(article),
                      'draft-article--completed': isArticleCompleted(article),
                    }"
                  >
                    <div
                      class="drafting-icon"
                      :class="
                        isArticleUnlocked(article)
                          ? 'drafting-icon--blue'
                          : 'drafting-icon--locked'
                      "
                    >
                      <q-icon
                        :name="
                          isArticleUnlocked(article) ? 'description' : 'lock'
                        "
                        size="27px"
                      />
                    </div>
                    <div class="draft-article-copy">
                      <h3>
                        Article {{ article.number }} — {{ article.title }}
                      </h3>
                      <p>{{ article.description }}</p>
                      <span
                        v-if="isArticleCompleted(article)"
                        class="draft-article-status draft-article-status--complete"
                        ><q-icon name="check_circle" size="16px" />Completed</span
                      ><span
                        v-else-if="!isArticleUnlocked(article)"
                        class="draft-article-status"
                        >Locked — complete Article
                        {{ prerequisiteArticle(article).number }} first</span
                      >
                      <div v-if="isArticleCompleted(article)" class="draft-article-selection"><strong>{{ articleOptionSummary(article) }}</strong><span v-for="title in articleOptionTitles(article)" :key="title">{{ title }}</span><small v-if="articleLastUpdated(article)">Last updated {{ formatUpdatedAt(articleLastUpdated(article)) }}</small></div>
                    </div>
                    <button
                      class="start-article-button"
                      type="button"
                      :disabled="!isArticleUnlocked(article)"
                      @click="startArticle(article)"
                    >
                      {{
                        isArticleCompleted(article)
                          ? "Review article"
                          : "Start article"
                      }}
                      <q-icon name="arrow_forward" size="21px" />
                    </button>
                  </article>
                </div>
              </section>
            </section>

            <aside class="drafting-rail">
              <section
                class="drafting-side-card article-preview-card article-preview-card--dynamic"
              >
                <div class="side-card-heading article-preview-heading">
                  <div class="drafting-icon drafting-icon--blue">
                    <q-icon name="description" size="28px" />
                  </div>
                  <h2>Draft preview</h2>
                  <button
                    class="preview-expand-button"
                    type="button"
                    @click="openPreviewDialog"
                  >
                    <q-icon name="open_in_full" size="16px" />View larger
                  </button>
                </div>
                <div class="article-preview-title">
                  <strong>{{ agreementTitle }}</strong>
                  <p>Draft – Module 2: Data Governance</p>
                </div>
                <template
                  v-for="article in previewArticles"
                  :key="article.number"
                  ><div
                    v-if="article.completed"
                    class="preview-article-current"
                  >
                    <span
                      >Draft text (based on Option
                      {{ article.optionCode }})</span
                    >
                    <pre class="preview-legal-text">{{
                      article.legalText
                    }}</pre>
                  </div>
                  <div v-else class="preview-article-complete">
                    <strong
                      >Article {{ article.number }} —
                      {{ article.title }}</strong
                    ><span>[To be completed]</span>
                  </div></template
                >
              </section>
            </aside>
          </div>
        </main>

        <footer class="dashboard-footer">
          <div class="dashboard-footer-inner content-width">
            <span
              >&copy; 2026 United Nations Economic and Social Commission for
              Asia and the Pacific (UNESCAP). All rights reserved.</span
            >
            <nav aria-label="Footer links">
              <button type="button" @click="notify('Privacy Policy selected.')">
                Privacy Policy</button
              ><i></i
              ><button type="button" @click="notify('Terms of Use selected.')">
                Terms of Use</button
              ><i></i
              ><button type="button" @click="notify('Contact selected.')">
                Contact
              </button>
            </nav>
          </div>
        </footer>
        <q-dialog v-model="previewDialogOpen">
          <q-card class="preview-expand-dialog">
            <q-card-section class="preview-expand-heading"
              ><div>
                <div class="article-kicker">Draft preview</div>
                <h2>{{ agreementTitle }}</h2>
                <p>Draft – Module 2: Data Governance</p>
              </div>
              <q-btn
                flat
                round
                dense
                icon="close"
                aria-label="Close expanded preview"
                @click="previewDialogOpen = false"
            /></q-card-section>
            <q-card-section class="preview-expand-body"
              ><template
                v-for="article in previewArticles"
                :key="`expanded-${article.number}`"
                ><div v-if="article.completed" class="preview-expand-current">
                  <span
                    >Draft text (based on Option {{ article.optionCode }})</span
                  >
                  <pre class="preview-dialog-legal-text">{{
                    article.legalText
                  }}</pre>
                </div>
                <div v-else class="preview-expand-complete">
                  <strong
                    >Article {{ article.number }} — {{ article.title }}</strong
                  ><span>[To be completed]</span>
                </div></template
              ></q-card-section
            >
          </q-card>
        </q-dialog>
        <q-dialog v-model="resetConfirmOpen">
          <q-card class="reset-confirm-dialog">
            <q-card-section class="reset-confirm-heading">
              <div class="reset-confirm-icon">
                <q-icon name="restart_alt" size="27px" />
              </div>
              <div>
                <div class="article-kicker">Module 2 · Data Governance</div>
                <h2>Reset Module 2 draft?</h2>
                <p>Your Agreement title and module selection will be kept.</p>
              </div>
            </q-card-section>
            <q-card-section class="reset-confirm-body">
              <p>
                This will clear your Article 2.1–2.5 progress, options, and
                all Article selections and generated draft text for this module.
              </p>
            </q-card-section>
            <q-card-actions class="reset-confirm-actions">
              <button
                class="reset-cancel-button"
                type="button"
                @click="resetConfirmOpen = false"
              >
                Cancel
              </button>
              <button
                class="reset-confirm-button"
                type="button"
                @click="resetDrafting"
              >
                Reset draft
              </button>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import { article2_1 } from "../data/article2_1";
import { article2_2 } from "../data/article2_2";
import { article2_3 } from "../data/article2_3";
import { article2_4 } from "../data/article2_4";
import { article2_5 } from "../data/article2_5";

const $q = useQuasar();
const router = useRouter();
window.__workspaceSetup = "started";
const agreementTitle = ref(
  localStorage.getItem("agreementTitle") || "Untitled agreement",
);
const articles = [
  {
    number: "2.1",
    title: "Definitions",
    description: "Define key terms used in this module.",
  },
  {
    number: "2.2",
    title: "Cross-Border Transfer of Information by Electronic Means",
    description: "Establish provisions on cross-border data flows.",
  },
  {
    number: "2.3",
    title: "Location of Computing Facilities",
    description:
      "Address the location of data processing and computing facilities.",
  },
  {
    number: "2.4",
    title: "Financial Data",
    description: "Set out provisions related to financial data.",
  },
  {
    number: "2.5",
    title: "Cooperation and Review on Data Governance",
    description: "Establish mechanisms for cooperation and periodic review.",
  },
];
const completionState = ref(
  Object.fromEntries(
    articles.map((article) => [
      article.number,
      localStorage.getItem(`article-${article.number}-completed`) === "true",
    ]),
  ),
);
const updatedAtState = ref(loadUpdatedAtState());
const article21Completed = computed(() => completionState.value["2.1"]);
const article21OptionCode = ref(
  localStorage.getItem("article-2.1-option") || "",
);
const article21SelectedOption = computed(() =>
  article2_1.options.find(
    (option) => option.code === article21OptionCode.value,
  ),
);
const article21References = ref(loadArticle21References());
const article21PreviewLegalText = computed(() => {
  const sourceText = article21SelectedOption.value?.legalText || "";
  if (article21OptionCode.value !== "A") return sourceText;
  let referenceIndex = 0;
  return sourceText.replace(/\n\[Module 0, Article 0\.3[^\]]*\]/g, () => {
    const reference = article21References.value[referenceIndex++];
    return ` ${resolveArticle21Reference(reference) || "[Reference required]"}`;
  });
});
const article22OptionCode = ref(
  localStorage.getItem("article-2.2-option") || "",
);
const article22SelectedOption = computed(() =>
  article2_2.options.find(
    (option) => option.code === article22OptionCode.value,
  ),
);
const article22ReferencesByOption = ref(loadArticle22References());
const article22PreviewLegalText = computed(() => {
  const sourceText = article22SelectedOption.value?.legalText || "";
  const references = article22ReferencesByOption.value[article22OptionCode.value] || [];
  let referenceIndex = 0;
  return replaceBracketedSegments(sourceText, (bracketText) => {
    const reference = references[referenceIndex++];
    return resolveArticle22Reference(reference) || "[Reference required]";
  });
});
const article23OptionCode = ref(
  localStorage.getItem("article-2.3-option") || "",
);
const article23SelectedOption = computed(() =>
  article2_3.options.find(
    (option) => option.code === article23OptionCode.value,
  ),
);
const article23ReferencesByOption = ref(loadArticle23References());
const article23PreviewLegalText = computed(() => {
  const sourceText = article23SelectedOption.value?.legalText || "";
  const references = article23ReferencesByOption.value[article23OptionCode.value] || [];
  let referenceIndex = 0;
  return replaceBracketedSegments(sourceText, (bracketText) => {
    const reference = references[referenceIndex++];
    return resolveArticle23Reference(reference) || "[Reference required]";
  });
});
const article24OptionCode = ref(
  localStorage.getItem("article-2.4-option") || "",
);
const article24SelectedOption = computed(() =>
  article2_4.options.find(
    (option) => option.code === article24OptionCode.value,
  ),
);
const article24ReferencesByOption = ref(loadArticle24References());
const article24PreviewLegalText = computed(() => {
  const sourceText = article24SelectedOption.value?.legalText || "";
  const references = article24ReferencesByOption.value[article24OptionCode.value] || [];
  let referenceIndex = 0;
  return replaceBracketedSegments(sourceText, (bracketText) => {
    const reference = references[referenceIndex++];
    return resolveArticle24Reference(reference) || "[Reference required]";
  });
});
const article25OptionCodes = ref(loadArticle25Options());
const article25ReferencesByOption = ref(loadArticle25References());
const article25PreviewLegalText = computed(() => {
  if (!article25OptionCodes.value.length) return "";
  return article25OptionCodes.value
    .map((code) => {
      const option = article2_5.options.find((item) => item.code === code);
      const references = article25ReferencesByOption.value[code] || [];
      let referenceIndex = 0;
      return replaceBracketedSegments(option?.legalText || "", (bracketText) => {
        const reference = references[referenceIndex++];
        return resolveArticle25Reference(reference) || "[Reference required]";
      });
    })
    .join("\n\n");
});
const previewDialogOpen = ref(false);
const resetConfirmOpen = ref(false);
const previewArticles = computed(() =>
  articles.map((article) => ({
    ...article,
    completed: article.number === "2.1"
      ? article21Completed.value
      : article.number === "2.2"
        ? completionState.value["2.2"]
        : article.number === "2.3"
          ? completionState.value["2.3"]
        : article.number === "2.4"
          ? completionState.value["2.4"]
        : article.number === "2.5"
          ? completionState.value["2.5"]
        : false,
    optionCode: article.number === "2.1"
      ? article21OptionCode.value
      : article.number === "2.2"
        ? article22OptionCode.value
        : article.number === "2.3"
          ? article23OptionCode.value
        : article.number === "2.4"
          ? article24OptionCode.value
        : article.number === "2.5"
          ? article25OptionCodes.value.join(", ")
        : "",
    definitions: article.number === "2.1" ? article2_1.commonDefinitions.slice(1) : [],
    legalText: article.number === "2.1"
      ? article21PreviewLegalText.value
      : article.number === "2.2"
        ? article22PreviewLegalText.value
        : article.number === "2.3"
          ? article23PreviewLegalText.value
        : article.number === "2.4"
          ? article24PreviewLegalText.value
        : article.number === "2.5"
          ? article25PreviewLegalText.value
        : "",
  })),
);
const completedArticlesCount = computed(
  () => previewArticles.value.filter((article) => article.completed).length,
);
const moduleProgressPercent = computed(() =>
  Math.round((completedArticlesCount.value / articles.length) * 100),
);
const validationIssues = computed(() => {
  const issues = [];
  previewArticles.value.forEach((article) => {
    if (!article.completed || !article.optionCode) {
      issues.push({
        key: `${article.number}-selection`,
        article,
        message: "A required article selection is missing.",
      });
      return;
    }
    if (/\[[^\]]*\]/.test(article.legalText || "")) {
      issues.push({
        key: `${article.number}-placeholder`,
        article,
        message: "One or more drafting references still need to be resolved.",
      });
    }
    if (article.number === "2.5" && article.optionCode.includes("A") && article.optionCode.includes("F")) {
      issues.push({
        key: "2.5-incompatible-options",
        article,
        message: "Option A and Option F cannot be selected together.",
      });
    }
  });
  return issues;
});
const moduleCompleted = computed(() => completedArticlesCount.value === articles.length);
const canExport = computed(() => moduleCompleted.value && validationIssues.value.length === 0);

function isArticleCompleted(article) {
  return completionState.value[article.number] === true;
}
function isArticleUnlocked(article) {
  const articleIndex = articles.findIndex(
    (item) => item.number === article.number,
  );
  return articleIndex === 0 || isArticleCompleted(articles[articleIndex - 1]);
}
function prerequisiteArticle(article) {
  const articleIndex = articles.findIndex(
    (item) => item.number === article.number,
  );
  return articles[Math.max(0, articleIndex - 1)];
}
function openPreviewDialog() {
  previewDialogOpen.value = true;
}
function articleOptionSummary(article) {
  const previewArticle = previewArticles.value.find((item) => item.number === article.number);
  if (!previewArticle?.optionCode) return "Selection required";
  if (article.number === "2.5") {
    const codes = previewArticle.optionCode.split(", ").filter(Boolean);
    return codes.length === 1
      ? `Option ${codes[0]}`
      : `Options ${codes.join(" + ")}`;
  }
  return `Option ${previewArticle.optionCode}`;
}
function articleOptionTitles(article) {
  const previewArticle = previewArticles.value.find((item) => item.number === article.number);
  if (!previewArticle?.optionCode) return [];
  const codes = article.number === "2.5"
    ? previewArticle.optionCode.split(", ").filter(Boolean)
    : [previewArticle.optionCode];
  const optionData = article.number === "2.1"
    ? article2_1.options
    : article.number === "2.2"
      ? article2_2.options
      : article.number === "2.3"
        ? article2_3.options
        : article.number === "2.4"
          ? article2_4.options
          : article2_5.options;
  return codes.map((code) => optionData.find((option) => option.code === code)?.title).filter(Boolean);
}
function formatUpdatedAt(value) {
  const date = new Date(value);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
function loadUpdatedAtState() {
  const state = {};
  articles.forEach((article) => {
    const key = `article-${article.number}-updated-at`;
    const saved = localStorage.getItem(key);
    if (saved) {
      state[article.number] = saved;
    } else if (localStorage.getItem(`article-${article.number}-completed`) === "true") {
      state[article.number] = new Date().toISOString();
      localStorage.setItem(key, state[article.number]);
    }
  });
  return state;
}
function articleLastUpdated(article) {
  return updatedAtState.value[article.number] || "";
}
function exportArticles() {
  return previewArticles.value.filter((article) => article.completed && article.legalText);
}
function articleLegalBody(article) {
  return (article.legalText || "").split("\n").slice(1).join("\n").replace(/^\n+/, "");
}
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
async function downloadWord() {
  if (!canExport.value) return;
  const { Document, HeadingLevel, Packer, Paragraph } = await import("docx");
  const children = [
    new Paragraph({ text: agreementTitle.value, heading: HeadingLevel.TITLE }),
    new Paragraph({ text: "Module 2 - Data Governance", heading: HeadingLevel.HEADING_1 }),
  ];
  exportArticles().forEach((article) => {
    children.push(new Paragraph({ text: `Article ${article.number} - ${article.title}`, heading: HeadingLevel.HEADING_2 }));
    articleLegalBody(article).split("\n").forEach((line) => children.push(new Paragraph({ text: line })));
  });
  const blob = await Packer.toBlob(new Document({ sections: [{ children }] }));
  downloadBlob(blob, "Thailand-Singapore-Digital-Trade-Agreement-Module-2.docx");
  notify("Word document downloaded.");
}
function downloadPdf() {
  if (!canExport.value) return;
  import("jspdf").then(({ jsPDF }) => {
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 48;
    const lineHeight = 15;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = margin;
    const writeLines = (text, size = 10, gap = 0) => {
      pdf.setFontSize(size);
      text.split("\n").forEach((line) => {
        const wrapped = pdf.splitTextToSize(line || " ", pageWidth - margin * 2);
        wrapped.forEach((wrappedLine) => {
          if (y > pageHeight - margin) { pdf.addPage(); y = margin; }
          pdf.text(wrappedLine, margin, y); y += lineHeight;
        });
      });
      y += gap;
    };
    writeLines(agreementTitle.value, 18, 8);
    writeLines("Module 2 - Data Governance", 14, 10);
    exportArticles().forEach((article) => {
      writeLines(`Article ${article.number} - ${article.title}`, 12, 4);
      writeLines(articleLegalBody(article), 10, 10);
    });
    pdf.save("Thailand-Singapore-Digital-Trade-Agreement-Module-2.pdf");
    notify("PDF document downloaded.");
  });
  return;
}
function startArticle(article) {
  if (!isArticleUnlocked(article)) {
    notify(
      `Complete Article ${prerequisiteArticle(article).number} before starting Article ${article.number}.`,
    );
    return;
  }
  if (article.number === "2.1") {
    router.push("/drafting-workspace/article-2.1");
    return;
  }
  if (article.number === "2.2") {
    router.push("/drafting-workspace/article-2.2");
    return;
  }
  if (article.number === "2.3") {
    router.push("/drafting-workspace/article-2.3");
    return;
  }
  if (article.number === "2.4") {
    router.push("/drafting-workspace/article-2.4");
    return;
  }
  if (article.number === "2.5") {
    router.push("/drafting-workspace/article-2.5");
    return;
  }
  notify(`Article ${article.number} is unlocked and ready to begin.`);
}

function resetDrafting() {
  resetConfirmOpen.value = false;
  localStorage.removeItem("article-2.1-references");
  localStorage.removeItem("article-2.1-references-v2");
  localStorage.removeItem("article-2.1-references-v3");
  localStorage.removeItem("article-2.2-references-v1");
  localStorage.removeItem("article-2.3-references-v1");
  localStorage.removeItem("article-2.4-references-v1");
  localStorage.removeItem("article-2.5-options-v1");
  localStorage.removeItem("article-2.5-references-v1");
  ["2.1", "2.2", "2.3", "2.4", "2.5"].forEach((articleNumber) => {
    localStorage.removeItem(`article-${articleNumber}-option`);
    localStorage.removeItem(`article-${articleNumber}-updated-at`);
    localStorage.removeItem(`article-${articleNumber}-completed`);
  });
  completionState.value = Object.fromEntries(
    articles.map((article) => [article.number, false]),
  );
  updatedAtState.value = {};
  article21OptionCode.value = "";
  router.replace("/drafting-workspace");
  notify("Module 2 draft has been reset.");
}

function loadArticle21References() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.1-references-v3") || "[]",
    );
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}
function resolveArticle21Reference(reference) {
  if (!reference) return "";
  if (reference.source === "module") return "Module 0, Article 0.3";
  if (reference.source === "chapter") return reference.chapterArticle || "";
  if (reference.source === "custom") return reference.customReference?.trim() || "";
  return "";
}

function loadArticle22References() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.2-references-v1") || "{}",
    );
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}
function resolveArticle22Reference(reference) {
  if (!reference) return "";
  if (reference.source === "custom") return reference.customReference?.trim() || "";
  return reference.choices?.find((choice) => choice.value === reference.source)?.replacement || "";
}
function loadArticle23References() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.3-references-v1") || "{}",
    );
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}
function resolveArticle23Reference(reference) {
  if (!reference) return "";
  if (reference.source === "custom") return reference.customReference?.trim() || "";
  return reference.choices?.find((choice) => choice.value === reference.source)?.replacement || "";
}
function loadArticle24References() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.4-references-v1") || "{}",
    );
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}
function resolveArticle24Reference(reference) {
  if (!reference) return "";
  if (reference.source === "custom") return reference.customReference?.trim() || "";
  return reference.choices?.find((choice) => choice.value === reference.source)?.replacement || "";
}
function loadArticle25Options() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.5-options-v1") || "[]",
    );
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}
function loadArticle25References() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("article-2.5-references-v1") || "{}",
    );
    return saved && typeof saved === "object" ? saved : {};
  } catch {
    return {};
  }
}
function resolveArticle25Reference(reference) {
  if (!reference) return "";
  if (reference.source === "custom") return reference.customReference?.trim() || "";
  return reference.choices?.find((choice) => choice.value === reference.source)?.replacement || "";
}
function replaceBracketedSegments(text, replacer) {
  const segments = [];
  let start = -1;
  let depth = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === "[") {
      if (depth === 0) start = index;
      depth += 1;
    } else if (text[index] === "]" && depth > 0) {
      depth -= 1;
      if (depth === 0) segments.push(text.slice(start, index + 1));
    }
  }
  return segments.reduce(
    (result, bracketText) => result.replace(bracketText, replacer(bracketText)),
    text,
  );
}

function notify(message) {
  $q.notify({ message, color: "dark", position: "top", timeout: 1800 });
}
</script>
