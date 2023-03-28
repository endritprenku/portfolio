<template>
	<main>
		<section class="section">
			<strong class="text-3xl inline-block mb-8">
				Welcome to<span class="text-green-500"> Endrit's </span><span class="text-pink-500">Page</span> 👏🏻
			</strong>
			<p class="mb-5">
				This is an easy website made in Vue JS 3 + TailwindCSS
			</p>
			<a href="https://github.com/endritprenku" target="_blank" class="bg-gray-600 hover:bg-opacity-75 focus:ring-2 text-gray-50 px-5 py-2 rounded-lg inline-block">
				<i class="fab fa-github"></i>
				<span class="mx-2">Github</span>
			</a>
		</section>

		<section class="mb-6">
			<h1 class="text-xl mb-3">
				<i class="fa fa-chevron-right"></i>
				Routes
			</h1>
			<div class="flex gap-4">
				<template v-for="(route, i) in routes" :key="i">
					<a @click="movePage(route.to)" class="text-green-500 text-lg hover:text-green-200 duration-300">{{ route.name }}</a>
				</template>
			</div>			
		</section>
		<Footer />
	</main>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import Footer from '@/components/Footer.vue'
	
	const router = useRouter()

	const movePage = to => router.push({ name: to })

	const routes = [
		{
			name: 'About',
			to: 'About'
		}
	]
</script>

<style scoped>
	.section {
		@apply w-full bg-gray-50 py-8 px-5 rounded mb-8;
	}
</style>
