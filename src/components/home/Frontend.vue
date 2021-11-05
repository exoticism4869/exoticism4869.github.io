<template>
	<div id="frontend">
		<div class="topic">
			<p>Frontend</p>
			<div class="subtopics">
				<p>HTML</p>
				<p>CSS</p>
				<p>JS</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {}
	}
</script>

<style scoped>
	@font-face {
		font-family: 'ZenAntique-Regular';
		src: url('../../assets/fonts/ZenAntique-Regular.ttf');
	}
	@font-face {
		font-family: 'TitilliumWeb';
		src: url('../../assets/fonts/TitilliumWeb-Light.ttf');
	}
	#frontend {
		width: calc(100vw - var(--scrollbar-width));
		height: 100vh;
		font-family: 'ZenAntique-Regular';
		background-image: url('../../assets/img/frontend.png');
		background-repeat: no-repeat;
		background-size: 50%;
		background-position: 200px 150px;
		position: relative;
	}
	.topic {
		position: absolute;
		top: 400px;
		right: 100px;
		font-size: 70px;
		font-weight: 100;
	}
	.subtopics {
		font-family: 'TitilliumWeb';
		font-size: 35px;
	}
</style>
