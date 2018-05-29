<template>
  <transition name="slider">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script>
import MusicList from 'components/music-list/music-list'
import { mapGetters } from 'vuex'
export default {
  computed: {
    title () {
      return this.topList.topTitle
    },
    bgImage () {
      return this.topList.picUrl
    },
    ...mapGetters([
      'topList'
    ])
  },
  components: {
    MusicList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.slider-enter-active, .slider-leave-active
  transition all 0.3s ease
.slider-enter, .slider-leave-to
  transform translate3d(100%, 0, 0)
</style>
