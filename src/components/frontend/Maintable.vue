<template>
	<div class="maintable">
		<Box />
		<Box />
		<Box />
		<Box />
	</div>
</template>

<script>
	import Box from './Box.vue'
	export default {
		components: {
			Box
		}
	}
</script>

<style scoped>
	.maintable {
		width: 60%;
		margin: auto;
		height: 100%;
		background-color: #bcdace;
		overflow: auto;
		max-height: 100%;
	}
</style>
