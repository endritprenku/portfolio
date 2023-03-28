<template>
	<main class="bg-neutral-200 dark:bg-slate-900 min-h-screen">
	  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<transition
		  enter-from-class="opacity-0"
		  leave-to-class="opacity-0"
		  enter-active-class="transition duration-300"
		  leave-active-class="transition duration-300"
		>
		  <router-view></router-view>
		</transition>
	  </div>
	</main>
  </template>
  