<template>
	<div>
		<router-view name="Home"></router-view>
		<router-view name="Frontend"></router-view>
		<router-view name="Basketball"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {}
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
