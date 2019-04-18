<template>
  <section id="home">
    <div
      id="fn-home-carousel"
      class="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="2000"
    >
      <a class="item-prev" @click="goPrev" role="button" data-slide="prev">
        <i class="fa fa-angle-left"></i>
      </a>
      <a class="item-next" @click="goNext" role="button" data-slide="next">
        <i class="fa fa-angle-right"></i>
      </a>
      <div class="carousel-inner">
        <div v-for="(item, index) in carousels" :key="index" :class="'item ' + item.active">
          <img :src="item.image" :alt="item.alt" class="img-responsive">
          <div class="carousel-caption">
            <h1 class="animated fadeInDown delay-1">
              <span>{{item.title}}</span>
            </h1>
            <p class="animated fadeInDown delay-3">{{item.description}}</p>
            <a class="btn animated fadeInUp delay-4" :href="item.link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      timer: '',
      loopIndex: 0,
      carousels: [
        {
          image: '/static/images/slider/slide-1.jpg',
          alt: '第一张',
          active: 'active',
          title: 'awesome with winner',
          description: 'Build beautiful and professional sites in just moments ',
          link: "http://www.baidu.com"
        },
        {
          image: '/static/images/slider/slide-2.jpg',
          alt: '第二张',
          active: '',
          title: 'Fully Responsive',
          description: 'The perfect layout for your agency/portfolio site ',
          link: '#'
        },
        {
          image: '/static/images/slider/slide-3.jpg',
          alt: '第三张',
          active: '',
          title: 'Modern and elegant',
          description: 'One solution design with lot features',
          link: '#'
        }
      ]
    }
  },
  methods: {
    // 播放
    play() {
      this.timer = setInterval(this._next, 3000)
    },
    // 停止播放
    stop() {
      clearInterval(this.timer)
    },
    // 重启播放
    restart() {
      this.stop()
      this.play()
    },
    // 往前翻一个
    _prev() {
      this.carousels[this.loopIndex].active = ''
      this.loopIndex = this.loopIndex == 0 ? this.carousels.length - 1 : this.loopIndex - 1
      this.carousels[this.loopIndex].active = 'active'
    },
    // 往后翻一个
    _next() {
      this.carousels[this.loopIndex].active = ''
      this.loopIndex = this.loopIndex == this.carousels.length - 1 ? 0 : this.loopIndex + 1
      this.carousels[this.loopIndex].active = 'active'
    },
    // 往前翻一个,并重启播放
    goPrev() {
      this._prev()
      this.restart()
    },
    // 往后翻一个,并重启播放
    goNext() {
      this._next()
      this.restart()
    }
  },
  mounted() {
    this.play()
  }
};
</script>

<style scoped>
</style>
