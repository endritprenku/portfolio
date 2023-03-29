<template>
	<main>
	  <section class="flex justify-end">
		<DarkBtn />
	  </section>
	  
	  <section class="px-5 py-8 rounded bg-slate-50 dark:bg-slate-800">
		<div>
		  <BackBtn />
		  <p class="my-2 text-3xl font-medium text-slate-900 dark:text-slate-200">
			Hello, I'm {{ about.name }}
		  </p>
		  <small class="text-slate-600 dark:text-slate-400">
			{{ about.subs.join(' | ') }}
		  </small>
		</div>
		<div class="flex gap-2 mt-3">
		  <template v-for="(item, i) in sosmed" :key="i">
			<a :href="item.href" target="_blank">
			  <i :class="item.icon" class="text-2xl"></i>
			</a>
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
  
  const about = {
	  name: 'Endrit',
	  subs: [
		  'Web Developer',
		  'Programmer'
	  ]
  }
  
  const sosmed = [
	  {
		  icon: 'fab fa-github text-slate-900 dark:text-slate-200',
		  href: 'https://github.com/endritprenku'
	  },
	  {
		  icon: 'fab fa-instagram text-pink-600',
		  href: 'https://www.instagram.com/endritprenku'
	  }
  ]
  </script>
  