<template>
	<div class="main">
		<router-view />
	</div>
</template>

<script>
	export default {
		components: {}
	}
</script>

<style lang="scss" scoped>
	.main {
		width: 80%;
		height: 90%;
		margin: auto;
		background-color: white;
		border-radius: 0 0 20px 20px;
		box-shadow: 0 1px 5px;
	}
</style>
