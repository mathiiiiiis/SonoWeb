<script setup>
import Media from '@/config/mediaPaths.js'
</script>

<template>
  <div class="home">
    <Header />

    <section class="hero" data-section>
      <div class="hero-content fade-in">
        <h1 class="hero-title">Sono</h1>
        <p class="hero-subtitle">A local music player</p>

        <div class="download-buttons">
          <button v-if="!isIOS" class="btn-download primary" @click="downloadBeta">
            <svg width="45" xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 0 45 45" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g width="24" height="24" rx="0" ry="0" style="fill: rgb(0, 0, 0);"><g id="shape-6cb705e6-02c2-8012-8006-6681cdae5f5e" style="display: none;"><g class="fills" id="fills-6cb705e6-02c2-8012-8006-6681cdae5f5e"><rect width="45" height="45" x="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" style="fill: none;" ry="0" fill="none" rx="0" y="0"/></g></g><g id="shape-6cb705e6-02c2-8012-8006-6681cdb657c7"><g class="fills" id="fills-6cb705e6-02c2-8012-8006-6681cdb657c7"><path d="M28.078125,5.66064453125L29.8779296875,2.4130859375C29.974609375,2.23822021484375,29.91162109375,2.0177001953125,29.73681640625,1.9208984375C29.5615234375,1.823974609375,29.34130859375,1.88751220703125,29.24462890625,2.06243896484375L27.42578125,5.34368896484375C24.28662109375,3.96728515625,20.71533203125,3.96728515625,17.576171875,5.34368896484375L15.7578125,2.06243896484375C15.66015625,1.8863525390625,15.439453125,1.82220458984375,15.26318359375,1.9190673828125C15.08740234375,2.01593017578125,15.0234375,2.23712158203125,15.1201171875,2.4130859375L16.919921875,5.66064453125C13.4296875,7.38397216796875,11.1923828125,10.9111328125,11.1220703125,14.80316162109375L33.87939453125,14.80316162109375C33.80810546875,10.91033935546875,31.5703125,7.38287353515625,28.078125,5.66064453125M17.24951171875,10.63873291015625C16.865234375,10.63873291015625,16.5185546875,10.4068603515625,16.37109375,10.05145263671875C16.224609375,9.696044921875,16.30615234375,9.2869873046875,16.578125,9.01531982421875C16.8505859375,8.7435302734375,17.259765625,8.6627197265625,17.615234375,8.810302734375C17.970703125,8.9581298828125,18.201171875,9.30535888671875,18.20068359375,9.69000244140625C18.19970703125,10.21429443359375,17.77490234375,10.63873291015625,17.24951171875,10.63873291015625M27.75390625,10.63873291015625C27.369140625,10.63873291015625,27.0224609375,10.4068603515625,26.87548828125,10.05145263671875C26.728515625,9.696044921875,26.8095703125,9.2869873046875,27.08203125,9.01531982421875C27.35498046875,8.7435302734375,27.763671875,8.6627197265625,28.119140625,8.810302734375C28.4736328125,8.9581298828125,28.705078125,9.30535888671875,28.7041015625,9.69000244140625C28.703125,10.21429443359375,28.27783203125,10.63873291015625,27.75390625,10.63873291015625M11.1181640625,32.1956787109375C11.1181640625,32.9267578125,11.408203125,33.62823486328125,11.9248046875,34.14508056640625C12.4423828125,34.661865234375,13.1435546875,34.95147705078125,13.875,34.95001220703125L15.69921875,34.95001220703125L15.69921875,40.57501220703125C15.69921875,41.98382568359375,16.841796875,43.12591552734375,18.25048828125,43.12591552734375C19.6591796875,43.12591552734375,20.80126953125,41.98382568359375,20.80126953125,40.57501220703125L20.80126953125,34.95001220703125L24.20263671875,34.95001220703125L24.20263671875,40.57501220703125C24.20263671875,41.4859619140625,24.6884765625,42.32781982421875,25.4775390625,42.783447265625C26.26611328125,43.23883056640625,27.23828125,43.23883056640625,28.02734375,42.783447265625C28.81689453125,42.32781982421875,29.302734375,41.4859619140625,29.302734375,40.57501220703125L29.302734375,34.95001220703125L31.12890625,34.95001220703125C31.859375,34.95050048828125,32.5595703125,34.66070556640625,33.07568359375,34.14434814453125C33.591796875,33.62799072265625,33.8818359375,32.9276123046875,33.8818359375,32.19744873046875L33.8818359375,15.703125L11.1181640625,15.703125ZM7.6181640625,15.26434326171875C6.94140625,15.26434326171875,6.2919921875,15.53326416015625,5.814453125,16.0118408203125C5.3359375,16.49053955078125,5.0673828125,17.13958740234375,5.06787109375,17.8162841796875L5.06787109375,28.44561767578125C5.06787109375,29.85394287109375,6.2099609375,30.9957275390625,7.6181640625,30.9957275390625C9.0263671875,30.9957275390625,10.16845703125,29.85394287109375,10.16845703125,28.44561767578125L10.16845703125,17.8162841796875C10.16845703125,16.40802001953125,9.0263671875,15.26629638671875,7.6181640625,15.26629638671875M37.37841796875,15.26629638671875C36.70166015625,15.26629638671875,36.052734375,15.53509521484375,35.57421875,16.0137939453125C35.0966796875,16.492431640625,34.82763671875,17.1414794921875,34.82763671875,17.818115234375L34.82763671875,28.447509765625C34.82763671875,29.35845947265625,35.314453125,30.20037841796875,36.1025390625,30.65582275390625C36.89208984375,31.111328125,37.8642578125,31.111328125,38.6533203125,30.65582275390625C39.44189453125,30.20037841796875,39.927734375,29.35845947265625,39.927734375,28.447509765625L39.927734375,17.8162841796875C39.927734375,16.40802001953125,38.7861328125,15.26629638671875,37.37841796875,15.26629638671875"/></g></g></g></svg>
            {{ isAndroid ? 'Download for Android' : 'Download Beta' }}
          </button>

          <button v-if="isIOS" class="btn-download secondary" disabled>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z" fill="currentColor"/>
              <path d="M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
            </svg>
            Coming Soon for iOS
          </button>

          <button v-if="!isIOS && !isAndroid" class="btn-download secondary" disabled>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5Z" fill="currentColor"/>
              <path d="M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
            </svg>
            Soon, for iOS
          </button>
        </div>

        <div class="try-sonoweb">
          <a href="https://web.sono.wtf" target="_blank" class="link-secondary">
            Try SonoWeb
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section class="screen-recordings" data-section>
      <div class="recordings-container">
        <div class="recording tablet slide-in-left">
          <img :src="Media.images.tabletView" alt="Tablet View" class="recording-image" />
        </div>
        <div class="recording phone slide-in-right">
          <img :src="Media.images.phoneView" alt="Phone View" class="recording-image" />
        </div>
      </div>
    </section>

    <section class="scroll-text-section">
      <div class="scroll-text-container" :style="{ transform: `translateX(${scrollTextOffset}px)` }">
        <span class="scroll-text">FULLY FREE • LISTENS TO THE COMMUNITY • NO ADS • PRIVACY FIRST •&nbsp;</span>
        <span class="scroll-text">FULLY FREE • LISTENS TO THE COMMUNITY • NO ADS • PRIVACY FIRST •&nbsp;</span>
        <span class="scroll-text">FULLY FREE • LISTENS TO THE COMMUNITY • NO ADS • PRIVACY FIRST •&nbsp;</span>
        <span class="scroll-text">FULLY FREE • LISTENS TO THE COMMUNITY • NO ADS • PRIVACY FIRST •&nbsp;</span>
      </div>
    </section>

    <section class="features" data-section>
      <div class="features-container">
        <div
          class="feature-card fade-in-up"
          v-for="(feature, index) in features"
          :key="index"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="feature-preview">
            <template v-if="feature.video">
              <video
                :src="feature.video"
                autoplay
                loop
                muted
                playsinline
                preload="auto"
                class="feature-video"
              >
                Your browser does not support the video tag.
              </video>
              <div class="video-overlay"></div>
            </template>
            <span v-else class="preview-placeholder">Feature Preview</span>
          </div>
          <div class="feature-info">
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <nav class="bottom-nav">
      <div class="bottom-nav-container">
        <div class="nav-links">
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/versions" class="nav-link">Versions</router-link>
          <!--<a href="https://github.com/mathiiiiiis/SonoAPK" target="_blank" class="nav-link">GitHub</a>-->
          <a href="https://discord.sono.wtf" target="_blank" class="nav-link">Discord</a>
        </div>
        <router-link to="/careers" class="btn-join">Join the Team</router-link>
      </div>
    </nav>

    <footer class="footer">
      <div class="footer-links">
        <router-link to="/terms">Terms</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import { videos } from '@/config/mediaPaths.js'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      betaReleaseUrl: 'https://github.com/mathiiiiiis/SonoAPK/releases/download/1.0.8-beta%2Be5852a9/1.0.8-beta+e5852a9.apk',
      scrollTextOffset: 0,
      observer: null,
      animationId: null,
      baseOffset: 0,
      isAndroid: false,
      isIOS: false,
      features: [
        {
          title: 'Lyrics',
          description: 'Synced lyrics support',
          video: videos.feature_lyrics
        },
        {
          title: 'Playback',
          description: 'Crossfade, speed control, and more',
          video: videos.feature_playback
        },
        {
          title: 'Last.fm',
          description: 'Scrobble your tracks',
          video: videos.feature_lastfm
        },
        {
          title: 'Playlists',
          description: 'Create and organize your music',
          video: videos.feature_playlist
        }
      ]
    }
  },
  mounted() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    this.isAndroid = /android/i.test(userAgent)
    this.isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream

    this.$el.addEventListener('scroll', this.handleScroll, { passive: true })
    this.initScrollAnimations()
    this.startScrollAnimation()
  },
  beforeUnmount() {
    this.$el.removeEventListener('scroll', this.handleScroll)
    if (this.observer) {
      this.observer.disconnect()
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
  methods: {
    downloadBeta() {
      window.location.href = this.betaReleaseUrl;
    },
    handleScroll() {
      const scrollSpeed = this.$el.scrollTop * 0.3
      this.scrollTextOffset = this.baseOffset - scrollSpeed
    },
    startScrollAnimation() {
      const animate = () => {
        this.baseOffset -= 1
        if (this.baseOffset < -2000) {
          this.baseOffset = 0
        }
        this.handleScroll()
        this.animationId = requestAnimationFrame(animate)
      }
      this.animationId = requestAnimationFrame(animate)
    },
    initScrollAnimations() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animations = entry.target.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right')
            animations.forEach((el) => {
              el.classList.add('animate')
            })
          }
        })
      }, options)

      document.querySelectorAll('[data-section]').forEach((section) => {
        this.observer.observe(section)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/Home.scss';
</style>