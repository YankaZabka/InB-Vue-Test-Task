<template>
  <div id="app">
    <HeaderItem/>
    <MainContent>
      <div>
        <h1>Welcome to Your App</h1>
        <!-- Other content -->
      </div>
    </MainContent>
  </div>
</template>
<script>
import {MainContent, HeaderItem} from './components'

export default {
  name: 'App',
  components: {
    MainContent,
    HeaderItem
  }
}
</script>

<style>
</style>
