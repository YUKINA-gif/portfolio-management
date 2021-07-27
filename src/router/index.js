import Vue from "vue";
import VueRouter from "vue-router";
import Create from "../views/Create.vue";
import Update from "../views/Update.vue";
import Skill from "../views/Skill.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Create",
    component: Create,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
  {
    path: "/skill",
    name: "Skill",
    component: Skill,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
