<template>
  <q-layout view="lHh Lpr lFf" class="login-layout">
    <q-page-container>
      <q-page class="login-page">
        <div class="backdrop" aria-hidden="true"></div>

        <header class="topbar content-width">
          <div class="brand-lockup">
            <span class="brand-mark">UNESCAP</span>
            <span class="brand-divider"></span>
            <span class="brand-product"><strong>Digital Policy Drafting Platform</strong><small>Based on the AP-MDEA framework</small></span>
          </div>
          <div class="topbar-actions">
            <button class="utility-button" type="button" @click="notify('Language selector is ready for the next mockup phase.')">
              <q-icon name="language" size="23px" /><span>English</span><q-icon name="keyboard_arrow_down" size="19px" />
            </button>
            <span class="utility-divider"></span>
            <button class="utility-button" type="button" @click="notify('Help center is available in the production flow.')">
              <q-icon name="help_outline" size="23px" /><span>Help</span>
            </button>
          </div>
        </header>

        <main class="main-content content-width">
          <section class="intro-panel" aria-labelledby="page-title">
            <div class="eyebrow">SHAPING AN INCLUSIVE DIGITAL ECONOMY</div>
            <h1 id="page-title">Digital Policy<br />Drafting Platform</h1>
            <p class="intro-copy">Explore modules, compare options, and<br />draft digital economy provisions.</p>
            <div class="feature-list">
              <div v-for="feature in features" :key="feature.title" class="feature-item">
                <div class="feature-icon" :class="`feature-icon--${feature.tone}`"><img :src="feature.icon" :alt="`${feature.title} icon`" /></div>
                <div class="feature-copy"><h2>{{ feature.title }}</h2><p>{{ feature.description }}</p></div>
              </div>
            </div>
            <div class="motto"><span class="motto-line"></span><span>PEOPLE<br />PARTNERSHIPS<br />PROSPERITY</span></div>
          </section>

          <section class="auth-column" aria-label="Authentication">
            <q-card class="auth-card" flat>
              <div class="auth-tabs" role="tablist" aria-label="Authentication options">
                <button class="auth-tab" :class="{ 'auth-tab--active': activeTab === 'signin' }" type="button" role="tab" :aria-selected="activeTab === 'signin'" @click="activeTab = 'signin'">Sign in</button>
                <button class="auth-tab" :class="{ 'auth-tab--active': activeTab === 'signup' }" type="button" role="tab" :aria-selected="activeTab === 'signup'" @click="activeTab = 'signup'">Sign up</button>
              </div>

              <form v-if="activeTab === 'signin'" class="auth-form" @submit.prevent="submitSignIn">
                <div class="form-heading"><h2>Welcome back</h2><p>Sign in to continue.</p></div>
                <q-input v-model="email" class="form-input" label="Email" placeholder="name@organization.org" type="email" outlined hide-bottom-space autocomplete="email">
                  <template #prepend><q-icon name="mail_outline" /></template>
                </q-input>
                <q-input v-model="password" class="form-input" label="Password" placeholder="Enter your password" :type="showPassword ? 'text' : 'password'" outlined hide-bottom-space autocomplete="current-password">
                  <template #prepend><q-icon name="lock_outline" /></template>
                  <template #append><q-icon :name="showPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="showPassword = !showPassword" /></template>
                </q-input>
                <div class="form-options">
                  <q-checkbox v-model="rememberMe" label="Remember me" dense color="primary" />
                  <button class="text-link" type="button" @click="notify('Password recovery flow opened.')">Forgot password?</button>
                </div>
                <q-btn class="primary-action" unelevated no-caps type="submit" label="Sign in"><q-icon name="arrow_forward" size="22px" /></q-btn>
                <div class="or-divider"><span>or</span></div>
                <q-btn class="secondary-action" outline no-caps type="button" label="Create account" @click="activeTab = 'signup'"><q-icon name="arrow_forward" size="22px" /></q-btn>
                <div class="community-callout">
                  <q-icon name="verified_user" size="32px" />
                  <span class="community-divider"></span>
                  <p class="community-copy">Open to researchers, policymakers<br />and practitioners.</p>
                </div>
              </form>

              <form v-else class="auth-form signup-form" @submit.prevent="submitSignUp">
                <div class="form-heading"><h2>Create your account</h2><p>Create an account to access the platform.</p></div>
                <div class="signup-name-grid">
                  <q-input v-model="givenName" class="form-input" label="First name *" outlined hide-bottom-space><template #prepend><q-icon name="person_outline" /></template></q-input>
                  <q-input v-model="familyName" class="form-input" label="Last name *" outlined hide-bottom-space><template #prepend><q-icon name="person_outline" /></template></q-input>
                </div>
                <q-input v-model="email" class="form-input" label="Email address *" placeholder="name@organization.org" type="email" outlined hide-bottom-space><template #prepend><q-icon name="mail_outline" /></template></q-input>
                <q-input v-model="organization" class="form-input" label="Organization / Affiliation *" placeholder="e.g. University, Government, Company, NGO" outlined hide-bottom-space><template #prepend><q-icon name="business" /></template></q-input>
                <q-select v-model="country" class="form-input" label="Country / Economy *" placeholder="Select your country or economy" :options="countryOptions" outlined hide-bottom-space><template #prepend><q-icon name="language" /></template><template #append><q-icon name="keyboard_arrow_down" /></template></q-select>
                <q-input v-model="password" class="form-input" label="Password *" placeholder="Create a password" :type="showPassword ? 'text' : 'password'" outlined hide-bottom-space><template #prepend><q-icon name="lock_outline" /></template><template #append><q-icon :name="showPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="showPassword = !showPassword" /></template></q-input>
                <q-checkbox v-model="agreeToTerms" class="terms-checkbox" dense color="primary"><span>I agree to the <button class="inline-link" type="button" @click.stop="notify('Terms of Use selected.')">Terms of Use</button> and <button class="inline-link" type="button" @click.stop="notify('Privacy Policy selected.')">Privacy Policy</button>.</span></q-checkbox>
                <q-btn class="primary-action" unelevated no-caps type="submit" label="Create account"><q-icon name="arrow_forward" size="22px" /></q-btn>
              </form>
            </q-card>
          </section>
        </main>

        <footer class="footer">
          <div class="footer-inner content-width"><span>&copy; 2026 United Nations Economic and Social Commission for Asia and the Pacific (UNESCAP). All rights reserved.</span><nav aria-label="Footer links"><button type="button" @click="notify('Privacy Policy selected.')">Privacy Policy</button><i></i><button type="button" @click="notify('Terms of Use selected.')">Terms of Use</button><i></i><button type="button" @click="notify('Contact selected.')">Contact</button></nav></div>
        </footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const $q = useQuasar()
const router = useRouter()
const activeTab = ref('signin')
const email = ref('')
const password = ref('')
const organization = ref('')
const givenName = ref('')
const familyName = ref('')
const country = ref(null)
const agreeToTerms = ref(true)
const rememberMe = ref(true)
const showPassword = ref(false)
const countryOptions = ['Afghanistan', 'Australia', 'Bangladesh', 'China', 'India', 'Indonesia', 'Japan', 'New Zealand', 'Philippines', 'Singapore', 'Thailand', 'United States']
const features = [
  { title: 'Explore modules', description: 'Browse policy options.', icon: '/assets/icon-document.webp', tone: 'blue' },
  { title: 'Compare options', description: 'Review alternatives.', icon: '/assets/icon-scales.webp', tone: 'teal' },
  { title: 'Draft and export', description: 'Build and download.', icon: '/assets/icon-chart.webp', tone: 'purple' },
]

function notify(message) { $q.notify({ message, color: 'dark', position: 'top', timeout: 1800 }) }
function submitSignIn() { router.push('/home') }
function submitSignUp() { if (!givenName.value || !familyName.value || !email.value || !organization.value || !country.value || !password.value || !agreeToTerms.value) { notify('Please complete the required fields to continue.'); return }; notify('Account creation submitted — mockup flow only.') }
</script>
