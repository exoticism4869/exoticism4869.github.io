<template>
	<div class="main">
		<Maintable />
	</div>
</template>

<script>
	import Maintable from './Maintable.vue'
	export default {
		components: { Maintable }
	}
</script>

<style scoped>
	.main {
		width: 80%;
		height: 90%;
		margin: auto;
		background-color: white;
		border-radius: 0 0 20px 20px;
		box-shadow: 0 1px 5px;
	}
</style>
