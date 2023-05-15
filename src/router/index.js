import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Notes from '@/views/Notes.vue'

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'About',
		path: '/about',
		component: About
	},
	{
		name: 'Projects',
		path: '/projects',
		component: Projects
	},
	{
		name: 'Notes',
		path: '/notes',
		component: Notes
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

const websiteName = "Endrit";
router.beforeEach((to, from, next) => {
  document.title = `${websiteName} - ${to.name}`;
  next();
});

export default router
