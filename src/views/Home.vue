<template>
	<main>
	  <section class="flex justify-end">
		<DarkBtn />
	  </section>
  
	  <section class="section bg-slate-50 dark:bg-slate-800">
		<strong
		  class="inline-block mb-8 text-3xl text-slate-900 dark:text-slate-200"
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
		  class="inline-block px-5 py-2 bg-gray-600 rounded-lg hover:bg-opacity-75 focus:ring-2 text-gray-50"
		>
		  <i class="fab fa-github"></i>
		  <span class="mx-2">Github</span>
		</a>
	  </section>
  
	  <section class="section bg-slate-50 dark:bg-slate-800">
		<div
		  :class="isLoading ? 'opacity-30' : ''"
		  class="flex flex-col justify-center h-full"
		>
		  <strong
			class="inline-block mb-4 text-2xl text-center text-slate-900 dark:text-slate-200"
		  >
			✨ <span class="text-red-500"> Quote </span> ✨
		  </strong>
		  <div
			class="h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
		  >
			<ul class="my-4 space-y-3">
			  <li>
				<a
				  class="flex items-center inline-block w-full p-3 text-base font-bold text-gray-900 break-words rounded-lg min-h-4rem bg-gray-50 dark:bg-gray-600 dark:text-white"
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
		<h1 class="mb-3 text-xl text-slate-900 dark:text-slate-200">
		  <i class="fa fa-chevron-right"></i>
		  Menu
		</h1>
		<div class="flex gap-4">
		  <template v-for="(route, i) in routes" :key="i">
			<a
			  @click="movePage(route.to)"
			  class="text-lg text-green-500 duration-300 hover:text-green-200"
			  >{{ route.name }}</a
			>
		  </template>
		</div>
		<div
		  role="status"
		  v-if="isLoading"
		  class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
		>
		  <svg
			aria-hidden="true"
			class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
			viewBox="0 0 100 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<path
			  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
			  fill="currentColor"
			/>
			<path
			  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
			  fill="currentFill"
			/>
		  </svg>
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
  },
  {
	name: 'Notes',
	to: 'Notes'
  }
   ]
  
   const quote = ref('')
   const author = ref('')
   const isLoading = ref(true)
  
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
	isLoading.value = false;
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
  