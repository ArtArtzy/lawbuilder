<template>
  <q-layout view="lHh Lpr lFf" class="home-layout">
    <q-page-container>
      <q-page class="home-page">
        <header class="home-header">
          <div class="home-header-inner content-width">
            <div class="brand-lockup home-brand-lockup">
              <span class="brand-mark">UNESCAP</span>
              <span class="brand-divider"></span>
              <span class="brand-product"><strong>Digital Policy Drafting Platform</strong><small>Based on the AP-MDEA framework</small></span>
            </div>

            <nav class="home-nav" aria-label="Main navigation">
              <button v-for="item in navItems" :key="item.label" class="home-nav-item" :class="{ 'home-nav-item--active': item.active }" type="button" @click="handleNav(item)">
                <q-icon :name="item.icon" size="21px" />
                <span>{{ item.label }}</span>
              </button>
            </nav>

            <div class="home-actions">
              <button class="home-action-button" type="button" @click="notify('Help center is available in the production flow.')"><q-icon name="help_outline" size="21px" /><span>Help</span></button>
              <span class="home-action-divider"></span>
              <button class="user-menu" type="button" @click="notify('User menu is ready for the next mockup phase.')"><span class="user-avatar user-avatar--large">JD</span><span class="user-details"><strong>Jane Doe</strong><small>Policy Unit, Example Country</small></span><q-icon name="keyboard_arrow_down" size="18px" /></button>
            </div>
          </div>
        </header>

        <main class="home-main content-width">
          <section class="welcome-hero" aria-labelledby="welcome-title">
            <div class="welcome-hero-content">
              <div class="eyebrow">SHAPING AN INCLUSIVE DIGITAL ECONOMY</div>
              <h1 id="welcome-title">Welcome back, Jane</h1>
              <p>Start a new agreement or continue an existing draft.</p>
              <div class="hero-actions">
                <button class="hero-primary-button" type="button" @click="notify('New agreement flow opened.')"><q-icon name="add_circle" size="27px" />Create new agreement</button>
                <button class="hero-secondary-button" type="button" @click="scrollToTemplates"><q-icon name="description" size="25px" />Browse templates</button>
              </div>
            </div>
            <div class="hero-motto">PEOPLE<br />PARTNERSHIPS<br />PROSPERITY</div>
          </section>

          <section class="home-section agreements-section" aria-labelledby="agreements-title">
            <div class="section-heading"><h2 id="agreements-title">My Agreements</h2><button class="section-link" type="button" @click="notify('All agreements opened.')">View all <q-icon name="arrow_forward" size="21px" /></button></div>
            <div class="agreement-grid">
              <article v-for="agreement in agreements" :key="agreement.title" class="agreement-card">
                <div class="agreement-card-top"><div class="home-icon" :class="`home-icon--${agreement.tone}`"><q-icon :name="agreement.icon" size="28px" /></div><button class="more-button" type="button" :aria-label="`More options for ${agreement.title}`" @click="notify(`More options for ${agreement.title}.`)"><q-icon name="more_horiz" size="23px" /></button></div>
                <div class="agreement-copy"><h3>{{ agreement.title }}</h3><p>{{ agreement.type }}</p><span class="status-pill" :class="`status-pill--${agreement.statusTone}`">{{ agreement.status }}</span><div class="agreement-meta"><q-icon name="schedule" size="19px" />{{ agreement.edited }}</div><div class="progress-row"><div class="progress-track"><span :class="`progress-fill progress-fill--${agreement.statusTone}`" :style="{ width: `${agreement.progress}%` }"></span></div><strong>{{ agreement.progress }}%</strong></div></div>
              </article>
            </div>
          </section>

          <section id="templates" class="home-section templates-section" aria-labelledby="templates-title">
            <div class="section-heading"><h2 id="templates-title">Start from a template</h2><button class="section-link" type="button" @click="notify('All templates opened.')">View all templates <q-icon name="arrow_forward" size="21px" /></button></div>
            <div class="template-grid">
              <article v-for="template in templates" :key="template.title" class="template-card" @click="openTemplate(template)">
                <div class="home-icon" :class="`home-icon--${template.tone}`"><q-icon :name="template.icon" size="28px" /></div><div class="template-copy"><h3>{{ template.title }}</h3><p>{{ template.description }}</p></div><q-icon class="template-arrow" name="arrow_forward" size="25px" />
              </article>
            </div>
          </section>
        </main>

        <footer class="dashboard-footer">
          <div class="dashboard-footer-inner content-width"><span>&copy; 2026 United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP). All rights reserved.</span><nav aria-label="Footer links"><button type="button" @click="notify('Privacy Policy selected.')">Privacy Policy</button><i></i><button type="button" @click="notify('Terms of Use selected.')">Terms of Use</button><i></i><button type="button" @click="notify('Contact selected.')">Contact</button></nav></div>
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const navItems = [
  { label: 'Home', icon: 'home', active: true },
  { label: 'My Agreements', icon: 'description' },
  { label: 'Templates', icon: 'library_books' },
  { label: 'Resources', icon: 'local_shipping' },
]
const agreements = [
  { title: 'ASEAN Digital Trade Draft', type: 'Digital Trade Agreement', status: 'In progress', statusTone: 'blue', edited: 'Edited 2 hours ago', progress: 68, icon: 'description', tone: 'blue' },
  { title: 'Pacific Data Cooperation Framework', type: 'Framework Agreement', status: 'In progress', statusTone: 'blue', edited: 'Edited yesterday', progress: 42, icon: 'description', tone: 'purple' },
  { title: 'Bilateral Digital Economy Agreement', type: 'Digital Economy Agreement', status: 'In progress', statusTone: 'blue', edited: 'Edited 4 days ago', progress: 21, icon: 'find_in_page', tone: 'teal' },
]
const templates = [
  { title: 'Digital Economy Agreement', description: 'Comprehensive digital\neconomy provisions.', icon: 'language', tone: 'blue' },
  { title: 'Digital Trade Agreement', description: 'Focus on trade in digital\ngoods and services.', icon: 'signal_cellular_alt', tone: 'purple' },
  { title: 'Framework Agreement', description: 'Flexible structure for\nregional cooperation.', icon: 'device_hub', tone: 'teal' },
  { title: 'Custom Agreement', description: 'Start from a blank\ntemplate.', icon: 'settings', tone: 'purple' },
]

function notify(message) { $q.notify({ message, color: 'dark', position: 'top', timeout: 1800 }) }
function handleNav(item) { if (!item.active) notify(`${item.label} is ready for the next mockup phase.`) }
function scrollToTemplates() { document.querySelector('#templates')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
function openTemplate(template) { if (template.title === 'Digital Economy Agreement') router.push('/templates/digital-economy-agreement'); else notify(`${template.title} selected.`) }
</script>
