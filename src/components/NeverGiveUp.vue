<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <VideoWebRTC />
  </div>
</template>

<script>
import VideoWebRTC from './VideoWebRTC';
export default {
  name: 'neverGiveUp',
  data () {
    return {
      msg: "Never Give Up"

    }
  },
  components : {
    VideoWebRTC
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
