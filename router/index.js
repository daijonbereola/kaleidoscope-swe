

4 of 8,709
Files to push to new github
Inbox
x

Daijon Bereola-Carson <daijonbereola@gmail.com>
11:59 AM (1 hour ago)
to me

Gmail didn't allow me to attach the files to the email so I'm sending each file separately from a Google Drive folder so you can download them and upload to GitHub

src/main.js
https://drive.google.com/file/d/1-vlIp_YEl7GHVogqWuu8stIYtaOjh5xr/view?usp=sharing

src/firebase.js
https://drive.google.com/file/d/1ONqDlyprlQ3Uh2-c6B5g6UFm5Gyna2Qd/view?usp=sharing

src/components/auth.vue
https://drive.google.com/file/d/1CXSH0EO_ND4Y9xQBwQra2i41kzaB1CSP/view?usp=sharing

src/views/authPage.vue
https://drive.google.com/file/d/1j3KcwUL9Mbx_SEG6gwcuBa4LA9jyXCPj/view?usp=sharing

src/views/searchResultsPage.vue
https://drive.google.com/file/d/1SePf3WHFffWuPjXkXqHKOVYnIvhF2FK7/view?usp=sharing

src/router/index.js
https://drive.google.com/file/d/1PY66k-3ZSb2zsGi7Oh8dOB5oSh5QKd6l/view?usp=sharing

6 Attachments
Awesome, thanks!Thanks, I'll check them out.Done.

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import createPalettePage from "../views/createPalettePage";
import auth from "../views/authPage";
import searchResultsPage from "../views/searchResultsPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/create',
    name: "createPalettePage",
    component: createPalettePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/auth",
    name: "auth",
    component: auth
  },
  {
    path: "/search/:query",
    name: "search",
    component: searchResultsPage
  }


];

const router = new VueRouter({
  routes
});

export default router;
