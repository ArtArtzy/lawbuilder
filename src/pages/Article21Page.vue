<template>
  <q-layout view="lHh Lpr lFf" class="drafting-layout">
    <q-page-container>
      <q-page class="drafting-page article-page">
        <header class="home-header">
          <div class="home-header-inner content-width">
            <div class="brand-lockup home-brand-lockup">
              <span class="brand-mark">UNESCAP</span>
              <span class="brand-divider"></span>
              <span class="brand-product"><strong>Digital Policy Drafting Platform</strong><small>Based on the AP-MDEA framework</small></span>
            </div>
            <nav class="home-nav" aria-label="Main navigation">
              <button class="home-nav-item home-nav-item--active" type="button" @click="router.push('/home')"><q-icon name="home" size="21px" /><span>Home</span></button>
              <button class="home-nav-item" type="button" @click="notify('My Agreements is ready for the next mockup phase.')"><q-icon name="description" size="21px" /><span>My Agreements</span></button>
              <button class="home-nav-item" type="button" @click="router.push('/home')"><q-icon name="library_books" size="21px" /><span>Templates</span></button>
              <button class="home-nav-item" type="button" @click="notify('Resources is ready for the next mockup phase.')"><q-icon name="local_shipping" size="21px" /><span>Resources</span></button>
            </nav>
            <div class="home-actions">
              <button class="home-action-button" type="button" @click="notify('Help center is available in the production flow.')"><q-icon name="help_outline" size="21px" /><span>Help</span></button>
              <span class="home-action-divider"></span>
              <button class="user-menu" type="button" @click="notify('User menu is ready for the next mockup phase.')"><span class="user-avatar user-avatar--large">JD</span><span class="user-details"><strong>Jane Doe</strong><small>Policy Unit, Example Country</small></span><q-icon name="keyboard_arrow_down" size="18px" /></button>
            </div>
          </div>
        </header>

        <main class="drafting-main content-width">
          <div class="drafting-breadcrumb"><button type="button" @click="router.push('/home')">Home</button><span>/</span><button type="button" @click="router.push('/home')">My Agreements</button><span>/</span><button type="button" @click="router.push('/templates/digital-economy-agreement')">{{ agreementTitle }}</button><span>/</span><button type="button" @click="router.push('/drafting-workspace')">Drafting Workspace</button><span>/</span><span>Article 2.1 — Definitions</span></div>

          <div class="drafting-grid article-drafting-grid">
            <aside class="outline-sidebar article-outline" aria-label="Agreement outline">
              <h2>Agreement outline</h2>
              <button class="outline-module outline-module--active" type="button" @click="router.push('/drafting-workspace')"><span><strong>Module 2</strong><small>Data Governance</small></span><q-icon name="chevron_right" size="22px" /></button>
              <div class="outline-articles">
                <button class="outline-article outline-article--active" type="button"><q-icon name="description" size="22px" /><span><strong>Article 2.1</strong><small>Definitions</small></span></button>
                <button v-for="article in article21.remainingArticles" :key="article.number" class="outline-article outline-article--locked" type="button" @click="notify(`${article.number} will unlock after completing Article 2.1.`)"><q-icon name="lock" size="21px" /><span><strong>Article {{ article.number }}</strong><small>{{ article.title }}</small></span></button>
              </div>
            </aside>

            <section class="drafting-center article-drafting-center">
              <div class="article-heading-row"><div><div class="article-context-label">Module 2 — Data Governance</div><div class="article-heading-line"><h1>Article 2.1 — Definitions</h1></div><p class="article-description">Choose one option to define the covered person for this module.</p></div></div>

              <section class="article-progress-card"><div class="progress-icon drafting-icon drafting-icon--blue"><q-icon name="format_list_numbered" size="27px" /></div><div class="article-progress-copy"><strong>Articles completed: 0 of 5</strong><div class="article-progress-track"><span></span></div></div><span class="article-progress-divider"></span><div class="next-article-copy"><strong>Next article:</strong><span>Article 2.2 — Cross-Border Transfer of Information by Electronic Means</span></div></section>

              <div class="article-section-heading"><div><h2>1. Select a drafting option</h2><p>Choose the approach that best fits your agreement.</p></div><button v-if="selectedOptionCode" class="clear-option-button" type="button" @click="clearOption">Clear selection</button></div>

              <div class="article-option-grid">
                <article v-for="option in article21.options" :key="option.code" class="article-option-card" :class="{ 'article-option-card--selected': selectedOptionCode === option.code }" @click="selectOption(option.code)">
                  <div class="option-card-heading"><span class="option-radio" :class="{ 'option-radio--selected': selectedOptionCode === option.code }"><q-icon v-if="selectedOptionCode === option.code" name="circle" size="10px" /></span><div><small>{{ option.label }}</small><h3>{{ option.title }}</h3></div></div>
                  <p class="option-summary">{{ option.summary }}</p>
                  <dl class="option-details"><div><dt><q-icon name="group" size="18px" />Best for</dt><dd>{{ option.bestFor }}</dd></div><div><dt><q-icon name="account_balance" size="18px" />Financial scope</dt><dd>{{ option.financialScope }}</dd></div><div><dt><q-icon name="description" size="18px" />Source</dt><dd>{{ option.source }}</dd></div></dl>
                </article>
              </div>

              <section v-if="selectedOptionCode === 'A'" class="additional-references-card"><div class="additional-references-heading"><span class="reference-section-number">2</span><div><h2>Provide references for key terms</h2><p>Option A uses definitions from other parts of the agreement. Select the source for each term.</p></div><button class="clear-references-button" type="button" @click="clearReferences">Clear all</button></div><div class="reference-item" v-for="reference in additionalReferences" :key="reference.key"><div class="reference-item-heading"><span class="reference-number">{{ reference.number }}</span><div><strong>{{ reference.label }}</strong><p>Select where the term “{{ reference.label.toLowerCase() }}” is defined.</p></div><button class="clear-reference-button" type="button" :disabled="!reference.source && !reference.chapterArticle && !reference.customReference" @click.stop="clearReference(reference)">Clear</button></div><div class="reference-choices"><label><input v-model="reference.source" type="radio" :name="`reference-${reference.key}`" value="module" /><div class="reference-choice-copy"><span>Module 0 — Article 0.3 (General Definitions)</span><small v-if="reference.source === 'module'">Definition available in this agreement</small></div></label><label><input v-model="reference.source" type="radio" :name="`reference-${reference.key}`" value="chapter" /><div class="reference-choice-copy"><span>{{ reference.chapterLabel }}</span></div><select v-model="reference.chapterArticle" :disabled="reference.source !== 'chapter'" aria-label="Select article"><option value="">Select article...</option><option v-for="article in reference.articleOptions" :key="article" :value="article">{{ article }}</option></select></label><label><input v-model="reference.source" type="radio" :name="`reference-${reference.key}`" value="custom" /><div class="reference-choice-copy"><span>Specify another reference</span></div><input v-model="reference.customReference" :disabled="reference.source !== 'custom'" class="reference-input" type="text" :placeholder="reference.placeholder" /></label></div></div><div class="reference-progress"><strong>References completed: {{ resolvedReferenceCount }} of 3</strong><span v-if="referencesRemaining > 0">{{ referencesRemaining }} reference{{ referencesRemaining === 1 ? '' : 's' }} remaining</span><span v-else class="reference-progress--complete">All references resolved</span></div></section>
              <section v-else-if="selectedOptionCode === 'B'" class="additional-references-card additional-references-card--success"><q-icon name="check_circle" size="31px" /><div><h2>No additional references required</h2><p>Option B does not require external definition references. You can review the draft text and continue to the next article.</p></div></section>

              <div class="article-footer-actions"><button class="article-draft-button" type="button" @click="saveDraft">Save draft</button><button class="article-save-button" type="button" :disabled="!selectedOption || !canCompleteArticle" @click="saveAndContinue">Complete Article 2.1 &amp; Continue<q-icon name="arrow_forward" size="20px" /></button><button class="article-back-button" type="button" @click="router.push('/drafting-workspace')"><q-icon name="arrow_back" size="20px" />Back to module overview</button><span class="article-locked-note"><q-icon name="lock" size="18px" />Article 2.2 will unlock after<br />completing Article 2.1.</span></div><p v-if="selectedOptionCode === 'A' &amp;&amp; !canCompleteArticle" class="article-reference-required-note">Resolve required references to continue.</p>
            </section>

            <aside class="drafting-rail article-preview-rail">
              <section class="drafting-side-card article-preview-card article-preview-card--dynamic"><div class="side-card-heading article-preview-heading"><div class="drafting-icon drafting-icon--blue"><q-icon name="description" size="28px" /></div><h2>Draft preview</h2><button class="preview-expand-button" type="button" @click="openPreviewDialog"><q-icon name="open_in_full" size="16px" />View larger</button></div><div class="article-preview-title"><strong>{{ agreementTitle }}</strong><p>Draft – Module 2: Data Governance</p></div><div class="preview-article-current"><strong>{{ previewArticleHeading }}</strong><div class="preview-legal-text"><template v-for="(line, lineIndex) in previewArticleBody.split('\n')" :key="`preview-line-${lineIndex}`"><template v-for="(part, partIndex) in legalLineParts(line)" :key="`preview-part-${lineIndex}-${partIndex}`"><mark v-if="part === '[Reference required]'" class="unresolved-reference">{{ part }}</mark><span v-else>{{ part }}</span></template><br v-if="lineIndex < previewArticleBody.split('\n').length - 1" /></template></div></div><div class="preview-upcoming"><h3>Upcoming articles in this module</h3><div v-for="article in article21.remainingArticles" :key="article.number" class="preview-upcoming-article"><q-icon name="lock" size="16px" /><strong>Article {{ article.number }} — {{ article.title }}</strong></div></div></section>
            </aside>
          </div>
        </main>

        <footer class="dashboard-footer"><div class="dashboard-footer-inner content-width"><span>&copy; 2026 United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP). All rights reserved.</span><nav aria-label="Footer links"><button type="button" @click="notify('Privacy Policy selected.')">Privacy Policy</button><i></i><button type="button" @click="notify('Terms of Use selected.')">Terms of Use</button><i></i><button type="button" @click="notify('Contact selected.')">Contact</button></nav></div></footer>
        <q-dialog v-model="previewDialogOpen">
          <q-card class="preview-expand-dialog">
            <q-card-section class="preview-expand-heading"><div><div class="article-kicker">Draft preview</div><h2>{{ agreementTitle }}</h2><p>Draft – Module 2: Data Governance</p></div><q-btn flat round dense icon="close" aria-label="Close expanded preview" @click="previewDialogOpen = false" /></q-card-section>
            <q-card-section class="preview-expand-body"><div class="preview-expand-current"><strong>{{ previewArticleHeading }}</strong><div class="preview-dialog-legal-text"><template v-for="(line, lineIndex) in previewArticleBody.split('\n')" :key="`dialog-line-${lineIndex}`"><template v-for="(part, partIndex) in legalLineParts(line)" :key="`dialog-part-${lineIndex}-${partIndex}`"><mark v-if="part === '[Reference required]'" class="unresolved-reference">{{ part }}</mark><span v-else>{{ part }}</span></template><br v-if="lineIndex < previewArticleBody.split('\n').length - 1" /></template></div></div><div class="preview-upcoming"><h3>Upcoming articles in this module</h3><div v-for="article in article21.remainingArticles" :key="article.number" class="preview-upcoming-article"><q-icon name="lock" size="16px" /><strong>Article {{ article.number }} — {{ article.title }}</strong></div></div></q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { article2_1 } from '../data/article2_1'

const $q = useQuasar()
const router = useRouter()
const article21 = article2_1
const agreementTitle = ref(localStorage.getItem('agreementTitle') || 'Untitled agreement')
const selectedOptionCode = ref(localStorage.getItem('article-2.1-option') || '')
const selectedOption = computed(() => article2_1.options.find((option) => option.code === selectedOptionCode.value))
const defaultAdditionalReferences = [
  { number: 1, key: 'covered-investment', label: 'Covered investment', chapterLabel: 'Investment chapter of this agreement', articleOptions: ['Article 8.1 — Definitions', 'Article 8.2 — Scope and Covered Investments'], chapterArticle: '', customReference: '', placeholder: 'e.g. Investment Chapter, Article 8.1', source: '' },
  { number: 2, key: 'investor-of-a-party', label: 'Investor of a Party', chapterLabel: 'Investment chapter of this agreement', articleOptions: ['Article 8.1 — Definitions', 'Article 8.3 — Investors of a Party'], chapterArticle: '', customReference: '', placeholder: 'e.g. Investment Chapter, Article 8.3', source: '' },
  { number: 3, key: 'service-supplier-of-a-party', label: 'Service supplier of a Party', chapterLabel: 'Services chapter of this agreement', articleOptions: ['Article 10.1 — Definitions', 'Article 10.2 — Service Suppliers and Scope'], chapterArticle: '', customReference: '', placeholder: 'e.g. Services Chapter, Article 10.1', source: '' },
]
function loadAdditionalReferences() {
  try {
    const saved = JSON.parse(localStorage.getItem('article-2.1-references-v3') || 'null')
    return Array.isArray(saved) && saved.length === defaultAdditionalReferences.length ? saved : defaultAdditionalReferences
  } catch {
    return defaultAdditionalReferences
  }
}
const additionalReferences = ref(loadAdditionalReferences())
const resolvedReferences = computed(() => Object.fromEntries(additionalReferences.value.map((reference) => {
  const value = reference.source === 'module'
    ? 'Module 0, Article 0.3'
    : reference.source === 'chapter'
      ? reference.chapterArticle
      : reference.source === 'custom'
        ? reference.customReference.trim()
        : ''
  return [reference.key, value]
})))
const resolvedReferenceCount = computed(() => Object.values(resolvedReferences.value).filter(Boolean).length)
const referencesRemaining = computed(() => additionalReferences.value.length - resolvedReferenceCount.value)
const canCompleteArticle = computed(() => selectedOptionCode.value === 'B' || referencesRemaining.value === 0)
const previewLegalText = computed(() => {
  if (!selectedOption.value) {
    return 'Article 2.1 — Definitions\n\nSelect Option A or Option B to preview the draft text for this article.'
  }
  const sourceText = selectedOption.value?.legalText || ''
  if (selectedOptionCode.value !== 'A') return sourceText
  let referenceIndex = 0
  return sourceText.replace(/\n\[Module 0, Article 0\.3[^\]]+\]/g, () => {
    const reference = additionalReferences.value[referenceIndex++]
    return ` ${resolvedReferences.value[reference.key] || '[Reference required]'}`
  })
})
const previewArticleHeading = computed(() => previewLegalText.value.split('\n')[0] || 'Article 2.1 — Definitions')
const previewArticleBody = computed(() => previewLegalText.value.split('\n').slice(1).join('\n').replace(/^\n+/, ''))
const previewDialogOpen = ref(false)
watch(additionalReferences, (references) => {
  localStorage.setItem('article-2.1-references-v3', JSON.stringify(references))
}, { deep: true })

function selectOption(code) { selectedOptionCode.value = code }
function clearOption() { selectedOptionCode.value = '' }
function openPreviewDialog() {
  previewDialogOpen.value = true
}
function legalLineParts(line) {
  return line.split(/(\[Reference required\])/g)
}
function clearReference(reference) {
  reference.source = ''
  reference.chapterArticle = ''
  reference.customReference = ''
}
function clearReferences() {
  additionalReferences.value.forEach(clearReference)
}
function saveDraft() {
  localStorage.setItem('article-2.1-updated-at', new Date().toISOString())
  if (selectedOption.value) {
    localStorage.setItem('article-2.1-option', selectedOption.value.code)
  } else {
    localStorage.removeItem('article-2.1-option')
  }
  localStorage.setItem('article-2.1-references-v3', JSON.stringify(additionalReferences.value))
  localStorage.removeItem('article-2.1-completed')
  notify('Article 2.1 draft saved.')
}
function saveAndContinue() {
  if (!selectedOption.value || !canCompleteArticle.value) return
  localStorage.setItem('article-2.1-option', selectedOption.value.code)
  localStorage.setItem('article-2.1-references-v3', JSON.stringify(additionalReferences.value))
  localStorage.setItem('article-2.1-completed', 'true')
  localStorage.setItem('article-2.1-updated-at', new Date().toISOString())
  router.push('/drafting-workspace')
}
function notify(message) { $q.notify({ message, color: 'dark', position: 'top', timeout: 1800 }) }
</script>
