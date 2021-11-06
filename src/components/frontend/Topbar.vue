<template>
	<div class="topbar">
		<span>HTML</span>
		<span>CSS</span>
		<span>JS</span>
		<span>VUE</span>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	@font-face {
		font-family: 'TitilliumWeb';
		src: url('../../assets/fonts/TitilliumWeb-Light.ttf');
	}
	.topbar {
		margin: auto;
		display: flex;
		width: 80%;
		height: 10%;
	}
	span {
		font-family: 'TitilliumWeb';
		text-align: center;
		flex: auto;
		background-color: #c3cdd5;
		font-size: 40px;
		box-shadow: 0 1px 5px;
		transition: all 0.3s;
	}
	span:first-child {
		border-radius: 20px 0 0 0;
	}
	span:last-child {
		border-radius: 0 20px 0 0;
	}
	span:hover {
		box-shadow: 0 -1px 1px;
		background-color: #b6c6d4;
	}
</style>
