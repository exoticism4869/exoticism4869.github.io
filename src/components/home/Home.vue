<template>
	<div id="home">
		<p>&nbsp;&nbsp; Welcome To</p>
		<p>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seb's
		</p>
	</div>
</template>

<script>
	export default {
		components: {}
	}
</script>

<style lang="scss" scoped>
	// @use '../../assets/styles/fonts';
	@font-face {
		font-family: 'Raleway';
		src: url('../../assets/fonts/Raleway-VariableFont_wght.ttf');
	}
	#home {
		display: relative;
		font-family: 'Raleway';
		font-size: 120px;
		font-weight: 900;
		color: white;
		width: calc(100vw - var(--scrollbar-width));
		height: 100vh;
		background-image: url('../../assets/img/xian.webp');
		background-size: cover;
	}
</style>
