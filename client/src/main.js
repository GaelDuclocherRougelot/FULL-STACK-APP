import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';

import './assets/main.css'
import './assets/base.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';



/* add icons to the library */
library.add(faHeart, faComment, faUserPlus)


const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.mount('#app')
