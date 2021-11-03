<template>
	<div id="frontend">
		<Box name="HTML" pathto="/box/frontend/html" />
		<Box name="CSS" pathto="/box/frontend/css" />
		<Box name="JS" pathto="/box/frontend/js" />
	</div>
</template>

<script>
	import Box from './Box.vue'
	export default {
		components: { Box }
	}
</script>

<style>
	#frontend {
		display: flex;
		justify-content: space-around;
		background-color: rgb(106, 106, 214);
		height: 500px;
		width: 100%;
	}
</style>
