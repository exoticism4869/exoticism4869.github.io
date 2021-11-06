<template>
	<div id="frontend">
		<div class="topic">
			<router-link class="underline" to="/frontend">Frontend</router-link>
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
	@keyframes underline-in-out {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
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
	.underline {
		position: relative;
	}
	.underline::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0;
		display: inline-block;
		background-color: black;
		height: 2px;
		width: 100%;
		/* animation: underline-in-out 0.5s; */
		transform: scaleX(0);
		transform-origin: 100% 0;
		transition: transform 0.5s;
	}
	.underline:hover::after {
		/* animation: underline-in-out 0.5s; */
		transform: scaleX(1);
		transform-origin: 0 0;
	}
</style>
