<template>
  <q-layout view="lHh Lpr lFf" class="template-layout">
    <q-page-container>
      <q-page class="template-setup-page">
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

        <main class="template-main content-width">
          <div class="template-breadcrumb"><button type="button" @click="router.push('/home')">Home</button><span>/</span><button type="button" @click="router.push('/home')">Templates</button><span>/</span><span>Digital Economy Agreement</span></div>

          <div class="template-title-row">
            <div><h1>Create agreement</h1><p>Set up your agreement and choose the modules you want to include.</p></div>
          </div>

          <div class="template-content-grid">
            <div class="template-left-column">
              <section class="setup-card details-card" aria-labelledby="details-title">
                <h2 id="details-title">Agreement details</h2>
                <q-input v-model="agreementTitle" class="setup-input" label="Agreement title *" outlined hide-bottom-space />
                <div class="description-field"><label for="agreement-description">Short description</label><textarea id="agreement-description" v-model="description" maxlength="500" placeholder="Briefly describe the aim or scope of this agreement (optional)."></textarea><span>{{ description.length }}/500</span></div>
              </section>

              <section class="setup-card modules-card" aria-labelledby="modules-title">
                <div class="modules-heading"><div><h2 id="modules-title">Select modules</h2><p>Choose the modules to include in this agreement. All modules are available in the library.</p></div></div>
                <div class="module-grid">
                  <article v-for="module in modules" :key="module.id" class="module-card" :class="{ 'module-card--selected': selectedModules.includes(module.id) }" @click="toggleModule(module.id)">
                    <q-icon class="module-card-icon" :name="module.icon" size="31px" /><div class="module-card-copy"><small>Module {{ module.id }}</small><h3>{{ module.title }}</h3><p>{{ module.description }}</p></div><q-checkbox v-model="selectedModules" :val="module.id" class="module-check" dense color="primary" :aria-label="`Select ${module.title}`" @click.stop />
                  </article>
                </div>
              </section>
            </div>

        <aside class="template-right-column">
              <section class="setup-card summary-card" aria-labelledby="summary-title"><div class="side-card-heading"><div class="home-icon home-icon--blue"><q-icon name="description" size="28px" /></div><h2 id="summary-title">Selection summary</h2></div><dl class="summary-list"><div><dt>Agreement type</dt><dd>{{ agreementType }}</dd></div><div><dt>Selected modules</dt><dd>{{ selectedModules.length }}</dd></div><div><dt>Output</dt><dd>Guided drafting workspace</dd></div></dl></section>
              <section class="setup-card happens-card" aria-labelledby="happens-title"><div class="side-card-heading"><div class="home-icon home-icon--blue"><q-icon name="lightbulb" size="29px" /></div><h2 id="happens-title">What happens next</h2></div><ol class="happens-list"><li><span>1</span><div><strong>Review agreement details</strong><p>Check and complete your agreement information.</p></div></li><li><span>2</span><div><strong>Confirm your module selection</strong><p>Add or remove modules as needed.</p></div></li><li><span>3</span><div><strong>Start drafting your provisions</strong><p>You can always add more modules later from the full library.</p></div></li></ol><button class="setup-primary-button" type="button" :disabled="!canStartDrafting" @click="startDrafting"><q-icon name="arrow_forward" size="22px" />Start drafting</button><button class="setup-secondary-button" type="button" @click="router.push('/home')"><q-icon name="arrow_back" size="22px" />Back to templates</button></section>
            </aside>
          </div>
        </main>

        <footer class="dashboard-footer">
          <div class="dashboard-footer-inner content-width"><span>&copy; 2026 United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP). All rights reserved.</span><nav aria-label="Footer links"><button type="button" @click="notify('Privacy Policy selected.')">Privacy Policy</button><i></i><button type="button" @click="notify('Terms of Use selected.')">Terms of Use</button><i></i><button type="button" @click="notify('Contact selected.')">Contact</button></nav></div>
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const agreementTitle = ref('')
const agreementType = ref('Digital Economy Agreement')
const description = ref('')
const selectedModules = ref([])
const canStartDrafting = computed(() => agreementTitle.value.trim().length > 0 && selectedModules.value.length > 0)
const modules = [
  { id: 0, title: 'Framework', description: 'General provisions, objectives\nand institutional arrangements.', icon: 'description', category: 'Core modules' },
  { id: 1, title: 'Market Access', description: 'Rules for digital trade, non-\ndiscrimination, and market access.', icon: 'signal_cellular_alt', category: 'Digital economy' },
  { id: 2, title: 'Data Governance', description: 'Rules and principles for data flows,\nlocalization, financial data, and cooperation.', icon: 'storage', category: 'Core modules' },
  { id: 3, title: 'Privacy & Personal Data', description: 'Protection of personal data,\nprivacy principles, and trusted data flows.', icon: 'verified_user', category: 'Trust and safety' },
  { id: 4, title: 'E-Commerce', description: 'Legal framework for e-commerce,\nconsumer trust, and paperless trade.', icon: 'shopping_cart', category: 'Digital economy' },
  { id: 5, title: 'Digital Payments', description: 'Rules for digital payments,\nelectronic money, and cross-border payment cooperation.', icon: 'credit_card', category: 'Digital economy' },
  { id: 6, title: 'Digital Identity', description: 'Approaches to digital identity,\nauthentication and trusted credentials.', icon: 'person', category: 'Trust and safety' },
  { id: 7, title: 'Cybersecurity', description: 'Cooperation on cybersecurity,\nincident response and digital resilience.', icon: 'lock', category: 'Trust and safety' },
  { id: 8, title: 'Consumer Protection', description: 'Consumer rights in the digital\neconomy, fair practices and dispute resolution.', icon: 'groups', category: 'Trust and safety' },
  { id: 9, title: 'Emerging Technologies', description: 'Approaches to AI governance, emerging technologies and innovation-friendly regulation.', icon: 'settings', category: 'Digital economy' },
]
function notify(message) { $q.notify({ message, color: 'dark', position: 'top', timeout: 1800 }) }
function toggleModule(moduleId) {
  selectedModules.value = selectedModules.value.includes(moduleId)
    ? selectedModules.value.filter((id) => id !== moduleId)
    : [...selectedModules.value, moduleId]
}
function startDrafting() {
  if (!canStartDrafting.value) return
  localStorage.setItem('agreementTitle', agreementTitle.value.trim())
  localStorage.removeItem('article-2.1-references')
  localStorage.removeItem('article-2.1-references-v2')
  localStorage.removeItem('article-2.1-references-v3')
  ;['2.1', '2.2', '2.3', '2.4', '2.5'].forEach((articleNumber) => {
    localStorage.removeItem(`article-${articleNumber}-option`)
    localStorage.removeItem(`article-${articleNumber}-completed`)
  })
  router.push('/drafting-workspace')
}
</script>
