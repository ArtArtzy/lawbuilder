import { createApp } from 'vue'
import {
  Quasar,
  Notify,
  QBtn,
  QCard,
  QCardSection,
  QCheckbox,
  QDialog,
  QIcon,
  QInput,
  QLayout,
  QPage,
  QPageContainer,
  QSelect,
} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './css/app.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
  .use(Quasar, {
    components: {
      QBtn,
      QCard,
      QCardSection,
      QCheckbox,
      QDialog,
      QIcon,
      QInput,
      QLayout,
      QPage,
      QPageContainer,
      QSelect,
    },
    plugins: { Notify },
    config: {
      brand: {
        primary: '#1476f8',
        secondary: '#172c67',
        accent: '#7d63ed',
      },
    },
  })
  .use(router)
  .mount('#app')
