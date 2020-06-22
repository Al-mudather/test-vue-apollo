<template>
    <div class="videoGroup">
        <video id="vid" :src="src" autoplay="true" ref="vidoTage"></video>
        <button id="btn"  @click="start" ref="btn">Start</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            src: "nothing"
        }
    },
    methods: {
        start () {
            navigator.mediaDevices.getUserMedia({video:true}, this.gotStream, function () {});
            this.$refs.btn.disabled = true;
        },
        gotStream (strem) {
            // this.$refs.vidoTage.src = this.$root.webkitURL.createObjectURL(strem);
            this.src =  this.$root.webkitURL.createObjectURL(strem);
            console.log(this.src);
        }
    }
}
</script>

<style>

</style>