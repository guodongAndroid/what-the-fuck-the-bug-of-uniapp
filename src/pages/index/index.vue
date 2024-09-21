<template>
	<view>
		<view style="margin-top: 10px">不正常的</view>
		<view
			v-for="(c, ci) in 5"
			:key="ci"
			:style="{
				height: `${50}px`,
				background: '#336699',
				marginTop: `${10}px`,
				color: '#FFFFFF',
				textAlign: 'center',
				lineHeight: `${50}px`,
				marginBottom: `${10}px`,
			}"
		>
			{{ c }}
		</view>

		<view style="margin-top: 10px">正常的</view>
		<view
			v-for="(i, ci) in 5"
			:key="ci"
			:style="{
				height: `${50}px`,
				background: '#663399',
				marginTop: `${10}px`,
				color: '#FFFFFF',
				textAlign: 'center',
				lineHeight: `${50}px`,
			}"
		>
			{{ i }}
		</view>
	</view>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
