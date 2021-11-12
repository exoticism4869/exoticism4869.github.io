<template>
	<div class="context">
		<Temp />
	</div>
</template>

<script>
	import Temp from '../../assets/posts/frontend/html/temp.md'
	export default {
		data() {
			return {}
		},
		components: { Temp }
	}
</script>

<style lang="scss" scoped>
	.context {
		flex: 1;
		height: 100%;
		background-color: cadetblue;
	}
</style>
