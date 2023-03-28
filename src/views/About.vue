<template>
	<main>
		<section class="bg-gray-50 py-8 px-5 rounded">
			<div>
				<BackBtn />
				<p class="text-3xl my-2 font-medium">
					Hello, I'm {{ about.name }}
				</p>
				<small>
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

	const about = {
		name: 'Endrit',
		subs: [
			'Web Developer',
			'Programmer'
		]
	}
	
	const sosmed = [
		{
			icon: 'fab fa-github text-gray-800',
			href: 'https://github.com/endritprenku'
		},
		{
			icon: 'fab fa-instagram text-pink-600',
			href: 'https://www.instagram.com/endritprenku'
		}
	]
</script>
