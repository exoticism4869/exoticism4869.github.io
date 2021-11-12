<template>
	<div id="basketball">
		<div class="topic">
			<p>Basketball</p>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: 'ZenAntique-Regular';
		src: url('../../assets/fonts/ZenAntique-Regular.ttf');
	}
	#basketball {
		width: calc(100vw - var(--scrollbar-width));
		height: 100vh;
		background-image: url('../../assets/img/kobe.jpg');
		background-size: cover;
		position: relative;
	}
	.topic {
		position: absolute;
		top: 400px;
		right: 100px;
		font-family: 'ZenAntique-Regular';
		color: white;
		font-size: 70px;
		font-weight: 100;
	}
</style>
