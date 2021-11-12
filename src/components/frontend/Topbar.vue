<template>
	<div class="topbar">
		<span
			v-for="item in category"
			:key="item.id"
			:class="{ bingo: isBingo === item.id }"
			@mouseenter="enter(item.id, item.name)"
			>{{ item.name }}</span
		>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				category: [
					{
						id: 1,
						name: 'HTML'
					},
					{
						id: 2,
						name: 'CSS'
					},
					{
						id: 3,
						name: 'JS'
					},
					{
						id: 4,
						name: 'VUE'
					}
				],
				isBingo: 0
			}
		},
		methods: {
			enter(id, name) {
				this.isBingo = id
				console.log(this.$route)
				this.$router.replace('/frontend/' + name.toLowerCase())
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		&:first-child {
			border-radius: 20px 0 0 0;
		}
		&:last-child {
			border-radius: 0 20px 0 0;
		}
	}
	.bingo {
		box-shadow: 0 -1px 1px;
		background-color: #b6c6d4;
	}
</style>
