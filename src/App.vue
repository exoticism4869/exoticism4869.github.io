<template>
	<div>
		<Home />
		<router-view name="Frontend"></router-view>
		<router-view name="Basketball"></router-view>
	</div>
</template>

<script>
	import Home from './components/home/Home.vue'
	export default {
		name: 'App',
		components: { Home }
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
