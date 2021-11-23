import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Mypage from "../views/Mypage.vue";
import Artist from "../views/Artist.vue";
import Artist2 from "../views/Artist2.vue";
import Collection from "../views/Collection.vue";
import about from "../views/About.vue";
import draw from "../views/Draw.vue";
import Detail from "../views/Detail.vue";
import Detail2 from "../views/Detail2.vue";
import rankUp from "../views/RankUp.vue";
import Status from "../views/Status.vue";
import banners from "../views/Banners.vue";
import ArtistMain from "../views/ArtistMain.vue";
import manager from "../views/Manager.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage,
  },
  {
    path: "/artist",
    name: "Artist",
    component: Artist,
  },
  {
    path: "/artist2",
    name: "Artist2",
    component: Artist2,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },

  {
    path: "/draw",
    name: "draw",
    component: draw,
  },

  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },

  {
    path: "/detail2",
    name: "Detail2",
    component: Detail2,
  },

  {
    path: "/rankUp",
    name: "rankUp",
    component: rankUp,
  },
  {
    path: "/Status",
    name: "Status",
    component: Status,
  },

  {
    path: "/banners",
    name: "banners",
    component: banners,
  },
  {
    path: "/artistmain",
    name: "ArtistMain",
    component: ArtistMain,
  },
  {
    path: "/manager",
    name: "manager",
    component: manager,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
