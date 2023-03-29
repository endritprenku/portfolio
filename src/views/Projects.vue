<template>
	<main>
	  <section class="flex justify-end">
		<DarkBtn />
	  </section>
  
	  <section class="px-5 py-8 rounded bg-slate-50 dark:bg-slate-800">
		<div>
		  <BackBtn />
		  <p class="my-3 text-2xl font-medium text-slate-900 dark:text-slate-200">
			Here are some coding<span class="text-violet-500"> projects </span>I
			have<span class="text-pink-500"> developed </span>and completed 👨‍💻
		  </p>
		</div>
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
		  <template v-for="(item, i) in projects" :key="i">
			<div class="group">
			  <div class="relative">
				<a target="_blank" :href="item.href">
				  <img class="h-auto max-w-full rounded-lg" :src="item.image" />
				  <p
					class="absolute inset-0 flex items-center justify-center text-white bg-black rounded-lg opacity-0 group-hover:opacity-100"
				  >
					{{ item.description }}
				  </p>
				</a>
			  </div>
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
  href: 'https://github.com/endritprenku',
  description: "VALORANT"
	},
	{
  image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  href: 'https://www.instagram.com/endritprenku',
  description: "CSGO"
	},
	{
  image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  href: 'https://github.com/endritprenku',
  description: "FORTNITE"
	},
	{
  image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  href: 'https://www.instagram.com/endritprenku',
  description: "LAST OF US"
	}
   ]
  </script>
  