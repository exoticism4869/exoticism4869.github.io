<template>
	<div>
		<Top />
		<router-view></router-view>
	</div>
</template>

<script>
	import Top from './components/Top.vue'
	export default {
		name: 'App',
		components: { Top }
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
</style>
