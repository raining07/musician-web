<template>
  <!-- HEADER START -->
  <div id="navbar-main">
    <!-- FIXED NAVBAR -->
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- LOGO -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" @click="doCollapse"> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
            <span class="icon-bar"></span> 
          </button>
          <router-link class="navbar-brand" to="/"><img src="/static/images/logo.png" alt="logo"></router-link>
        </div>
        <!-- / END LOGO -->
        <div :class="'navbar-collapse ' + this.collapse">
          <ul class="nav navbar-nav navbar-right">
            <!-- 动态菜单 -->
            <li v-for="(item, index) in topRoutes" :key="index" @click="doCollapse">
              <router-link :to="item.path"  class="smoothScroll">{{item.title}}</router-link>
            </li>
            <!-- 系统管理 -->
            <li class="dropdown">
              <a data-toggle="dropdown" class="dropdown-toggle js-activated" href="#">
                头像 <span class="caret"></span>
              </a>
              <ul role="menu" class="dropdown-menu">
                <li @click="doCollapse">
                  <router-link to="#">密码修改</router-link>
                </li>
                <li @click="doCollapse">
                  <router-link to="#">退出</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- / END HEADER -->

</template>

<script>
    import topRoutes from '@/router/index'

    export default {
      name: "NavBar",
      data () {
        return {
          collapse: 'collapse',
          topRoutes : topRoutes.options.routes
        }
      },
      methods: {
        doCollapse() {
          if (this.collapse == 'collapse') {
            this.collapse = ''
          } else if (this.collapse == '') {
            this.collapse = 'collapse'
          }
        }
      }
    }
</script>

<style scoped>

</style>
