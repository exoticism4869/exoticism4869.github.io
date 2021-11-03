<template>
	<div id="home">
		<Box name="Frontend" pathto="/box/frontend" />
		<Box name="Rap" pathto="/frontend" />
		<Box name="Basketball" pathto="/frontend" />
	</div>
</template>

<script>
	import Box from './Box.vue'
	export default {
		components: { Box }
	}
</script>

<style scoped>
	#home {
		display: flex;
		justify-content: space-around;
		background-color: rgb(106, 106, 214);
		height: 500px;
		width: 100%;
	}
</style>
