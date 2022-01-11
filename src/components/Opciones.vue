<template>
  
</template>

<script>
export default {
	name: 'Opciones',
	data(){
		return	 {
			'volumeActive': true,
			'volumeMute': false,
			muteButton: false
		}
	},
	computed: {
		buttonSoundComputed(){
			if (this.volumeActive == true) {
				this.volumeActive = false;
				this.volumeMute = true;
			}
			else {
				this.volumeActive = true;
				this.volumeMute = false;
			}
		}
	},
	methods: {
			buttonSound(){
			if (!muteButton) {
				this.muteButton = !this.muteButton
			}
		}
	}
}
</script>

<style>
</style>