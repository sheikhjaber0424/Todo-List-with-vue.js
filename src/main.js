import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css" ;

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)


createApp(App)
.component('fa',FontAwesomeIcon)
.mount('#app')
