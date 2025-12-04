<template>
  <header class="app-header" :class="{ 'header-visible': isHeaderVisible }">
    <div class="header-left">
      <router-link to="/" class="logo">
        <img :src="logoPath" alt="Sono" class="logo-icon" />
      </router-link>
    </div>

    <div class="header-right">
      <a href="https://ko-fi.com/mathiiis" target="_blank" class="btn btn-primary btn-sm">
        <svg width="20" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 45 45" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g width="24" height="24" rx="0" ry="0" style="fill: rgb(0, 0, 0);"><g style="display: none;"><g class="fills"><rect width="45" height="45" x="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" style="fill: none;" ry="0" fill="none" rx="0" y="0"/></g></g><g rx="0" ry="0" style="fill: rgb(0, 0, 0);"><g><g class="fills"><path d="M21.5625,5.625C25.35107421875,5.62396240234375,28.67529296875,8.148193359375,29.6923828125,11.7974853515625L29.79052734375,12.181884765625L33.2958984375,11.306304931640625C33.81494140625,11.177215576171875,34.36328125,11.275390625,34.8046875,11.576171875C35.24609375,11.87689208984375,35.5380859375,12.35162353515625,35.6083984375,12.8812255859375L35.625,13.125L35.625,16.51873779296875C36.6826171875,17.531768798828125,37.54833984375,18.72711181640625,38.18212890625,20.04754638671875L38.44140625,20.625L39.375,20.625C40.3251953125,20.6251220703125,41.12548828125,21.33660888671875,41.2373046875,22.280609130859375L41.25,22.5L41.25,28.125C41.25,28.751800537109375,40.93701171875,29.337158203125,40.416015625,29.6849365234375L40.212890625,29.80120849609375L38.02294921875,30.89813232421875C37.12841796875,32.63372802734375,35.8291015625,34.1287841796875,34.2353515625,35.257537841796875L33.75,35.58380126953125L33.75,37.5C33.75,38.4505615234375,33.03857421875,39.2506103515625,32.0947265625,39.361846923828125L31.875,39.375L26.25,39.375C25.2998046875,39.3748779296875,24.49951171875,38.66339111328125,24.3876953125,37.719390869140625L24.375,37.5L22.5,37.5C22.5,38.4505615234375,21.78857421875,39.2506103515625,20.8447265625,39.361846923828125L20.625,39.375L15,39.375C14.0498046875,39.3748779296875,13.24951171875,38.66339111328125,13.1376953125,37.719390869140625L13.125,37.5L13.125,35.58380126953125C10.388671875,33.8359375,8.46240234375,31.068084716796875,7.77392578125,27.8944091796875C5.5087890625,27.22125244140625,3.90576171875,25.203887939453125,3.7607421875,22.84503173828125L3.75,22.5L3.75,21.5625C3.7509765625,20.570404052734375,4.5244140625,19.75091552734375,5.51513671875,19.6927490234375C6.505859375,19.6346435546875,7.3701171875,20.358001708984375,7.4873046875,21.343109130859375L7.5,21.5625L7.5,22.5C7.5029296875,22.780029296875,7.55859375,23.03936767578125,7.66845703125,23.278076171875C8.2470703125,19.863861083984375,10.24951171875,16.8565673828125,13.17724609375,15.007568359375C12.908203125,12.620208740234375,13.669921875,10.231353759765625,15.27099609375,8.44012451171875C16.87109375,6.6488037109375,19.16015625,5.6248779296875,21.5625,5.625M30,20.625C28.96435546875,20.625,28.125,21.46441650390625,28.125,22.5C28.125,23.53558349609375,28.96435546875,24.375,30,24.375C31.03564453125,24.375,31.875,23.53558349609375,31.875,22.5C31.875,21.46441650390625,31.03564453125,20.625,30,20.625M21.5625,9.375C19.21337890625,9.375,17.2275390625,11.11358642578125,16.916015625,13.44189453125C17.82421875,13.23052978515625,18.75439453125,13.12420654296875,19.6875,13.125L26.01953125,13.125L26.150390625,13.09307861328125C25.6923828125,10.92510986328125,23.7783203125,9.37408447265625,21.5625,9.375" fill-rule="evenodd" style="fill: rgb(0, 0, 0);"/></g></g></g></g></svg>
        Support
      </a>
    </div>
  </header>
</template>

<script>
import { logos } from '@/config/mediaPaths.js'

export default {
  name: 'Header',
  data() {
    return {
      isHeaderVisible: false,
      logoPath: logos.headerLight
    }
  },
  mounted() {
    console.log('Header mounted')
    this.handleScroll()

    const scrollContainer = this.$el.parentElement
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    window.addEventListener('scroll', this.handleScroll, { passive: true })

    setTimeout(() => {
      this.handleScroll()
    }, 100)
  },
  beforeUnmount() {
    const scrollContainer = this.$el.parentElement
    if (scrollContainer) {
      scrollContainer.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      const scrollContainer = this.$el?.parentElement
      const scrollTop = scrollContainer
        ? scrollContainer.scrollTop
        : (window.pageYOffset || document.documentElement.scrollTop)

      const wasVisible = this.isHeaderVisible
      this.isHeaderVisible = scrollTop > 50
    }
  }
}
</script>

<style scoped>
.app-header {
  height: var(--header-height, 72px);
  background: transparent;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease;
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 24px;
  }
}

.app-header.header-visible {
  background: var(--bg-primary);
  border-bottom-color: var(--border-light-10);
  border-radius: 0 0 15px 15px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.header-left,
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: opacity 0.2s;
}

.logo:hover {
  opacity: 0.8;
}

.logo-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-primary);
  transition: all var(--transition-fast);
}

.btn-sm {
  padding: 10px 24px;
  font-size: 14px;
  border-radius: 100px;
  font-weight: 500;
}

.btn-primary {
  background: white;
  color: var(--text-dark);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn svg {
  flex-shrink: 0;
}
</style>