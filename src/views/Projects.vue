<template>
	<main>
	  <section class="flex justify-end">
		<DarkBtn />
	  </section>
  
	  <section class="bg-slate-50 dark:bg-slate-800 py-8 px-5 rounded">
		<div>
			<BackBtn />
		  <p class="text-3xl my-2 font-medium text-slate-900 dark:text-slate-200">
			Here are some coding<span class="text-violet-500"> projects </span>I
			have<span class="text-pink-500"> developed </span>and completed 👨‍💻
		  </p>
		</div>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
		  <template v-for="(item, i) in projects" :key="i">
			<div>
			  <img class="h-auto max-w-full rounded-lg" :src="item.image" />
			</div>
		  </template>
		</div>
	  </section>
	  <Footer />
	</main>
  </template>
  <script setup>
  import Footer from '@/components/Footer.vue'
  import BackBtn from '@/components/BackBtn.vue'
  import DarkBtn from '@/components/DarkBtn.vue'
  
  const projects = [
   {
	image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
	href: 'https://github.com/endritprenku'
   },
   {
	image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
	href: 'https://www.instagram.com/endritprenku'
   }
  ]
  </script>
  