import App from './App.vue'
import {createApp} from 'vue'
import store from './store'
import Toaster from "@meforma/vue-toaster";
import VueEasyLightbox from 'vue-easy-lightbox';

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
            console.log(mutations)
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


// setTimeout(() => {
//     try {


const app = createApp(App);
app.use(store)
app.use(Toaster, {position: "top-right"})
app.use(VueEasyLightbox)


waitForElm('#hexi_app').then(() => {
    app.mount('#hexi_app')
});

//     } catch (e) {
//         console.log('ok')
//     }
//
// }, 8000)
