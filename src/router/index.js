import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import AgreementSetupPage from '../pages/AgreementSetupPage.vue'
import DraftingWorkspacePage from '../pages/DraftingWorkspacePage.vue'
import Article21Page from '../pages/Article21Page.vue'
import Article22Page from '../pages/Article22Page.vue'
import Article23Page from '../pages/Article23Page.vue'
import Article24Page from '../pages/Article24Page.vue'
import Article25Page from '../pages/Article25Page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/', redirect: '/login' },
      { path: '/login', name: 'login', component: LoginPage },
      { path: '/home', name: 'home', component: HomePage },
      { path: '/templates/digital-economy-agreement', name: 'agreement-setup', component: AgreementSetupPage },
      { path: '/drafting-workspace', name: 'drafting-workspace', component: DraftingWorkspacePage },
      { path: '/drafting-workspace/article-2.1', name: 'article-2.1', component: Article21Page },
      { path: '/drafting-workspace/article-2.2', name: 'article-2.2', component: Article22Page },
      { path: '/drafting-workspace/article-2.3', name: 'article-2.3', component: Article23Page },
      { path: '/drafting-workspace/article-2.4', name: 'article-2.4', component: Article24Page },
      { path: '/drafting-workspace/article-2.5', name: 'article-2.5', component: Article25Page },
  ],
})

router.afterEach((to) => {
  document.title = to.name === 'agreement-setup'
      ? 'Digital Policy Drafting Platform — Agreement setup'
      : to.name === 'drafting-workspace'
        ? 'Digital Policy Drafting Platform — Drafting Workspace'
      : to.name === 'article-2.1'
        ? 'Digital Policy Drafting Platform — Article 2.1'
      : to.name === 'article-2.2'
        ? 'Digital Policy Drafting Platform — Article 2.2'
      : to.name === 'article-2.3'
        ? 'Digital Policy Drafting Platform — Article 2.3'
      : to.name === 'article-2.4'
        ? 'Digital Policy Drafting Platform - Article 2.4'
      : to.name === 'article-2.5'
        ? 'Digital Policy Drafting Platform - Article 2.5'
      : to.name === 'home'
        ? 'Digital Policy Drafting Platform — Home'
        : 'AP-MDEA Builder — Sign in'
})

export default router
