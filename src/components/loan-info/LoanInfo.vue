<template>
    <b-container class="main-container d-flex">

      <transition name="slide-fade">
        <ViewInfo v-if="ViewMode" @toggleView="toggleView" />
        <EditInfo v-else @toggleView="toggleView" />
      </transition>

    </b-container>
</template>

<script>
import * as LC from "./components"

export default {
  components: {
    ViewInfo: LC.ViewInfo,
    EditInfo: LC.EditInfo
  },
  data: function () {
    return {
      ViewMode: true
    }
  },
  methods: {
    toggleView() {
      this.ViewMode = !this.ViewMode
    }
  }
}
</script>

<style scoped>
.main-container {
  background-color: #2B0A57;
  min-height: 58px;
  border-radius: 30px;
  max-width: 800px;

  margin-bottom: 10px;

  color: #FDFDFD;

  padding: 13px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>