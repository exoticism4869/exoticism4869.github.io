<template>
	<div class="maintable">
		<div class="contents">
			<ul>
				<li v-for="item in posts" :key="item.title">
					<router-link :to="item.path">{{ item.title }}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				posts: [
					{
						title: 'asffdas',
						path: '/frontend/html/canvas'
					},
					{
						title: 'wrewtret',
						path: ''
					},
					{
						title: 'lkjxvxcbcvb',
						path: ''
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@font-face {
		font-family: 'TitilliumWeb';
		src: url('../../assets/fonts/TitilliumWeb-Light.ttf');
	}
	.maintable {
		font-family: 'TitilliumWeb';
		font-size: 40px;
		width: 80%;
		margin: auto;
		height: 100%;
		background-color: #bcdace;
		overflow: auto;
		max-height: 100%;
	}
	.contents {
		width: 50%;
		ul > li {
			transition: all 0.5s;
			&:hover {
				font-size: 50px;
			}
		}
	}
</style>
