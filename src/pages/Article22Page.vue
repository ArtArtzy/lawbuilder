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
          <div class="drafting-breadcrumb"><button type="button" @click="router.push('/home')">Home</button><span>/</span><button type="button" @click="router.push('/home')">My Agreements</button><span>/</span><button type="button" @click="router.push('/templates/digital-economy-agreement')">{{ agreementTitle }}</button><span>/</span><button type="button" @click="router.push('/drafting-workspace')">Drafting Workspace</button><span>/</span><span>Article 2.2 — Cross-Border Transfer of Information by Electronic Means</span></div>

          <div class="drafting-grid article-drafting-grid">
            <aside class="outline-sidebar article-outline" aria-label="Agreement outline">
              <h2>Agreement outline</h2>
              <button class="outline-module outline-module--active" type="button" @click="router.push('/drafting-workspace')"><span><strong>Module 2</strong><small>Data Governance</small></span><q-icon name="chevron_right" size="22px" /></button>
              <div class="outline-articles">
                <button class="outline-article outline-article--complete" type="button" @click="router.push('/drafting-workspace/article-2.1')"><q-icon name="check_circle" size="21px" /><span><strong>Article 2.1</strong><small>Definitions</small></span></button>
                <button class="outline-article outline-article--active" type="button"><q-icon name="description" size="22px" /><span><strong>Article 2.2</strong><small>Cross-Border Transfer of Information by Electronic Means</small></span></button>
                <button v-for="article in article22.remainingArticles" :key="article.number" class="outline-article outline-article--locked" type="button" @click="notify(`${article.number} will unlock after completing Article 2.2.`)"><q-icon name="lock" size="21px" /><span><strong>Article {{ article.number }}</strong><small>{{ article.title }}</small></span></button>
              </div>
            </aside>

            <section class="drafting-center article-drafting-center">
              <div class="article-heading-row"><div><div class="article-context-label">Module 2 — Data Governance</div><div class="article-heading-line"><h1>Article 2.2 — Cross-Border Transfer of Information by Electronic Means</h1></div><p class="article-description">{{ article22.description }}</p></div></div>

              <section class="article-progress-card"><div class="progress-icon drafting-icon drafting-icon--blue"><q-icon name="format_list_numbered" size="27px" /></div><div class="article-progress-copy"><strong>Articles completed: {{ completedArticlesCount }} of 5</strong><div class="article-progress-track"><span :style="{ width: `${completedArticlesCount / 5 * 100}%` }"></span></div></div><span class="article-progress-divider"></span><div class="next-article-copy"><strong>Next article:</strong><span>Article 2.3 — Location of Computing Facilities</span></div></section>

              <div class="article-section-heading"><div><h2>1. Select a drafting option</h2><p>Choose the approach that best fits your agreement.</p></div><button v-if="selectedOptionCode" class="clear-option-button" type="button" @click="clearOption">Clear selection</button></div>

              <div class="article-option-grid article22-option-grid">
                <article v-for="option in article22.options" :key="option.code" class="article-option-card" :class="{ 'article-option-card--selected': selectedOptionCode === option.code }" @click="selectOption(option.code)">
                  <div class="option-card-heading"><span class="option-radio" :class="{ 'option-radio--selected': selectedOptionCode === option.code }"><q-icon v-if="selectedOptionCode === option.code" name="circle" size="10px" /></span><div><small>{{ option.label }}</small><h3>{{ option.title }}</h3></div></div>
                  <p class="option-summary">{{ option.summary }}</p>
                  <dl class="option-details"><div><dt><q-icon name="group" size="18px" />Best for</dt><dd>{{ option.bestFor }}</dd></div><div><dt><q-icon name="account_balance" size="18px" />Financial scope</dt><dd>{{ option.financialScope }}</dd></div><div><dt><q-icon name="description" size="18px" />Source</dt><dd>{{ option.source }}</dd></div></dl>
                </article>
              </div>

              <Article22ReferencesCard v-if="selectedReferences.length" :references="selectedReferences" @update:references="updateSelectedReferences" />
              <section v-if="selectedOptionCode === 'C'" class="article-smart-callout article-smart-callout--recommendation"><q-icon name="auto_awesome" size="27px" /><div><h2>Recommended match</h2><p>Option C pairs best with <strong>Article 2.3 Option C</strong> because both use a precise, closed-list approach to data governance.</p></div></section>
              <section v-else-if="selectedOptionCode === 'D'" class="article-smart-callout article-smart-callout--requirement"><q-icon name="info" size="27px" /><div><h2>Annex required</h2><p><strong>Requires Annex on Cross-Border Data Transfers.</strong> Make sure the annex is prepared before finalizing this option.</p></div></section>

              <div class="article-footer-actions"><button class="article-draft-button" type="button" @click="saveDraft">Save draft</button><button class="article-save-button" type="button" :disabled="!selectedOption" @click="saveAndContinue">Complete Article 2.2 &amp; Continue<q-icon name="arrow_forward" size="20px" /></button><button class="article-back-button" type="button" @click="router.push('/drafting-workspace')"><q-icon name="arrow_back" size="20px" />Back to module overview</button><span class="article-locked-note"><q-icon name="lock" size="18px" />Article 2.3 will unlock after<br />completing Article 2.2.</span></div>
            </section>

            <aside class="drafting-rail article-preview-rail">
              <section class="drafting-side-card article-preview-card article-preview-card--dynamic"><div class="side-card-heading article-preview-heading"><div class="drafting-icon drafting-icon--blue"><q-icon name="description" size="28px" /></div><h2>Draft preview</h2><button class="preview-expand-button" type="button" @click="openPreviewDialog"><q-icon name="open_in_full" size="16px" />View larger</button></div><div class="article-preview-title"><strong>{{ agreementTitle }}</strong><p>Draft — Module 2: Data Governance</p></div><div class="preview-article-current"><strong>{{ previewArticleHeading }}</strong><div class="preview-legal-text"><template v-for="(line, lineIndex) in previewArticleBody.split('\n')" :key="`preview-line-${lineIndex}`"><span>{{ line }}</span><br v-if="lineIndex < previewArticleBody.split('\n').length - 1" /></template></div></div><div class="preview-upcoming"><h3>Upcoming articles in this module</h3><div v-for="article in article22.remainingArticles" :key="article.number" class="preview-upcoming-article"><q-icon name="lock" size="16px" /><strong>Article {{ article.number }} — {{ article.title }}</strong></div></div></section>
            </aside>
          </div>
        </main>

        <footer class="dashboard-footer"><div class="dashboard-footer-inner content-width"><span>&copy; 2026 United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP). All rights reserved.</span><nav aria-label="Footer links"><button type="button" @click="notify('Privacy Policy selected.')">Privacy Policy</button><i></i><button type="button" @click="notify('Terms of Use selected.')">Terms of Use</button><i></i><button type="button" @click="notify('Contact selected.')">Contact</button></nav></div></footer>
        <q-dialog v-model="previewDialogOpen"><q-card class="preview-expand-dialog"><q-card-section class="preview-expand-heading"><div><div class="article-kicker">Draft preview</div><h2>{{ agreementTitle }}</h2><p>Draft — Module 2: Data Governance</p></div><q-btn flat round dense icon="close" aria-label="Close expanded preview" @click="previewDialogOpen = false" /></q-card-section><q-card-section class="preview-expand-body"><div class="preview-expand-current"><strong>{{ previewArticleHeading }}</strong><div class="preview-dialog-legal-text"><template v-for="(line, lineIndex) in previewArticleBody.split('\n')" :key="`dialog-line-${lineIndex}`"><span>{{ line }}</span><br v-if="lineIndex < previewArticleBody.split('\n').length - 1" /></template></div></div><div class="preview-upcoming"><h3>Upcoming articles in this module</h3><div v-for="article in article22.remainingArticles" :key="article.number" class="preview-upcoming-article"><q-icon name="lock" size="16px" /><strong>Article {{ article.number }} — {{ article.title }}</strong></div></div></q-card-section></q-card></q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, nextTick, onMounted, onUpdated, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { article2_2 } from '../data/article2_2'
import Article22ReferencesCard from '../components/Article22ReferencesCard.vue'

const $q = useQuasar()
const router = useRouter()
const article22 = article2_2
const agreementTitle = ref(localStorage.getItem('agreementTitle') || 'Untitled agreement')
const selectedOptionCode = ref(localStorage.getItem('article-2.2-option') || '')
const selectedOption = computed(() => article22.options.find((option) => option.code === selectedOptionCode.value))
const article21Completed = ref(localStorage.getItem('article-2.1-completed') === 'true')
const article22Completed = ref(localStorage.getItem('article-2.2-completed') === 'true')
const completedArticlesCount = computed(() => Number(article21Completed.value) + Number(article22Completed.value))
const referencesByOption = ref(loadReferences())
const selectedReferences = computed(() => referencesByOption.value[selectedOptionCode.value] || [])
const resolvedReferenceCount = computed(() => selectedReferences.value.filter((reference) => resolveReference(reference)).length)
const canCompleteArticle = computed(() => !selectedOption.value || selectedReferences.value.length === 0 || resolvedReferenceCount.value === selectedReferences.value.length)
const previewLegalText = computed(() => {
  if (!selectedOption.value) return `Article 2.2 — ${article22.title}\n\nSelect an option above to preview the draft text for this article.`
  let referenceIndex = 0
  return replaceBracketedSegments(selectedOption.value.legalText, (bracketText) => {
    const reference = selectedReferences.value[referenceIndex++]
    return resolveReference(reference) || '[Reference required]'
  })
})
const previewArticleHeading = computed(() => previewLegalText.value.split('\n')[0] || `Article 2.2 — ${article22.title}`)
const previewArticleBody = computed(() => previewLegalText.value.split('\n').slice(1).join('\n').replace(/^\n+/, ''))
const previewDialogOpen = ref(false)

function highlightUnresolvedReferences() {
  document.querySelectorAll('.preview-legal-text, .preview-dialog-legal-text').forEach((container) => {
    container.querySelectorAll('span').forEach((span) => {
      if (!span.textContent.includes('[Reference required]') || span.querySelector('mark.unresolved-reference')) return
      const fragment = document.createDocumentFragment()
      span.textContent.split('[Reference required]').forEach((part, index, parts) => {
        if (part) fragment.appendChild(document.createTextNode(part))
        if (index < parts.length - 1) {
          const marker = document.createElement('mark')
          marker.className = 'unresolved-reference'
          marker.textContent = '[Reference required]'
          fragment.appendChild(marker)
        }
      })
      span.replaceChildren(fragment)
    })
  })
}
function scheduleHighlightUnresolvedReferences() {
  nextTick(() => window.setTimeout(highlightUnresolvedReferences, 0))
}
onMounted(scheduleHighlightUnresolvedReferences)
onUpdated(scheduleHighlightUnresolvedReferences)

function extractBracketedSegments(text) {
  const segments = []
  let start = -1
  let depth = 0
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '[') {
      if (depth === 0) start = index
      depth += 1
    } else if (text[index] === ']' && depth > 0) {
      depth -= 1
      if (depth === 0) segments.push(text.slice(start, index + 1))
    }
  }
  return segments
}
function replaceBracketedSegments(text, replacer) {
  return extractBracketedSegments(text).reduce((result, bracketText) => result.replace(bracketText, replacer(bracketText)), text)
}
function createReference(code, bracketText, index, existing = {}) {
  const choices = []
  if (bracketText.includes('Article 2.1')) choices.push({ value: 'article21', label: 'Module 2 — Article 2.1 (Definitions)', hint: 'Definition reference available in this module', replacement: 'Module 2, Article 2.1 (Definitions)' })
  if (bracketText.includes('Article 0.12')) choices.push({ value: 'article012', label: 'Module 0 — Article 0.12 (Application of Dispute Settlement)', hint: 'Dispute settlement reference available', replacement: 'Module 0, Article 0.12 (Application of Dispute Settlement)' })
  if (!choices.length) choices.push({ value: 'placeholder', label: 'Keep as a drafting placeholder', hint: 'Can be finalized later', replacement: bracketText })
  const label = bracketText.includes('Article 2.1')
    ? 'Covered person definition'
    : bracketText.includes('Article 0.12')
      ? 'Dispute settlement reference'
      : 'Bracketed drafting text'
  return { number: index + 1, key: `${code}-${index}`, label, bracketText, choices, source: existing.source || '', customReference: existing.customReference || '' }
}
function loadReferences() {
  try {
    const saved = JSON.parse(localStorage.getItem('article-2.2-references-v1') || '{}')
    return Object.fromEntries(article22.options.map((option) => {
      const brackets = extractBracketedSegments(option.legalText)
      const existing = Array.isArray(saved[option.code]) ? saved[option.code] : []
      return [option.code, brackets.map((bracketText, index) => createReference(option.code, bracketText, index, existing[index]))]
    }))
  } catch {
    return {}
  }
}
function ensureReferences(code) {
  if (!code || referencesByOption.value[code]) return
  const option = article22.options.find((item) => item.code === code)
  const brackets = extractBracketedSegments(option?.legalText || '')
  referencesByOption.value[code] = brackets.map((bracketText, index) => createReference(code, bracketText, index))
}
ensureReferences(selectedOptionCode.value)
function resolveReference(reference) {
  if (!reference) return ''
  if (reference.source === 'custom') return reference.customReference.trim()
  return reference.choices.find((choice) => choice.value === reference.source)?.replacement || ''
}
function updateSelectedReferences(references) { referencesByOption.value[selectedOptionCode.value] = references }
function selectOption(code) {
  selectedOptionCode.value = code
  ensureReferences(code)
  scheduleHighlightUnresolvedReferences()
}
function clearOption() { selectedOptionCode.value = '' }
function openPreviewDialog() {
  previewDialogOpen.value = true
  scheduleHighlightUnresolvedReferences()
}
function saveDraft() {
  localStorage.setItem('article-2.2-updated-at', new Date().toISOString())
  if (selectedOption.value) localStorage.setItem('article-2.2-option', selectedOption.value.code)
  else localStorage.removeItem('article-2.2-option')
  localStorage.setItem('article-2.2-references-v1', JSON.stringify(referencesByOption.value))
  localStorage.removeItem('article-2.2-completed')
  article22Completed.value = false
  notify('Article 2.2 draft saved.')
}
function saveAndContinue() {
  if (!selectedOption.value || !canCompleteArticle.value) return
  localStorage.setItem('article-2.2-option', selectedOption.value.code)
  localStorage.setItem('article-2.2-references-v1', JSON.stringify(referencesByOption.value))
  localStorage.setItem('article-2.2-completed', 'true')
  localStorage.setItem('article-2.2-updated-at', new Date().toISOString())
  article22Completed.value = true
  router.push('/drafting-workspace')
}
function notify(message) { $q.notify({ message, color: 'dark', position: 'top', timeout: 1800 }) }
</script>
