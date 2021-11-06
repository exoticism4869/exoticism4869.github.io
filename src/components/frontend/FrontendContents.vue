<template>
	<div id="frontend-contents">
		<Topbar />
		<Main />
	</div>
</template>

<script>
	import Topbar from './Topbar.vue'
	import Main from './Main.vue'
	export default {
		components: { Topbar, Main }
	}
</script>

<style scoped>
	#frontend-contents {
		width: calc(100vw - var(--scrollbar-width));
		height: 100vh;
		background-color: #eee1d2;
	}
</style>
