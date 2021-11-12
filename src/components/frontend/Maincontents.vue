<template>
	<div class="maincontents">
		<Leftbar />
		<Context />
		<Rightbar />
	</div>
</template>

<script>
	import Leftbar from './Leftbar.vue'
	import Context from './Context.vue'
	import Rightbar from './Rightbar.vue'
	export default {
		components: { Leftbar, Context, Rightbar }
	}
</script>

<style lang="sass" scoped>
	.maincontents{
		height: 100%;
		display: flex;
	}
</style>
