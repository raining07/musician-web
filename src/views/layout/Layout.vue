<template>
  <div data-spy="scroll" data-offset="0" data-target="#navbar-main">
    <nav-bar/>
    <app-main/>
    <footer-bar/>
  </div>
</template>

<script>
  import { NavBar, AppMain, FooterBar} from './components/index'

  export default {
    name: "Layout",
    components: {
      NavBar,
      AppMain,
      FooterBar
    }
  }
</script>

<style scoped>

</style>
