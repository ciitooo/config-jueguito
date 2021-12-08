<template>
</template>

<script>
export default {
	name: HolaMundo,
	data(){
		count: 0
	},
	methods: {
		inc() {
			this.count++;
			console.log(this.count);
		},
		dec() {
			this.count--;
			console.log(this.count);
		}
	}
}
</script>