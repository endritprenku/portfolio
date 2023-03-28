<template>
	<main>
	  <section class="flex justify-end">
		<DarkBtn />
	  </section>
  
	  <section class="section bg-slate-50 dark:bg-slate-800">
		<strong
		  class="text-3xl inline-block mb-8 text-slate-900 dark:text-slate-200"
		>
		  Welcome to<span class="text-green-500"> Endrit's </span
		  ><span class="text-pink-500">Page</span> 👏🏻
		</strong>
		<p class="mb-5 text-slate-600 dark:text-slate-400">
		  This is an easy website made in Vue JS 3 + TailwindCSS
		</p>
		<a
		  href="https://github.com/endritprenku"
		  target="_blank"
		  class="bg-gray-600 hover:bg-opacity-75 focus:ring-2 text-gray-50 px-5 py-2 rounded-lg inline-block"
		>
		  <i class="fab fa-github"></i>
		  <span class="mx-2">Github</span>
		</a>
	  </section>
  
	  <section class="section bg-slate-50 dark:bg-slate-800">
		<div class="flex flex-col justify-center h-full">
		  <strong
			class="text-2xl inline-block mb-4 text-center text-slate-900 dark:text-slate-200"
		  >
			✨ <span class="text-red-500"> Quote </span> ✨
		  </strong>
		  <div
			class="h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
		  >
			<ul class="my-4 space-y-3">
			  <li>
				<a
				  class="inline-block w-full min-h-4rem flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white break-words"
				>
				  <span class="flex-1 ml-3">{{ quote }}</span>
				</a>
			  </li>
			</ul>
			<div>
			  <a
				class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400"
				>-{{ author }}</a
			  >
			</div>
		  </div>
		</div>
	  </section>
  
	  <section class="mb-6">
		<h1 class="text-xl mb-3 text-slate-900 dark:text-slate-200">
		  <i class="fa fa-chevron-right"></i>
		  Routes
		</h1>
		<div class="flex gap-4">
		  <template v-for="(route, i) in routes" :key="i">
			<a
			  @click="movePage(route.to)"
			  class="text-green-500 text-lg hover:text-green-200 duration-300"
			  >{{ route.name }}</a
			>
		  </template>
		</div>
	  </section>
	  <Footer />
	</main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import Footer from '@/components/Footer.vue'
  import DarkBtn from '@/components/DarkBtn.vue'
  
  const router = useRouter()
  
  const movePage = to => router.push({ name: to })
  
  const routes = [
	{
	  name: 'About',
	  to: 'About'
	},
	{
	  name: 'Projects',
	  to: 'Projects'
	}
  ]
  
  const quote = ref('')
  const author = ref('')
  
  const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=inspirational`
  const apiKey = 'gRFjZMpCCqvtIz5GsUVh5w==F2nuJJtPbLqVbZkm'
  
  async function fetchQuotes() {
	try {
	  const response = await fetch(apiUrl, {
		headers: {
		  'X-Api-Key': apiKey,
		  'Content-Type': 'application/json',
		},
	  });
  
	  const data = await response.json();
	  quote.value = data[0].quote;
	  author.value = data[0].author;
	} catch (error) {
	  console.error('Error: ', error);
	}
  }
  
  onMounted(fetchQuotes)
  </script>
  
  <style scoped>
  .section {
	@apply w-full py-8 px-5 rounded mb-8;
  }
  </style>
  