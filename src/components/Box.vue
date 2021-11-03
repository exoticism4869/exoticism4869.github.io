<template>
	<router-link id="box" :to="{ path: pathto }">{{ name }}</router-link>
</template>

<script>
	export default {
		props: { name: String, pathto: String },
		data() {
			return {}
		}
	}
</script>

<style scoped>
	#box {
		width: 200px;
		height: 200px;
		background-color: aqua;
	}
</style>
